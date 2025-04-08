import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import { DatePicker } from "@mui/x-date-pickers";
import {
  InputLabel,
  TextField,
  IconButton,
  CircularProgress,
  FormControlLabel,
  Radio,
  RadioGroup,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { CloseOutlined, X } from "@mui/icons-material";
import ApiManager from "../../apiManager/apiManager";
import { careerSchema } from "../../utiils/validationSchema";

const Add = ({ onOpen, onClose, recall, setAlertData }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (values) => {
	console.log(values)
    setIsSubmitting(true);
    console.log(values);
    try {
      let formData = new FormData();
      for (const key in values) {
        formData.append(key, values[key]);
      }
      const response = await ApiManager.createCareer(formData);
      console.log(response);
      if (response.data?.status) {
        console.log(response.data);
        setAlertData({ severity: "success", message: response?.data?.message });
        recall();
        onClose();
      } else {
        setAlertData({ severity: "error", message: response?.data?.message });
      }
    } catch (error) {
    } finally {
      setIsSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      location: "",
      description: "",
      jobType: "",
      fileAttachment: "",
    },
    onSubmit: handleSubmit,
    validationSchema: careerSchema,
  });

  const getErrorProps = (field) => {
    return {
      helperText: formik.touched[field] && formik.errors[field],
      error: formik.touched[field] && Boolean(formik.errors[field]),
    };
  };
  return (
    <React.Fragment>
      <Dialog maxWidth="sm" fullWidth open={onOpen} onClose={onClose}>
        <DialogTitle>
          <>Add New Opening</>
          <IconButton onClick={onClose}>
            <CloseOutlined />
          </IconButton>
        </DialogTitle>
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <DialogContent>
            <Grid container spacing={1}>
              <Grid item sm={12}>
                <InputLabel>Title</InputLabel>
                <TextField
                  fullWidth
                  size="small"
                  {...formik.getFieldProps("title")}
                  {...getErrorProps("title")}
                />
              </Grid>
              <Grid item sm={12}>
                <InputLabel>Description</InputLabel>
                <TextField
                  multiline
                  rows={2}
                  fullWidth
                  size="small"
                  {...formik.getFieldProps("description")}
                  {...getErrorProps("description")}
                />
              </Grid>
              <Grid item sm={6}>
                <InputLabel>Location</InputLabel>
                <Select
				  fullWidth
				  size="small"
				  {...formik.getFieldProps("location")}
				  displayEmpty
				  error={!!formik.errors?.location}
                >
                  <MenuItem disabled value={""}> <em>Select Location</em> </MenuItem>
                  <MenuItem value={"Pune, Maharashtra"}>Pune, Maharashtra</MenuItem>
                  <MenuItem value={"Remote"}>Remote</MenuItem>
                </Select>
				{formik.errors?.location && <Typography color='error' ml={2} variant="caption">{formik.errors?.location}</Typography>}
              </Grid>
              <Grid item sm={6}>
                <InputLabel>Job Type</InputLabel>
                <Select
				  fullWidth
				  size="small"
				  {...formik.getFieldProps("jobType")}
				  displayEmpty
				  error={!!formik.errors?.jobType}
                >
                  <MenuItem disabled value={""}> <em>Select Job Type</em> </MenuItem>
                  <MenuItem value={"Full-Time"}>Full-Time</MenuItem>
                  <MenuItem value={"Part-Time"}>Part-Time</MenuItem>
                  <MenuItem value={"Contract"}>Contract</MenuItem>
                </Select>
				{formik.errors?.jobType && <Typography color='error' ml={2} variant="caption">{formik.errors?.jobType}</Typography>}
              </Grid>
              <Grid item sm={6}>
                <InputLabel>File Attachment</InputLabel>
                <TextField
                  fullWidth
                  type="file"
                  size="small"
                  onChange={(event) =>
                    formik.setFieldValue("fileAttachment", event.currentTarget.files[0])
                  }
                  {...getErrorProps("fileAttachment")}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="info"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? <CircularProgress size={22} /> : "Submit"}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
};

export default Add;
