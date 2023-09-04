
import { Document, Page, pdfjs } from 'react-pdf';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface PDFViewerProps {
  pdfUrl: string;
}

function PDFViewer({ pdfUrl }: PDFViewerProps) {
  return (
    <div>
      <Document file={pdfUrl}>
        {/* You can change the pageNumber to display a different page */}
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

export default PDFViewer;
