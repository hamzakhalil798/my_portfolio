import React from "react";

const ModernCvEyeIcon = ({ width = 40, height = 40, color = "#4caf50" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Rectangle corners */}
    <path d="M6 14V6H14" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <path d="M50 6H58V14" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <path d="M58 50V58H50" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <path d="M14 58H6V50" stroke={color} strokeWidth="3" strokeLinecap="round" />

    {/* Eye outline */}
    <path
      d="M32 20C42 20 50 32 32 44C14 32 22 20 32 20Z"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Iris */}
    <circle cx="32" cy="32" r="6" fill={color} />
  </svg>
);

export default ModernCvEyeIcon;

