import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Title from '../../components/Title';
import { getFileContent, getFiles, getSlugs } from '../../helpers/files';

interface IParams extends ParsedUrlQuery {
  slug: string;
}

type Props = {
  data: {
    name: string;
  };
  content: string;
};

const dir = 'content/artists';

const Artist: NextPage<Props> = ({ data, content }) => {
  return (
    <div>
      <Title title={data.name} />
      <div>{content}</div>
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
