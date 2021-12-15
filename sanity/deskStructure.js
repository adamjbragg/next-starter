/* eslint-disable import/no-anonymous-default-export */
// /deskStructure.js
import S from '@sanity/desk-tool/structure-builder';
import Iframe from 'sanity-plugin-iframe-pane';
import { House, Browsers, Buildings, DotsThree } from 'phosphor-react';
import resolveProductionUrl from './resolveProductionUrl';

const documentViews = [
	S.view.form(),
	S.view
		.component(Iframe)
		.options({
			url: (doc) => resolveProductionUrl(doc),
			defaultSize: `desktop`,
			reload: {
				button: true,
				revision: true,
			},
		})
		.title('Preview'),
];

export default () =>
	S.list()
		.title('SISU CMS')
		.items([
			...S.documentTypeListItems().filter(
				(listItem) =>
					!['businessDetails', 'homePage', 'menu', 'page'].includes(
						listItem.getId()
					)
			),
			S.listItem()
				.title('Home')
				.icon(House)
				.child(
					S.document()
						.title('Home Page')
						.schemaType('homePage')
						.documentId('homePage')
						.views(documentViews)
				),
			S.listItem()
				.title('Other Pages')
				.icon(Browsers)
				.schemaType('page')
				.child(
					S.documentTypeList('page')
						.title('Other Pages')
						.filter(`_type == "page"`)
						.child((documentId) =>
							S.document()
								.documentId(documentId)
								.schemaType('page')
								.views(documentViews)
						)
				),
			S.divider(),
			S.listItem()
				.title('Navigation')
				.icon(DotsThree)
				.child(
					S.document()
						.title('Header Nav')
						.schemaType('menu')
						.documentId('headerNav')
				),
			S.listItem()
				.title('Business Details')
				.icon(Buildings)
				.child(
					S.document()
						.title('General Business Details')
						.schemaType('businessDetails')
						.documentId('businessDetails')
				),
		]);
