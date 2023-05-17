<template>
  <div class="hr-box">
    <slot />
  </div>
</template>

<script>
export default {
  name: "HrBox"
}
</script>

<style lang="scss" scoped>
.hr-box {
  background-color: #03396a;
  color: white;
  padding: 0 10px;
  margin-top: 10px;
}
</style>
