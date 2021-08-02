/* eslint-disable jsx-a11y/anchor-is-valid */
import { useRouter } from 'next/router';
import Link from 'next/link';
import nav from '@/data/nav.json';

const HeaderNavItems = () => {
  const router = useRouter();

  return (
    <>
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
    </>
  );
};

export default HeaderNavItems;
