import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

// ✅ Import logos (make sure these exist)
import ultimusLogo from "../assets/images/ultimus.jpg";
import esperLogo from "../assets/images/esper.png";
import nustLogo from "../assets/images/nust.png";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>My Journey</h1>
        <VerticalTimeline>

          {/* --- Experience 1: Ultimus --- */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2025 – Present"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            iconStyle={{
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            icon={<img src={ultimusLogo} alt="Ultimus" className="timeline-logo" />}
          >
            <h3 className="vertical-timeline-element-title">AI Consultant</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Ultimus (Remote, US-based)
            </h4>
            <p>
              Building RAG-based chatbots using LangChain and n8n. Designing automation workflows
              for seamless integration with client systems.
            </p>
          </VerticalTimelineElement>

          {/* --- Education 1: NUST (Masters) --- */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2023 – Present"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            iconStyle={{
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            icon={<img src={nustLogo} alt="NUST" className="timeline-logo" />}
          >
            <h3 className="vertical-timeline-element-title">
              Masters in Artificial Intelligence
            </h3>
            <h4 className="vertical-timeline-element-subtitle">NUST — Islamabad</h4>
            <p>CGPA: 3.245</p>
          </VerticalTimelineElement>

          {/* --- Experience 2: Esper Solutions --- */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="April 2022 – Present"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            iconStyle={{
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            icon={<img src={esperLogo} alt="Esper Solutions" className="timeline-logo" />}
          >
            <h3 className="vertical-timeline-element-title">Machine Learning Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Esper Solutions</h4>
            <p>
              Conducting research, fine-tuning models, and developing/deploying scalable AI
              applications using Flask and FastAPI.
            </p>
          </VerticalTimelineElement>

          {/* --- Education 2: NUST (Bachelors) --- */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2018 – 2022"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            iconStyle={{
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            icon={<img src={nustLogo} alt="NUST" className="timeline-logo" />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelors of Electrical Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">NUST — Islamabad</h4>
            <p>Majors: ML & Computer Vision | CGPA: 3.1</p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
