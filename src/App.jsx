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
import Csrproject from './pages/nfdbproject/csrproject';
import Pmmsy_scheme from './pages/Schemes/Pmmsy_scheme';
import Gais_Scheme from './pages/Schemes/Gais_Scheme';
import Fidf_Scheme from './pages/Schemes/Fidf_Scheme';
import BlueR_Scheme from './pages/Schemes/BlueR_Scheme';



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
        <Route path="/csr" element={<Csrproject/>} />
       

        {/* schemes */}
        <Route path="/pmmsy_scheme" element={<Pmmsy_scheme/>} />
        <Route path="/gais_scheme" element={<Gais_Scheme/>} />
        <Route path="/fidf_scheme" element={<Fidf_Scheme/>} />
        <Route path="/bluer_scheme" element={<BlueR_Scheme/>} />
        





        
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
