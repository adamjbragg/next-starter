/* eslint-disable jsx-a11y/anchor-is-valid */
import { useRouter } from 'next/router';
import Link from 'next/link';
import nav from '@/data/nav.json';

const HeaderNav = () => {
  const router = useRouter();

  return (
    <ul className="flex text-justify space-x-5">
      {nav.items.map((item) => (
        <li
          className={`${
            router.pathname === item.url ? 'border-b-2' : 'border-b-transparent'
          }`}
          key={item.title}
        >
          <Link href={item.url}>
            <a>{item.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

// const nav = navItems.map((navItem) => navItem.title);

export default HeaderNav;
