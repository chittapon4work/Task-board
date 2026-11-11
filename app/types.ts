export type Priority = "high" | "medium" | "low";
export type Task = {
  id: number;
  title: string;
  done: boolean;
  priority: Priority;
  note?: string;
};