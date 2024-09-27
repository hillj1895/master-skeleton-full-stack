import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/home';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;
