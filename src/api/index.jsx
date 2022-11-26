import axios from 'axios';

const ajaxApiFitness = axios.create({
  baseURL: 'https://exercisedb.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': 'f060159861msh0aded4fae927f21p178aa6jsnd2f0fabb4c54',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
});

export { ajaxApiFitness };
