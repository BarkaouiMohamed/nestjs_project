import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  /*Body,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,*/
} from '@nestjs/common';
import { CreateTaskDto } from './DTO/create-task-dto';
import { UpdateTaskStatusDTO } from './DTO/update-task-status.dto';
import { Task } from './task.entity';
// import { GetTaskFilterDTO } from './DTO/get-tasks-filter.dto';
// import { CreateTaskDto } from './DTO/create-task-dto';
// import { Task } from './task-status.enum';
import { TasksService } from './tasks.service';
// import { UpdateTaskStatusDTO } from './DTO/update-task-status.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  /*
  @Get()
  getTasks(@Query() filterDto: GetTaskFilterDTO): Task[] {
    // if we have any filters defined, call tasksService.getTaskWithFilters
    // otherwise just get all tasks
    if (Object.keys(filterDto).length) {
      return this.tasksService.getTasksWithFilters(filterDto);
    } else return this.tasksService.getAllTasks();
  }
*/
  @Get('/:id')
  getTaskByID(@Param('id') id: string): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  /*
  @Get('/:id')
  getTaskByID(@Param('id') id: string): Task {
    return this.tasksService.getTasksByID(id);
  }
*/
  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }
  /*
  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }
  */
  @Delete('/:id')
  DeleteTask(@Param('id') id: string): Promise<void> {
    return this.tasksService.deleteTask(id);
  }
  /*
  @Delete('/:id')
  DeleteTask(@Param('id') id: string): void {
    return this.tasksService.deleteTask(id);
  }
  */
  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body() updateTaskStatusDTO: UpdateTaskStatusDTO,
  ): Promise<Task> {
    const { status } = updateTaskStatusDTO;
    return this.tasksService.updateTaskStatus(id, status);
  }
  /*
  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body() updateTaskStatusDTO: UpdateTaskStatusDTO,
  ): Task {
    const { status } = updateTaskStatusDTO;
    return this.tasksService.updateTaskStatus(id, status);
  }
*/
}
