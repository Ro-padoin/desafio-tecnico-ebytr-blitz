import TaskList from '../../components/TaskList';
// import axiosInstances from '../../helpers/axiosInstance';
// import { Navigate } from 'react-router-dom';

import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axiosInstance from '../../helpers/axiosInstance';

const theme = createTheme();

function TaskManagement() {
  const [erro, setErro] = React.useState();
  const [tasks, setTasks] = React.useState([]);
  const titleRef = React.useRef();
  const descriptionRef = React.useRef();

  const createTask = async (task) => {
    try {
      const { data } = await axiosInstance.post('/tasks', { ...task });
      console.log({ data });
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
    if (titleRef.current) titleRef.current.value = '';
    if (descriptionRef.current) descriptionRef.current.value = '';
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
  }, []);

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
                label='Title'
                name='title'
                autoFocus
                inputRef={titleRef}
              />
              <TextField
                margin='normal'
                fullWidth
                name='description'
                label='Description'
                id='description'
                autoComplete='current-password'
                inputRef={descriptionRef}
              />
              <Button
                type='submit'
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
      {erro && <h4>{erro}</h4>}
      <TaskList tasks={tasks} />
    </>
  );
}

// Visualizar as tarefas;
// Inserir tarefas; OK
// Remover tarefas;
// Atualizar tarefas;

// Status editavel;
// filtros ordem Alfabetica, data da criacao, status;

export default TaskManagement;
