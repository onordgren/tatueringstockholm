import Link from 'next/link'

const Header = () => {
  return (
    <header>
      Header
      <nav>
        <ul>
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
  )
}

export default Header