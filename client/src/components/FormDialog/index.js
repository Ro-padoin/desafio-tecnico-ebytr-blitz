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

// Critérios de avaliação
// Nosso time irá avaliar a sua entrega olhando, principalmente, para os itens abaixo:
// Atendimento aos requisitos técnicos e funcionais;
// Seu projeto deve rodar sem erros;
// Entendimento dos conceitos das camadas adotadas;
// Código e componentes reutilizados;
// Habilidade em escrever testes (mínimo 30% de cobertura);
// Boa legibilidade do código;
// Separação do front e backend;
// Mensagens de commits bem descritas e commits com um escopo nítido;
// Referências de códigos de terceiros;
// Instruções nítidas no README do projeto para setup e execução da aplicação e dos testes.
// Dicas importantes!
// Ter uma boa cobertura de testes Front e Back;
// Aplicar boas práticas de escrita de código;
// Documentação do projeto (README), que inclua:
// Passo a passo para instalar e executar o projeto. Incluindo instruções especiais para instalar dependências e/ou bancos de dados, se houver;
// Endereço da aplicação no Heroku, se houver (ou outro serviço de deployment);
// Ter um linter configurado;
// O projeto deverá ser entregue via repositório pessoal no GitHub (utilize boas práticas de criação/nomeação de branches, além de mensagens de commits bem descritas e commits com um escopo nítido).
