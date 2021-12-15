/* eslint-disable jsx-a11y/anchor-is-valid */
import { useRouter } from 'next/router';
import Link from 'next/link';

const HeaderNavList = function ({ menuItems }) {
	const router = useRouter();

	return (
		<ul className="flex text-justify space-x-5">
			{menuItems?.items?.map((item) => (
				<li key={item.title}>
					<Link
						href={item._type === 'navLink' ? item.url : `${item.page.slug}`}
					>
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
