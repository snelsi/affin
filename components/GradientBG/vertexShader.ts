const vertexShader = `
  uniform float u_time;
  uniform vec2 u_randomisePosition;

  varying float vDistortion;
  varying float xDistortion;
  varying vec2 vUv;

  void main() {
      vUv = uv;
      vDistortion = snoise(vUv.xx * 3. - u_randomisePosition * 0.15);
      xDistortion = snoise(vUv.yy * 1. - u_randomisePosition * 0.05);
      vec3 pos = position;
      pos.z += (vDistortion * 35.);
      pos.x += (xDistortion * 25.);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

export default vertexShader;
