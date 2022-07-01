import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Bem vindos a Productivity Boosting Apllication!</h1>
      <p>
        Essa aplicação tem por objetivo auxiliá-los no planejamento de suas
        tarefas diárias, para que sua produtividade possa ser impulsionada
      </p>
      <p>
        Nela você será capaz de: Cadstrar, Atualizar, Consultar e Excluir suas
        tarefas, bem como alterar o status de cada uma delas e filtrar por:
        ordem alfabetica, data de criacao e status;
      </p>
      <p>
        Se este for o seu primeiro acesso, será necessário o cadastramento,
        clique em Quero me cadastrar e coloque seus seu primeiro nome e crie uma
        senha, é simples e rápido!
      </p>
      <p>
        Caso contrário, basta clicar em Já possuo cadastro e realizar o seu
        login.
      </p>
      <Link to='/signup'>Quero me cadastrar</Link>
      <Link to='/signin'>Ja possuo cadastro</Link>
    </div>
  );
}

// cadastro direciona para a rota /signup
// login direciona para a rota/signin
// tera um texto de boas vindas, objetivo da aplicação e links para se cadastrar.

export default HomePage;
