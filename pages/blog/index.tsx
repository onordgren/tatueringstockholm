import type { NextPage, GetStaticProps } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import Link from 'next/link';

type Props = {
  slugs: string[];
};

const BlogIndex: NextPage<Props> = ({ slugs }) => {
  console.log(slugs);
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
    const dir = path.join(process.cwd(), 'content/posts');
    const files = await fs.readdir(dir);
    const slugs = files.map((file) => path.parse(file).name);

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
