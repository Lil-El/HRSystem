<template>
  <div class="hr-tab-nav">
    <span class="hr-tab-nav__item" v-for="pane in paneList" :key="pane.name" @click="onTabClick(pane)">{{ pane.label }}</span>
  </div>
</template>

<script>
export default {
  name: "HrTabNav",
  props: {
    panes: Array,
    onTabClick: Function,
  },
  data() {
    return {
      paneList: [],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this._l(this.$props.panes, (pane, index) => {
        this.paneList.push({
          tab: pane,
          label: pane.componentOptions.propsData.label,
          name: pane.componentOptions.propsData.name || index,
        });
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.hr-tab-nav {
  display: flex;
  align-items: center;
  &__item {
    margin-right: 10px;
    cursor: pointer;
  }
}
</style>
