import { useQuery } from '@apollo/client';

import { GET_TASKS, GET_TASK } from './queries';
import { useState } from 'react';

function Landing() {
  const [id, setId] = useState('');
  const { data, error, loading } = useQuery(GET_TASKS);
  const { data: getTaskData } = useQuery(GET_TASK, {
    variables: {
      id
    }
  });

  return (
    <>
      <h1>Task Manager</h1>

      {loading && <p>Loading...</p>}

      {error && <p className="error">{error}</p>}

      {
        <p>{getTaskData?.getTask.username}</p>
      }

      <input type="text" placeholder="Enter task id" onChange={e => setId(e.target.value)} />

      <div className="tasks">
        {data?.getTasks.map((task, index) => (
          <div key={index}>
            <p>Task: {task.text}</p>
            <p>Username: {task.username}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Landing;