<template>
  <hr-box class="working-container">
    <hr-tabs value="1" @tab-click="handleClick">
      <hr-tab-pane label="用户管理" name="1">
        <el-table :data="tableData">
          <el-table-column type="index" label="序号" width="50"> </el-table-column>
          <el-table-column prop="address" label="姓名" min-width="180"> </el-table-column>
        </el-table>
      </hr-tab-pane>
    </hr-tabs>
  </hr-box>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    handleClick(tab) {
      console.log(tab);
    },
  },
};
</script>

<style lang="scss" scoped>
.working-container {
  flex: 1;
}
</style>
