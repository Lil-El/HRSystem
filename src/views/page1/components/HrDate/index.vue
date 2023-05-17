<template>
  <div class="date-container">
    <p>{{ date }}</p>
    <p>{{ week }}</p>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  data() {
    return {
      date: "",
      week: "",
    };
  },
  mounted() {
    this.getDate();
  },
  methods: {
    getDate() {
      this.date = dayjs().format("YYYY年M月D日");
      this.week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"][dayjs().day()];
    },
  },
};
</script>
