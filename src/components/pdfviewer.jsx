import React from 'react';

const PdfViewer = ({ file }) => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src={file}
        width="100%"
        height="100%"
        title="PDF Viewer"
        style={{ border: 'none' }}
      ></iframe>
    </div>
  );
};

export default PdfViewer;
