import axios from 'axios';

const api = axios.create({
  baseURL: 'https://legis.senado.leg.br/dadosabertos/',
});

export default api;
