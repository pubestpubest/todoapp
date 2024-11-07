"use client";

import { Button, Center, Flex, Input, Stack, Title } from "@mantine/core";
import { useState } from "react";
import Task from "./components/task";

export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export default function Home() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [nextId, setNextId] = useState(1);

  function toggleTask(id: number) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  function deleteTask(id: number) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  function addTask() {
    setTasks([...tasks, { id: nextId, title: taskInput, completed: false }]);
    setNextId(nextId + 1);
    setTaskInput("");
  }

  return (
    <Center bg="#F8F9FA" h="100vh">
      <div className="container">
        <Title>Todo List</Title>
        <Flex>
          <Input
            placeholder="Enter your task"
            value={taskInput}
            onChange={(event) => setTaskInput(event.currentTarget.value)}
          />
          <Button onClick={() => addTask()}>Add Task</Button>
        </Flex>
        <Stack>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />
          ))}
        </Stack>
      </div>
    </Center>
  );
}
