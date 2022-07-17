import axios from 'axios';

const myApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
});

export default myApi;