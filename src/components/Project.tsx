import React, { useRef, useState } from "react";
import quizgen from "../assets/videos/quizgen.mp4";
import any2english from "../assets/videos/any2english.mp4";
import soccerVideo from "../assets/videos/soccer.mp4";
import idcard from "../assets/videos/idcard.mp4";
import defectDetectionVideo from "../assets/videos/defect_detection.mp4";
import bgremove from "../assets/images/bgremove.jpg";

import "../assets/styles/Project.scss";

function Project() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMediaClick = (index: number) => {
    setActiveIndex(index);
  };

  const closeModal = () => {
    setActiveIndex(null);
  };

  // ✅ Projects
  const projects = [
    {
      video: soccerVideo,
      title: "Sports Analytics Pipelines",
      desc: "Developed automated pipelines (Python/C++) for ball tracking and dynamic zooming. Deployed GPU-accelerated C++ on Jetson Nano and containerized with Docker.",
      isImage: false,
    },
    {
      video: quizgen,
      title: "Quiz Generator",
      desc: "Built an automated quiz system using n8n, LLMs, and a vector database for semantic retrieval and dynamic question generation from company documents.",
      isImage: false,
    },
    {
      video: any2english,
      title: "Any2English Dubbing Tool",
      desc: "Developed a multi-lingual video to English dubbing tool with lip sync using Whisper (translation), Tortoise TTS (speech), and Wav2Lip (lip sync).",
      isImage: false,
    },
    {
      video: defectDetectionVideo,
      title: "Anomaly Detection (DRAEM)",
      desc: "Implemented the DRAEM model (TensorFlow), a deep learning approach for surface anomaly detection using reconstruction-based embedding.",
      isImage: false,
    },
    {
      video: idcard,
      title: "ID Card Detection App",
      desc: "Built a Flutter app for on-device ID detection, perspective transformation (OpenCV), quality checks (blur/glare), and information extraction (OCR).",
      isImage: false,
    },
    {
      video: bgremove,
      title: "Background Removal Android App",
      desc: "Developed a Java-based Android app using a quantized PyTorch Mobile model (TorchScript) for efficient, on-device background removal.",
      isImage: true,
    },
  ];

  return (
    <div className="projects-container" id="projects">
      <h1>Industry Projects</h1>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div className="project" key={index}>
            {/* Title on top */}
            <h2 className="project-title">{proj.title}</h2>

            {/* Video or Image */}
            {proj.isImage ? (
              <img
                src={proj.video}
                alt={proj.title}
                className="zoom"
                style={{
                  borderRadius: "10px",
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                onClick={() => handleMediaClick(index)}
              />
            ) : (
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={proj.video}
                className="zoom"
                loop
                muted
                playsInline
                style={{
                  borderRadius: "10px",
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                onClick={() => handleMediaClick(index)}
                onMouseOver={(e) =>
                  (e.currentTarget as HTMLVideoElement).play()
                }
                onMouseOut={(e) =>
                  (e.currentTarget as HTMLVideoElement).pause()
                }
              />
            )}

            {/* Description */}
            <p>{proj.desc}</p>
          </div>
        ))}
      </div>

      {/* Modal (for full view) */}
      {activeIndex !== null && (
        <div className="video-modal" onClick={closeModal}>
          {projects[activeIndex].isImage ? (
            <img
              src={projects[activeIndex].video}
              alt={projects[activeIndex].title}
              style={{
                width: "80%",
                maxHeight: "80%",
                borderRadius: "10px",
                objectFit: "contain",
              }}
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <video
              key={activeIndex}
              src={projects[activeIndex].video}
              autoPlay
              controls
              muted={false}
              style={{ width: "80%", maxHeight: "80%", borderRadius: "10px" }}
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Project;
