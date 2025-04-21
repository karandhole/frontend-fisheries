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
import img1 from '../../assets/plant/plant1.jpg';
import img2 from '../../assets/plant/plant8.jpg';
import { useTranslation } from 'react-i18next';

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
          <Typography component="div">{children}</Typography>
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

const Introduction = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h6" gutterBottom>{t("introduction")}</Typography>
      <Typography>{t("intro_desc")}</Typography>

      {/* Image Section */}
      <Box sx={{ display: 'flex', gap: 2, mt: 2, flexWrap: 'wrap' }}>
        <Box
          component="img"
          src={img1}
          alt="Image 1"
          sx={{ width: { xs: '100%', sm: '48%' }, borderRadius: 2 }}
        />
        <Box
          component="img"
          src={img2}
          alt="Image 2"
          sx={{ width: { xs: '100%', sm: '48%' }, borderRadius: 2 }}
        />
      </Box>
    </>
  );
};

const WhoWe = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h6" gutterBottom>{t("who_we_are")}</Typography>
      <Typography>{t("who_we_are_description")}</Typography>
    </>
  );
};

const WhatWeDo = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h6" gutterBottom>{t("what_we_do")}</Typography>
      <Typography>{t("what_we_do_description")}</Typography>
    </>
  );
};

const OurMission = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h6" gutterBottom>{t("our_mission")}</Typography>
      <Typography>
        To ensure inclusive and sustainable development of fisheries and empower local fishing communities.
      </Typography>
    </>
  );
};

const TheStory = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h6" gutterBottom>{t("the_story")}</Typography> 
      <Typography>
        In response to overexploitation in shallow waters, the Government initiated deep-sea fishing projects under this corporation in 1973.
      </Typography>
    </>
  );
};

const Objectives = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h6" gutterBottom>{t("objectives")}</Typography>
      <Typography>
        Promote deep-sea fishing, protect fishermen’s interests, encourage entrepreneurship, and ensure marine conservation.
      </Typography>
    </>
  );
};

const OurValues = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h6" gutterBottom>{t("our_values")}</Typography>
      <Typography>
        Sustainability, Transparency, Innovation, Social Commitment, and Eco-Friendliness.
      </Typography>
    </>
  );
};

const FutureVision = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h6" gutterBottom>{t("future_vision")}</Typography>
      <Typography>
        To make Maharashtra a national leader in fisheries with advanced technology, sustainable policies, and strong community support.
      </Typography>
    </>
  );
};

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
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        minHeight: '80vh',
        maxHeight: 'auto',
        borderRadius: 2,
        boxShadow: 2,
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
          width: isMobile ? '100%' : '280px',
           minWidth:'280px',
          backgroundColor: '#f7f9fc',
          borderRight: isMobile ? 0 : '1px solid #ccc',
          '& .MuiTab-root': {
            fontWeight: 600,
            fontSize: '1rem',
            textTransform: 'none',
            px: 2,
            py: 1.5,
            textAlign: 'left',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
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
          },
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

      <Box sx={{ flexGrow: 1, p: 3, maxHeight: '80vh', overflowY: 'auto' }}>
        <TabPanel value={value} index={0}><Introduction /></TabPanel>
        <TabPanel value={value} index={1}><WhoWe /></TabPanel>
        <TabPanel value={value} index={2}><WhatWeDo /></TabPanel>
        <TabPanel value={value} index={3}><OurMission /></TabPanel>
        <TabPanel value={value} index={4}><TheStory /></TabPanel>
        <TabPanel value={value} index={5}><Objectives /></TabPanel>
        <TabPanel value={value} index={6}><OurValues /></TabPanel>
        <TabPanel value={value} index={7}><FutureVision /></TabPanel>
      </Box>
    </Box>
  );
}