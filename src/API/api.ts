import axios from "axios";
import { CreateTodolist } from "./../stories/todolists-api.stories";
import { Delete } from "@mui/icons-material";

const config = {
  withCredentials: true,
};

const instances = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.1/",
  withCredentials: true,
  headers: {
    "API-KEY": "a6c8b9b0-e8a7-4f7e-8b9b-a6c8b9b0e8a7",
  },
});

export type TodolistType = {
  id: string;
  title: string;
  addedDate: string;
  order: number;
};

type ResponseType<D> = {
  resultCode: number;
  messages: Array<string>;
  data: D;
};

type TaskType = {
  description: string;
  title: string;
  status: number;
  priority: number;
  startDate: string;
  deadline: string;
  id: string;
  todoListId: string;
  order: number;
  addedDate: string;
};

type TasksType = {
  error: string | null;
  totalCount: number;
  items: TaskType[];
};
type DeletTasks = {
  resultCode: number;
  messages: string[];
  data: {};
};

export type UpdateTask = {
  title: string;
  description: string;
  status: number;
  priority: number;
  startDate: string;
  deadline: string;
};

export const api = {
  getTodolist() {
    return instances.get<Array<TodolistType>>("todo-lists");
  },
  createTodolist(title: string) {
    return instances.post<ResponseType<{ item: TodolistType }>>("todo-lists", {
      title,
    });
  },
  deleteTodolist(id: string) {
    return instances.delete<ResponseType<{}>>(`todo-lists/${id}`);
  },
  updateTodolist(id: string, title: string) {
    return instances.put<ResponseType<{}>>(`todo-lists/${id}`, { title });
  },
  getTasks(idTodo: string) {
    return instances.get<TasksType>(`todo-lists/${idTodo}/tasks`);
  },
  createTask(id: string, title: string) {
    return instances.post<ResponseType<{ item: TaskType }>>(
      `todo-lists/${id}/tasks`,
      { title }
    );
  },
  deleteTask(idTodo: string, taskId: string) {
    return instances.delete<DeletTasks>(`todo-lists/${idTodo}/tasks/${taskId}`);
  },
  updateTask(idTodo: string, taskId: string, model: UpdateTask) {
    return instances.put<ResponseType<{ item: TaskType }>>(
      `todo-lists/${idTodo}/tasks/${taskId}`,
      model
    );
  },
};
