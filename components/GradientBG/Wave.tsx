import * as React from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

import fragmentShader from "./fragmentShader";
import vertexShader from "./vertexShader";
import sNoise from "./sNoise";

const randomInteger = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const rgb = (r: number, g: number, b: number) => new THREE.Vector3(r, g, b);
let vCheck = false;

const R = (x: number, y: number, t: number) =>
  Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t));
const G = (x: number, y: number, t: number) =>
  Math.floor(192 + 64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300));
const B = (x: number, y: number, t: number) =>
  Math.floor(
    192 +
      64 * Math.sin(5 * Math.sin(t / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100),
  );

const randomisePosition = new THREE.Vector2(1, 2);

const uniforms = {
  u_bg: { type: "v3", value: rgb(164, 131, 255) },
  u_bgMain: { type: "v3", value: rgb(155, 118, 255) },
  u_color1: { type: "v3", value: rgb(135, 102, 255) },
  u_color2: { type: "v3", value: rgb(127, 73, 253) },
  u_time: { type: "f", value: 30 },
  u_randomisePosition: { type: "v2", value: randomisePosition },
};

let t = 0;
let j = 0;
let x = randomInteger(0, 32);
let y = randomInteger(0, 32);

const Wave = (props) => {
  const mesh = React.useRef<THREE.Mesh>();

  useFrame(() => {
    if (mesh.current?.material?.uniforms) {
      mesh.current.material.uniforms.u_randomisePosition.value = new THREE.Vector2(j, j);
      mesh.current.material.uniforms.u_color1.value = new THREE.Vector3(
        R(x, y, t / 2),
        G(x, y, t / 2),
        B(x, y, t / 2),
      );
      mesh.current.material.uniforms.u_time.value = t;
    }

    if (t % 0.1 === 0) {
      if (vCheck === false) {
        x -= 1;
        if (x <= 0) {
          vCheck = true;
        }
      } else {
        x += 1;
        if (x >= 32) {
          vCheck = false;
        }
      }
    }

    // Increase t by a certain value every frame
    j = j + 0.004;
    t = t + 0.001;
    // j = j + 0.002;
    // t = t + 0.006;
  });

  return (
    <mesh {...props} ref={mesh} position={[-200, 270, -280]} scale={3.5}>
      <planeGeometry args={[1000, 400, 100, 100]} />
      <shaderMaterial
        attach="material"
        uniforms={uniforms}
        fragmentShader={sNoise + fragmentShader}
        vertexShader={sNoise + vertexShader}
      />
    </mesh>
  );
};

export default Wave;
