export const trim = (text: string): string =>
  text ? text.trim().replace(/(^['"]+)|(['"]+$)/gm, "") : "";

export const stripHtml = (text: string) => text?.replace(/(<([^>]+)>)/gi, "") || "";
