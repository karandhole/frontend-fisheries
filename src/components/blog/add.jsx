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
import { blogSchema, careerSchema } from "../../utiils/validationSchema";

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
      const response = await ApiManager.createBlog(formData);
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
		title: '',
		description: '',
		hrefLink: '',
		imageAttachment: '',
    },
    onSubmit: handleSubmit,
    validationSchema: blogSchema,
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
          <>Add Blog</>
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
                <InputLabel>Redirection URL</InputLabel>
                <TextField
                  rows={2}
                  fullWidth
                  size="small"
                  {...formik.getFieldProps("hrefLink")}
                  {...getErrorProps("hrefLink")}
                />
              </Grid>
              <Grid item sm={6}>
                <InputLabel>File Attachment</InputLabel>
                <TextField
                  fullWidth
                  type="file"
                  size="small"
                  onChange={(event) =>
                    formik.setFieldValue("imageAttachment", event.currentTarget.files[0])
                  }
                  {...getErrorProps("imageAttachment")}
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
