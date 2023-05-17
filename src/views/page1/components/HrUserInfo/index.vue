<template>
  <hr-box>
    <el-row class="user-container" type="flex" :gutter="10" justify="center" align="middle">
      <el-col :span="12">
        <div>
          <div>
            <img src="@/assets/images/sketch.jpg" width="110" height="160" alt="" />
          </div>
          <div>资料完整度：80</div>
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          <div>个人信息</div>
        </div>
        <div>
          <p>姓名：xx</p>
          <p>年龄：12</p>
          <p>学历：本科</p>
        </div>
      </el-col>
    </el-row>
  </hr-box>
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
.user-container {
  .el-col {
    text-align: center;
  }
}
</style>
