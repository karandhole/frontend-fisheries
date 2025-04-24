import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {  Breadcrumbs, Link,  } from '@mui/material';
import PdfViewer from '../../components/pdfviewer';
import { useTranslation } from 'react-i18next';
import pdf1 from '../../assets/guidlines/fidfguidlines.pdf';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Fidf() {
  const {t} =useTranslation();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ marginTop: '40px' }}>
{/* Header with Breadcrumb  */}
<Box
              sx={{
               backgroundColor:"#e3e4e6",
                backgroundPosition: 'center',
                color: 'blue',
                py:1,
                px: 4,
                textAlign: 'left',
                position: 'relative',
               
              }}
            >
              <Breadcrumbs aria-label="breadcrumb" sx={{ color: 'black' }}>
                <Link underline="hover" color="inherit" href="/" 
                sx={{backgroundColor:'skyblue',  
                  py:1,
                px: 4,
                }}>
                  {t("home")}
                </Link>
                <Typography color="blue" sx={{
                 
                }}>{t("fidfguidlines")}</Typography>
              </Breadcrumbs>
             
            </Box>

      
      <Typography variant='h5' sx={{ textAlign: 'center', py: 5 }}> {t("fidfguidlines")}</Typography>

      <Box
        sx={{
          display: 'flex',
          bgcolor: 'background.paper',
          // height: 'calc(100vh - 150px)', // adjust height based on your page structure
        }}
      >
        {/* Left: Tabs 30% */}
        <Box sx={{ width: '30%', borderRight: 1, borderColor: 'divider' }}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ width: '100%' }}
          >
            <Tab label= {t("fidfguidlines1")}{...a11yProps(0)} />
          </Tabs>
        </Box>

        {/* Right: PDF Viewer 70% */}
        <Box sx={{ width: '70%', overflow: 'hidden' }}>
          <TabPanel value={value} index={0}><PdfViewer file={pdf1} /></TabPanel>

        </Box>
      </Box>
    </Box>
  );
}
