import { createTheme } from "@mui/material";
import { pxToRem } from "../utility/utility";

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1f2937',
      light: '#37475B',
      contrastText: '#f1ffff',
    },
    secondary: {
      main: '#2496ed',
    },
    
    text: {
      // primary: '#2c2932',
      primary: '#04072E',
      secondary: '#37475B',
    },
  },
  typography:{
    fontFamily:'Poppins',
    body2:{
      fontSize:pxToRem(18),
      fontWeight:600
    },
    body1:{
      fontSize:pxToRem(18),
      fontWeight:500,
      padding:4,
    }
    
  },components:{
   
    MuiDialogTitle:{
        styleOverrides:{
            root:()=>({
                fontWeight:'600',
                fontSize:pxToRem(20),
                paddingTop:10,
                paddingBottom:10,
                paddingLeft:15,
                paddingRight:5,
                borderBottom:'1px solid #EFE7EB',
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center'

            })
        }
    },
    MuiTextField:{
      defaultProps:{
        size:'small',
      },
      variants:[
        {
          props:{variant:'standard',size:'small'},
          style: {
            '& .MuiInput-underline:before': {
              borderBottom: 'none',
            },
            '& .MuiInput-underline:hover:before': {
              borderBottom: 'none',
            },
           
          },
        },
        {
          props:{variant:'standard',size:'small',type:'number'},
          style: {
            '& .MuiInputBase-input': {
              textAlign: 'right', // Ensuring input text is right-aligned
              '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
                WebkitAppearance: 'none',
                margin: 0,
              },
              '&[type=number]': {
                MozAppearance: 'textfield', // Firefox
              },
            },
            '& .MuiInput-underline:before': {
              borderBottom: 'none',
            },
            '& .MuiInput-underline:hover:before': {
              borderBottom: 'none',
            },
           
          },
        }
      ],
    }
  }
});