/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import HeaderNav from './HeaderNav';

const Header = () => (
  <header className="container flex items-center justify-between h-24">
    <Link href="/">
      <a>Next Starter</a>
    </Link>
    <HeaderNav />
  </header>
);

export default Header;
