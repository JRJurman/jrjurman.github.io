const contentful = require("contentful");
const richTextHTMLRenderer = require('@contentful/rich-text-html-renderer');

const documentToHtmlString = richTextHTMLRenderer.documentToHtmlString;

const parseRichText = (richTextObject) => {
	// parse text so that we can insert it in choo
	const unparsedRichTextHtml = documentToHtmlString(richTextObject)
	const mockElement = document.createElement('p')
	mockElement.innerHTML = unparsedRichTextHtml
	return unparsedRichTextHtml
}

const parseBlocksToObjects = (block) => {
	const type = block.fields.title ? 'project' : 'about'

	// if this is an about block, return those properties
	if (type === 'about') {
		const orientation = block.fields.orientation
		const image = block.fields.photo.fields.file.url
		const text = block.fields.richtext && parseRichText(block.fields.richtext)
		return {type, orientation, image, text}
	}

	// if this is a project block, return other properties
	if (type === 'project') {
		const image = block.fields.photo.fields.file.url
		const displayLink = block.fields.displayLink
		const link = block.fields.link
		const title = block.fields.title
		const description = block.fields.description && parseRichText(block.fields.description)
		return {type, title, image, displayLink, link, description}
	}
}

const parseContentfulEntryToBlocksObjects = (entry) => {
	// split up entry into blocks
	const blocks = entry.fields.blocks
	const objects = blocks.map(parseBlocksToObjects)
	return objects
}

module.exports = async (send, actionName, done) => {

	// setup the contentful client
	const client = contentful.createClient({
		// This is the space ID. A space is like a project folder in Contentful terms
		space: "cgcthgv2m8e8",
		// This is the access token for this space. Normally you get both ID and the token in the Contentful web app
		accessToken: "-3rFjDEPCqr6UrBGKw9DINhfvPheGioZjgCeiwTnaTU"
	});

	// function to load and send parsed entry data to the state
	const loadEntryAndSend = async (entryId, pageName) => {
		console.log({entryId, pageName})
		const entryData = await client
			.getEntry(entryId)

		console.log({entryData})
		const entryBlockObjects = parseContentfulEntryToBlocksObjects(entryData)
		send(actionName, {page: pageName, entry: entryBlockObjects}, done)
	}

	// load about page
	loadEntryAndSend('7GOuZDxSXwSTSqmizaKXNz', 'about')
	// load webapps page
	loadEntryAndSend('39s6bhirnDSdYZFJ2435Ru', 'webapps')
	// load projects page
	loadEntryAndSend('4n2cIMrwFoeSTPGvfRQNTd', 'projects')
	// load resume
	loadEntryAndSend('5xgHAq15T8amsyrxwPQRYa', 'resume')
}
