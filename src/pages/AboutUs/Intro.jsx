import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Tabs,
  Tab,
  Typography,
  Box,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Introduction from './Introduction';
import WhoWe from './WhoWe';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 2, sm: 3 } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`
  };
}

export default function Intro() {
    const { t } = useTranslation();
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        minHeight: 500,
        border: '1px solid #ccc',
        borderRadius: 2,
        overflow: 'hidden'
      }}
    >
   <Tabs
  orientation={isMobile ? 'horizontal' : 'vertical'}
  variant="scrollable"
  value={value}
  onChange={handleChange}
  aria-label="About Us Tabs"
  sx={{
    borderRight: isMobile ? 0 : 1,
    borderBottom: isMobile ? 1 : 0,
    borderColor: 'divider',
    width: isMobile ? '100%' : '30%',
    maxHeight: isMobile ? 'auto' : '100%',
    overflow: 'auto',
    backgroundColor: '#f7f9fc',
    '& .MuiTab-root': {
      fontWeight: 600,
      fontSize: '1rem',
      textTransform: 'none',
      px: 2,
      py: 1.5,
      transition: 'background-color 0.3s ease, color 0.3s ease',
      borderRadius: isMobile ? '8px' : '0px 40px 40px 0px',
      '&:hover': {
        backgroundColor: '#e0f0ff',
        color: '#1976d2',
      },
    },
    '& .Mui-selected': {
      color: '#fff',
      backgroundColor: '#1976d2',
    },
    '& .MuiTabs-indicator': {
      backgroundColor: '#1976d2',
      height: isMobile ? 3 : '100%',
      width: isMobile ? '100%' : 4,
      borderRadius: isMobile ? 0 : '0px 5px 5px 0px',
    }
  }}
>
<Tab label={t("introduction")} {...a11yProps(0)} />
<Tab label={t("who_we_are")} {...a11yProps(1)} />
<Tab label={t("what_we_do")} {...a11yProps(2)} />
<Tab label={t("our_mission")} {...a11yProps(3)} />
<Tab label={t("the_story")} {...a11yProps(4)} />
<Tab label={t("objectives")} {...a11yProps(5)} />
<Tab label={t("our_values")} {...a11yProps(6)} />
<Tab label={t("future_vision")} {...a11yProps(7)} />
</Tabs>


      <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
        <TabPanel value={value} index={0}><Introduction /></TabPanel>
        <TabPanel value={value} index={1}><WhoWe/></TabPanel>
        <TabPanel value={value} index={2}><WhoWe/></TabPanel>
        <TabPanel value={value} index={3}><WhoWe/></TabPanel>
        <TabPanel value={value} index={4}><WhoWe/></TabPanel>
        <TabPanel value={value} index={5}><WhoWe/></TabPanel>
        <TabPanel value={value} index={6}><WhoWe/></TabPanel>
        <TabPanel value={value} index={7}><WhoWe/></TabPanel>
      </Box>
    </Box>
  );
}
