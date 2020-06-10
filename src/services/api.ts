import axios from 'axios';

export const apiSenado = axios.create({
  baseURL: 'http://legis.senado.leg.br/dadosabertos/',
});

export const apiPartidos = axios.create({
  baseURL: 'https://dadosabertos.camara.leg.br/api/v2/partidos',
});
