import { Request, Response as ExpResponse, NextFunction } from 'express';
import { UNAUTHORIZED } from 'http-status-codes';
import { ApiRepository } from '../repository/api.respository';

export function ApiKeyMiddleware(req: Request, res: ExpResponse, next: NextFunction) {
  if (req.headers['x-api-key']) {
    const apiRepository = new ApiRepository();
    if (apiRepository.checkApiKey(`${req.headers['x-api-key']}`)) {
      next();
    }
  } else {
    console.log(req);
    return res.status(UNAUTHORIZED).json({ error: 'Apikey not present' });
  }
}
