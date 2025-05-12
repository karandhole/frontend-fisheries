import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tab-panel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 2, md: 4 } }}>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>{children}</Typography>
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
    id: `tab-${index}`,
    'aria-controls': `tab-panel-${index}`,
  };
}

export default function Vision() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'column', md: 'row' },
        borderRadius: 2,
        boxShadow: 3,
        overflow: 'hidden',
        mt: 3,
        p:5,
      }}
    >
      <Tabs
        orientation={isSmall ? 'horizontal' : 'vertical'}
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vision, Mission and Goals Tabs"
        sx={{
          borderRight: { md: 1, xs: 0 },
          borderBottom: { xs: 1, md: 0 },
          borderColor: 'divider',
          backgroundColor: 'aliceblue',
          width: { xs: '100%', md: '220px' },
          minHeight: '100%',
        }}
      >
        <Tab label={t("vision")} sx={{
          fontWeight: 600,
          textTransform: 'none',
          '&:hover': {
            backgroundColor: 'primary.light',
            color:'skyblue',
          },
          '&.Mui-selected': {
            backgroundColor: 'skyblue',
            color: 'white',
          },
        }} {...a11yProps(0)} />
        <Tab label={t("mission")} sx={{
          fontWeight: 600,
          textTransform: 'none',
          '&:hover': {
            backgroundColor: 'skyblue',
            color: 'primary.main',
          },
          '&.Mui-selected': {
            backgroundColor: 'skyblue',
            color: 'white',
          },
        }} {...a11yProps(1)} />
        <Tab label={t("goals")} sx={{
          fontWeight: 600,
          textTransform: 'none',
          '&:hover': {
            backgroundColor: 'primary.light',
            color: 'skyblue',
          },
          '&.Mui-selected': {
            backgroundColor:'skyblue',
            color: 'white',
          },
        }} {...a11yProps(2)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>{t("visionheading")}</Typography>
        <Typography>{t("visionpara1")}</Typography>
        <br />
        <Typography>{t("visionpara2")}</Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>{t("missionheading")}</Typography>
        <Typography>{t("missionpara1")}</Typography>
        <br />
        <Typography>{t("missionpara2")}</Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>{t("goalheading")}</Typography>
        <Typography>{t("goals1")}</Typography>
        <br />
        <Typography>{t("goals2")}</Typography>
      </TabPanel>
    </Box>
  );
}
