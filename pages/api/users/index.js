// @flow

import Connection from '../../../db/Connection';

export default (req: any, res: any) => {
  if (req.method === 'POST') {
    return post(req, res);
  } else {
  }
  return res.end("HELLO");
}

const post = async (req, res) => {
  const connection = await Connection;
  try {
    const user = await connection.instance.models.User.create(req.body);
    return res.status(201).json(user.toJSON());
  } catch (error) {
    return res.status(400).json({error});
  }
}
