import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';

axios.defaults.baseURL = 'https://p3portfolio.com/l9-admin-panel/public/api/';

export default function useFoods()
{
    const food = ref([]);
    const foods = ref([]);
    const errors = ref({});
    const router = useRouter();

    const getFoods = async ()=>{
        const response = await axios.get('food');
        foods.value = response.data.data;
    }

    const getFood = async (id) => {
        const response = await axios.get('food/'+id);
        food.value = response.data.data;
    }

    const storeFood = async (data) => {
        try{
            await axios.post('food', data);
            Swal.fire('Success','Food created successfully', 'success')
            await router.push({name:'FoodList'});
        }catch(error){
            if(error.response.status === 422){
                errors.value = error.response.data.errors;
            }
        }
    }

    const updateFood = async (id) => {
        try{
            await axios.put('food/'+ id, food.value);
            Swal.fire('Success', 'Food Updated successfully', 'success');
            await router.push({ name: 'FoodList'})
        }catch(error){
            if(error.response.status === 422){
                errors.value = error.response.data.errors;
            }
        }
    }

    const destroyFood = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            closeOnCancel: true
        }).then((result) => {
            //send request to server
            if (result.value) {

                axios.delete('food/'+ id).then(response => {
                    getFoods();
                });
                this.$swal(
                    'Deleted!',
                    'Your post has been deleted!',
                    'success'
                )
            }
        })
        //await axios.delete('food/'+ id);
       // await getFoods();
    }


    return{
        food,
        foods,
        getFood,
        getFoods,
        storeFood,
        updateFood,
        destroyFood,
        errors,
    }
}