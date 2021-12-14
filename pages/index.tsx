import type { GetStaticProps, NextPage } from 'next';
import { getFileContent } from '../helpers/files';

type Props = {
  page: {
    data: {
      title: string;
    };
    content: string;
  };
};

const Home: NextPage<Props> = ({ page }) => {
  return (
    <div>
      <h1>{page.data.title}</h1>
      <div>{page.content}</div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const dir = 'content/pages';
    const page = await getFileContent({
      dir,
      fileName: 'home',
    });

    return {
      props: {
        page,
      },
    };
  } catch {
    return {
      props: {},
    };
  }
};

export default Home;
