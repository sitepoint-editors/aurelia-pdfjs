export class App {
	constructor () {
		// Set up some sensible defaults for documents to use with our repeater.
		this.documents = [
			{
				url: 'dist/documents/oversize_pdf_test_0.pdf',
				draftUrl: 'dist/documents/oversize_pdf_test_0.pdf',
				pageNumber: 1,
				scale: 1,
				lastpage: 1
			},
			{
				url: 'dist/documents/pdf.pdf',
				draftUrl: 'dist/documents/pdf.pdf',
				pageNumber: 1,
				scale: 1,
				lastpage: 1
			}
		];
	}

	loadUrl (document) {
		document.url = document.draftUrl;
	}

	firstPage (document) {
		document.pageNumber = 1;
	}

	nextPage (document) {
		if (document.pageNumber >= document.lastpage) return;

		document.pageNumber += 1;
	}

	prevPage (document) {
		if (document.pageNumber <= 1) return;

		document.pageNumber -= 1;
	}

	lastPage (document) {
		document.pageNumber = document.lastpage;
	}

	goToPage (document, page) {
		if (page <= 0 || page > document.lastpage) return;

		document.pageNumber = page;
	}

	zoomIn (document) {
		document.scale = Number(document.scale) + 0.1;
	}

	zoomOut (document) {
		document.scale = Number(document.scale) - 0.1;
	}
}
