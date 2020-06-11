import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import {
  Container,
  Header,
  Title,
  SenatorInfo,
  Comissions,
  ComissionCard,
} from './styles';

interface IParlamentar {
  CodigoParlamentar: string;
  NomeParlamentar: string;
  SiglaPartidoParlamentar: string;
  UfParlamentar: string;
  UrlFotoParlamentar: string;
  UrlPaginaParlamentar: string;
  MembroMesa: string;
  MembroLideranca: string;
}

interface IComissao {
  IdentificacaoComissao: {
    NomeComissao: string;
    NomeCasaComissao: string;
  };
  DescricaoParticipacao: string;
  DataInicio: Date;
  DataFim: Date;
}

const Parlamentar: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src={logoImg} alt="Busca Parlamentar" />
        <Link to="/">
          <FiArrowLeft size={16} />
          Voltar
        </Link>
      </Header>

      <SenatorInfo>
        <header>
          <img
            src="https://image.flaticon.com/icons/svg/147/147144.svg"
            alt="Nome do senador"
          />
          <div>
            <strong>Nome do parlamentar</strong>
            <p>
              Nome completo do parlamentar{' '}
              <a href="teste">
                <strong>| Página Oficial</strong>
              </a>
            </p>
          </div>
        </header>
        <ul>
          <li>
            <strong>PODEMOS</strong>
            <span>Partido</span>
          </li>
          <li>
            <strong>DF</strong>
            <span>Estado</span>
          </li>
          <li>
            <strong>Sim</strong>
            <span>Membro da Mesa</span>
          </li>
          <li>
            <strong>Sim</strong>
            <span>Membro da Liderança</span>
          </li>
          <li>
            <strong>20</strong>
            <span>Comissões como Suplente</span>
          </li>
          <li>
            <strong>20</strong>
            <span>Comissões como Suplente</span>
          </li>
        </ul>
      </SenatorInfo>

      <Title>Comissões</Title>
      <Comissions>
        <ComissionCard>
          <h2>
            Título da Comissão longo pra testar a responsividade do layout um
            pouco maior
          </h2>
          <div>
            <p>
              <strong>Casa: </strong>Senado Federel
            </p>
            <p>
              <strong>Participação: </strong>Titular
            </p>
          </div>
          <div>
            <p>
              <strong>Data de início: </strong>20/04/2020
            </p>
            <p>
              <strong>Data de fim: </strong>20/04/2020
            </p>
          </div>
        </ComissionCard>
      </Comissions>
    </Container>
  );
};

export default Parlamentar;
