import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma, User as UserModel } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUsers(): Promise<UserModel[]> {
    return await this.prisma.user.findMany();
  }

  async search(query: string): Promise<UserModel[]> {
    return await this.prisma.user.findMany({
      where: {
        OR: [{ username: { contains: query as string } }],
      },
    });
  }

  async getUser(cognitoId: string): Promise<UserModel> {
    try {
      const user = await this.prisma.user.findUnique({ where: { cognitoId } });

      if (!user) {
        throw new NotFoundException(
          `User with cognitoId ${cognitoId} not found`,
        );
      }

      return user;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error; // rethrow the not found exception
      } else {
        throw new InternalServerErrorException('Error fetching user');
      }
    }
  }

  async createUser(data: Prisma.UserCreateInput): Promise<UserModel> {
    return await this.prisma.user.create({ data });
  }
}
