import Link from 'next/link';

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  return (
    <header>
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-widest text-center py-10">
        {title}
      </h1>
      <nav>
        <ul className="flex justify-between">
          <li>
            <Link href="/">
              <a className="font-bold uppercase text-neutral-200">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/artists">
              <a className="font-bold uppercase text-neutral-200">Artists</a>
            </Link>
          </li>
          <li>
            <Link href="/guests">
              <a className="font-bold uppercase text-neutral-200">Guests</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a className="font-bold uppercase text-neutral-200">Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="font-bold uppercase text-neutral-200">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
