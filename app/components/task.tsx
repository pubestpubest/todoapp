import React from "react";
import { Checkbox, Button, Flex, Text } from "@mantine/core";
import { Task as TaskType } from "../page";

export default function Task({
  task,
  toggleTask,
  deleteTask,
}: {
  task: TaskType;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}) {
  return (
    <div className="task-container" key={task.id}>
      <Text td={task.completed ? "line-through" : "none"}>{task.title}</Text>
      <Flex align="center">
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
  );
}
