import React, { useEffect, useState, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { uuid } from 'uuidv4';
import LazyLoad from 'react-lazyload';

import CommissionCard from '../../components/CommissionCard';
import SenatorInfo from '../../components/SenatorInfo';

import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

import { Container, Header, Title, Comissions } from './styles';

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
  const [senator, setSenator] = useState<ISenator>({} as ISenator);
  const [commissions, setCommissions] = useState<ICommission[]>(
    [] as ICommission[],
  );

  useEffect(() => {
    async function getData(): Promise<void> {
      const senatorApi = await api.get('senador/lista/atual');
      const senatorData = senatorApi.data.ListaParlamentarEmExercicio.Parlamentares.Parlamentar.filter(
        (parlamentar: { IdentificacaoParlamentar: ISenator }) =>
          parlamentar.IdentificacaoParlamentar.CodigoParlamentar === id,
      );

      setSenator(senatorData[0].IdentificacaoParlamentar);

      const commissionApi = await api.get(`senador/${id}/comissoes`);
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
          <FiArrowLeft size={18} />
          Voltar
        </Link>
      </Header>

      <SenatorInfo
        photoUrl={senator?.UrlFotoParlamentar}
        name={senator?.NomeParlamentar}
        fullName={senator?.NomeCompletoParlamentar}
        pageUrl={senator?.UrlPaginaParlamentar}
        party={senator?.SiglaPartidoParlamentar}
        uf={senator?.UfParlamentar}
        leadershipMember={senator?.MembroLideranca}
        tableMember={senator?.MembroMesa}
        commissionsAsHolder={countCommissionAsHolder()}
        commissionsAsAlternate={countCommissionAsAlternate()}
      />

      <Title>Comissões</Title>

      <Comissions>
        {commissions.map(commission => (
          <LazyLoad key={uuid()} height={150}>
            <CommissionCard
              key={uuid()}
              name={commission.IdentificacaoComissao.NomeComissao}
              house={commission.IdentificacaoComissao.NomeCasaComissao}
              description={commission.DescricaoParticipacao}
              dateStart={commission.DataInicio}
              dateEnd={commission?.DataFim}
            />
          </LazyLoad>
        ))}
      </Comissions>
    </Container>
  );
};

export default Parlamentar;
