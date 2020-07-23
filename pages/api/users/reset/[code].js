// @flow

import Connection from '../../../../db/Connection';

export default (req: any, res: any) => {
  if (req.method === 'PATCH') {
    return reset(req, res);
  }
  return res.json({});
}

const reset = async (req, res) => {
  const connection = await Connection;
  try {
    const { code } = req.query;
    const { password } = req.body;
    await connection.instance.models.User.reset({ code, password });
    return res.status(200).json({});
  } catch (error) {
    return res.status(400).json({error});
  }
}
