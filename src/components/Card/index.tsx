import React from 'react';
import { Link } from 'react-router-dom';

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
    <Link key={id} to={id}>
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
    </Link>
  </Container>
);

export default Card;
