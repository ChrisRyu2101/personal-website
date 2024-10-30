import React from "react";
import { Lottie } from "lottie-react";
import quantumBackground from "../animations/quantumBackground.json";

const QuantumBackground = () => {
  return (
    <div className="quantum-background">
      <Lottie animationData={quantumBackground} loop style={{ opacity: 0.1, position: "fixed", top: 0, left: 0, zIndex: -1, width: "100%", height: "100vh" }} />
    </div>
  );
};

export default QuantumBackground;
