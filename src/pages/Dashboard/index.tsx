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
  NomeSemAcento: string;
  NomeLowerCase: string;
  SiglaPartidoParlamentar: string;
  UfParlamentar: string;
  UrlFotoParlamentar: string;
}

const Dashboard: React.FC = () => {
  const [senators, setSenators] = useState<ISenator[]>([] as ISenator[]);
  const [uf, setUf] = useState('');
  const [party, setParty] = useState('');
  const [search, setSearch] = useState('');
  const [mount, setMount] = useState(false);

  function removeAccent(text: string): string {
    const dict: { [key: string]: string } = {
      á: 'a',
      à: 'a',
      ã: 'a',
      é: 'e',
      ç: 'c',
      õ: 'o',
    };
    const convertedText = text
      .toLocaleLowerCase('pt-BR')
      .replace(/[^\w ]/g, char => dict[char] || char);
    return convertedText;
  }

  useEffect(() => {
    async function getData(): Promise<void> {
      const senatorApi = await api.get('senador/lista/atual');

      const senatorArray = senatorApi.data.ListaParlamentarEmExercicio.Parlamentares.Parlamentar.map(
        (parlamentar: { IdentificacaoParlamentar: ISenator }) => ({
          ...parlamentar.IdentificacaoParlamentar,
          NomeSemAcento: removeAccent(
            parlamentar.IdentificacaoParlamentar.NomeParlamentar,
          ),
          NomeLowerCase: parlamentar.IdentificacaoParlamentar.NomeParlamentar.toLocaleLowerCase(
            'pt-BR',
          ),
        }),
      );
      setSenators(senatorArray);
    }
    getData();
    senators.length > 0 ? setMount(true) : setMount(false);
  }, [senators.length]);

  function filteredSenators(): ISenator[] {
    return senators
      .filter(senator =>
        party ? senator.SiglaPartidoParlamentar === party : senator,
      )
      .filter(senator => (uf ? senator.UfParlamentar === uf : senator))
      .filter(senator =>
        search
          ? senator.NomeSemAcento.includes(search.toLocaleLowerCase('pt-br')) ||
            senator.NomeParlamentar.includes(
              search.toLocaleLowerCase('pt-br'),
            ) ||
            senator.NomeLowerCase.includes(search.toLocaleLowerCase('pt-br'))
          : senator,
      );
  }

  return (
    <Container>
      <header>
        <a href="/">
          <img src={logoImg} alt="Busca Parlamentar" />
        </a>

        <div>
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
        </div>
      </header>

      <Title>Resultados</Title>

      <Senators>
        {mount &&
          (filteredSenators().length > 0 ? (
            filteredSenators().map(senator => (
              <SenatorCard
                key={senator.CodigoParlamentar}
                id={senator.CodigoParlamentar}
                photoUrl={senator.UrlFotoParlamentar}
                name={senator.NomeParlamentar}
                uf={senator.UfParlamentar}
                party={senator.SiglaPartidoParlamentar}
              />
            ))
          ) : (
            <h3>Nenhum resultado encontrado</h3>
          ))}
      </Senators>
    </Container>
  );
};

export default Dashboard;
