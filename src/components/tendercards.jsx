import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Form from '../components/participate/form';

const TenderCard = () => {
  const [addOpen, setAddOpen] = React.useState(false);

  const handleClose = () => {
    setAddOpen(false);
  };

  return (
    <Box sx={{ minWidth: 275, maxWidth: 300 }}>
      <Card>
        <CardContent>
          <Typography variant="h4" color="black" textAlign={'left'}>
            Tenders Data
          </Typography>
          <div>
            <Typography variant="h6" color="black" textAlign={'left'}>
              Date of Tender
            </Typography>
          </div>
          <Typography variant="body2" color="black" textAlign={'left'}>
            This is information about Tender
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="large"
            variant="contained"
            color="secondary"
            onClick={() => setAddOpen(true)} 
          >
            Participate
          </Button>
        </CardActions>
      </Card>

      <Dialog open={addOpen} onClose={handleClose} fullWidth maxWidth={'md'}>
        <DialogTitle>Participate in Tender</DialogTitle>
        <Form onClose={handleClose} />
      </Dialog>
    </Box>
  );
};

export default TenderCard;
