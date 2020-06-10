import React from 'react';

import { Container } from './styles';

interface ICardProps {
  id: string;
  photoUrl: string;
  name: string;
  uf: string;
  party: string;
}

const Card: React.FC<ICardProps> = ({ id, photoUrl, name, uf, party }) => (
  <Container>
    <a key={id} href="teste">
      <img src={photoUrl} alt="Imagem do Senador" />
      <div>
        <strong>{name}</strong>
        <p>
          <strong>Estado: </strong>
          {uf}
        </p>
        <p>
          <strong>Partido: </strong>
          {party}
        </p>
      </div>
    </a>
  </Container>
);

export default Card;
