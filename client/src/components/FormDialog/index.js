import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import axios from 'axios';
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeletedTask = async () => {
    try {
      await axiosInstance.delete(`/tasks/${editedTask.id}`);
    } catch (error) {
      setErro(error?.response?.data?.message || 'Mensagem qualquer');
    }
  };

  const handleEditedTask = async () => {
    try {
      const { data } = await axiosInstance.put(`/tasks/${editedTask.id}`, {
        ...editedTask,
      });
      setEditedTask((prevState) => ({
        ...prevState,
        title: data.title,
        description: data.description,
      }));
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
