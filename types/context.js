// @flow

import { IncomingMessage, ServerResponse } from 'http';

export type Context = {|
  params: {[string]: string},
  req: IncomingMessage,
  res: ServerResponse,
  query: string,
  preview: boolean,
|};
