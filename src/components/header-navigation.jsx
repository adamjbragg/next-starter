/* eslint-disable jsx-a11y/anchor-is-valid */
import { useRouter } from 'next/router';
import Link from 'next/link';
import nav from '@/data/nav.json';

const HeaderNavList = function () {
	const router = useRouter();

	return (
		<ul className="flex text-justify space-x-5">
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
		</ul>
	);
};

export default HeaderNavList;
