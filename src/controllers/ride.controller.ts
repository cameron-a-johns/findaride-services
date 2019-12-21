import { Controller, Get, Post, Put } from '@overnightjs/core';
import { OK } from 'http-status-codes';
import { Request, Response } from 'express';
import { UserRepository } from '../repository/user.respository';

@Controller('api/rides')
export class RideController {
  private RideDB = new UserRepository();

  @Get()
  private getAll(req: Request, res: Response) {
    return res.status(OK).json('Got everything');
  }

  @Get('time')
  private async getTime(req: Request, res: Response) {
    console.log('dncas');
    const result = await this.RideDB.getTime();
    console.log(result);
    return res.status(OK).json('sa');
  }

  @Get(':id')
  private get(req: Request, res: Response) {
    console.log(req.params.id);
    return res.status(OK);
  }

  @Post('add-user')
  private add(req: Request, res: Response) {}

  @Put('update-user')
  private update(req: Request, res: Response) {}
}
