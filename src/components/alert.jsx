import Link from 'next/link';

const Alert = function ({ preview }) {
	return (
		<div className="sticky top-0 w-screen px-5 mx-auto text-white bg-red-600 shadow-lg z-[100]">
			<div className="py-2 text-sm text-center">
				{preview ? (
					<>
						This page is a preview.{' '}
						<Link href="/api/exit-preview">
							<a className="font-bold underline hover:text-cyan duration-200 transition-colors">
								Click here
							</a>
						</Link>{' '}
						to exit preview mode.
					</>
				) : null}
			</div>
		</div>
	);
};

export default Alert;
