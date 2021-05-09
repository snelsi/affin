const fragmentShader = `
  vec3 rgb(float r, float g, float b) {
      return vec3(r / 255., g / 255., b / 255.);
  }
  
  vec3 rgb(float c) {
      return vec3(c / 255., c / 255., c / 255.);
  }
  
  uniform vec3 u_bg;
  uniform vec3 u_bgMain;
  uniform vec3 u_color1;
  uniform vec3 u_color2;
  uniform float u_time;
  
  varying vec2 vUv;
  varying float vDistortion;
  
  void main() {
    vec3 bg = rgb(u_bg.r, u_bg.g, u_bg.b);
    vec3 c1 = rgb(u_color1.r, u_color1.g, u_color1.b);
    vec3 c2 = rgb(u_color2.r, u_color2.g, u_color2.b);
    vec3 bgMain = rgb(u_bgMain.r, u_bgMain.g, u_bgMain.b);

    float noise1 = snoise(vUv + u_time * 0.08);
    float noise2 = snoise(vUv * 2. + u_time * 0.1);

    vec3 color = bg;
    color = mix(color, c1, noise1 * 0.6);
    color = mix(color, c2, noise2 * .4);

    color = mix(color, mix(c1, c2, vUv.x), vDistortion);

    float border = smoothstep(0.1, 0.6, vUv.x);

    color = mix(color, bgMain, 1. -border);

    gl_FragColor = vec4(color, 1.0);
  }
`;

export default fragmentShader;
