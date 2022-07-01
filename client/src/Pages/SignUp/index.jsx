import axiosInstances from '../../helpers/axiosInstance';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [login, setLogin] = useState({ username: '', password: '' });
  const [error, setError] = useState();

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axiosInstances.post('/signup', { ...login });
      console.log(data);
      navigate('/tasks');
    } catch (error) {
      // console.log(error);
      setError(error?.response?.data?.message || 'Mensagem qualquer');
    }
  };

  const { username, password } = login;
  return (
    <section>
      <form onSubmit={onSubmit}>
        <label htmlFor='username'>
          Username*:
          <input
            type='text'
            id='username'
            name='username'
            value={username}
            onChange={({ target }) =>
              setLogin((prevState) => ({
                ...prevState,
                username: target.value,
              }))
            }
            placeholder='Digite seu primeiro nome'
            required
          />
        </label>

        <label htmlFor='password'>
          Password*:
          <input
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={({ target }) =>
              setLogin((prevState) => ({
                ...prevState,
                password: target.value,
              }))
            }
            placeholder='Crie sua senha'
            pattern='^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$'
            required
          />
          <ul>
            <li>- Deve ter tamanho mínimo 6 e no máximo 15 caracteres. </li>
            <li>
              - Deve ter somente letras e numero e caractere especial(!#@$%&).
            </li>
            <li>- Deve ter no mínimo uma letra maiúscula e minúscula.</li>
            <li>- Deve ter no mínimo um numero. </li>
            <li>- Deve ter no mínimo caractere especial(!#@$%&).</li>
          </ul>
        </label>

        <button type='submit'>Enviar</button>
      </form>
      {error && <p>{error}</p>}
    </section>
  );
}

// encaminha os dados para a rota de auth/signup DB - post
// DB controller --> Service --> Service cadastra o usuario e ja faz o login
// Model tera uma funcao para cadastro e outra para login

export default SignUp;
