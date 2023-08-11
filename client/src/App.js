import { Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Form from './pages/Form';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </main>
  );
}

export default App;
