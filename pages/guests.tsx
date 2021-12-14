import type { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';
import Title from 'components/Title';
import { getFileContent, getFiles, getSlugs } from 'helpers/files';

type Props = {
  guests: string[];
  page: {
    data: {
      title: string;
    };
    content: string;
  };
};

const GuestsIndex: NextPage<Props> = ({ guests, page }) => {
  return (
    <div className="grid gap-2">
      <Title title={page?.data?.title} />
      <div>{page?.content}</div>
      <div>
        <ul>
          {guests?.map((guest) => (
            <li key={guest}>
              <Link href={`/artists/${guest}`}>
                <a className="text-blue-600">{guest}</a>
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
      fileName: 'guests',
    });
    const guestProps = await Promise.all(
      slugs.map(async (slug) => {
        return await getFileContent({
          dir: 'content/artists',
          fileName: slug,
        });
      })
    );

    const guests = guestProps.filter((guestProp) => {
      const { data } = guestProp;
      return data.guest;
    });

    console.log(slugs);

    return {
      props: {
        guests,
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

export default GuestsIndex;
