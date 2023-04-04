import React from "react";

interface IProps {
  id: number;
  text: string;
  isDone: boolean;
}

export const TodoItem = ({ id, text }: IProps) => {
  return <div className="bg-red-200">{text}</div>;
};
