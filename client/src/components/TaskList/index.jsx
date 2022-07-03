import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import PropTypes from 'prop-types';

export default function TaskList({ tasks }) {
  return (
    <Container component='section' maxWidth='xs'>
      <List>
        {tasks.length !== 0 &&
          tasks.map((task) => (
            <ListItem key={task.id} sx={{ borderBottom: '1px solid #cfcfcf' }}>
              <ListItemText primary={task.title} secondary={task.description} />
            </ListItem>
          ))}
      </List>
    </Container>
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
  ).isRequired,
};
