import * as React from "react";

const escapeRegex = (string: string) =>
  string.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");

interface HighlightedProps {
  text: string;
  highlight?: string;
}

export const Highlighted: React.FC<HighlightedProps> = ({
  text = "",
  highlight = "",
}) => {
  if (!highlight?.trim()) {
    return <span>{text}</span>;
  }
  const regex = new RegExp(`(${escapeRegex(highlight)})`, "i");
  const parts = text?.split(regex);
  return (
    <span>
      {parts
        ?.filter?.((part) => part)
        .map((part, i) =>
          regex.test(part) ? <b key={i}>{part}</b> : <span key={i}>{part}</span>
        )}
    </span>
  );
};
