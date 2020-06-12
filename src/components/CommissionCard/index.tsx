import React from 'react';
import formatDate from '../../utils/formatDate';
import { Container } from './styles';

interface ICommissionCardProps {
  name: string;
  house: string;
  description: string;
  dateStart: string;
  dateEnd?: string;
}

const CommissionCard: React.FC<ICommissionCardProps> = ({
  name,
  house,
  description,
  dateStart,
  dateEnd,
}) => (
  <Container>
    <h2>{name}</h2>
    <div>
      <p>
        <strong>Casa: </strong>
        {house}
      </p>
      <p>
        <strong>Participação: </strong>
        {description}
      </p>
    </div>
    <div>
      <p>
        <strong>Data de início: </strong>
        {formatDate(dateStart)}
      </p>
      {dateEnd ? (
        <p>
          <strong>Data de fim: </strong>
          {formatDate(dateEnd)}
        </p>
      ) : (
        <p>
          <strong>Data de fim: </strong>
          Em aberto
        </p>
      )}
    </div>
  </Container>
);

export default CommissionCard;
