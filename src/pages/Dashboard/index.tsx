import React from 'react';

import logoImg from '../../assets/logo.svg';
import estados from '../../assets/estados.json';
import { Container, Filters, Title, Searchbar, Senators } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <img src={logoImg} alt="Busca Parlamentar" />
      <form>
        <Filters>
          <select name="estado">
            <option selected disabled>
              Estado
            </option>
            <option value="">Todos</option>
            {estados.UF.map(estado => (
              <option value={estado.sigla}>{estado.nome}</option>
            ))}
          </select>

          <select name="partido">
            <option selected disabled>
              Partido
            </option>
            <option value="">Todos</option>
            <option value="MDB">MDB</option>
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
    </Container>
  );
};

export default Dashboard;
