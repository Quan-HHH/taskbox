import ModSteps from "./ModSteps.vue";

export default {
  component: ModSteps,
  title: "ModSteps",
  decorators: [
    () => ({ template: '<div style="backgroud: white;"><story /></div>' }),
  ],
};

const Template = (args) => ({
  components: { ModSteps },
  setup() {
    return { args };
  },
  template: "<ModSteps v-bind='args' />",
});

export const Default = Template.bind({});
Default.args = {
  stepNames: ["first", "second", "third"],
  active: 0,
};

export const StepOne = Template.bind({});
StepOne.args = {
  ...Default.args,
  active: 2,
};
