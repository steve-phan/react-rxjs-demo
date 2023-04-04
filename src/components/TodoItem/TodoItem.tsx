import React from "react";

interface IProps {
  id: number;
  text: string;
  isDone: boolean;
}

export const TodoItem = ({ id, text, isDone }: IProps) => {
  const bgItem = id % 2 === 0 ? "bg-red-50" : "bg-neutral-100";
  const isDoneCSS = isDone ? "line-through" : "";

  return <div className={`p-4 rounded ${bgItem} ${isDoneCSS}`}>{text}</div>;
};
