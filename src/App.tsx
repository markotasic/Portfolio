import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import Error404 from './pages/NotFound';
import Lines from './components/Lines/Lines';

function App() {
  return (
    <>
      <Lines />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
