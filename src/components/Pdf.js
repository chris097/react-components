import React from 'react';
import { jsPDF } from 'jspdf';

const Pdf = () => {

  const pdfGenerate = () => {
    const doc = new jsPDF()
    doc.text("Hello world", 100,100)
    doc.save("a2.pdf")
  }

  return(
    <div>
      <button onClick={pdfGenerate}>Download pdf</button>
    </div>
  )
};

export default Pdf;