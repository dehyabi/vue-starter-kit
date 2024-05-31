<template>
  <div>
    <h1 class="text-center mb-4">Active Tab</h1>
    <div class="grid grid-cols-2 text-center mx-3">
      <div
        class="cursor-pointer py-3"
        :class="isTabActive1 || isHovered1 ? 'active-tab' : ''"
        @click="activeTab1"
        @mouseover="hoveredTab1"
        @mouseleave="tabNotActive1"
      >
        tab 1
      </div>
      <div
        class="cursor-pointer py-3"
        :class="isTabActive2 || isHovered2 ? 'active-tab' : ''"
        @click="activeTab2"
        @mouseover="hoveredTab2"
        @mouseleave="tabNotActive2"
      >
        tab 2
      </div>
    </div>
    <div class="px-3 mt-3" v-if="isTabActive1">
      <h2>content 1</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur enim
        ea id voluptas distinctio aut pariatur deleniti deserunt nemo velit,
        iusto voluptatibus nesciunt soluta labore ab molestiae laudantium facere
        perspiciatis?
      </p>
    </div>
    <div class="px-3 mt-3" v-if="isTabActive2">
      <h2>content 2</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nihil
        placeat magnam amet dolorem at provident, quasi saepe est, enim sit
        ipsum odit aspernatur nam sequi quae delectus facere ducimus.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isTabActive1: true,
      isTabActive2: false,
      isHovered1: false,
      isHovered2: false,
      content1: false,
      content2: false,
    };
  },
  methods: {
    activeTab1() {
      this.isTabActive1 = true;
      this.isTabActive2 = false;
      this.content1 = true;
      this.content2 = false;
    },
    activeTab2() {
      this.isTabActive2 = true;
      this.isTabActive1 = false;
      this.content2 = true;
      this.content1 = false;
    },
    hoveredTab1() {
      this.isHovered1 = true;
      this.isHovered2 = false;
    },
    hoveredTab2() {
      this.isHovered2 = true;
      this.isHovered1 = false;
    },
    tabNotActive1() {
      this.isHovered1 = false;
    },
    tabNotActive2() {
      this.isHovered2 = false;
    },
  },
};
</script>

<style scoped lang="scss">
.active-tab {
  @apply font-bold bg-violet-700 text-white rounded-t-lg border border-b-red-500;
}
</style>
