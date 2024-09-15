import { Injectable } from '@nestjs/common';
import { Prisma, User as UserModel } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUsers(): Promise<UserModel[]> {
    return await this.prisma.user.findMany();
  }

  async getUser(cognitoId: Prisma.UserWhereUniqueInput): Promise<UserModel> {
    return await this.prisma.user.findUnique({ where: cognitoId });
  }

  async createUser(data: Prisma.UserCreateInput): Promise<UserModel> {
    return await this.prisma.user.create({ data });
  }
}
