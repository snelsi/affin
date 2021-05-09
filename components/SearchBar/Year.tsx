import * as React from "react";
import styled from "@emotion/styled";
import { Range, getTrackBackground } from "react-range";
import YearInput from "./YearInput";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const LabelTitle = styled.div`
  color: var(--color-gray-600);
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  margin-bottom: 12px;
`;

const Track = styled.div`
  --thumb-size: 32px;
  height: var(--thumb-size);
  display: flex;
  width: 100%;
  & > div {
    align-self: center;
    border-radius: 4px;
    height: 4px;
    width: 100%;
  }
`;
const Thumb = styled.div`
  height: var(--thumb-size);
  width: var(--thumb-size);
  border-radius: 4px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 6px #aaa;
  & > div.thumb-block {
    height: 16px;
    width: 5px;
    background-color: #ccc;
    &[data-is-dragged="true"] {
      background-color: var(--color-green-400);
    }
  }
`;

const COLORS = ["var(--color-green-400)"];

const getColors = (values: number): string[] => {
  const activeColors: string[] = [];
  for (let i = 0; i + 1 < values; i++) {
    activeColors.push(COLORS[i % COLORS.length]);
  }
  return ["#ccc", ...activeColors, "#ccc"];
};

const clamp = (min: number, num: number, max: number) => Math.min(Math.max(num, min), max);

interface YearProps {
  value: [number, number];
  onChange: (data: [number, number]) => void;
  min?: number;
  max?: number;
  step?: number;
  label?: React.ReactNode;
}
const Year: React.FC<YearProps> = ({
  value,
  onChange,
  min = 1950,
  max = new Date().getFullYear(),
  step = 1,
  label,
}) => {
  const rangeRef: any = React.useRef<Range>();

  return (
    <div>
      <LabelTitle>{label}</LabelTitle>
      <Wrapper>
        <Range
          ref={rangeRef}
          values={value.map((year) => clamp(min, year, max))}
          step={step}
          min={min}
          max={max}
          onChange={onChange}
          renderTrack={({ props, children }) => (
            <Track
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={props.style}
            >
              <div
                ref={props.ref}
                style={{
                  background: getTrackBackground({
                    values: value,
                    colors: getColors(value.length),
                    min,
                    max,
                  }),
                }}
              >
                {children}
              </div>
            </Track>
          )}
          renderThumb={({ props, isDragged }) => (
            <Thumb {...props} style={props.style}>
              <div className="thumb-block" data-is-dragged={isDragged} />
            </Thumb>
          )}
        />
      </Wrapper>

      <YearInput values={value} onChange={onChange} min={min} max={max} />
    </div>
  );
};

export default Year;
