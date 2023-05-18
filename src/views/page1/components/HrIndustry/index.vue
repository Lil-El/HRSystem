<template>
  <hr-box class="industry-container">
    <hr-tabs value="1" @tab-click="handleClick">
      <hr-tab-pane label="成长路线" name="1">
        1
      </hr-tab-pane>
      <hr-tab-pane label="行业对比" name="2">
        2
      </hr-tab-pane>
      <hr-tab-pane label="路线" name="3">
        3
      </hr-tab-pane>
      <hr-tab-pane label="职业规划" name="4">
        4
      </hr-tab-pane>
    </hr-tabs>
  </hr-box>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  mounted() {},
  methods: {
    handleClick(tab) {},
  },
};
</script>

<style lang="scss" scoped>
.industry-container {
  flex: 1;
}
</style>
