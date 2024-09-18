import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Prisma } from '@prisma/client';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  // router.post("/", createTask);
  // router.patch("/:taskId/status", updateTaskStatus);
  // router.get("/user/:userId", getUserTasks);

  @Post()
  create(@Body() data: Prisma.TaskCreateInput) {
    return this.taskService.create(data);
  }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get('/user/:userId')
  findUserTasks(@Param('userId') userId: Prisma.UserWhereUniqueInput) {
    return this.taskService.findUserTasks(userId);
  }

  @Patch('/:taskId/status')
  update(@Param('taskId') id: string, @Body() data: Prisma.TaskUpdateInput) {
    return this.taskService.updateStatus(+id, data);
  }
}
