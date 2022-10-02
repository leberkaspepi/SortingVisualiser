<script setup>
import { onMounted, ref } from 'vue'
import { freshArray, calcHeight } from './ArrayUtils'

const delay = 0

const arrSize = 128
const numbers = ref([])

onMounted(() => reset())

function hardCodeSort() {
  const newArr = []

  for (let i = 0; i < arrSize; i++)
    newArr.push(i + 1)

  numbers.value = newArr
}

async function bubbleSort() {
  for (let i = 0; i < arrSize; i++) {
    for (let j = 0; j < arrSize - i - 1; j++) {
      if (numbers.value[j + 1] < numbers.value[j]) {
        [numbers.value[j + 1], numbers.value[j]] = [numbers.value[j], numbers.value[j + 1]]
        await sleep()
      }
    }
  }
}

function sleep() {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

function reset() {
  numbers.value = freshArray(arrSize)
}
</script>

<template>
  <button @click="reset">Reset Array</button>

  <div>
    <button @click="hardCodeSort">Hardcode Sort</button>
    <button @click="bubbleSort">Bubble Sort</button>
  </div>

  <div class="container">
    <div v-for="num of numbers" :key="num" class="bar" v-bind:style="{height:calcHeight(num, arrSize)+'%'}"></div>
  </div>
</template>

<style scoped>
.bar {
  display: inline-block;
  min-width: 10px;
  margin-right: 1px;

  background-color: greenyellow;
}

.container {
  text-align: center;
  position: fixed;

  width: 100%;
  height: 100%;
}
</style>