import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import MyContextProvider from '../context/MyContext';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(
      <MyContextProvider>
        <Router location={history.location} navigator={history}>
          {component}
        </Router>
        ,
      </MyContextProvider>,
    ),
    history,
  };
};
export default renderWithRouter;
