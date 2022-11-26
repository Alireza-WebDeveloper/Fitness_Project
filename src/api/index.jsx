import axios from 'axios';

const ajaxApiFitness = axios.create({
  baseURL: 'https://exercisedb.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': '30fa33f71emsh863cfde46b96189p1dac12jsn23cfc4940c28',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
});

export { ajaxApiFitness };
