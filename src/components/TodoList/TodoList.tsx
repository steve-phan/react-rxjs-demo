import React from "react";

import { TodoItem } from "../TodoItem/TodoItem";

const mockTodos = [
  { id: 1, text: "Buy milk from the store", isDone: false },
  { id: 2, text: "Take out the trash", isDone: true },
  { id: 3, text: "Call the dentist to schedule appointment", isDone: false },
  { id: 4, text: "Go for a run in the park", isDone: true },
  { id: 5, text: "Finish reading the book for book club", isDone: false },
  { id: 6, text: "Pay the rent for this month", isDone: true },
  { id: 7, text: "Buy a birthday present for mom", isDone: false },
  { id: 8, text: "Water the plants in the garden", isDone: false },
  { id: 9, text: "Finish the project proposal for work", isDone: false },
  { id: 10, text: "Clean the bathroom", isDone: true },
];

export const TodoList = () => {
  return (
    <div>
      {mockTodos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};
