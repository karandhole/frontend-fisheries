import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Breadcrumbs, Link } from '@mui/material';
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

export default function Fidf() {
  const { t } = useTranslation();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ marginTop: '40px', padding:'10px' }}>
      {/* Header with Breadcrumb */}
      <Box
        sx={{
          backgroundColor: "#e3e4e6",
          py: 1,
          px: 4,
          textAlign: 'left',
        }}
      >
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
          <Typography color="blue">{t("fidfguidlines")}</Typography>
        </Breadcrumbs>
      </Box>

      <Typography variant='h5' sx={{ textAlign: 'center', py: 5 }}>
        {t("fidfguidlines")}
      </Typography>

      <Box sx={{ display: 'flex', bgcolor: 'background.paper', flexDirection: { xs: 'column', sm: 'row' } }}>
        {/* Tabs Section */}
        <Box sx={{ width: { xs: '100%', sm: '30%' }, borderRight: { sm: 1 }, borderColor: 'divider' }}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ width: '100%' }}
          >
            <Tab
              label={t("fidfguidlines1")}
              {...a11yProps(0)}
              sx={{
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                backgroundColor: value === 0 ? 'skyblue' : 'transparent',
                color: value === 0 ? 'white' : 'black',
                fontWeight: value === 0 ? 'bold' : 'normal',
                borderRadius: '4px',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: value === 0 ? 'skyblue' : '#f5f5f5',
                },
              }}
            />
          </Tabs>
        </Box>

        {/* PDF Viewer Section */}
        <Box sx={{ width: { xs: '100%', sm: '70%' }, overflow: 'hidden' }}>
          <TabPanel value={value} index={0}>
            <PdfViewer file={pdf1} />
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
}
