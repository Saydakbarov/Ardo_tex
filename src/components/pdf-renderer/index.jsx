import React, { useState } from 'react'
import { Document, Page } from 'react-pdf'

const PDFRenderer = ({className, src}) => {

    const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div className={className} >
        <Document   file={src} onLoadSuccess={onDocumentLoadSuccess} >
        <Page  pageNumber={pageNumber} />
        </Document>
    </div>
  )
}

export default PDFRenderer