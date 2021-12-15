import Link from 'next/link';
import HeaderNavList from './header-navigation';

const Header = function () {
	return (
		<header className="w-full">
			<div className="px-5 mx-auto">
				<div className="flex items-center justify-between py-5 border-b">
					<Link href="/">
						<a aria-label="Home Logo">AJB Next Starter</a>
					</Link>
					<HeaderNavList />
				</div>
			</div>
		</header>
	);
};

export default Header;
