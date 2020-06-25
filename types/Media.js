// @flow

export const MediaTypes = {
  IMAGE: "image",
  VIDEO: "video",
  YOUTUBE: "youtube",
};

export type MediaURL = {|
  url: string,
  type: $Values<typeof MediaTypes>,
|};

