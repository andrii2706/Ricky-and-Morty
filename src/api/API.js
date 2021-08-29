import axios from 'axios';

const axiosIntance = axios.create({
    baseURL : 'https://rickandmortyapi.com/api/character'
})

const getInfoOf =(id)=> axiosIntance('/'+id);

export {getInfoOf}
