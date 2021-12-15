// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document
import businessDetails from './documents/businessDetails';
import homePage from './documents/homePage';
import menu from './documents/menu';
import page from './documents/page';

// Modules
import content from './modules/content';

// Object
import blockPosition from './objects/blockPosition';
import blockTitle from './objects/blockTitle';
import image from './objects/image';
import link from './objects/link';
import navLink from './objects/navLink';
import navPage from './objects/navPage';
import portableText from './objects/portableText';
import simplePortableText from './objects/simplePortableText';
import socialLink from './objects/socialLink';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	// We name our schema
	name: 'default',
	// Then proceed to concatenate our document type
	// to the ones provided by any plugins that are installed
	types: schemaTypes.concat([
		// Documents
		businessDetails,
		homePage,
		menu,
		page,

		// Modules
		content,

		// Objects
		blockPosition,
		blockTitle,
		image,
		link,
		navLink,
		navPage,
		portableText,
		simplePortableText,
		socialLink,
	]),
});
