import { Request, Response as ExpResponse, NextFunction } from 'express';
import { UNAUTHORIZED } from 'http-status-codes';

type AuthProviders = 'facebook' | 'google';

const ValidateToken = async (token: string, provider: AuthProviders) => {
  let result: Response = new Response(null, { status: UNAUTHORIZED });

  switch (provider) {
    case 'facebook':
      result = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      break;
    case 'google':
      result = await fetch(`https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${token}`);
      break;
  }

  // TODO: need to validate audience in token

  return result.ok;
};

export function AuthenticationMiddleware(req: Request, res: ExpResponse, next: NextFunction) {
  if (
    req.body['x-access-token'] &&
    req.body['x-access-provider'] &&
    ValidateToken(req.body['x-access-token'], req.body['x-access-provider'])
  ) {
    next();
  } else {
    return res.status(UNAUTHORIZED).json({ error: 'Unauthenticated' });
  }
}

export function AuthorizationMiddleware(req: Request, res: ExpResponse, next: NextFunction) {
  next();
}
