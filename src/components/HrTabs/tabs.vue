<template>
  <div class="hr-tab">
    <hr-tab-nav :panes="panes" :on-tab-click="handleClick" />
    <slot />
  </div>
</template>

<script>
export default {
  name: "HrTabs",
  props: {
    value: String,
  },
  data() {
    return {
      panes: [],
      currentName: this.value,
    };
  },
  watch: {
    value(value) {
      this.currentName = value;
    },
  },
  mounted() {
    this.initTabs();
  },
  methods: {
    initTabs() {
      this.panes = this.$slots.default;
    },
    handleClick(tab) {
      this.currentName = tab.name;
      this.$emit("tab-click", tab);
      this.$emit("input", tab.name);
    },
  },
};
</script>

<style lang="scss" scoped>
.hr-tab {
  height: 100%;
  display: flex;
  flex-direction: column;
  .tab-navbar {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 24px;
  }
}
</style>
