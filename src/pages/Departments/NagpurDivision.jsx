import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

function createData(no, name, designation) {
  return { no, name, designation };
}

const rows = [
  createData(1, "officer31", "designation31"),
  createData(2, "officer32", "designation32"),
  createData(3, "officer33", "designation33"),
  createData(4, "officer34", "designation34"),
  createData(5, "officer35", "designation35"),
  createData(6, "officer36", "designation36"),
  createData(7, "officer37", "designation37"),
  createData(8, "officer38", "designation38"),
];

export default function NagpurDivision() {
  const {t} =useTranslation();
  return (
    <Box sx={{ marginTop: 6, px: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
       {t("department2")}
      </Typography>

      <TableContainer component={Paper} sx={{p:6,boxShadow:3,borderRadius:2 }}>
        <Table sx={{ minWidth: 450 }} aria-label="division table">
          <TableHead>
            <TableRow sx={{backgroundColor:'#76a6f5'}}>
              <TableCell><strong>{t("srno")}</strong></TableCell>
              <TableCell align="right"><strong>{t("name")}</strong></TableCell>
              <TableCell align="right"><strong>{t("designation")}</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.no}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{row.no}</TableCell>
                <TableCell align="right">{t(row.name)}</TableCell>
                <TableCell align="right">{t(row.designation)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Contact Information Section */}
      <Box
      sx={{
        marginTop: 6,
        p: 6,
        backgroundColor: '#f1f5f9',
        borderRadius: 2,
        alignItems: 'center',
        textAlign: 'center',
        
      }}
    >
      <Typography variant="h5" gutterBottom>
        {t("contactinfo")}
      </Typography>
      <Typography variant="body1">
        <strong>{t("corpName2")}</strong>
      </Typography>
      <Typography variant="body1">
        {t("address2")}
      </Typography>
      <Typography variant="body1">
        <strong>{t("email2")}</strong>
      </Typography>
      <Typography variant="body1">
        <strong>{t("phone2")}</strong>
      </Typography>
    </Box>
    </Box>
  );
}
