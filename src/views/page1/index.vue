<template>
  <div class="home-container">
    <el-row class="header" type="flex" align="middle">
      <el-col><hr-date /></el-col>
      <el-col class="header-title">xxx</el-col>
      <el-col><hr-menu /></el-col>
    </el-row>
    <el-row class="main" type="flex" :gutter="10">
      <el-col class="main-left" :span="7">
        <hr-user-info />
        <hr-working />
      </el-col>
      <el-col :span="10">
        <hr-portrait />
        <hr-industry />
      </el-col>
      <el-col :span="7">
        <hr-notice />
        <hr-industry />
        <hr-industry />
        <hr-industry />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import HrDate from "./components/HrDate";
import HrMenu from "./components/HrMenu";
import HrUserInfo from "./components/HrUserInfo";
import HrWorking from "./components/HrWorking";
import HrPortrait from "./components/HrPortrait";
import HrIndustry from "./components/HrIndustry";
import HrNotice from "./components/HrNotice";
export default {
  name: "App",
  components: { HrDate, HrMenu, HrUserInfo, HrWorking, HrPortrait, HrIndustry, HrNotice },
};
</script>

<style lang="scss" scoped>
.home-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  $header-height: 50px;
  .header {
    width: 100%;
    height: $header-height;
    box-sizing: border-box;
    &-title {
      text-align: center;
    }
  }
  .main {
    height: calc(100% - $header-height);
    .el-col {
      display: flex;
      flex-direction: column;
    }
    &-left {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
