<script setup>
import useCategories from '../../components/categories';
import { onMounted } from 'vue';

const props = defineProps({
    id: {
      required: true,
      type: String,
    }
});

const { category, getCategory, updateCategory, errors } = useCategories();

onMounted(() => getCategory(props.id));

</script>

<template>
  <div class="container mx-auto">
    <div class="mt-12">
      <form class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md" @submit.prevent="updateCategory($route.params.id)">
        <div class="flex justify-end m-2 p-2">
          <RouterLink :to="{ name: 'Categories' }" class="px-4 py-1 rounded bg-purple-600 text-white hover:text-yellow-300">Return to List</RouterLink>
        </div>
        <div class="mb-6">
          <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
          <input type="text" id="category" v-model="category.category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <div v-if="errors.category">
            <span class="text-sm text-red-600">{{ errors.category[0] }}</span>
          </div>
        </div>
        <div class="mt-4">
          <button type="submit" class="bg-indigo-500 text-white hover:bg-indigo-900 px-4 py-2 rounded">
            Update
          </button>
        </div>
      </form>
    </div>
  </div>
</template>



