import { useState } from 'react';
import Button from './UI/Button';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please add a task');
      return;
    }

    onAdd({ text, day, reminder });

    setText('');
    setDay('');
    setReminder(false);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="border p-4 col-lg-8 col-sm-9 col-12 col-xl-7 col-xxl-6 mx-auto"
    >
      <div>
        <label className="form-label">Task</label>
        <input
          className="form-control"
          type="text"
          placeholder="Task name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Day & Time</label>
        <input
          className="form-control"
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-check mb-3">
        <label className="form-check-label">Set Reminder</label>
        <input
          className="form-check-input"
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <div className="d-grid gap-2 col-12 mx-auto">
        <Button className="btn-success btn btn-lg" type="submit">Save Task</Button>
      </div>
    </form>
  );
};

export default AddTask;
