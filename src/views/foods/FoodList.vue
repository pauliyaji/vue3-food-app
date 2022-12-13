<script setup>
import useFoods from "../../components/food";
import { onMounted } from 'vue';


const { foods, getFoods, destroyFood } = useFoods();

onMounted(()=> getFoods());
</script>

<template>
  <div class="container">
    <h2>All Foods</h2>
    <div class="flex justify-end m-2 p-2">
      <RouterLink :to="{ name: 'FoodCreate' }" class="px-4 py-2 bg-purple-600 text-white
        hover:bg-purple-700 hover:text-yellow-300 rounded">
        Add Food
      </RouterLink>
    </div>


    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="py-3 px-6">
            Food
          </th>
          <th scope="col" class="py-3 px-6">
            Category
          </th>
          <th scope="col" class="py-3 px-6">
            Description
          </th>
          <th scope="col" class="py-3 px-6">
            Price
          </th>
          <th scope="col" class="py-3 px-6">

          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="food in foods" :key="food.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{  food.title }}
          </th>
          <td class="py-4 px-6">
            {{ food.category_name }}
          </td>
          <td class="py-4 px-6">
            {{ food.description }}
          </td>
          <td class="py-4 px-6">
            {{ food.price }}
          </td>
          <td class="py-4 px-6 space-x-2">
            <RouterLink :to="{ name: 'FoodEdit', params: {id: food.id}}"
                        class="font-medium text-white dark:text-yellow-300 hover:bg-blue-400 px-4 p-2 rounded bg-blue-600">Edit</RouterLink>
            <button @click="destroyFood(food.id)" class="px-4 py-2 p-2 bg-red-500 text-white hover:bg-red-700
                hover:text-black rounded">Delete</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>


  </div>
</template>


