import { useEffect, useState } from 'react';
import axiosInstances from '../../helpers/axiosInstance';
import TaskList from '../../components/TaskList';
import { Navigate } from 'react-router-dom';

function TaskManagement() {
  const [task, setTask] = useState({
    title: '',
    description: '',
  });
  const [allTasks, setAllTasks] = useState([]);
  const [erro, setErro] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();
  };

  const getTask = async () => {
    try {
      const data = await axiosInstances.get('/tasks');
      setAllTasks([...data]);
    } catch (error) {
      setErro(error?.response?.data?.message || 'Mensagem qualquer');
      console.log(erro);
    }
  };
  useEffect(() => getTask(), []);

  return (
    <section>
      <form onClick={onSubmit}>
        <label htmlFor='title'>
          Title:
          <input
            type='text'
            id='title'
            name='title'
            value={task.title}
            onChange={({ target }) =>
              setTask((prevState) => ({
                ...prevState,
                title: target.value,
              }))
            }
            required
          />
        </label>
        <label htmlFor='description'>
          Description:
          <input
            type='text'
            id='description'
            name='description'
            value={task.description}
            onChange={({ target }) =>
              setTask((prevState) => ({
                ...prevState,
                description: target.value,
              }))
            }
          />
        </label>
        <button type='submit' onClick={onSubmit}>
          Cadastrar
        </button>
      </form>
      <TaskList tasks={allTasks} />
    </section>
  );
}

// Visualizar as tarefas;
// Inserir tarefas; OK
// Remover tarefas;
// Atualizar tarefas;

// Status editavel;
// filtros ordem Alfabetica, data da criacao, status;

export default TaskManagement;
