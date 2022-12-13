<script setup>
import { reactive } from 'vue';
import useCategories from "../../components/categories";

const { storeCategory, errors } = useCategories();

const form = reactive({
  'category':"",
});

</script>

<template>
  <div class="container mx-auto">
    <div class="mt-12">
      <form class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md" @submit.prevent="storeCategory(form)">
        <div class="flex justify-end m-2 p-2">
          <RouterLink :to="{ name: 'Categories' }" class="px-4 py-1 rounded bg-purple-600 text-white hover:text-yellow-300">Return to List</RouterLink>
        </div>
        <div class="mb-6">
            <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
            <input type="text" id="category" v-model="form.category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <div v-if="errors.category">
              <span class="text-sm text-red-600">{{ errors.category[0] }}</span>
            </div>
          </div>
        <div class="mt-4">
          <button type="submit" class="bg-indigo-500 text-white hover:bg-indigo-900 px-4 py-2 rounded">
            Store
          </button>
        </div>
        </form>
    </div>
  </div>
</template>


