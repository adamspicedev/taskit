import { Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers() {
    return this.userService.getUsers();
  }

  @Get('/:cognitoId')
  async getUser(@Param('cognitoId') cognitoId: string) {
    return this.userService.getUser(cognitoId);
  }

  @Post()
  async createUser(data: Prisma.UserCreateInput) {
    return this.userService.createUser(data);
  }
}
