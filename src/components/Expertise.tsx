import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Updated imports to include faAndroid
import { faReact, faDocker, faPython, faAndroid } from '@fortawesome/free-brands-svg-icons'; 
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

// --- New Tech Stacks Based on Resume ---

// 1. Computer Vision
const labelsCV = [
    "Python",
    "C++",
    "PyTorch",
    "TensorFlow",
    "OpenCV",
    'Deep Learning',
    'Machine Learning'
]

// 2. Deployment
const labelsDeploy = [
    "Docker",
    'Edge AI (Jetson / OrangePi)',
    'Quantization',
    "Flask",
    "FastAPI",
    "Amazon EC2",
    "API Development",
    "Git",
    "Linux",
    'MobaXterm'
];

// 3. Android (On-Device ML)
const labelsAndroid = [
    "Java",
    "Flutter",
    "PyTorch Mobile",
    "Tflite",
    "Google ML kit"
];

// 4. GenAi and LLM
const labelsGenAI = [
    "LangChain",
    "n8n",
    "OpenAI",
    "Groq",
    "LLMs",
    "RAG",
    "Vector DB",
    "Hugging Face",
    "Llama"
];


function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">

                {/* --- Section 1: Computer Vision --- */}
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Deep Learning and Computer Vision</h3>
                    <p>
                        I build intelligent computer vision systems that bridge research and real-world deployment. With hands-on expertise in Python, C++.I design and optimize vision pipelines for edge devices such as the Jetson Nano and orange Pi. My work spans advanced tasks including object detection, segmentation, image restoration, and anomaly detection across diverse domains like sports analytics, fabric inspection, and road defect detection.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsCV.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* --- Section 2: Deployment --- */}
                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Deployment & APIs</h3>
                    <p>
                        I design and deploy scalable AI solutions across cloud and edge environments. Skilled in building Flask and FastAPI APIs, containerizing applications with Docker, and deploying on platforms like Amazon EC2 and NVIDIA Jetson Nano. My experience spans the full deployment pipeline—from model optimization and quantization to real-time inference on resource-constrained devices.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsDeploy.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* --- Section 3: Android --- */}
                <div className="skill">
                    <FontAwesomeIcon icon={faAndroid} size="3x"/>
                    <h3>Android (On-Device ML)</h3>
                    <p>
                        I integrate efficient machine learning models into mobile applications, ensuring real-time performance and optimized inference. Experienced in developing Android (Java) and Flutter apps powered by PyTorch Mobile and OpenCV, I’ve built intelligent solutions for background removal, ID card scanning, and other on-device vision tasks.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsAndroid.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* --- Section 4: GenAi and LLM --- */}
                <div className="skill">
                    {/* Re-using faPython icon as GenAI stack is Python-based */}
                    <FontAwesomeIcon icon={faPython} size="3x"/> 
                    <h3>GenAi & LLM</h3>
                    <p>
                        I build enterprise-grade generative AI solutions that combine intelligence with scalability. Specialized in Retrieval-Augmented Generation (RAG) pipelines, LangChain, and vector databases like Pinecone, I develop context-aware chatbots and intelligent automation workflows integrated with tools such as n8n.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsGenAI.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;