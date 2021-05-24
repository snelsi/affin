const stripHtml = (text: string) => text?.replace(/(<([^>]+)>)/gi, "") || "";

export default stripHtml;
