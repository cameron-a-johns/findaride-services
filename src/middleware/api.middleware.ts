import { Request, Response as ExpResponse, NextFunction } from 'express';
import { UNAUTHORIZED } from 'http-status-codes';

export function ApiKeyMiddleware(req: Request, res: ExpResponse, next: NextFunction) {
  if (req.body['x-apikey']) {
    next();
  } else {
    return res.status(UNAUTHORIZED).json({ error: 'Apikey not present' });
  }
}
