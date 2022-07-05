import React from 'react';
import Button from '@mui/material/Button';
import './style.css';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(`/${route}`);
  };

  return (
    <>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '1px solid #cfcfcf',
          borderRadius: '5px',
          '&:hover': {
            border: '1px solid black',
          },
        }}
      >
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
          Se este for o seu primeiro acesso, será necessário o cadastramento
          Clique em SIGNUP e preencha seus dados.
        </p>
        <p>
          Caso contrário, basta clicar em SIGNIN e inserir seu email e senha.
        </p>
      </Box>
      <section className='container-home-page'>
        <div className='home-page-register'>
          <Button
            role='signin'
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 6, mb: 2 }}
            onClick={() => handleNavigate('signin')}
          >
            SIGNIN
          </Button>
        </div>
        <div className='home-page-register'>
          <Button
            role='signup'
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 6, mb: 3 }}
            onClick={() => handleNavigate('signup')}
          >
            SIGNUP
          </Button>
        </div>
      </section>
    </>
  );
}

export default HomePage;
