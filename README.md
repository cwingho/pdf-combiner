# PDF Combiner

A browser-based tool for combining multiple PDF files into a single document. Built with vanilla JavaScript and TailwindCSS, this application runs entirely in the browser with no server-side processing required.

## Features

- 📄 Combine multiple PDF files into a single document
- 🔄 Drag and drop interface for easy file selection
- ⚡ Real-time PDF preview
- 🎨 Dark mode support
- 📱 Responsive design
- ⬆️ Reorder files before combining
- 🔍 Preview combined PDF before downloading
- 🖨️ Direct printing support
- 💾 Download combined PDF

## Technologies Used

- HTML5
- JavaScript (Vanilla)
- [PDF-Lib.js](https://pdf-lib.js.org/) - For PDF manipulation
- [PDF.js](https://mozilla.github.io/pdf.js/) - For PDF rendering
- [TailwindCSS](https://tailwindcss.com/) - For styling

## Usage

1. Open `index.html` in a web browser
2. Select PDF files using one of these methods:
   - Click the "Select PDF Files" button
   - Drag and drop files onto the drop zone
3. Arrange files in desired order using the up/down arrows
4. Click "Combine PDFs" to merge the files
5. Preview the combined PDF in the viewer
6. Download or print the combined PDF

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/cwingho/pdf-combiner.git
```

No build process or server is required as the application runs entirely in the browser.

## Browser Support

The application works in all modern browsers that support the following features:
- PDF.js
- ES6+ JavaScript
- File API
- Drag and Drop API

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## Privacy

All PDF processing is done locally in your browser. No files are uploaded to any server.

## Known Limitations

- Large PDF files may take longer to process
- Memory usage increases with the number and size of PDFs being combined
- Some PDF features (like forms or digital signatures) may not be preserved in the combined PDF

## Support

If you encounter any issues or have questions, please open an issue in the GitHub repository.
