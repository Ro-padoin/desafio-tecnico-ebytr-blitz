import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import TaskManagement from './Pages/TaskManagement';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/tasks' element={<TaskManagement />} />
    </Routes>
  );
}

export default App;
