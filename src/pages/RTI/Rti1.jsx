import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TablePagination,
  TableRow,
  Paper,
  IconButton,
  Typography,
} from '@mui/material';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import DownloadIcon from '@mui/icons-material/Download';
import { useTranslation } from 'react-i18next';

function TablePaginationActions(props) {
    
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton onClick={(e) => onPageChange(e, 0)} disabled={page === 0} aria-label="first page">
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={(e) => onPageChange(e, page - 1)} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={(e) => onPageChange(e, page + 1)}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={(e) => onPageChange(e, Math.max(0, Math.ceil(count / rowsPerPage) - 1))}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

// Your custom row data (you can update with actual PDFs and titles)
const rows = [
  { title: 'Annual Report 2023', fileUrl: '/pdfs/report2023.pdf' },
  { title: 'Project Proposal 2024', fileUrl: '/pdfs/proposal2024.pdf' },
  { title: 'RTI Disclosure', fileUrl: '/pdfs/rti-disclosure.pdf' },
  { title: 'Budget Summary', fileUrl: '/pdfs/budget-summary.pdf' },
  { title: 'Fisheries Scheme Details', fileUrl: '/pdfs/scheme-details.pdf' },
  { title: 'Environmental Impact', fileUrl: '/pdfs/environmental.pdf' },
];

export default function Rti1() {
    const {t} = useTranslation();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}   sx={{
        marginTop: '40px',
        padding:'40px',
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor:'aliceblue',
      }}>
      <Table sx={{ minWidth: 700 }} aria-label="RTI Documents Table">
        <TableBody>
          <TableRow sx={{backgroundColor:'black'}}>
            <TableCell sx={{color:'white'}}><strong>Sr. No.</strong></TableCell>
            <TableCell sx={{color:'white'}}><strong>{t("titlerti")}</strong></TableCell>
            <TableCell align="center" sx={{color:'white'}}><strong>{t("filerti")}</strong></TableCell>
          </TableRow>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row, index) => (
            <TableRow key={row.title}>
              <TableCell>{page * rowsPerPage + index + 1}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell align="center">
                <a href={row.fileUrl} target="_blank" rel="noopener noreferrer" download>
                  <IconButton color="primary">
                    <DownloadIcon />
                  </IconButton>
                </a>
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={3} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
              slotProps={{
                select: {
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                },
              }}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
