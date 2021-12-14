import Link from 'next/link';

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  return (
    <header>
      <h1 className="text-6xl font-extrabold uppercase tracking-widest text-center py-10">
        {title}
      </h1>
      <nav>
        <ul className="flex justify-between">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/artists">
              <a>Artists</a>
            </Link>
          </li>
          <li>
            <Link href="/guests">
              <a>Guests</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
