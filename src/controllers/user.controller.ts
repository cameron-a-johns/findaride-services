import { Controller, Get, Post, ClassMiddleware } from '@overnightjs/core';
import { OK, BAD_REQUEST } from 'http-status-codes';
import { Request, Response } from 'express';
// import { AuthenticationMiddleware } from '../middleware/auth.middleware';
import { UserRepository } from '../repository/user.respository';
import { ApiKeyMiddleware } from '../middleware';

@Controller('api/users')
@ClassMiddleware(ApiKeyMiddleware)
export class UserController {
  private UserDB = new UserRepository();

  @Get()
  private async getAll(req: Request, res: Response) {
    const result = await this.UserDB.getTime();
    return res.status(OK).json(result);
  }

  @Get(':id')
  private get(req: Request, res: Response) {
    if (req.params.complete) {
      // TODO: load full user from DB
    } else {
      // TODO: just check user exists
    }
    return res.status(OK);
  }

  @Post()
  private async add(req: Request, res: Response) {
    if (!req.body.userId) {
      return res.status(BAD_REQUEST).json({ isErr: true, msg: 'required field "userId" missing' });
    }

    // const result = await this.UserDB.addUser({ id: req.body.userId });
    const result = {
      isErr: false,
      message: req.body,
    };

    return res.status(result.isErr ? BAD_REQUEST : OK).json(result);
  }

  // @Put('update-user')
  // private update(req: Request, res: Response) {}
}
