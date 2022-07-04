import React from 'react';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import './style.css';

function HomePage() {
  return (
    <section>
      <h1>Bem vindos a Ebytr Schedule!</h1>
      <p>
        Essa aplicação tem por objetivo auxiliá-los na organização de suas
        tarefas diárias.
      </p>
      <p>
        Nela você será capaz de: Cadstrar, Atualizar, Consultar e Excluir suas
        tarefas.
        {/* , bem como alterar o status de cada uma delas e filtrar por:
        ordem alfabetica, data de criacao e status; */}
      </p>
      <p>
        Se este for o seu primeiro acesso, será necessário o cadastramento,
        preencha os dados em SIGNUP e coloque seus dados.
      </p>
      <p>
        Caso contrário, basta inserir os dados de login em SIGNIN e realizar.
      </p>
      <section className='container-home-page'>
        <div className='home-page-register'>
          <SignIn />
        </div>
        <div className='home-page-register'>
          <SignUp />
        </div>
      </section>
    </section>
  );
}

export default HomePage;
