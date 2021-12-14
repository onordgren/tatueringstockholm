import Link from 'next/link';

type Props = {
  title: string;
};

const Title = ({ title }: Props) => {
  return <h1 className="text-2xl font-bold">{title}</h1>;
};

export default Title;
