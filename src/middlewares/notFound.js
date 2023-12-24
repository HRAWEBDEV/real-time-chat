import HttpStatusCodes from 'http-status-codes';

const notFoundMiddleware = (req, res) => {
 res.status(HttpStatusCodes.NOT_FOUND).json({
  status: 'faild',
  data: 'not found',
 });
};

export { notFoundMiddleware };
