/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';

const Footer = () => (
  <footer className="flex flex-row items-center justify-between w-full h-24 px-5">
    <p className="text-sm">{new Date().getFullYear()} © AJB Next Starter</p>
    <p className="text-sm">
      Website by:{' '}
      <Link href="https://adamjbragg.net/">
        <a rel="noreferrer" target="_blank">
          Adam J Bragg
        </a>
      </Link>
    </p>
  </footer>
);

export default Footer;
