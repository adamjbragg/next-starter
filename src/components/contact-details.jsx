import dynamic from 'next/dynamic';
import Link from 'next/link';
import { serializers } from 'utilities/serializers';

const BlockContent = dynamic(() => import('@sanity/block-content-to-react'));

const ContactDetails = function ({ contactDetails }) {
	return (
		<div className="space-y-5">
			<h3 className="mb-5">Details</h3>
			<ul className="space-y-3">
				{contactDetails.phone && (
					<li>
						<Link href={`tel:${contactDetails.phone}`}>
							<a>{contactDetails.phone}</a>
						</Link>
					</li>
				)}
				{contactDetails.generalEmail && (
					<li>
						<Link href={`mailto:${contactDetails.generalEmail}`}>
							<a>{contactDetails.generalEmail}</a>
						</Link>
					</li>
				)}
				{contactDetails.contactAddress && (
					<li>
						<BlockContent
							blocks={contactDetails.contactAddress}
							serializers={serializers}
						/>
					</li>
				)}
				{contactDetails.postalAddress && (
					<li>
						<BlockContent
							blocks={contactDetails.postalAddress}
							serializers={serializers}
						/>
					</li>
				)}
			</ul>
		</div>
	);
};

export default ContactDetails;
