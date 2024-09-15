import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Prisma, Project as ProjectModel } from '@prisma/client';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  async getProjects(): Promise<ProjectModel[]> {
    return this.projectService.getProjects();
  }

  @Get('/:projectId')
  async getProjectById(
    @Param('projectId') projectId: Prisma.ProjectWhereUniqueInput,
  ): Promise<ProjectModel> {
    return this.projectService.getProjectById({ id: Number(projectId) });
  }

  @Post()
  async createProject(
    @Body()
    data: {
      name: string;
      description: string;
      startDate: Date;
      endDate: Date;
    },
  ): Promise<ProjectModel> {
    return this.projectService.createProject(data);
  }
}
