
<script setup>
import useCategories from "../../components/categories";
import { onMounted } from 'vue';


const { categories, getCategories, destroyCategory } = useCategories();

onMounted(()=> getCategories());

</script>

<template>
    <div class="container">
      <h2>All Food Categories</h2>
      <div class="flex justify-end m-2 p-2">
        <RouterLink :to="{ name: 'CategoryCreate' }" class="px-4 py-2 bg-purple-600 text-white
        hover:bg-purple-700 hover:text-yellow-300 rounded">
          New Category
        </RouterLink>
      </div>

      <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
              Category Name
            </th>
            <th scope="col" class="py-3 px-6">
              Date Created
            </th>
            <th scope="col" class="py-3 px-6">

            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="category in categories" :key="category.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{  category.category }}
            </th>
            <td class="py-4 px-6">
             {{ category.created_at }}
            </td>
            <td class="py-4 px-6 space-x-2">
              <RouterLink :to="{ name: 'CategoryEdit', params: {id: category.id}}"
                          class="font-medium text-white dark:text-yellow-300 hover:bg-blue-400 px-4 p-2 rounded bg-blue-600">Edit</RouterLink>
              <button @click="destroyCategory(category.id)" class="px-4 py-2 p-2 bg-red-500 text-white hover:bg-red-700
                hover:text-black rounded">Delete</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>


    </div>
</template>



