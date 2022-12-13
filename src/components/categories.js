import { ref } from "vue";
import axios from 'axios';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2'

axios.defaults.baseURL = 'http://p3portfolio.com/l9-admin-panel/public/api/';

export default function useCategories()
{
    const category = ref([]);
    const categories = ref([]);
    const errors = ref({});
    const router = useRouter();

    const getCategories = async () => {
        const response = await axios.get('categories');
        categories.value = response.data;
    }

    const getCategory = async (id) => {
        const response = await axios.get('categories/' + id);
        category.value = response.data;
    }

    const storeCategory = async (data) => {
        try{
            await axios.post('categories', data);
            Swal.fire('Success','Category created successfully', 'success')
            await router.push({name:'Categories'});
        }catch(error){
            if(error.response.status === 422){
                errors.value = error.response.data.errors;
            }
        }
    }

    const updateCategory = async (id) => {
        try{
            await axios.put('categories/'+id, category.value);
            Swal.fire('Success', 'Category updated successfully', 'success');
            await router.push({name: 'Categories'})
        }catch(error){
            if(error.response.status === 422){
                errors.value = response.data.errors;
            }
        }
    }

    const destroyCategory = async (id) => {
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

                axios.delete('categories/'+ id).then(response => {
                    getCategories();
                });
                this.$swal(
                    'Deleted!',
                    'Your post has been deleted!',
                    'success'
                )
            }
        })
    }


    return {
        categories,
        getCategories,
        category,
        getCategory,
        storeCategory,
        updateCategory,
        destroyCategory,
        errors,
    }
}