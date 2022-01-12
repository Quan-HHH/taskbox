import { mount } from "@vue/test-utils";
import TaskList from "../../src/components/PureTaskList.vue";
import { WithPinnedTasks } from "../../src/components/PureTaskList.stories";

test("render pinned tasks at the start of the list", () => {
  const wrapper = mount(TaskList, {
    propsData: WithPinnedTasks.args,
  });
  const firstPinnedTask = wrapper.find(".list-item:nth-child(7)");
  expect(firstPinnedTask).not.toBe(null);
});
