// @format
import { IncomingMessage, ServerResponse } from "http";

export type Context = {
  params: {
    [K in string]: string;
  };
  req: IncomingMessage;
  res: ServerResponse;
  query: string;
  preview: boolean;
};
