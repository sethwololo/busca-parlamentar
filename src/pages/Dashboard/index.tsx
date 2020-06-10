import React from 'react';

import logoImg from '../../assets/logo.svg';
import { Container, Filters, Title, Searchbar, Senators } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <img src={logoImg} alt="Busca Parlamentar" />
      <form>
        <Filters>
          <select>
            <option>Estado</option>
          </select>
          <select>
            <option>Partido</option>
          </select>
        </Filters>
        <Searchbar>
          <input placeholder="Nome do parlamentar" />
          <button type="submit">Pesquisar</button>
        </Searchbar>
      </form>
      <Title>Resultados</Title>
      <Senators>
        <a href="teste">
          <img
            src="https://image.flaticon.com/icons/svg/168/168724.svg"
            alt="Imagem do Senador"
          />
          <div>
            <strong>Nome do senador</strong>
            <p>
              <strong>Estado: </strong>DF
            </p>
            <p>
              <strong>Partido: </strong>PRTDO
            </p>
          </div>
        </a>
      </Senators>

      <Senators>
        <a href="teste">
          <img
            src="https://image.flaticon.com/icons/svg/168/168724.svg"
            alt="Imagem do Senador"
          />
          <div>
            <strong>Nome do senador</strong>
            <p>
              <strong>Estado: </strong>DF
            </p>
            <p>
              <strong>Partido: </strong>PRTDO
            </p>
          </div>
        </a>
      </Senators>

      <Senators>
        <a href="teste">
          <img
            src="https://image.flaticon.com/icons/svg/168/168724.svg"
            alt="Imagem do Senador"
          />
          <div>
            <strong>Nome do senador</strong>
            <p>
              <strong>Estado: </strong>DF
            </p>
            <p>
              <strong>Partido: </strong>PRTDO
            </p>
          </div>
        </a>
      </Senators>

      <Senators>
        <a href="teste">
          <img
            src="https://image.flaticon.com/icons/svg/168/168724.svg"
            alt="Imagem do Senador"
          />
          <div>
            <strong>Nome do senador</strong>
            <p>
              <strong>Estado: </strong>DF
            </p>
            <p>
              <strong>Partido: </strong>PRTDO
            </p>
          </div>
        </a>
      </Senators>
    </Container>
  );
};

export default Dashboard;
