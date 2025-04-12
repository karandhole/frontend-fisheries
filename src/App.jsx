import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import HomePage from './components/HomePage';
import About from './pages/about';
import Contact from './pages/contact';
import MainDivision from './pages/Departments/MainDivision';
import AurangabadDivision from './pages/Departments/AurangabadDivision';
import NagpurDivision from './pages/Departments/NagpurDivision';



function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/maindivision" element={<MainDivision />} />
        <Route path="/aurangabaddivision" element={<AurangabadDivision />} />
        <Route path="/nagpurdivision" element={<NagpurDivision />} />
      </Route>
    </Routes>
  );
}

export default App;
