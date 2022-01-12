import Task from "./Task.vue";
import { action } from "@storybook/addon-actions";

export default {
  component: Task,
  title: "Task", // 在侧边栏展示的标题
  excludeStories: /.*Data$/, // story本身需要但不用在storyBook中渲染的信息
  argTypes: { // 对组件传递参数的定义 生成符合期待的control
    // onPinTask: {},
    // onArchiveTask: {},
  },
};

export const actionsData = {
  onPinTask: action("pin-task"),
  onArchiveTask: action("archive-task"),
};

// 设置一个Template，以下story都使用template创建，减少代码量, 不同的story设置不同的args
const Template = (args) => ({
  components: { Task },
  setup() {
    return { args, ...actionsData };
  },
  template: '<Task v-bind="args" />',
});

// 为每一个要测试的组件状态导出一个函数 以此来定义story
// 下面是三个story
export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test-Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
  },
};

export const Archive = Template.bind({});
Archive.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};
