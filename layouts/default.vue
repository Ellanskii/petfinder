<script lang="ts" setup>
import { useQuery } from 'vue-query'

const { data, refetch } = useQuery(
  ['https://jsonplaceholder.typicode.com/posts'],
  ({ queryKey }) => $fetch(queryKey[0]),
  {

  },
)
</script>

<template>
  <main class="py-20 px-10 text-center">
    <slot />
    <Footer />
    <button @click="refetch()">
      Refetch Posts
    </button>
    <pre>{{ data }}</pre>
  </main>
</template>
