import React, { useState } from "react";
import { PDFViewer, Document, Page } from "@react-pdf/renderer";
import entertainmentThumbnail from "../assets/thumbnails/Entertainment.jpg";
import featureStoryThumbnail from "../assets/thumbnails/Feature_Story.jpg";
import interviewThumbnail from "../assets/thumbnails/Interview.jpg";
import newsInEducationThumbnail from "../assets/thumbnails/News_In_Education.jpg";
import zaobaoThumbnail from "../assets/thumbnails/Zaobao.jpg";

const pdfs = [
  {
    thumbnail: entertainmentThumbnail,
    pdfUrl: "/PDF/Entertainment.pdf",
    title: "Entertainment",
  },
  {
    thumbnail: featureStoryThumbnail,
    pdfUrl: "/PDF/Feature_Story.pdf",
    title: "Feature Story",
  },
  {
    thumbnail: interviewThumbnail,
    pdfUrl: "/PDF/Interview.pdf",
    title: "Interview",
  },
  {
    thumbnail: newsInEducationThumbnail,
    pdfUrl: "/PDF/News_In_Education.pdf",
    title: "News In Education",
  },
  {
    thumbnail: zaobaoThumbnail,
    pdfUrl: "/PDF/Zaobao.pdf",
    title: "Zaobao",
  },
];

export default function Articles() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);

  const handleThumbnailClick = (pdfUrl) => {
    setSelectedPdf(pdfUrl);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedPdf(null);
  };

  return (
    <div className="articles-container">
      <div className="thumbnails d-flex justify-content-around flex-wrap">
        {pdfs.map((pdf, index) => (
          <div
            key={index}
            className="pdf-thumbnail"
            onClick={() => handleThumbnailClick(pdf.pdfUrl)}
          >
            <h4>{pdf.title}</h4>
            <img
              src={pdf.thumbnail}
              alt={`PDF thumbnail ${index + 1}`}
              className="img-fluid"
            />
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleClose}>
              &times;
            </button>
            <iframe
              src={selectedPdf}
              width="100%"
              height="100%"
              className="pdf-viewer"
              title="PDF Viewer"
            />
          </div>
        </div>
      )}
    </div>
  );
}
