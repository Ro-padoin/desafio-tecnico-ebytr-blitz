import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import PropTypes from 'prop-types';
import { useState } from 'react';
import FormDialog from '../FormDialog';

export default function TaskList({ tasks }) {
  const [open, setOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState();

  return (
    <>
      <Container component='section' maxWidth='xs'>
        <List>
          {tasks.length !== 0 &&
            tasks.map((task) => (
              <Box
                key={task.id}
                sx={{
                  marginTop: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  border: '1px solid #cfcfcf',
                  borderRadius: '5px',
                  '&:hover': {
                    border: '1px solid black',
                  },
                }}
              >
                <ListItem
                  onClick={() => {
                    setOpen(true);
                    setSelectedTask(task);
                  }}
                >
                  <ListItemText
                    primary={`Title: ${task.title}`}
                    secondary={`Description: ${task.description}`}
                  />
                </ListItem>
              </Box>
            ))}
        </List>
      </Container>
      {selectedTask && (
        <FormDialog open={open} setOpen={setOpen} task={selectedTask} />
      )}
    </>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string,
    }),
  ),
}.isRequired;
