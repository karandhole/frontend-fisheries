import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Box } from '@mui/material';

const MainLayout = () => {
  return (
    <>
      <Navbar/>
      <Box
        component="main"
        sx={{
          minHeight: '80vh',
          paddingTop: { xs: '0rem', sm: '2rem' },
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default MainLayout;
