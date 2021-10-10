/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import HeaderNavList from './HeaderNavList';

const Header = () => (
	<header className="w-full">
		<div className="container px-5 mx-auto">
			<div className="flex items-center justify-between py-5 mb-20 border-b">
				<Link href="/">
					<a aria-label="Home Logo">AJB Next Starter</a>
				</Link>
				<HeaderNavList />
			</div>
		</div>
	</header>
);

export default Header;
