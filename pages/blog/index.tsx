import type { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';
import { getFiles, getSlugs } from '../../helpers/files';

type Props = {
  slugs: string[];
};

const BlogIndex: NextPage<Props> = ({ slugs }) => {
  return (
    <div>
      <h1>Blog</h1>
      <div>
        <ul>
          {slugs.map((path) => (
            <li key={path}>
              <Link href={`/blog/${path}`}>
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
    const dir = 'content/posts';
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

export default BlogIndex;
