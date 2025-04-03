import React, { useMemo, useState } from "react";
import { Box, CircularProgress, IconButton } from "@mui/material";
import { getFormatDate } from "../../utiils/dateFormatter";
import DataTable from "react-data-table-component";
import { ArrowDownward, DeleteOutline } from "@mui/icons-material";
import ApiManager from "../../apiManager/apiManager";
import ConfirmDialog from "../confirmDialog.jsx";

const Table = ({ rowData, isLoading, setAlertData, recall }) => {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  async function deleteCareer(id) {
    try {
      const response = await ApiManager.deleteCareer(id);
      console.log(response);
      setAlertData({ message: "Career deleted successfully", severity: "success" });
      recall(); // Trigger data re-fetch
    } catch (error) {
      console.error("Failed to delete career:", error);
      setAlertData({ message: "Failed to delete career", severity: "error" });
    }
  }

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setConfirmOpen(true);
  };

  const handleConfirmDelete = () => {
    deleteCareer(deleteId);
    setConfirmOpen(false);
  };

  const columns = useMemo(() => [
    {
      name: "S. No.",
      selector: (row, ind) => ind + 1,
      width: '65px'
    },
    {
      name: "Title",
      selector: (row, ind) => row.title,
      width: '600px'
    },
    {
      name: "Location",
      selector: (row) => row.location,
      sortable: true,
    },
    {
      name: "Job Type",
      selector: (row) => row.jobType,
      sortable: true,
    },
    {
      name: "Created At",
      selector: (row) => getFormatDate(row.createdAt),
      width: '180px',
      sortable: true,
    },
    {
      name: "Action",
      width: '150px',
      center: true,
      selector: (row) => (
        <>
          <IconButton size="small" onClick={() => handleDeleteClick(row._id)}>
            <DeleteOutline color="error" fontSize="small" />
          </IconButton>
        </>
      ),
    },
  ]);

  return (
    <Box>
      <DataTable
        columns={columns}
        data={rowData}
        sortIcon={
          <IconButton>
            <ArrowDownward />
          </IconButton>
        }
        pagination
        persistTableHead
        striped
        progressPending={isLoading}
        progressComponent={<Box my={1}><CircularProgress size={30} /></Box>}
        dense
      />
      <ConfirmDialog
        onOpen={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={handleConfirmDelete}
        title="Confirm Delete"
        message="Are you sure you want to delete this career?"
      />
    </Box>
  );
};

export default Table;
