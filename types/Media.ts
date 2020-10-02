export const MediaTypes = {
  IMAGE: "image",
  VIDEO: "video",
  YOUTUBE: "youtube",
};

export type MediaURL = {
  url: string;
  type: typeof MediaTypes[keyof typeof MediaTypes];
  caption: string;
};
