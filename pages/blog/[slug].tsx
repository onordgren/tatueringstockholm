import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import { ParsedUrlQuery } from 'querystring';
import matter from 'gray-matter';

interface IParams extends ParsedUrlQuery {
  slug: string;
}

type Props = {
  data: {
    title: string;
  };
  content: string;
};

const BlogIndex: NextPage<Props> = ({ data, content }) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <div>{content}</div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams;
  if (slug) {
    const filePath = path.join(process.cwd(), 'content/posts', slug);
    const fileContents = await fs.readFile(`${filePath}.md`, 'utf8');
    const { data, content } = matter(fileContents);
    return {
      props: {
        data: JSON.parse(JSON.stringify(data)),
        content,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const dir = path.join(process.cwd(), 'content/posts');
  const files = await fs.readdir(dir);
  const slugs = files.map((file) => path.parse(file).name);

  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return { paths, fallback: false };
};

export default BlogIndex;
