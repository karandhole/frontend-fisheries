import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

const PaymentDialog = ({onOpen,onClose}) => {
  return (
    <Dialog open={onOpen} maxWidth={'sm'} fullWidth onClose={onClose}>
      <DialogTitle>Payment Details</DialogTitle>
      <DialogContent>
        <Typography pt={2} variant="body1" fontWeight={600}>
          <span style={{color:'grey'}}>Account Name: </span> PCMC DIVYANG BHAVAN FOUNDATION
        </Typography>
		<Typography pt={0.5} variant="body1" fontWeight={600}>
          <span style={{color:'grey'}}>Accont No: </span> 50100643426527
        </Typography>
		<Typography pt={0.5} variant="body1" fontWeight={600}>
          <span style={{color:'grey'}}>IFSC code: </span> HDFC0000437
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onClose} color="error">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default PaymentDialog
