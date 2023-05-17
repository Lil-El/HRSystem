<template>
  <hr-box>
    <hr-tabs class="working-container" value="1" @tab-click="handleClick">
      <hr-tab-pane label="用户管理" name="1">
        
      </hr-tab-pane>
    </hr-tabs>
  </hr-box>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    handleClick(tab) {
      console.log(tab);
    }
  },
};
</script>

<style lang="scss" scoped>
.working-container {
}
</style>
