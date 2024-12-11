export interface INote {
  id: number,
  name: string,
  createDate: string,
  description: string,
  isPriority: boolean,
  executionDate?: string,
}