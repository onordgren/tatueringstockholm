import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getFiles = async ({ dir }: { dir: string }) => {
  return fs.readdir(path.join(process.cwd(), dir));
};

export const getSlugs = ({ files }: { files: string[] }) => {
  return files.map((file) => path.parse(file).name);
};

export const getFileContent = async ({
  dir,
  slug,
}: {
  dir: string;
  slug: string;
}) => {
  const filePath = path.join(process.cwd(), dir, slug);
  const fileContents = await fs.readFile(`${filePath}.md`, 'utf8');
  return matter(fileContents);
};
