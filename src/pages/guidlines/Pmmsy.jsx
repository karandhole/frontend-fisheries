import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Breadcrumbs, Link } from '@mui/material';
import PdfViewer from '../../components/pdfviewer';
import { useTranslation } from 'react-i18next';

// Import PDFs
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

const pdfs = [
  pdf1, pdf2, pdf3, pdf4, pdf5,
  pdf6, pdf7, pdf8, pdf9, pdf10,
  pdf11, pdf12, pdf13, pdf14, pdf15,
  pdf16, pdf17, pdf18, pdf19, pdf20,
  pdf21, pdf22, pdf23, pdf24, pdf25
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

export default function Pmmsy() {
  const { t } = useTranslation();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ marginTop: '40px' , padding:'10px' }}>
      {/* Header with Breadcrumb  */}
      <Box sx={{
        backgroundColor: "#e3e4e6",
        py: 1,
        px: 4,
        color: 'blue',
        textAlign: 'left',
      }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ color: 'black' }}>
          <Link underline="hover" color="inherit" href="/" sx={{
            backgroundColor: 'skyblue',
            py: 1,
            px: 2,
            borderRadius: 1,
          }}>
            {t("home")}
          </Link>
          <Typography color="blue">{t("pmmsyguidlines")}</Typography>
        </Breadcrumbs>
      </Box>

      <Typography variant='h5' sx={{ textAlign: 'center', py: 5 }}>
        {t("pmmsyguidlines")}
      </Typography>

      <Box sx={{
        display: 'flex',
        bgcolor: 'background.paper',
        flexDirection: { xs: 'column', sm: 'row' },
      }}>
        {/* Tabs: 30% width */}
        <Box sx={{ width: { xs: '100%', sm: '30%' }, borderRight: { sm: 1 }, borderColor: 'divider' }}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs"
            sx={{
              width: '100%',
              alignItems: 'flex-start',
            }}
          >
            {[...Array(25)].map((_, index) => (
              <Tab
                key={index}
                label={t(`guideline${index + 1}`)}
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

        {/* Right panel: PDF Viewer */}
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
