import React, { useEffect, useState, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { uuid } from 'uuidv4';

import formatDate from '../../utils/formatDate';

import logoImg from '../../assets/logo.svg';

import {
  Container,
  Header,
  Title,
  SenatorInfo,
  Comissions,
  ComissionCard,
} from './styles';
import api from '../../services/api';

interface IRouteParams {
  id: string;
}

interface ISenator {
  CodigoParlamentar: string;
  NomeParlamentar: string;
  NomeCompletoParlamentar: string;
  SiglaPartidoParlamentar: string;
  UfParlamentar: string;
  UrlFotoParlamentar: string;
  UrlPaginaParlamentar: string;
  MembroMesa: string;
  MembroLideranca: string;
}

interface ICommission {
  IdentificacaoComissao: {
    CodigoComissao: string;
    NomeComissao: string;
    NomeCasaComissao: string;
  };
  DescricaoParticipacao: string;
  DataInicio: string;
  DataFim?: string;
}

const Parlamentar: React.FC = () => {
  const { id } = useParams<IRouteParams>();
  const [senator, setSenator] = useState<ISenator>();
  const [commissions, setCommissions] = useState<ICommission[]>(
    [] as ICommission[],
  );

  useEffect(() => {
    async function getData(): Promise<void> {
      const senatorApi = await api.get('senador/lista/atual.json');
      const senatorData = senatorApi.data.ListaParlamentarEmExercicio.Parlamentares.Parlamentar.filter(
        (parlamentar: { IdentificacaoParlamentar: ISenator }) =>
          parlamentar.IdentificacaoParlamentar.CodigoParlamentar === id,
      );

      setSenator(senatorData[0].IdentificacaoParlamentar);

      const commissionApi = await api.get(`senador/${id}/comissoes.json`);
      const commissionData =
        commissionApi.data.MembroComissaoParlamentar.Parlamentar.MembroComissoes
          .Comissao;

      setCommissions(commissionData);
    }
    getData();
  }, [id]);

  const countCommissionAsHolder = useCallback(
    () =>
      commissions.filter(
        commission => commission.DescricaoParticipacao === 'Titular',
      ).length,
    [commissions],
  );

  const countCommissionAsAlternate = useCallback(
    () =>
      commissions.filter(
        commission => commission.DescricaoParticipacao === 'Suplente',
      ).length,
    [commissions],
  );

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
            src={senator?.UrlFotoParlamentar}
            alt={`Foto de ${senator?.NomeParlamentar}`}
          />
          <div>
            <strong>{senator?.NomeParlamentar}</strong>
            <p>
              {senator?.NomeCompletoParlamentar}
              <a href={senator?.UrlPaginaParlamentar}>
                {' | '}
                <strong>Página Oficial</strong>
              </a>
            </p>
          </div>
        </header>
        <ul>
          <li>
            <strong>{senator?.SiglaPartidoParlamentar}</strong>
            <span>Partido</span>
          </li>
          <li>
            <strong>{senator?.UfParlamentar}</strong>
            <span>Estado</span>
          </li>
          <li>
            <strong>{senator?.MembroMesa}</strong>
            <span>Membro da Mesa</span>
          </li>
          <li>
            <strong>{senator?.MembroLideranca}</strong>
            <span>Membro da Liderança</span>
          </li>
          <li>
            <strong>{countCommissionAsHolder()}</strong>
            <span>Comissões como Titular</span>
          </li>
          <li>
            <strong>{countCommissionAsAlternate()}</strong>
            <span>Comissões como Suplente</span>
          </li>
        </ul>
      </SenatorInfo>

      <Title>Comissões</Title>

      <Comissions>
        {commissions.map(commission => (
          <ComissionCard key={uuid()}>
            <h2>{commission.IdentificacaoComissao.NomeComissao}</h2>
            <div>
              <p>
                <strong>Casa: </strong>
                {commission.IdentificacaoComissao.NomeCasaComissao}
              </p>
              <p>
                <strong>Participação: </strong>
                {commission.DescricaoParticipacao}
              </p>
            </div>
            <div>
              <p>
                <strong>Data de início: </strong>
                {formatDate(commission.DataInicio)}
              </p>
              {commission?.DataFim ? (
                <p>
                  <strong>Data de fim: </strong>
                  {formatDate(commission.DataFim)}
                </p>
              ) : (
                <p>
                  <strong>Data de fim: </strong>
                  Em aberto
                </p>
              )}
            </div>
          </ComissionCard>
        ))}
      </Comissions>
    </Container>
  );
};

export default Parlamentar;
