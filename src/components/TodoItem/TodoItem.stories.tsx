import { TodoItem } from "./TodoItem";

import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof TodoItem> = {
  title: "Component/TodoItem",
  component: TodoItem,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TodoItem>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const OddItem: Story = {
  args: {
    id: 1,
    text: "Learning Rxjs",
    isDone: false,
  },
};

export const EvenItem: Story = {
  args: {
    id: 2,
    text: "Watch a football match",
    isDone: false,
  },
};

export const CompletedItem: Story = {
  args: {
    id: 2,
    text: "Get AWS developer certificate",
    isDone: true,
  },
};
