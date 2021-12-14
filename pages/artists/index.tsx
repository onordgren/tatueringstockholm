import type { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';
import { getFiles, getSlugs } from '../../helpers/files';

type Props = {
  slugs: string[];
};

const ArtistsIndex: NextPage<Props> = ({ slugs }) => {
  return (
    <div>
      <h1>Artists</h1>
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

    return {
      props: {
        slugs,
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
