import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Breadcrumbs, Link } from '@mui/material';
import PdfViewer from '../../components/pdfviewer';
import { useTranslation } from 'react-i18next';

import pdf1 from '../../assets/guidlines/general01.pdf';
import pdf2 from '../../assets/guidlines/general02.pdf';
import pdf3 from '../../assets/guidlines/general03.pdf';
import pdf4 from '../../assets/guidlines/general04.pdf';
import pdf5 from '../../assets/guidlines/general05.pdf';
import pdf6 from '../../assets/guidlines/general06.pdf';

const pdfs = [pdf1, pdf2, pdf3, pdf4, pdf5, pdf6];

const labels = [
  "1. NFDB Guidelines for Establishment of Fish Brood Bank",
  "2. Guidelines for Cage Culture in Inland Open Water Bodies of India - September 2016",
  "3. Guidelines for Responsible Farming of Tilapia in India",
  "4. Sanitary Protocol for Import of Ornamental Fishes into India",
  "5. Guidelines for Import of Asian Seabass/ Barramundi (Lates calcarifer) Seeds and Fingerlings",
  "6. Guidelines for Regulating Establishment and Operation of SPF Shrimp Broodstock Multiplication Centres"
];

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
          <Typography component="div">{children}</Typography>
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

export default function GeneralGuid() {
  const { t } = useTranslation();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ marginTop: '40px', padding:'10px' }}>
      {/* Header with Breadcrumb */}
      <Box sx={{
        backgroundColor: "#e3e4e6",
        py: 1,
        px: 4,
        color: 'blue',
        textAlign: 'left',
      }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ color: 'black' }}>
          <Link
            underline="hover"
            color="inherit"
            href="/"
            sx={{
              backgroundColor: 'skyblue',
              py: 1,
              px: 2,
              borderRadius: 1,
            }}
          >
            {t("home")}
          </Link>
          <Typography color="blue">{t("generalguidlines")}</Typography>
        </Breadcrumbs>
      </Box>

      <Typography variant="h5" sx={{ textAlign: 'center', py: 5 }}>
        {t("generalguidlines")}
      </Typography>

      <Box sx={{
        display: 'flex',
        bgcolor: 'background.paper',
        flexDirection: { xs: 'column', sm: 'row' },
      }}>
        {/* Left: Tabs */}
        <Box sx={{ width: { xs: '100%', sm: '30%' }, borderRight: { sm: 1 }, borderColor: 'divider' }}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs"
            sx={{ width: '100%' }}
          >
            {labels.map((label, index) => (
              <Tab
                key={index}
                label={label}
                {...a11yProps(index)}
                sx={{
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  backgroundColor: value === index ? 'skyblue' : 'transparent',
                  color: value === index ? 'white' : 'black',
                  fontWeight: value === index ? 'bold' : 'normal',
                  borderRadius: '4px',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: value === index ? 'skyblue' : '#f5f5f5',
                  },
                }}
              />
            ))}
          </Tabs>
        </Box>

        {/* Right: PDF Viewer */}
        <Box sx={{ width: { xs: '100%', sm: '70%' }, overflow: 'hidden' }}>
          {pdfs.map((pdf, index) => (
            <TabPanel key={index} value={value} index={index}>
              <PdfViewer file={pdf} />
            </TabPanel>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
