import axios from 'axios';

const api = axios.create({
  baseURL: 'https://legis.senado.leg.br/dadosabertos/',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
