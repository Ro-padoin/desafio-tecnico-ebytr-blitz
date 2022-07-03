// import PropTypes from 'prop-types';
// import Footer from '../Footer';

// function TaskList({ tasks }) {
//   return (
//     <>
//       <ul>
//         {tasks.lengh !== 0 &&
//           tasks.map((task) => (
//             <li key={task.id}>
//               <h3> {task.title}</h3>
//               <textarea>{task.description}</textarea>
//             </li>
//           ))}
//       </ul>
//       <Footer />
//     </>
//   );
// }

// TaskList.propTypes = {
//   tasks: PropTypes.arrayOf(PropTypes.object),
// }.isRequired;

// export default TaskList;

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';

function generate(element) {
  return [0].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export default function TaskList({ tasks }) {
  // const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={secondary}
              onChange={(event) => setSecondary(event.target.checked)}
            />
          }
          label='Enable Description'
        />
      </FormGroup>
      <List>
        {tasks.length !== 0 &&
          tasks.map((task) =>
            generate(
              <ListItem key={task.title}>
                <ListItemText
                  primary={task.title}
                  secondary={secondary ? task.description : null}
                />
              </ListItem>,
            ),
          )}
      </List>
    </Box>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, description: PropTypes.string }),
  ).isRequired,
};
