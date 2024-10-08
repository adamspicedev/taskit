import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, Project as ProjectModel } from '@prisma/client';

@Injectable()
export class ProjectService {
  constructor(private readonly prisma: PrismaService) {}

  async getProjects(): Promise<ProjectModel[]> {
    return this.prisma.project.findMany();
  }

  async search(query: string): Promise<ProjectModel[]> {
    return await this.prisma.project.findMany({
      where: {
        OR: [
          { name: { contains: query as string } },
          { description: { contains: query as string } },
        ],
      },
    });
  }

  async getProjectById(
    projectId: Prisma.ProjectWhereUniqueInput,
  ): Promise<ProjectModel> {
    return this.prisma.project.findUnique({ where: projectId });
  }

  async createProject(data: Prisma.ProjectCreateInput): Promise<ProjectModel> {
    return this.prisma.project.create({ data });
  }
}
