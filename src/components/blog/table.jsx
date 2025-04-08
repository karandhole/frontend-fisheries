import React, { useMemo, useState } from "react";
import { Box, CircularProgress, IconButton } from "@mui/material";
import { getFormatDate } from "../../utiils/dateFormatter";
import DataTable from "react-data-table-component";
import { ArrowDownward, DeleteOutline } from "@mui/icons-material";
import ApiManager from "../../apiManager/apiManager";
import ConfirmDialog from "../confirmDialog.jsx";

const Table = ({ rowData, isLoading, recall, setAlertData }) => {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  async function deleteBlog(id) {
    try {
      const response = await ApiManager.deleteBlog(id);
      console.log(response);
      setAlertData({ message: "Blog deleted successfully", severity: "success" });
      recall();
    } catch (error) {
      console.error("Failed to delete Blog:", error);
      setAlertData({ message: "Failed to delete blog", severity: "error" });
    }
  }

  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setConfirmOpen(true);
  };

  const handleConfirmDelete = () => {
    deleteBlog(selectedId);
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
      name: "Redirection URL",
      selector: (row) => row.hrefLink,
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
      selector: (row, ind, ass) => (
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
        message="Are you sure you want to delete this blog?"
      />
    </Box>
  );
};

export default Table;
