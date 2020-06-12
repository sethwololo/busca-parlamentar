import React from 'react';

import { Container } from './styles';

interface ICardProps {
  photoUrl: string;
  pageUrl: string;
  name: string;
  fullName: string;
  tableMember: string;
  leadershipMember: string;
  uf: string;
  party: string;
  commissionsAsHolder: number;
  commissionsAsAlternate: number;
}

const SenatorInfo: React.FC<ICardProps> = ({
  photoUrl,
  pageUrl,
  name,
  fullName,
  tableMember,
  leadershipMember,
  uf,
  party,
  commissionsAsHolder,
  commissionsAsAlternate,
}) => (
  <Container>
    <header>
      <img src={photoUrl} alt={`Foto de ${name}`} />
      <div>
        <strong>{name}</strong>
        <p>
          {fullName}
          <a href={pageUrl} target="blank">
            {' | '}
            <strong>Página Oficial</strong>
          </a>
        </p>
      </div>
    </header>
    <ul>
      <li>
        <strong>{party}</strong>
        <span>Partido</span>
      </li>
      <li>
        <strong>{uf}</strong>
        <span>Estado</span>
      </li>
      <li>
        <strong>{tableMember}</strong>
        <span>Membro da Mesa</span>
      </li>
      <li>
        <strong>{leadershipMember}</strong>
        <span>Membro da Liderança</span>
      </li>
      <li>
        <strong>{commissionsAsAlternate}</strong>
        <span>Comissões como Titular</span>
      </li>
      <li>
        <strong>{commissionsAsHolder}</strong>
        <span>Comissões como Suplente</span>
      </li>
    </ul>
  </Container>
);

export default SenatorInfo;
