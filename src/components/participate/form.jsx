import { useFormik } from "formik";
import React, { useState } from "react";
import ApiManager from "../../apiManager/apiManager";
import {
  InputLabel,
  TextField,
  Box,
  Grid,
  Button,
  CircularProgress,
  DialogActions,
  DialogContent,
  RadioGroup,
  FormControlLabel,
  Radio,
  Dialog,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { Select, MenuItem } from "@mui/material";
import { FormControl } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { CloseOutlined } from "@mui/icons-material";
import CustomAlert from "../customAlert";
import { venderCreateSchema } from "../../utiils/validationSchema";
import { Link, Navigate, useNavigate } from "react-router-dom";

const states = [
  { value: "AP", label: "Andhra Pradesh" },
  { value: "AR", label: "Arunachal Pradesh" },
  { value: "AS", label: "Assam" },
  { value: "BR", label: "Bihar" },
  { value: "CG", label: "Chhattisgarh" },
  { value: "GA", label: "Goa" },
  { value: "GJ", label: "Gujarat" },
  { value: "HR", label: "Haryana" },
  { value: "HP", label: "Himachal Pradesh" },
  { value: "JH", label: "Jharkhand" },
  { value: "KA", label: "Karnataka" },
  { value: "KL", label: "Kerala" },
  { value: "MP", label: "Madhya Pradesh" },
  { value: "MH", label: "Maharashtra" },
  { value: "MN", label: "Manipur" },
  { value: "ML", label: "Meghalaya" },
  { value: "MZ", label: "Mizoram" },
  { value: "NL", label: "Nagaland" },
  { value: "OR", label: "Odisha" },
  { value: "PB", label: "Punjab" },
  { value: "RJ", label: "Rajasthan" },
  { value: "SK", label: "Sikkim" },
  { value: "TN", label: "Tamil Nadu" },
  { value: "TG", label: "Telangana" },
  { value: "TR", label: "Tripura" },
  { value: "UP", label: "Uttar Pradesh" },
  { value: "UT", label: "Uttarakhand" },
  { value: "WB", label: "West Bengal" },
];

const TenderForm = ({ onOpen, onClose }) => {

  const [isLoading, setIsLoading] = useState(false);
  const [alertData,setAlertData] = useState({severity:'',message:''});
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    setIsLoading(true);
    console.log(values);

    try {
      const response = await ApiManager.createVender(values);
      console.log(response);
      if (response.data?.status) {
        console.log(response.data?.token);
        sessionStorage.setItem("@authToken", response.data?.token);
        sessionStorage.setItem("@userType", "vender");
        navigate("/dashboard")
        window.location.reload();
      } else {
        console.log("API error", response);
        setAlertData({severity:'error',message:response?.data?.message})
      }
    } catch (error) {
      console.error("Error creating user:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const formik = useFormik({
    initialValues: {
      type: "individual",
      name: "",
      groupCompany: "",
      userName: "",
      password: "",
      confirmPassword: "",
      email: "",
      address: {
        addressLine1: "",
        addressLine2: "",
      },
      city: "",
      pinCode: "",
      country: "",
      state: "",
      landLine: "",
      panNo: "",
      gstNo: "",
      mobileNo: "",
      contractValid: null,
      majorProduct: "",
      annualTurnover: "",
      totalEmployee: "",
      companyProfile: "",
      majorCustomer: "",
      cinNo: "",
      isIrs: "yes",
      designation: "",
    },
    onSubmit: handleSubmit,
    validationSchema:venderCreateSchema
  });
  const getErrorProps = (field) => {
    return {
      helperText: formik.touched[field] && formik.errors[field],
      error: formik.touched[field] && Boolean(formik.errors[field]),
    };
  };
  return (
    <>
    {alertData.message && <CustomAlert severity={alertData.severity} onOpen={Boolean(alertData.message)} onClose={()=>setAlertData({...alertData,message:null})} message={alertData.message}/>}
    <Dialog scroll="paper" maxWidth="md" fullWidth open={onOpen} onClose={onClose}>
      <DialogTitle>
        <>Create Profile</>
        <IconButton onClick={onClose}>
          <CloseOutlined />
        </IconButton>
      </DialogTitle>

      <form onSubmit={formik.handleSubmit}>
        <DialogContent dividers={scroll === 'paper'}>
          <Grid container spacing={2}>
            <Grid item sm={12} xs={12}>
              <InputLabel>You are registering as a</InputLabel>
              <RadioGroup row sx={{gap:2}} {...formik.getFieldProps("type")}>
                <FormControlLabel
                  value="individual"
                  control={<Radio size="small" />}
                  label="Individual"
                />
                <FormControlLabel
                  value="company"
                  control={<Radio size="small" />}
                  label="Company"
                />
              </RadioGroup>
            </Grid>
           
                <Grid item md={6} xs={12}>
                  <TextField
                    size="small"
                    label="Name *"
                    fullWidth
                    {...formik.getFieldProps("name")}
                    {...getErrorProps("name")}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    size="small"
                    label="Group Company/Subsidiary"
                    fullWidth
                    variant="outlined"
                    {...formik.getFieldProps("groupCompany")}
                    {...getErrorProps("groupCompany")}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    size="small"
                    label="Login Id *"
                    fullWidth
                    {...formik.getFieldProps("userName")}
                    {...getErrorProps("userName")}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    size="small"
                    type="password"
                    label="Password *"
                    fullWidth
                    {...formik.getFieldProps("password")}
                    {...getErrorProps("password")}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    type="password"
                    size="small"
                    label="Confirm Password *"
                    fullWidth
                    {...formik.getFieldProps("confirmPassword")}
                    {...getErrorProps("confirmPassword")}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    size="small"
                    label="Email Address *"
                    fullWidth
                    {...formik.getFieldProps("email")}
                    {...getErrorProps("email")}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    size="small"
                    label="Address Line1 *"
                    fullWidth
                    {...formik.getFieldProps("address.addressLine1")}
                    helperText={formik.touched.address?.addressLine1 && formik.errors.address?.addressLine1}
                    error={formik.touched.address?.addressLine1 && Boolean(formik.errors.address?.addressLine1)}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    size="small"
                    label="Address Line2"
                    fullWidth
                    {...formik.getFieldProps("address.addressLine2")}
                    {...getErrorProps("address.addressLine2")}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    size="small"
                    label="City *"
                    fullWidth
                    {...formik.getFieldProps("city")}
                    {...getErrorProps("city")}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    size="small"
                    label="PinCode / Zip Code *"
                    fullWidth
                    {...formik.getFieldProps("pinCode")}
                    {...getErrorProps("pinCode")}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    size="small"
                    label="Country *"
                    fullWidth
                    {...formik.getFieldProps("country")}
                    {...getErrorProps("country")}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <FormControl size="small" fullWidth variant="outlined">
                    <InputLabel>State*</InputLabel>
                    <Select error={Boolean(formik.errors.state)} label="State *" {...formik.getFieldProps("state")}>
                      {states.map((state) => (
                        <MenuItem key={state.value} value={state.value}>
                          {state.label}
                        </MenuItem>
                      ))}
                    </Select>
                    {formik.errors.state && <Typography variant="caption" color='error' ml={2}>{formik.errors.state}</Typography>}
                  </FormControl>
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    size="small"
                    label="Landline"
                    fullWidth
                    {...formik.getFieldProps("landLine")}
                    {...getErrorProps("landLine")}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    size="small"
                    label="PAN No *"
                    fullWidth
                    {...formik.getFieldProps("panNo")}
                    onChange={(e)=>formik.setFieldValue('panNo',e.target.value.toUpperCase())}
                    {...getErrorProps("panNo")}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    size="small"
                    label="GST No *"
                    fullWidth
                    {...formik.getFieldProps("gstNo")}
                    onChange={(e)=>formik.setFieldValue('gstNo',e.target.value.toUpperCase())}
                    {...getErrorProps("gstNo")}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    size="small"
                    label="Mobile Number *"
                    fullWidth
                    {...formik.getFieldProps("mobileNo")}
                    {...getErrorProps("mobileNo")}
                  />
                </Grid>
              
                {formik.values.type === "company" && 
               (
              <>
                <Grid item md={6} xs={12}>
                  <TextField
                    size="small"
                    label="Major Product Range(s)"
                    fullWidth
                    {...formik.getFieldProps("majorProduct")}
                    {...getErrorProps("majorProduct")}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    size="small"
                    label="Annual Turnover *"
                    fullWidth
                    {...formik.getFieldProps("annualTurnover")}
                    {...getErrorProps("annualTurnover")}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                <FormControl size="small" fullWidth variant="outlined">
                    <InputLabel>Number of Employees *</InputLabel>
                    <Select error={Boolean(formik.errors.totalEmployee)} label="Number of Employees" {...formik.getFieldProps("totalEmployee")}>
                      {['0 - 50','51 - 200','201 - 200','201 - 500','501 - 1000'].map((item) => (
                        <MenuItem key={item} value={item}>
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                    {formik.errors.totalEmployee && <Typography variant="caption" color='error' ml={2}>{formik.errors.totalEmployee}</Typography>}
                  </FormControl>
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    multiline
                    minRows={3}
                    size="small"
                    label="Company Profile *"
                    fullWidth
                    {...formik.getFieldProps("companyProfile")}
                    {...getErrorProps("companyProfile")}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                  multiline
                  minRows={3}
                    size="small"
                    label="Major Customers"
                    fullWidth
                    {...formik.getFieldProps("majorCustomer")}
                    {...getErrorProps("majorCustomer")}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    size="small"
                    label="D&B CIN No"
                    fullWidth
                    variant="outlined"
                    {...formik.getFieldProps("cinNo")}
                    {...getErrorProps("cinNo")}
                  />
                </Grid>
                
                <Grid item md={6} xs={12}>
                  <TextField
                    size="small"
                    select
                    label="Designation *"
                    fullWidth
                    {...getErrorProps("designation")}
                    {...formik.getFieldProps("designation")}
                  >
                    <MenuItem value="Manager">Manager</MenuItem>
                    <MenuItem value="Consultants">Consultants </MenuItem>
                    <MenuItem value="Contractors">Contractors</MenuItem>
                    <MenuItem value="Freelancers">Freelancers</MenuItem>
                  </TextField>
                </Grid>
                <Grid sx={{flexDirection:'row',display:'flex',alignItems:'center'}} item md={6} xs={12}>
                  <InputLabel>
                    D&B IRS :
                  </InputLabel>
                  <RadioGroup
                    row
                    sx={{ paddingLeft: 4, gap: 2 }}
                    {...formik.getFieldProps("isIrs")}
                  >
                    <FormControlLabel
                      value="yes"
                      control={<Radio size="small" />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio size="small" />}
                      label="No"
                    />
                  </RadioGroup>
                </Grid>
              </>
            )}
          </Grid>
            <DialogActions>
              <Typography variant="caption">Already have an account ? </Typography><Typography variant="caption" component={Link} to={'/vender-login'}>Log In</Typography>
              <Button variant="contained" type="submit" color="info" disabled={isLoading}>
                {isLoading && <CircularProgress size={20} sx={{position:'absolute'}} />} Submit
              </Button>
            </DialogActions>
        </DialogContent>
      </form>
    </Dialog>
    </>
  );
};

export default TenderForm;
