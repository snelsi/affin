import * as React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const rotate = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;
const dash = keyframes`
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
`;

const Svg = styled.svg`
  animation: ${rotate} 2s linear infinite;

  width: 50px;
  height: 50px;

  & circle {
    stroke: var(--color-blue-500);
    stroke-linecap: round;
    animation: ${dash} 1.5s ease-in-out infinite;
  }
`;

interface SpinnerProps extends React.SVGProps<SVGSVGElement> {}
const Spinner: React.FC<SpinnerProps> = ({ className, ...props }) => (
  <Svg viewBox="0 0 50 50" className={className} {...props}>
    <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
  </Svg>
);

export default Spinner;
