import axios from "axios";
import React, { useEffect, useState } from "react";
import { api } from "../API/api";

export default {
  title: "API",
};

export const GetTodolists = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    // здесь мы будем делать запрос и ответ закидывать в стейт.
    // который в виде строки будем отображать в div-ке
    const promise = api.getTodolist();
    promise.then((res) => {
      setState(res.data);
    });
  }, []);
  return <div>{JSON.stringify(state)}</div>;
};

export const CreateTodolist = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    const title = "new todolist";
    const promise = api.createTodolist(title);
    promise.then((res) => {
      setState(res.data);
    });
  }, []);

  return <div>{JSON.stringify(state)}</div>;
};

export const DeleteTodolist = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    const todolistId = "689efc2f-5b4e-4516-882a-4df089912254";
    const promise = api.deleteTodolist(todolistId);
    promise.then((res) => {
      setState(res.data);
    });
  }, []);

  return <div>{JSON.stringify(state)}</div>;
};

export const UpdateTodolistTitle = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    const id = "689efc2f-5b4e-4516-882a-4df089912254";
    const title = "new todolistgggggggggg";
    const promise = api.updateTodolist(id, title);
    promise.then((res) => {
      setState(res.data);
    });
  }, []);

  return <div>{JSON.stringify(state)}</div>;
};

export const GetTasks = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    // здесь мы будем делать запрос и ответ закидывать в стейт.
    // который в виде строки будем отображать в div-ке
    const idTodo = "924a6838-2937-425c-9f40-2cae816d43bc";
    const promise = api.getTasks(idTodo);
    promise.then((res) => {
      setState(res.data);
    });
  }, []);
  return <div>{JSON.stringify(state)}</div>;
};
export const DeleteTasks = () => {
  const [state, setState] = useState<any>(null);
  const [idTodo, setidTodo] = useState<string>("");
  const [taskId, setidTask] = useState<string>("");

  const deletetask = () => {
    const promise = api.deleteTask(idTodo, taskId);
    promise.then((res) => {
      setState(res.data);
    });
  };
  //   ccc86a35-eea6-4b44-a215-81bb4ed58a4a
  //   924a6838-2937-425c-9f40-2cae816d43bc

  return (
    <div>
      {JSON.stringify(state)}
      <input
        type="text"
        placeholder={idTodo}
        value={idTodo}
        onChange={(e) => {
          setidTodo(e.currentTarget.value);
        }}
      />
      <input
        type="text"
        placeholder={taskId}
        value={taskId}
        onChange={(e) => {
          setidTask(e.currentTarget.value);
        }}
      />
      <div>
        <button
          onClick={() => {
            deletetask();
          }}
        >
          del
        </button>
      </div>
    </div>
  );
};
export const CreateteTasks = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    const idTodo = "924a6838-2937-425c-9f40-2cae816d43bc";
    const title = "8888888888888888888888";
    const promise = api.createTask(idTodo, title);
    promise.then((res) => {
      setState(res.data);
    });
  }, []);
  return <div>{JSON.stringify(state)}</div>;
};
export const UpdateTask = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    const idTodo = "924a6838-2937-425c-9f40-2cae816d43bc";
    const taskId = "9e52b1b3-b683-47b7-90d9-d5afbbddab1e";
    const model: any = {
      title: "yoyo",
      description: "",
      completed: false,
      status: 0,
      priority: 0,
      startDate: "",
      deadline: "",
    };
    const promise = api.updateTask(idTodo, taskId, model);
    promise.then((res) => {
      setState(res.data);
    });
  }, []);
  return <div>{JSON.stringify(state)}</div>;
};
