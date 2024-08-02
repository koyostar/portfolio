import React, { useState, useRef } from "react";
import panda from "../assets/Panda.png";
import video1 from "../assets/thumbnails/Video1.png";
import video2 from "../assets/thumbnails/Video2.png";
import video3 from "../assets/thumbnails/Video3.png";
import video4 from "../assets/thumbnails/Video4.png";
import video5 from "../assets/thumbnails/Video5.png";
import video6 from "../assets/thumbnails/Video6.png";
import video7 from "../assets/thumbnails/Video7.png";

export default function Videos() {
  const [showModal, setShowModal] = useState(false);
  const [activeVideo, setActiveVideo] = useState("");
  const iframeRef = useRef(null);

  const videos = [
    {
      url: "https://players.brightcove.net/5742226969001/default_default/index.html?videoId=6326593925112",
      thumbnail: video1,
    },
    {
      url: "https://players.brightcove.net/5742226969001/default_default/index.html?videoId=6222070930001",
      thumbnail: video2,
    },
    {
      url: "https://players.brightcove.net/5742226969001/default_default/index.html?videoId=6320862704112",
      thumbnail: video3,
    },
    {
      url: "https://players.brightcove.net/5742226969001/default_default/index.html?videoId=6335147326112",
      thumbnail: video4,
    },
    {
      url: "https://players.brightcove.net/5742226969001/default_default/index.html?videoId=6350115583112",
      thumbnail: video5,
    },
    {
      url: "https://players.brightcove.net/5742226969001/default_default/index.html?videoId=6312788990112",
      thumbnail: video6,
    },
    {
      url: "https://players.brightcove.net/5742226969001/default_default/index.html?videoId=6272015064001",
      thumbnail: video7,
    },
  ];

  const handleThumbnailClick = (videoUrl) => {
    setActiveVideo(videoUrl);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setActiveVideo(""); // Clear the active video
  };

  return (
    <div className="videos d-flex justify-content-around flex-wrap">
      {videos.map((video, index) => (
        <div
          key={index}
          className="video-thumbnail"
          data-toggle="modal"
          data-target="#videoModal"
          onClick={() => handleThumbnailClick(video.url)}
        >
          <img
            src={video.thumbnail}
            alt={`Video thumbnail ${index + 1}`}
            className="img-fluid"
          />
        </div>
      ))}

      {showModal && (
        <>
          <div
            className="modal fade show"
            id="videoModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="videoModalLabel"
            aria-hidden={!showModal}
            style={{ display: showModal ? "block" : "none" }}
            onClick={handleClose}
          >
            <div
              className="modal-dialog modal-lg"
              role="document"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content">
                <div className="modal-body p-0">
                  <iframe
                    ref={iframeRef}
                    src={activeVideo}
                    width="100%"
                    height="500px"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    title="Video"
                  ></iframe>
                </div>
                <button
                  type="button"
                  className="btn-close position-absolute top-0 end-0 m-3"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={handleClose}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show" onClick={handleClose}></div>
        </>
      )}
    </div>
  );
}
