import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {  Breadcrumbs, Link,  } from '@mui/material';
import PdfViewer from '../../components/pdfviewer';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    

    <Box sx={{marginTop:'40px'}}>

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
           
          }}>{t("pmmsyguidlines")}</Typography>
        </Breadcrumbs>
       
      </Box>
      <Typography variant='h5' sx={{ textAlign: 'center', py: 5 }}>{t("pmmsyguidlines")}</Typography>

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
            sx={{ width: '100%',textAlign:'start', alignItems:'flex-start' }}
          >
            <Tab label={t("guideline1")} {...a11yProps(0)} />
            <Tab label={t("guideline2")} {...a11yProps(1)} />
            <Tab label={t("guideline3")} {...a11yProps(2)} />
            <Tab label={t("guideline4")} {...a11yProps(3)} />
            <Tab label={t("guideline5")} {...a11yProps(4)} />
            <Tab label={t("guideline6")} {...a11yProps(5)} />
            <Tab label={t("guideline7")} {...a11yProps(6)} />
            <Tab label={t("guideline8")} {...a11yProps(7)} />
            <Tab label={t("guideline9")} {...a11yProps(8)} />
            <Tab label={t("guideline10")} {...a11yProps(9)} />
            <Tab label={t("guideline11")} {...a11yProps(10)} />
            <Tab label={t("guideline12")} {...a11yProps(11)} />
            <Tab label={t("guideline13")} {...a11yProps(12)} />
            <Tab label={t("guideline14")} {...a11yProps(13)} />
            <Tab label={t("guideline15")} {...a11yProps(14)} />
            <Tab label={t("guideline16")} {...a11yProps(15)} />
            <Tab label={t("guideline17")} {...a11yProps(16)} />
            <Tab label={t("guideline18")} {...a11yProps(17)} />
            <Tab label={t("guideline19")} {...a11yProps(18)} />
            <Tab label={t("guideline20")} {...a11yProps(19)} />
            <Tab label={t("guideline21")} {...a11yProps(20)} />
            <Tab label={t("guideline22")} {...a11yProps(21)} />
            <Tab label={t("guideline23")} {...a11yProps(22)} />
            <Tab label={t("guideline24")} {...a11yProps(23)} />
            <Tab label={t("guideline25")} {...a11yProps(24)} />

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
