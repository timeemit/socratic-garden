// @flow

import Connection from '../../../db/Connection';

export default (req: any, res: any) => {
  if (req.method === 'POST') {
    return create(req, res);
  }
  return res.json({});
}

const create = async (req, res) => {
  const connection = await Connection;
  try {
    await connection.instance.models.User.invite(req.body);
    return res.status(201).json({});
  } catch (error) {
    return res.status(400).json({error});
  }
}
