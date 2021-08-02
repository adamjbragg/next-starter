/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import HeaderNavList from './HeaderNavList';

const Header = () => (
  <header className="flex items-center justify-between w-full h-24 p-5">
    <Link href="/">
      <a aria-label="Home Logo">AJB Next Starter</a>
    </Link>
    <HeaderNavList />
  </header>
);

export default Header;
