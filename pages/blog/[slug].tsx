import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import { ParsedUrlQuery } from 'querystring';
import ReactMarkdown from 'react-markdown';
import Title from '../../components/Title';
import { getFileContent, getFiles, getSlugs } from '../../helpers/files';

interface IParams extends ParsedUrlQuery {
  slug: string;
}

type Props = {
  data: {
    title: string;
    thumbnail: string;
  };
  content: string;
};

const dir = 'content/posts';

const BlogPost: NextPage<Props> = ({ data, content }) => {
  return (
    <div>
      <Title title={data.title} />
      <Image src={data.thumbnail} alt={data.title} width={200} height={200} />
      <div className="prose text-neutral-100">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { slug } = params as IParams;
    const { data, content } = await getFileContent({ dir, fileName: slug });
    return {
      props: {
        data: JSON.parse(JSON.stringify(data)),
        content,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const files = await getFiles({ dir });
    const slugs = getSlugs({ files });

    const paths = slugs.map((slug) => ({
      params: { slug },
    }));
    return { paths, fallback: false };
  } catch {
    return { paths: [], fallback: false };
  }
};

export default BlogPost;
