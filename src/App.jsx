import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import HomePage from './components/HomePage';
import About from './pages/about';
import Contact from './pages/contact';
import MainDivision from './pages/Departments/MainDivision';
import AurangabadDivision from './pages/Departments/AurangabadDivision';
import NagpurDivision from './pages/Departments/NagpurDivision';
import Sidebar from './pages/admin/sidebar';
import Home from './pages/admin/user';
import Dammanage from './pages/admin/dammanage';
import Cagemanage from './pages/admin/cagemanage';
import Rti from './pages/rti';
import Pmmsy from './pages/guidlines/Pmmsy';
import Fidf from './pages/guidlines/Fidf';
import GeneralGuid from './pages/guidlines/GeneralGuid';



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
        <Route path="/rti" element={<Rti />} />
        <Route path="/pmmsyguidlines" element={<Pmmsy />} />
        <Route path="/fidfguidlines" element={<Fidf />} />
        <Route path="/generalguidlines" element={<GeneralGuid />} />
        




        
      </Route>
      <Route path="/admin-sidebar" element={<Sidebar/>} />
       {/* Sidebar-wrapped Routes */}
       <Route path="/dashbord" element={<Sidebar><Home/></Sidebar>} />
        <Route path="/dam" element={<Sidebar>< Dammanage/></Sidebar>} />
        <Route path="/cage" element={<Sidebar><Cagemanage/></Sidebar>} />
    </Routes>
  );
}

export default App;
