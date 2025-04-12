import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';



function CustomTabPanel(props) {

    
  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Vision() {
    const { t } = useTranslation();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%',justifyContent:'center' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="Vision Mission Goals Tabs">
          <Tab label={t("vision")} {...a11yProps(0)} />
          <Tab label={t("mission")} {...a11yProps(1)} />
          <Tab label={t("goals")} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
  <strong>{t("visionheading")} </strong>
  <br /><br />
  {t("visionpara1")} 
  <br /><br />
  {t("visionpara2")} 
</CustomTabPanel>

<CustomTabPanel value={value} index={1}>
<strong>{t("missionheading")} </strong>
  <br /><br />
  {t("missionpara1")} 
  <br /><br />
  {t("missionpara2")} 
  </CustomTabPanel>

<CustomTabPanel value={value} index={2}>
  <strong> {t("goalheading")} </strong>
  <br /><br />
   {t("goals1")}
  <br /><br />
 {t("goals2")}
</CustomTabPanel>

    </Box>
  );
}
