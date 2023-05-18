<template>
  <hr-box class="notice-container">
    <hr-tabs value="1" @tab-click="handleClick">
      <hr-tab-pane label="通知公告" name="1">
        <el-row class="notice-list" align="middle" :gutter="20" v-for="item in data" :key="item.id">
          <el-col :span="20" class="notice-list-item__content" :title="item.content">{{ item.content }}</el-col>
          <el-col :span="4" class="notice-list-item__date">{{ item.date }}</el-col>
        </el-row>
      </hr-tab-pane>
    </hr-tabs>
  </hr-box>
</template>

<script>
export default {
  data() {
    return {
      data: [
        { id: 1, content: "xxx", date: "05/23" },
        { id: 2, content: "x", date: "05/23" },
        { id: 3, content: "xxx", date: "05/23" },
      ],
    };
  },
  mounted() {},
  methods: {
    handleClick(tab) {},
  },
};
</script>

<style lang="scss" scoped>
.notice-container {
  flex: 1;
  .notice-list {
    width: 100%;
    cursor: default;
    &-item {
      &__content {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        cursor: pointer;
        position: relative;
        padding-left: 30px!important;
        &::before {
          content: "";
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: blue;
          position: absolute;
          left: 10px;
          top: 6px;
        }
      }
      &__date {
      }
    }
  }
}
</style>
