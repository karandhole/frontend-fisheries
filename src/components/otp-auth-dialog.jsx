import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Typography,
  Box,
  Alert,
  AlertTitle,
  Collapse,
  CircularProgress,
} from "@mui/material";
import { MuiOtpInput } from "mui-one-time-password-input";
import apiManager from "../apiManager/apiManager";

const sendMail = async () => {
  try {
    const otp = await apiManager.sendMail();
    return otp;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const OtpAuthDialog = ({ onOpen, onClose, onConfirm }) => {
  const [error, setError] = useState(null);
  const [otp, setOtp] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");

  const handleChange = (newValue) => {
    setOtp(newValue);
  };

  const handleClick = async () => {
    setIsSubmitting(true);
    setError(null);
    setIsSuccess(null);
    try {
      const otp = await sendMail();
      setGeneratedOtp(otp.data);
      setIsSuccess("OTP sent successfully");
      setIsSend(true);
    } catch (error) {
      setError("Retry to send OTP");
    }
    setIsSubmitting(false);
  };

  const handleComplete = (value) => {
    console.log("value", value);
    console.log("generatedOtp", generatedOtp);
    if (value == generatedOtp) {
      setIsSuccess("OTP verified successfully");
      setIsSend(true);
      onConfirm();
    } else {
      setError("Invalid OTP");
    }
    setIsSubmitting(false);
  };

  return (
    <Dialog open={onOpen} maxWidth={"sm"} fullWidth onClose={onClose}>
      <DialogTitle>Authorize</DialogTitle>
      <DialogContent>
        <Box py={3}>
          {isSend ? (
            <MuiOtpInput
              length={6}
              TextFieldsProps={{ disabled: isSubmitting }}
              onComplete={handleComplete}
              value={otp}
              onChange={handleChange}
              autoFocus
            />
          ) : (
            <Button
              variant="outlined"
              onClick={handleClick}
              disabled={isSubmitting}
              fullWidth
            >
              {isSubmitting && (
                <CircularProgress sx={{ position: "absolute" }} size={20} />
              )}
              Send OTP
            </Button>
          )}
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", mt: 2, gap: 1 }}
        >
          <Button variant="outlined" onClick={onClose} color="error">
            Cancel
          </Button>
        </Box>
        <Collapse in={Boolean(error)}>
          {error && (
            <Alert
              sx={{ py: 0, px: 1, mt: 2 }}
              onClose={() => setError("")}
              severity="error"
            >
              <AlertTitle fontSize={15}>Error</AlertTitle>
              <Typography variant="caption">{error}</Typography>
            </Alert>
          )}
        </Collapse>
        <Collapse in={Boolean(isSuccess)}>
          {isSuccess && (
            <Alert
              sx={{ py: 0, px: 1, mt: 2 }}
              onClose={() => setIsSuccess(null)}
              severity="success"
            >
              <AlertTitle fontSize={15}>Success</AlertTitle>
              <Typography variant="caption">{isSuccess}</Typography>
            </Alert>
          )}
        </Collapse>
      </DialogContent>
    </Dialog>
  );
};

export default OtpAuthDialog;
