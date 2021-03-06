import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { useState } from 'react';
import axiosInstance from '../../helpers/axiosInstance';

export default function FormDialog({ open, setOpen, task }) {
  const [editedTask, setEditedTask] = useState({
    id: task.id,
    title: task.title,
    description: task.description,
  });
  const [erro, setErro] = useState();

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeletedTask = async () => {
    try {
      await axiosInstance.delete(`/tasks/${editedTask.id}`);
      handleClose();
    } catch (error) {
      setErro(error?.response?.data?.message || 'Mensagem qualquer');
    }
  };

  const handleEditedTask = async () => {
    try {
      console.log({ editedTask });
      const { data } = await axiosInstance.put(`/tasks/${editedTask.id}`, {
        ...editedTask,
      });
      setEditedTask((prevState) => ({
        ...prevState,
        title: data.title,
        description: data.description,
      }));
      handleClose();
    } catch (error) {
      setErro(error?.response?.data?.message || 'Mensagem qualquer');
    }
  };

  const handleChange = ({ target: { value, id } }) => {
    setEditedTask((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            margin='dense'
            id='title'
            label='Title'
            type='text'
            defaultValue={task.title}
            onChange={handleChange}
            variant='standard'
          />
          <TextField
            autoFocus
            margin='dense'
            id='description'
            label='Description'
            type='text'
            defaultValue={task.description}
            onChange={handleChange}
            fullWidth
            variant='standard'
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDeletedTask}>Delete</Button>
          <Button onClick={handleEditedTask}>Save</Button>
        </DialogActions>
      </Dialog>
      {erro && <h4>{erro}</h4>}
    </>
  );
}

FormDialog.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
}.isRequired;

// Crit??rios de avalia????o
// Nosso time ir?? avaliar a sua entrega olhando, principalmente, para os itens abaixo:
// Atendimento aos requisitos t??cnicos e funcionais;
// Seu projeto deve rodar sem erros;
// Entendimento dos conceitos das camadas adotadas;
// C??digo e componentes reutilizados;
// Habilidade em escrever testes (m??nimo 30% de cobertura);
// Boa legibilidade do c??digo;
// Separa????o do front e backend;
// Mensagens de commits bem descritas e commits com um escopo n??tido;
// Refer??ncias de c??digos de terceiros;
// Instru????es n??tidas no README do projeto para setup e execu????o da aplica????o e dos testes.
// Dicas importantes!
// Ter uma boa cobertura de testes Front e Back;
// Aplicar boas pr??ticas de escrita de c??digo;
// Documenta????o do projeto (README), que inclua:
// Passo a passo para instalar e executar o projeto. Incluindo instru????es especiais para instalar depend??ncias e/ou bancos de dados, se houver;
// Endere??o da aplica????o no Heroku, se houver (ou outro servi??o de deployment);
// Ter um linter configurado;
// O projeto dever?? ser entregue via reposit??rio pessoal no GitHub (utilize boas pr??ticas de cria????o/nomea????o de branches, al??m de mensagens de commits bem descritas e commits com um escopo n??tido).
