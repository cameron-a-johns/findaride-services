import { Controller, Get, Post } from '@overnightjs/core';
import { OK } from 'http-status-codes';
import { Request, Response } from 'express';

@Controller('api/users')
export class UserController {
  @Get()
  private getAll(req: Request, res: Response) {
    return res.status(OK).json('Got everything');
  }

  @Get(':id')
  private get(req: Request, res: Response) {
    console.log(req.params.id);
    return res.status(OK);
  }

  @Post('add-user')
  private add(req: Request, res: Response) {}
}
