import { Module } from '@nestjs/common';
import { ProjectModule } from './project/project.module';
import { SearchModule } from './search/search.module';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';
import { TeamModule } from './team/team.module';

@Module({
  imports: [ProjectModule, SearchModule, TaskModule, UserModule, TeamModule],
})
export class AppModule {}
