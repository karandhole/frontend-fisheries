import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';

const DUMMY_DAMS = [
  { id: 1, damName: 'Jayakwadi', city: 'Aurangabad', cages: 25, available: true },
  { id: 2, damName: 'Ujani', city: 'Pune', cages: 18, available: false },
  { id: 3, damName: 'Koyna', city: 'Satara', cages: 12, available: true },
  { id: 4, damName: 'Warna', city: 'Kolhapur', cages: 9, available: true },
  { id: 5, damName: 'Tansa', city: 'Thane', cages: 15, available: false },
  { id: 6, damName: 'Bhatghar', city: 'Pune', cages: 10, available: true },
  { id: 7, damName: 'Yeldari', city: 'Parbhani', cages: 20, available: true },
  { id: 8, damName: 'Panshet', city: 'Pune', cages: 8, available: false },
  { id: 9, damName: 'Mulshi', city: 'Pune', cages: 11, available: true },
  { id: 10, damName: 'Bhatsa', city: 'Thane', cages: 14, available: true },
  { id: 11, damName: 'Hetwane', city: 'Raigad', cages: 7, available: true },
  { id: 12, damName: 'Khadakwasla', city: 'Pune', cages: 10, available: false },
  { id: 13, damName: 'Manjara', city: 'Beed', cages: 13, available: true },
  { id: 14, damName: 'Dhom', city: 'Satara', cages: 6, available: false },
  { id: 15, damName: 'Bhima', city: 'Solapur', cages: 17, available: true },
  { id: 16, damName: 'Chandoli', city: 'Sangli', cages: 9, available: true },
  { id: 17, damName: 'Kukadi', city: 'Ahmednagar', cages: 5, available: false },
  { id: 18, damName: 'Ghod', city: 'Pune', cages: 4, available: true },
];

const columns = [
  {
    field: 'damName',
    headerName: 'Dam Name',
    flex: 1,
    filterable: true,
  },
  {
    field: 'city',
    headerName: 'City',
    flex: 1,
  },
  {
    field: 'cages',
    headerName: 'Number of Cages',
    flex: 1,
    type: 'number',
  },
  {
    field: 'available',
    headerName: 'Available',
    flex: 1,
    renderCell: (params) => (params.value ? 'Yes' : 'No'),
  },
  {
    field: 'actions',
    headerName: 'Actions',
    flex: 1,
    sortable: false,
    filterable: false,
    renderCell: (params) => (
      <Box>
        <IconButton color="primary" onClick={() => console.log('View', params.row)}>
          <VisibilityIcon />
        </IconButton>
        <IconButton color="secondary" onClick={() => console.log('Edit', params.row)}>
          <EditIcon />
        </IconButton>
      </Box>
    ),
  },
];

export default function Dammanage() {
  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={DUMMY_DAMS}
        columns={columns}
        pageSize={10}
        slots={{ toolbar: GridToolbar }}
        checkboxSelection={false}
        disableRowSelectionOnClick
        initialState={{
          filter: {
            filterModel: {
              items: [],
              quickFilterValues: [],
            },
          },
        }}
      />
    </div>
  );
}
