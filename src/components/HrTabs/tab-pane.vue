<template>
  <div class="hr-tab-pane" v-if="loaded || active" v-show="active">
    <slot />
  </div>
</template>

<script>
export default {
  name: "HrTabPane",
  props: {
    label: String,
    name: String,
  },
  data() {
    return {
      loaded: false,
    };
  },
  computed: {
    active() {
      const active = this.$parent.currentName == this.$props.name;
      if (active) this.loaded = true;
      return active;
    },
  },
};
</script>

<style lang="scss" scoped></style>
