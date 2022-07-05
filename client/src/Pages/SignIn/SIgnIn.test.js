import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignIn from '.';
import renderWithRouter from '../../helpers/renderWithRouter';

describe('Teste o componente "SignIn".', () => {
  it('Teste se a página contém os campos de email, password e botao para login', async () => {
    renderWithRouter(<SignIn />);

    const email = screen.getByRole('email-signin').querySelector('input');
    const password = screen.getByRole('password-signin').querySelector('input');
    const button = screen.getByRole('button-signin');

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    userEvent.type(email, 'johndoe@example.com');
    userEvent.type(password, '123456');

    expect(email).toHaveValue('johndoe@example.com');
    expect(password).toHaveValue('123456');
  });
});
