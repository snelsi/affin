import * as React from "react";
import { Canvas } from "@react-three/fiber";
import Wave from "./Wave";

interface GradientBGProps {}
const GradientBG: React.FC<GradientBGProps> = () => (
  <div className="bg">
    <Canvas camera={{ position: [0, 0, 5] }} id="gradient">
      <ambientLight />
      <Wave />
    </Canvas>
  </div>
);

export default GradientBG;
