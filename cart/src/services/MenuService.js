import axios from 'axios';
const urlAxios='https://my-json-server.typicode.com/EyuTes/ec-airbean';
const urlServer='http://localhost:5000/api/beans';

// create single axios instance for entire app
const apiClient = axios.create({
    baseUrl:urlAxios,
    withCredentials: false, // this is the default
    headers: {
        // authentication and configuration
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getMenus() {
        // get all menus
        return apiClient.get('/menu') // calls baseURL/menus
    },
    getMenu(id) {
        // get one menu based on id
        return apiClient.get('/menu/' + id)
    },
    postMenu(menu) {
        // posts menu
        return apiClient.post('/menu', menu)
    }
}