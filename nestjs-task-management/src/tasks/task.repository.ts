import { EntityRepository, Repository } from 'typeorm';
import { CreateTaskDto } from './DTO/create-task-dto';
import { TaskStatus } from './task-status.enum';
import { Task } from './task.entity';
import { GetTaskFilterDTO } from './DTO/get-tasks-filter.dto';

@EntityRepository(Task)
export class TasksRepository extends Repository<Task> {
  getTasks(filterDto: GetTaskFilterDTO): Promise<Task[]> {
    throw new Error('Method not implemented.');
  }
  async createTask(createTaskDTO: CreateTaskDto): Promise<Task> {
    const { title, description } = createTaskDTO;

    const task = this.create({
      title,
      description,
      status: TaskStatus.OPEN,
    });

    await this.save(task);
    return task;
  }
}
