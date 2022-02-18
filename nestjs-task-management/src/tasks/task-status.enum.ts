/* export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus // open in progress or done  ;
}
*/
export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
