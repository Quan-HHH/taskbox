<template>
  <div class="steps">
    <div
      v-for="(item, index) in stepNames"
      class="step"
      :class="{ active: index <= active }"
    >
      <img v-if="index < active" class="tick" src="../assets/tick.png" />
      <span v-else class="index">{{ `${index + 1}.` }}</span>
      {{ item }}
    </div>
  </div>
</template>

<script>

export default {
  name: "ModSteps",
  props: {
    stepNames: {
      type: Object,
      required: true,
    },
    active: {
      type: Number,
      default: 0,
    },
  },
};
</script>
