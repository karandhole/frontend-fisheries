import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PdfViewer from '../../components/pdfviewer';

import pdf1 from '../../assets/guidlines/general01.pdf';
import pdf2 from '../../assets/guidlines/general02.pdf';
import pdf3 from '../../assets/guidlines/general03.pdf';
import pdf4 from '../../assets/guidlines/general04.pdf';
import pdf5 from '../../assets/guidlines/general05.pdf';
import pdf6 from '../../assets/guidlines/general06.pdf';

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

export default function General() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ marginTop: '40px' }}>
      <Typography variant='h5' sx={{ textAlign: 'center', py: 5 }}>General Guidelines</Typography>

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
            <Tab label="1. NFDB Guidelines for Establishment of Fish Brood Bank" {...a11yProps(0)} />
            <Tab label="2. Guidelines for Cage Culture in Inland Open Water Bodies of India - September 2016" {...a11yProps(1)} />
            <Tab label="3. Guidelines for Responsible Farming of Tilapia in India" {...a11yProps(2)} />
            <Tab label="4. Sanitary Protocol for Import of Ornamental Fishes into India" {...a11yProps(3)} />
            <Tab label="5. Guidelines for Import of Asian Seabass/ Barramundi (Lates calcarifer) Seeds and Fingerlings" {...a11yProps(4)} />
            <Tab label="6. Guidelines for Regulating Establishment and Operation of SPF Shrimp Broodstock Multiplication Centres" {...a11yProps(4)} />
           
          </Tabs>
        </Box>




        





        {/* Right: PDF Viewer 70% */}
        <Box sx={{ width: '70%', overflow: 'hidden' }}>
          <TabPanel value={value} index={0}><PdfViewer file={pdf1} /></TabPanel>
          <TabPanel value={value} index={1}><PdfViewer file={pdf2} /></TabPanel>
          <TabPanel value={value} index={2}><PdfViewer file={pdf3} /></TabPanel>
          <TabPanel value={value} index={3}><PdfViewer file={pdf4} /></TabPanel>
          <TabPanel value={value} index={4}><PdfViewer file={pdf5} /></TabPanel>
          <TabPanel value={value} index={5}><PdfViewer file={pdf6} /></TabPanel>
         
        </Box>
      </Box>
    </Box>
  );
}
