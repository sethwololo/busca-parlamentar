import axios from 'axios';

const api = axios.create({
  baseURL: 'http://legis.senado.leg.br/dadosabertos/senador/',
});

export default api;
