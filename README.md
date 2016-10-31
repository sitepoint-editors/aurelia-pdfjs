# Adventures in Aurelia: Creating a Custom PDF Viewer

## Skeleteon App

This is a [stripped down version of the Aurelia skeleton app](https://github.com/sitepoint-editors/aurelia-pdfjs/tree/skeleton/), to which we have added a couple of things:

- A Gulp task to copy PDF files to the `dist` folder (which Aurelia uses for bundling).
- The PDF.js dependency has been added to `package.json`.
- In the root of the app, `index.html` and `index.css` have received some initial styling.
- Empty copies of the files we're going to be working in have been added.
- The file `src/resources/elements/pdf-document.css` contains some CSS styling for the custom element.

Clone this if you intend to follow along with [the tutorial](https://www.sitepoint.com/aurelia-custom-pdf-viewer-component).

## Requirements

* [Node.js](http://nodejs.org/)

## Installation Steps (if applicable)

1. Clone repo
2. Ensure that Gulp and jspm are installed globally: `npm install -g gulp jspm`
2. Run `npm install`
3. Run `jspm install -y`
4. Visit http://localhost:9000

## License

The MIT License (MIT)

Copyright (c) 2016 SitePoint

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
