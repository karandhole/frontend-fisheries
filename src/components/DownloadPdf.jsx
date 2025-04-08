import { Button, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import ApiManager from "../apiManager/apiManager";
import AuthDialog from "./auth-dialog";
import OtpAuthDialog from "./otp-auth-dialog";

const DownloadPdf = ({ imageKey, label, isAuthorize }) => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [authOpen,setAuthOpen] = useState(false);

  useEffect(() => {
    const getUrl = async () => {
      try {
        const response = await ApiManager.getSignedUrl(imageKey);
        if (response.data?.status) {
          setUrl(response.data?.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (imageKey) {
      getUrl();
    } else {
      setIsLoading(false);
    }
  }, [imageKey]);

  const handleConfirm = () => {
    setAuthOpen(false)
    window.open(url);
  }
  if (isAuthorize) {
    return (
      <>
      <Button onClick={()=>setAuthOpen(true)} size="small" disabled={isLoading} variant="outlined">
        {label}
      </Button>
      {authOpen && <OtpAuthDialog onOpen={authOpen} onClose={()=>setAuthOpen(false)} onConfirm={handleConfirm}/>}
      </>
    );
  }
  return (
    <Button
      LinkComponent={"a"}
      href={url}
      target="_blank"
      download
      size="small"
      disabled={isLoading}
      variant="outlined"
    >
      {isLoading && (
        <CircularProgress sx={{ position: "absolute" }} size={20} />
      )}
      {label}
    </Button>
  );
};

export default DownloadPdf;
