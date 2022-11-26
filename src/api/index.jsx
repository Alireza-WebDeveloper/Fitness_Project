import axios from 'axios';

const ajaxApiFitness = axios.create({
  baseURL: 'https://exercisedb.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': '809584107fmsh4e7c58c7ff7046cp14ec92jsn7ae0da7b8d03',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
});

export { ajaxApiFitness };
