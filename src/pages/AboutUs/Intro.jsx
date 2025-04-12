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
          overflow: 'auto'
        }}
      >
        <Tab label="Introduction" {...a11yProps(0)} />
        <Tab label="Who We Are" {...a11yProps(1)} />
        <Tab label="What We Do" {...a11yProps(2)} />
        <Tab label="Our Mission" {...a11yProps(3)} />
        <Tab label="The Story" {...a11yProps(4)} />
        <Tab label="Objectives" {...a11yProps(5)} />
        <Tab label="Our Values" {...a11yProps(6)} />
        <Tab label="Future Vision" {...a11yProps(7)} />
      </Tabs>

      <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
        <TabPanel value={value} index={0}><Introduction /></TabPanel>
        <TabPanel value={value} index={1}><WhoWe/></TabPanel>
        <TabPanel value={value} index={2}>Description for What We Do</TabPanel>
        <TabPanel value={value} index={3}>Description for Our Mission</TabPanel>
        <TabPanel value={value} index={4}>Description for The Story</TabPanel>
        <TabPanel value={value} index={5}>Description for Objectives</TabPanel>
        <TabPanel value={value} index={6}>Description for Our Values</TabPanel>
        <TabPanel value={value} index={7}>Description for Future Vision</TabPanel>
      </Box>
    </Box>
  );
}
