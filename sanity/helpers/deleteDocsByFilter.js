/**
 * THIS SCRIPT DELETES DATA!
 *
 * To use this script:
 * 1. Put this script in your studio-folder
 * 2. Write a GROQ filter that outputs the documents you want to delete
 * 3. Run `sanity dataset export` to backup your dataset before deleting a bunch of documents
 * 4. Run `sanity exec helpers/deleteDocsByFilter.js --with-user-token` to delete the documents
 *
 * NOTE: For the time being you should not delete more than ~1000 documents in one transaction. This will change in the future.
 * See docs:https://www.sanity.io/docs/http-api/http-mutations#deleting-multiple-documents-by-query
 */

import sanityClient from 'part:@sanity/base/client';

const client = sanityClient.withConfig({ apiVersion: 'v1' });

client
	.delete({ query: '*[_type == "jobSubmission"]' })
	.then(console.log)
	.catch(console.error);
