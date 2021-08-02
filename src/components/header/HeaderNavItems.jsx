/* eslint-disable jsx-a11y/anchor-is-valid */
import { useRouter } from 'next/router';
import Link from 'next/link';
import nav from '@/data/nav.json';

const HeaderNavItems = () => {
  const router = useRouter();

  return (
    <>
      {nav.items.map((item) => (
        <li key={item.title}>
          <Link href={item.url}>
            <a
              className={`${
                router.pathname === item.url
                  ? 'text-red-500 '
                  : 'hover:opacity-50'
              } border-transparent `}
            >
              {item.title}
            </a>
          </Link>
        </li>
      ))}
    </>
  );
};

export default HeaderNavItems;
