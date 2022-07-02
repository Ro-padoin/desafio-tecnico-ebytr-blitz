import PropTypes from 'prop-types';

function TaskList() {
  const tasks = [];
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <h3> {task.title}</h3>
          <textarea>{task.description}</textarea>
        </li>
      ))}
    </ul>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default TaskList;
