import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/user/user.service';
import { ProjectService } from 'src/project/project.service';
import { TaskService } from 'src/task/task.service';

@Module({
  controllers: [SearchController],
  providers: [
    SearchService,
    PrismaService,
    UserService,
    TaskService,
    ProjectService,
  ],
})
export class SearchModule {}
