const data = require('../../data/reviews').default;

export default async function handler(req, res) {
  const { method } = req;

  if (method === 'GET') {
    return res.status(200).json(data);
  }

  return res.status(404).send('Not found');
}
