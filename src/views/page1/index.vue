<template>
  <div class="home-container">
    <el-row class="header" type="flex" align="middle">
      <el-col><hr-date /></el-col>
      <el-col class="header-title">xxx</el-col>
      <el-col><hr-menu /></el-col>
    </el-row>
    <el-row class="main" type="flex" :gutter="10">
      <el-col :span="7">
        <hr-user-info />
        <hr-working />
      </el-col>
      <el-col :span="10"> </el-col>
      <el-col :span="7"> </el-col>
    </el-row>
  </div>
</template>

<script>
import HrDate from "./components/HrDate";
import HrMenu from "./components/HrMenu";
import HrUserInfo from "./components/HrUserInfo";
import HrWorking from "./components/HrWorking";
export default {
  name: "App",
  components: { HrDate, HrMenu, HrUserInfo, HrWorking },
};
</script>

<style lang="scss" scoped>
.home-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  .header {
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    &-title {
      text-align: center;
    }
  }
  .main {
    height: 100%;
    .el-col {
      border: 1px solid gray;
    }
  }
}
</style>
