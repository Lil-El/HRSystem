<template>
  <hr-box class="portrait-container">
    <hr-tabs value="1" @tab-click="handleClick">
      <hr-tab-pane label="树" name="1">
        1
      </hr-tab-pane>
      <hr-tab-pane label="工作管理" name="2">
        2
      </hr-tab-pane>
      <hr-tab-pane label="个人画像" name="3">
        3
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
.portrait-container {
  height: 70%;
}
</style>
