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
    name: string;
    gallery?: string[];
  };
  content: string;
};

const dir = 'content/artists';

const Artist: NextPage<Props> = ({ data, content }) => {
  return (
    <div>
      <Title title={data.name} />
      <div>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
      <div>
        <ul>
          {data.gallery?.map((image) => (
            <li key={image}>
              <Image src={image} width={640} height={800} alt={image} />
            </li>
          ))}
        </ul>
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
        data,
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

export default Artist;
