import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignUp from '.';
import renderWithRouter from '../../helpers/renderWithRouter';

describe('Teste o componente "SignUp".', () => {
  it('Teste se a página contém os campos necessários para cadastramento do usuário', async () => {
    renderWithRouter(<SignUp />);

    const firstName = screen.getByRole('firstName').querySelector('input');
    const lastName = screen.getByRole('lastName').querySelector('input');
    const email = screen.getByRole('email-register').querySelector('input');
    const password = screen
      .getByRole('password-register')
      .querySelector('input');
    const button = screen.getByRole('button-signup');

    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    userEvent.type(firstName, 'John');
    userEvent.type(lastName, 'Doe');
    userEvent.type(email, 'johndoe@example.com');
    userEvent.type(password, '123456');

    expect(firstName).toHaveValue('John');
    expect(lastName).toHaveValue('Doe');
    expect(email).toHaveValue('johndoe@example.com');
    expect(password).toHaveValue('123456');
  });
});
