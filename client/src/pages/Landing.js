import { gql, useQuery } from '@apollo/client';

const GET_TASKS = gql`
  query {
    getTasks {
      _id
      text
      username
    }
  }
`;

function Landing() {
  const { data, error, loading } = useQuery(GET_TASKS);

  return (
    <>
      <h1>Task Manager</h1>

      {loading && <p>Loading...</p>}

      {error && <p className="error">{error}</p>}

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