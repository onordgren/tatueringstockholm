import type { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { Artist } from 'types/global';
import Title from '../../components/Title';
import { getFileContent, getFiles, getSlugs } from '../../helpers/files';

type Props = {
  artists: Artist[];
  page: {
    data: {
      title: string;
    };
    content: string;
  };
};

const ArtistsIndex: NextPage<Props> = ({ artists, page }) => {
  return (
    <div className="grid gap-2">
      <Title title={page.data.title} />
      <div className="grid gap-8 sm:grid-cols-3">
        <aside>
          <ul className="grid gap-2">
            {artists.map((artist) => (
              <li key={artist.slug} className="block">
                <Link href={`/artists/${artist.slug}`}>
                  <a className="bg-neutral-500 p-4 block">
                    {artist.data.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
        <main role="main" className="sm:col-span-2">
          <div className="prose text-neutral-100">
            <ReactMarkdown>{page?.content}</ReactMarkdown>
          </div>
        </main>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const dir = 'content/artists';
    const files = await getFiles({ dir });
    const slugs = getSlugs({ files });
    const artists = await Promise.all(
      slugs.map(async (slug) => {
        return {
          slug,
          ...(await getFileContent({ dir, fileName: slug })),
        };
      })
    );
    const page = await getFileContent({
      dir: 'content/pages',
      fileName: 'artists',
    });

    return {
      props: {
        artists,
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
