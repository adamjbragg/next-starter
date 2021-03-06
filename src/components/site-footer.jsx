/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';

const Footer = function () {
	return (
		<footer className="w-full text-sm">
			<div className="px-5 mx-auto">
				<div className="flex flex-row items-center justify-between py-5 mx-auto border-t">
					<p>{new Date().getFullYear()} © AJB Next Starter</p>
					<p>
						Website by:
						<Link href="https://adamjbragg.net/">
							<a rel="noreferrer" target="_blank">
								Adam J Bragg
							</a>
						</Link>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
