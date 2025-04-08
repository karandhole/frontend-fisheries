import { Delete, MoreVert } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Skeleton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ApiManager from "../../apiManager/apiManager";
import { getFormatDate } from "../../utiils/dateFormatter";
import ConfirmDialog from "../confirmDialog.jsx";

const ImageCard = ({filePath,createdAt,id, recall, setAlertData}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState("");
  const [confirmOpen, setConfirmOpen] = useState(false);

  async function deleteCard(id) {
    try {
      const response = await ApiManager.deleteGalleryImage(id);
      console.log(response);
      setAlertData({ message: "GalleryImage deleted successfully", severity: "success" });
      recall(); 
    } catch (error) {
      console.error("Failed to delete GalleryImage:", error);
      setAlertData({ message: "Failed to delete GalleryImage", severity: "error" });
    }
  }

  useEffect(() => {
    const getUrl = async () => {
      try {
        const response = await ApiManager.getSignedUrl(filePath);
        if (response.data?.status) {
          setUrl(response.data?.data);
          console.log("QWErt", response.data?.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (filePath) {
      getUrl();
    } else {
      setIsLoading(false);
    }
  }, [filePath]);

  return (
    <>
      {isLoading ? (
        <Card>
          <Box sx={{ display: "flex", justifyContent: "space-between", p: 1 }}>
            <Skeleton
              animation="wave"
              height={40}
              width="80%"
              style={{ marginBottom: 6 }}
            />

            <Skeleton
              animation="wave"
              variant="circular"
              width={30}
              height={30}
            />
          </Box>

          <Skeleton
            sx={{ height: 240 }}
            animation="wave"
            variant="rectangular"
          />
        </Card>
      ) : (
        <Card>
          <Box sx={{ display: "flex", justifyContent: "space-between", py: 1,pl:1 }}>
            <Box>
              <Typography variant="body2">Uploaded on</Typography>
              <Typography variant="body1">{getFormatDate(createdAt)}</Typography>
            </Box>
            <IconButton onClick={() => setConfirmOpen(true)}>
              <Delete color="error" />
            </IconButton>
          </Box>
          <CardMedia
            component="img"
            height="240"
            image={url}
            alt="Image Not Found"
          />
        </Card>
      )}
      <ConfirmDialog
        onOpen={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={() => {
          deleteCard(id);
          setConfirmOpen(false);
        }}
        title="Delete Confirmation"
        message="Are you sure you want to delete this image?"
      />
    </>
  );
};

export default ImageCard;
