import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  InputLabel,
  TextField,
  Box,
  Alert,
  AlertTitle,
  Collapse,
} from "@mui/material";

const AuthDialog = ({onOpen,onClose,onConfirm}) => {
	const [error,setError] = useState(null);
	const [formData,setFormData] = useState({userName:"",password:""});
	const handleChange = (e) => {
		const {name,value} = e.target;
		setFormData({...formData,[name]:value})
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		setError(null)
		console.log(formData)
		if(formData.userName === "divyangbhavan" && formData.password === "pcmc@1982"){
			onConfirm()
		}else{
			setError("The credentials you entered are incorrect.")
		}
	}
  return (
    <Dialog open={onOpen} maxWidth={'sm'} fullWidth onClose={onClose}>
      <DialogTitle>Authorize</DialogTitle>
      <DialogContent>
		<Box component='form' onSubmit={handleSubmit}>
		<InputLabel sx={{pt:2}}>Username</InputLabel>
		<TextField fullWidth size="small" name="userName" required value={formData.userName} onChange={handleChange}/>		
		<InputLabel sx={{pt:2}}>Password</InputLabel>
		<TextField type="password" fullWidth size="small" name="password" required value={formData.password} onChange={handleChange}/>	
		<Box sx={{display:'flex',justifyContent:'flex-end',mt:2,gap:1}}>
		<Button variant="outlined" onClick={onClose} color="error">
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Confirm
        </Button>
		</Box>
		</Box>
		<Collapse in={Boolean(error)}>
		{error && <Alert sx={{py:0,px:1,mt:2}} onClose={()=>setError("")} severity="error">
  <AlertTitle fontSize={15} >Error</AlertTitle>
  <Typography variant="caption">{error}</Typography>
</Alert>}
</Collapse>
      </DialogContent>
    </Dialog>
  )
}

export default AuthDialog
