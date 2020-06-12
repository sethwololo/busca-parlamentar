import React, { useState, useEffect } from 'react';

import SenatorCard from '../../components/SenatorCard';

import logoImg from '../../assets/logo.svg';
import estados from '../../assets/estados.json';
import partidos from '../../assets/partidos.json';

import api from '../../services/api';

import { Container, Filters, Title, Searchbar, Senators } from './styles';

interface ISenator {
  CodigoParlamentar: string;
  NomeParlamentar: string;
  SiglaPartidoParlamentar: string;
  UfParlamentar: string;
  UrlFotoParlamentar: string;
}

const Dashboard: React.FC = () => {
  const [senators, setSenators] = useState<ISenator[]>([] as ISenator[]);
  const [uf, setUf] = useState('');
  const [party, setParty] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function getData(): Promise<void> {
      const senatorApi = await api.get('senador/lista/atual.json');
      const senatorArray = senatorApi.data.ListaParlamentarEmExercicio.Parlamentares.Parlamentar.map(
        (parlamentar: { IdentificacaoParlamentar: ISenator }) =>
          parlamentar.IdentificacaoParlamentar,
      );
      setSenators([...senatorArray]);
    }
    getData();
  }, [search, uf, party]);

  return (
    <Container>
      <header>
        <a href="/">
          <img src={logoImg} alt="Busca Parlamentar" />
        </a>

        <Filters>
          <div>
            <select
              name="estado"
              defaultValue=""
              onChange={e => setUf(e.target.value)}
            >
              <option value="">Todos os estados</option>
              {estados.UF.map(estado => (
                <option value={estado.sigla} key={estado.sigla}>
                  {estado.nome}
                </option>
              ))}
            </select>
          </div>

          <div>
            <select
              name="partido"
              defaultValue=""
              onChange={e => setParty(e.target.value)}
            >
              <option value="">Todos os Partidos</option>
              {partidos.Partido.map(partido => (
                <option
                  value={partido.SiglaPartido}
                  key={partido.CodigoPartido}
                >
                  {`${partido.SiglaPartido} - ${partido.NomePartido}`}
                </option>
              ))}
            </select>
          </div>
        </Filters>
        <Searchbar
          placeholder="Nome do parlamentar"
          onChange={e => setSearch(e.target.value)}
          name="nome"
        />
      </header>

      <Title>Resultados</Title>

      <Senators id="senator-list">
        {senators
          .filter(senator =>
            party ? senator.SiglaPartidoParlamentar === party : senator,
          )
          .filter(senator => (uf ? senator.UfParlamentar === uf : senator))
          .filter(senator =>
            search ? senator.NomeParlamentar.includes(search) : senator,
          )
          .map(senator => (
            <SenatorCard
              key={senator.CodigoParlamentar}
              id={senator.CodigoParlamentar}
              photoUrl={senator.UrlFotoParlamentar}
              name={senator.NomeParlamentar}
              uf={senator.UfParlamentar}
              party={senator.SiglaPartidoParlamentar}
            />
          ))}
      </Senators>
    </Container>
  );
};

export default Dashboard;
