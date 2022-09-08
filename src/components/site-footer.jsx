import Link from 'next/link';
import general from '@/data/general.json';

const Footer = function () {
	return (
		<footer className="w-full text-sm">
			<div className="px-5 mx-auto">
				<div className="flex flex-row items-center justify-between py-5 mx-auto border-t">
					<p>
						{new Date().getFullYear()} © {general.siteTitle}
					</p>
					<p>
						Website by:
						<Link href={general.siteCreditUrl}>
							<a rel="noreferrer" target="_blank">
								{general.siteCredit}
							</a>
						</Link>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
