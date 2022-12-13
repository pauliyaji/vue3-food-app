<script setup>
import { reactive } from 'vue';
import useFoods from '../../components/food';
import useCategories from '../../components/categories';
import { onMounted } from 'vue';

const { storeFood, errors } = useFoods();
const { categories, getCategories } = useCategories();

const form = reactive({
  'title': "",
  'description': "",
  'price': "",
  'category_id': "",
});
 onMounted(()=>getCategories());
</script>

<template>
  <div class="container mx-auto">
    <div class="mt-12">
      <form class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md" @submit.prevent="storeFood(form)">
        <div class="space-y-6">
          <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Category</label>
            <select id="category_id" v-model="form.category_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Choose a category</option>
              <option v-for="category of categories" :value="category.id" :key="category.id">{{ category.category }}</option>
            </select>
            <div v-if="errors.category_id">
              <span class="text-sm text-red-400">{{ errors.category_id[0] }}</span>
            </div>
          </div>
          <div class="mb-6">
            <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Title</label>
            <input type="text" id="title" v-model="form.title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <div v-if="errors.title">
              <span class="text-sm text-red-400">{{ errors.title[0] }}</span>
            </div>
          </div>
          <div class="mb-6">
            <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
            <input type="text" id="price" v-model="form.price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <div v-if="errors.price">
              <span class="text-sm text-red-400">{{ errors.price[0] }}</span>
            </div>
          </div>
          <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
            <textarea id="description" v-model="form.description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Food description goes here..."></textarea>
            <div v-if="errors.description">
              <span class="text-sm text-red-400">{{ errors.description[0] }}</span>
            </div>
          </div>
          <div class="mt-4">
            <button type="submit" class="px-4 py-2 bg-indigo-500 text-white hover:bg-indigo-700
                hover:text-black rounded">Store</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


