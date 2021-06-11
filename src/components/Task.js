import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <li
      className={`list-group-item p-3 $`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <div className="d-flex justify-content-between">
        <h3>{task.text}</h3>
        <FaTimes className="" onClick={() => onDelete(task.id)} />
      </div>
      {task.reminder ? (
        <span className="badge rounded-pill bg-info text-dark fs-6 mb-2">
          Reminder
        </span>
      ) : (
        ''
      )}
      <p>{task.day}</p>
    </li>
  );
};

export default Task;
