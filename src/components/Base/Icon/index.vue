<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";
import { type IconProps } from "./types";

defineOptions({
  name: "Icon",
});

const { name, width, height, fill, stroke } = defineProps<IconProps>();

const icon = defineAsyncComponent(() =>
  import(`./components/${name}.vue`)
);

const isIconHover = ref(false);

const hoverIcon = () => (isIconHover.value = true);
const unHoverIcon = () => (isIconHover.value = false);
</script>

<template>
  <component
    :is="icon"
    :style="{
      width: width ? width + 'px' : 'auto',
      height: height ? height + 'px' : 'auto',
      fill: fill ? fill : 'none',
      stroke: stroke ? stroke : 'none',
    }"
    @mouseover="hoverIcon"
    @mouseleave="unHoverIcon"
  />
</template>
