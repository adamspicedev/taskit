import { Injectable } from '@nestjs/common';
import {
  Project as ProjectModel,
  Task as TaskModel,
  User as UserModel,
} from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { ProjectService } from 'src/project/project.service';
import { TaskService } from 'src/task/task.service';
import { UserService } from 'src/user/user.service';

export type SearchResults = {
  projects: ProjectModel[];
  tasks: TaskModel[];
  users: UserModel[];
};

@Injectable()
export class SearchService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly projectService: ProjectService,
    private readonly userService: UserService,
    private readonly taskService: TaskService,
  ) {}

  async search(query: string): Promise<SearchResults> {
    const tasks = await this.taskService.search(query);
    const projects = await this.projectService.search(query);
    const users = await this.userService.search(query);

    return { tasks, projects, users };
  }
}
