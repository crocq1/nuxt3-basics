<script setup lang="ts">
import { type ImageProps } from "./image.types";

defineOptions({
  name: "Image",
});

const { src, alt, width, height } = defineProps<ImageProps>();
</script>

<template>
  <NuxtImg
    :src="src"
    :width="width"
    :height="height"
    :alt="alt"
    format="webp"
    loading="lazy"
  />
</template>
