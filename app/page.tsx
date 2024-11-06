"use client";

import {
  Button,
  Center,
  Checkbox,
  Flex,
  Input,
  Stack,
  Title,
  Text,
} from "@mantine/core";
import { useState } from "react";

type Task = {
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

  return (
    <Center bg="#F8F9FA" h="100vh">
      <div>
        <Title>Hello World</Title>
        <Flex gap="md">
          <Input
            placeholder="Enter your task"
            value={taskInput}
            onChange={(event) => setTaskInput(event.currentTarget.value)}
          />
          <Button
            onClick={() => {
              setTasks([
                ...tasks,
                { id: nextId, title: taskInput, completed: false },
              ]);
              setNextId(nextId + 1);
              setTaskInput("");
            }}
          >
            Add Task
          </Button>
        </Flex>
        <Stack gap="md" mt="md">
          {tasks.map((task) => (
            <div
              style={{
                backgroundColor: "white",
                borderRadius: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10,
              }}
              key={task.id}
            >
              <Text td={task.completed ? "line-through" : "none"}>
                {task.title}
              </Text>
              <Flex gap="md" align="center">
                <Checkbox color="green" onChange={() => toggleTask(task.id)} />
                <Button
                  color="red"
                  size="xs"
                  variant="subtle"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </Button>
              </Flex>
            </div>
          ))}
        </Stack>
      </div>
    </Center>
  );
}
