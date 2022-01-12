<template>
  <div>
    <PureTaskList
      :tasks="tasks"
      @archive-task="archiveTask"
      @pin-task="pinTask"
    />
  </div>
</template>
<script>
import PureTaskList from "./PureTaskList.vue";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  components: { PureTaskList },
  setup() {
    const store = useStore();
    const tasks = computed(() => store.state.tasks);
    const archiveTask = (task) => store.dispatch("archiveTask", task);
    const pinTask = (task) => store.dispatch("pinTask", task);

    return {
      tasks,
      archiveTask,
      pinTask,
    };
  },
};
</script>
