import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <div className="card mt-4 col-lg-8 col-sm-9 col-12 col-xl-7 col-xxl-6 mx-auto">
      <ul className="list-group list-group-flush mt-3 ">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
