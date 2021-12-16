const previewSecret = 'site_preview'; // Copy the string you used for SANITY_PREVIEW_SECRET

// Replace `remoteUrl` with your deployed Next.js site
const remoteUrl = `https://website.com.au/`;
const localUrl = `http://localhost:3000`;

export default function resolveProductionUrl(doc) {
	// only show preview option for pages or the homepage
	if (doc._type !== 'page' && doc._type !== 'homePage') {
		return null;
	}

	const baseUrl =
		window.location.hostname === 'localhost' ? localUrl : remoteUrl;

	const previewUrl = new URL(baseUrl);

	previewUrl.pathname = `/api/preview`;
	previewUrl.searchParams.append(`secret`, previewSecret);
	previewUrl.searchParams.append(`slug`, doc?.slug?.current ?? `/`);

	return previewUrl.toString();
}
