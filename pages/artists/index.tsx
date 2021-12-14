import type { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';
import { getFileContent, getFiles, getSlugs } from '../../helpers/files';

type Props = {
  slugs: string[];
  page: {
    data: {
      title: string;
    };
    content: string;
  };
};

const ArtistsIndex: NextPage<Props> = ({ slugs, page }) => {
  return (
    <div>
      <h1>{page.data.title}</h1>
      <div>{page.content}</div>
      <div>
        <ul>
          {slugs.map((path) => (
            <li key={path}>
              <Link href={`/artists/${path}`}>
                <a>{path}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const dir = 'content/artists';
    const files = await getFiles({ dir });
    const slugs = getSlugs({ files });
    const page = await getFileContent({
      dir: 'content/pages',
      fileName: 'artists',
    });

    return {
      props: {
        slugs,
        page,
      },
    };
  } catch {
    return {
      props: {
        slugs: [],
      },
    };
  }
};

export default ArtistsIndex;
