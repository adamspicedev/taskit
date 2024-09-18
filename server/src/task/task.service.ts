import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma, Task as TaskModel } from '@prisma/client';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.TaskCreateInput) {
    return await this.prisma.task.create({ data });
  }

  async findAll(): Promise<TaskModel[]> {
    return await this.prisma.task.findMany();
  }

  async findUserTasks(
    userId: Prisma.UserWhereUniqueInput,
  ): Promise<TaskModel[]> {
    return await this.prisma.task.findMany({
      where: {
        OR: [
          { authorUserId: Number(userId) },
          { assignedUserId: Number(userId) },
        ],
      },
      include: {
        author: true,
        assignee: true,
      },
    });
  }

  async updateStatus(id: number, data: Prisma.TaskUpdateInput) {
    return await this.prisma.task.update({
      where: { id }, // Simplified version
      data,
    });
  }
}
