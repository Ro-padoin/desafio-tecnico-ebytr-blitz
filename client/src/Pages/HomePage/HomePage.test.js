import { screen } from '@testing-library/react';
import HomePage from '.';
import renderWithRouter from '../../helpers/renderWithRouter';

describe('Teste o componente "HomePage".', () => {
  it('Teste se a página contém o titulo de boas vindas a aplicacao.', () => {
    renderWithRouter(<HomePage />);
    const titleAbout = screen.getAllByRole('heading', { level: 1 });
    expect(titleAbout[0]).toBeInTheDocument();
    expect(titleAbout[0]).toHaveTextContent(/Bem vindos a Ebytr Schedule!/i);
  });
});
