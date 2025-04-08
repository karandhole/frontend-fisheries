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
import { careerSchema, gallerySchema } from "../../utiils/validationSchema";

const Add = ({ onOpen, onClose, recall, setAlertData }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (values) => {
	console.log(values)
    setIsSubmitting(true);
    console.log(values);
    try {
      let formData = new FormData();
      formData.append("filePath", values.filePath);
      const response = await ApiManager.createGalleryImage(formData);
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
      filePath: "",
    },
    onSubmit: handleSubmit,
    validationSchema: gallerySchema,
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
          <>Add Image</>
          <IconButton onClick={onClose}>
            <CloseOutlined />
          </IconButton>
        </DialogTitle>
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <DialogContent>
            <Grid container spacing={1}>
              <Grid item sm={12}>
                <InputLabel>Image</InputLabel>
                <TextField
                  fullWidth
                  type="file"
                  size="small"
                  onChange={(event) =>
                    formik.setFieldValue("filePath", event.currentTarget.files[0])
                  }
                  {...getErrorProps("filePath")}
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
