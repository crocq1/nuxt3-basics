<script setup lang="ts">
import { type CountdownTimerProps } from './types'

defineOptions({
  name: 'CountdownTimer',
})

const { endDate } = defineProps<CountdownTimerProps>()

const now = ref(Math.trunc(new Date().getTime() / 1000))

const dateInMilliseconds = computed(() => {
  return Math.trunc(Date.parse(endDate) / 1000)
})
const days = computed(() => {
  return Math.trunc((dateInMilliseconds.value - now.value) / 60 / 60 / 24)
})
const hours = computed(() => {
  return Math.trunc((dateInMilliseconds.value - now.value) / 60 / 60) % 24
})
const minutes = computed(() => {
  return Math.trunc((dateInMilliseconds.value - now.value) / 60) % 60
})
const seconds = computed(() => {
  return (dateInMilliseconds.value - now.value) % 60
})

const twoDigits = (time: number) => {
  if (time < 0) {
    return '00'
  }
  if (time.toString().length <= 1) {
    return `0${time}`
  }
  return time
}

onMounted(() => {
  window.setInterval(() => {
    now.value = Math.trunc(new Date().getTime() / 1000)
  }, 1000)
})
</script>

<template>
  <client-only>
    <div class="flex gap-2">
      <div class="flex flex-col items-center relative w-12">
        <span class="after:content-[''] after:absolute after:w-full after:h-4 after:top-1 after:left-1 after:border-r">{{ twoDigits(days) }}</span>
        <span class="text-xs">{{ $t('common.days', days) }}</span>
      </div>
      <div class="flex flex-col items-center relative w-12">
        <span class="after:content-[''] after:absolute after:w-full after:h-4 after:top-1 after:left-1 after:border-r">{{ twoDigits(hours) }}</span>
        <span class="text-xs">{{ $t('common.hours', hours) }}</span>
      </div>
      <div class="flex flex-col items-center relative w-12">
        <span class="after:content-[''] after:absolute after:w-full after:h-4 after:top-1 after:left-1 after:border-r">{{ twoDigits(minutes) }}</span>
        <span class="text-xs">{{ $t('common.minutes', minutes) }}</span>
      </div>
      <div class="flex flex-col items-center w-12">
        <span>{{ twoDigits(seconds) }}</span>
        <span class="text-xs">{{ $t('common.seconds', seconds) }}</span>
      </div>
    </div>
  </client-only>
</template>
