import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaskManagement from '.';
import renderWithRouter from '../../helpers/renderWithRouter';

describe('Teste o componente "TaskManagement".', () => {
  it('Teste se a página contém os campos necessarios para inclusao de uma nova task', async () => {
    renderWithRouter(<TaskManagement />);

    const title = screen.getByRole('title').querySelector('input');
    const description = screen.getByRole('description').querySelector('input');
    const button = screen.getByRole('button-register');

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    userEvent.type(title, 'Estudar');
    userEvent.type(description, 'Testes RTL');

    expect(title).toHaveValue('Estudar');
    expect(description).toHaveValue('Testes RTL');
  });
});
