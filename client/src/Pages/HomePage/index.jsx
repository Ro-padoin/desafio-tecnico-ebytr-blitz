import React from 'react';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import './style.css';

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
      <section className='container-home-page'>
        <div className='home-page-register'>
          <SignIn />
        </div>
        <div className='home-page-register'>
          <SignUp />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
