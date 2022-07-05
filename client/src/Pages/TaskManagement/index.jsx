import TaskList from '../../components/TaskList';
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axiosInstance from '../../helpers/axiosInstance';
import { MyContext } from '../../context/MyContext';

const theme = createTheme();

function TaskManagement() {
  const [erro, setErro] = React.useState();
  const [tasks, setTasks] = React.useState([]);

  const { references, clearFields } = React.useContext(MyContext);

  const createTask = async (task) => {
    try {
      const { data } = await axiosInstance.post('/tasks', { ...task });
      setTasks((prevState) => [...prevState, data]);
    } catch (error) {
      setErro(error?.response?.data?.message || 'Mensagem qualquer');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newTask = {
      title: data.get('title'),
      description: data.get('description'),
    };
    await createTask(newTask);
    clearFields();
  };

  const loadTasks = async () => {
    try {
      const { data } = await axiosInstance.get('/tasks');
      setTasks([...data]);
    } catch (error) {
      setErro(error?.response?.data?.message || 'Mensagem qualquer');
    }
  };

  React.useEffect(() => {
    loadTasks();
  }, [tasks]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component='h1' variant='h5'>
              Tasks
            </Typography>
            <Box
              component='form'
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin='normal'
                required
                fullWidth
                id='title'
                role='title'
                label='Title'
                name='title'
                autoFocus
                inputRef={references.titleRef}
              />
              <TextField
                margin='normal'
                fullWidth
                name='description'
                role='description'
                label='Description'
                id='description'
                autoComplete='current-password'
                inputRef={references.descriptionRef}
              />
              <Button
                type='submit'
                role='button-register'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      {erro && tasks.length === 0 && <h4>{erro}</h4>}
      <TaskList tasks={tasks} loadTasks={loadTasks} />
    </>
  );
}

// Remover tarefas; atualizar a tela
// Status editavel;
// filtros ordem Alfabetica, data da criacao, status;

export default TaskManagement;
