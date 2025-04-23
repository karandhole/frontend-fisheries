import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PdfViewer from '../../components/pdfviewer';

import pdf1 from '../../assets/guidlines/01.pdf';
import pdf2 from '../../assets/guidlines/02.pdf';
import pdf3 from '../../assets/guidlines/03.pdf';
import pdf4 from '../../assets/guidlines/04.pdf';
import pdf5 from '../../assets/guidlines/05.pdf';
import pdf6 from '../../assets/guidlines/06.pdf';
import pdf7 from '../../assets/guidlines/07.pdf';
import pdf8 from '../../assets/guidlines/08.pdf';
import pdf9 from '../../assets/guidlines/09.pdf';
import pdf10 from '../../assets/guidlines/10.pdf';
import pdf11 from '../../assets/guidlines/11.pdf';
import pdf12 from '../../assets/guidlines/12.pdf';
import pdf13 from '../../assets/guidlines/13.pdf';
import pdf14 from '../../assets/guidlines/14.pdf';
import pdf15 from '../../assets/guidlines/15.pdf';
import pdf16 from '../../assets/guidlines/16.pdf';
import pdf17 from '../../assets/guidlines/17.pdf';
import pdf18 from '../../assets/guidlines/18.pdf';
import pdf19 from '../../assets/guidlines/19.pdf';
import pdf20 from '../../assets/guidlines/20.pdf';
import pdf21 from '../../assets/guidlines/21.pdf';
import pdf22 from '../../assets/guidlines/22.pdf';
import pdf23 from '../../assets/guidlines/23.pdf';
import pdf24 from '../../assets/guidlines/24.pdf';
import pdf25 from '../../assets/guidlines/25.pdf';

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

export default function Pmmsy() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ marginTop: '40px' }}>
      <Typography variant='h5' sx={{ textAlign: 'center', py: 5 }}>PMMSY Guidelines</Typography>

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
            <Tab label="1. Press release by PMMSY" {...a11yProps(0)} />
            <Tab label="2. PMMSY Framework" {...a11yProps(1)} />
            <Tab label="3. Annexure Framework" {...a11yProps(2)} />
            <Tab label="4. Operational Guidelines (English)" {...a11yProps(3)} />
            <Tab label="5. Operational Guidelines (Hindi)" {...a11yProps(4)} />
            <Tab label="6. Admin Expenses (English)" {...a11yProps(5)} />
            <Tab label="7. Admin Expenses (Hindi)" {...a11yProps(6)} />
            <Tab label="8. Operational Guidelines (Hindi)" {...a11yProps(7)} />
            <Tab label="9. Admin Expenses (English)" {...a11yProps(8)} />
            <Tab label="10. Admin Expenses (Hindi)" {...a11yProps(9)} />
            <Tab label="11. PMMSY Entrepreneurs Models in English" {...a11yProps(10)} />
            <Tab label="12. PMMSY Entrepreneurs Models in Hindi" {...a11yProps(11)} />
            <Tab label="13. Revisions in Operational Guidelines (PMMSY)" {...a11yProps(12)} />
            <Tab label="14. Beneficiary Oriented Sub-Components (English)" {...a11yProps(13)} />
            <Tab label="15. Beneficiary Oriented Sub-Components (Hindi)" {...a11yProps(14)} />
            <Tab label="16. FFPO Guidelines" {...a11yProps(15)} />
            <Tab label="17. Guidelines for Implementation of Single Nodal Agencies" {...a11yProps(16)} />
            <Tab label="18. PMMSY Initiatives FY 2020-21" {...a11yProps(17)} />
            <Tab label="19. PMMSY Reform Booklet (English)" {...a11yProps(18)} />
            <Tab label="20. PMMSY Reform Booklet (Hindi)" {...a11yProps(19)} />
            <Tab label="21. PMMSY Training Guidelines" {...a11yProps(20)} />
            <Tab label="22. Revision in PMMSY Operational Guidelines (2021)" {...a11yProps(21)} />
            <Tab label="23. Addendum to PMMSY Operational Guidelines (March 2022)" {...a11yProps(22)} />
            <Tab label="24. Administrative Approval for PMMSY 2020-21" {...a11yProps(23)} />
            <Tab label="25. Administrative Approval for PMMSY 2021-23" {...a11yProps(24)} />
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
          <TabPanel value={value} index={6}><PdfViewer file={pdf7} /></TabPanel>
          <TabPanel value={value} index={7}><PdfViewer file={pdf8} /></TabPanel>
          <TabPanel value={value} index={8}><PdfViewer file={pdf9} /></TabPanel>
          <TabPanel value={value} index={9}><PdfViewer file={pdf10} /></TabPanel>
          <TabPanel value={value} index={10}><PdfViewer file={pdf11} /></TabPanel>
          <TabPanel value={value} index={11}><PdfViewer file={pdf12} /></TabPanel>
          <TabPanel value={value} index={12}><PdfViewer file={pdf13} /></TabPanel>
          <TabPanel value={value} index={13}><PdfViewer file={pdf14} /></TabPanel>
          <TabPanel value={value} index={14}><PdfViewer file={pdf15} /></TabPanel>
          <TabPanel value={value} index={15}><PdfViewer file={pdf16} /></TabPanel>
          <TabPanel value={value} index={16}><PdfViewer file={pdf17} /></TabPanel>
          <TabPanel value={value} index={17}><PdfViewer file={pdf18} /></TabPanel>
          <TabPanel value={value} index={18}><PdfViewer file={pdf19} /></TabPanel>
          <TabPanel value={value} index={19}><PdfViewer file={pdf20} /></TabPanel>
          <TabPanel value={value} index={20}><PdfViewer file={pdf21} /></TabPanel>
          <TabPanel value={value} index={21}><PdfViewer file={pdf22} /></TabPanel>
          <TabPanel value={value} index={22}><PdfViewer file={pdf23} /></TabPanel>
          <TabPanel value={value} index={23}><PdfViewer file={pdf24} /></TabPanel>
          <TabPanel value={value} index={24}><PdfViewer file={pdf25} /></TabPanel>
        </Box>
      </Box>
    </Box>
  );
}
