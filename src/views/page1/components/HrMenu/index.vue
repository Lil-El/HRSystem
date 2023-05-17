<template>
  <el-row class="menu-container" type="flex" justify="end">
    <el-col :span="5"><span>个人中心</span></el-col>
    <el-col :span="5"><span>退出</span></el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.menu-container {
  .el-col {
    text-align: center;
    span {
      cursor: pointer;
    }
  }
}
</style>
