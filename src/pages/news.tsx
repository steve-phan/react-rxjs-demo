import React from "react";

import { TodoItem } from "../components/TodoItem/TodoItem";

const mytodo = {
  id: 1,
  text: "Learning Rxjs",
  isDone: false,
};

const News = () => {
  return (
    <>
      <h1>News</h1>
      <button className="btn-primary">Taildwind</button>
      <TodoItem {...mytodo} />
    </>
  );
};

export default News;
