import React from "react";
import { downloadImage } from "@/utils/helperFunctions"; // Assuming downloadImage function is exported from utils file

const DownloadButton = ({ imageUrl, imageName }) => {
  const handleDownload = () => {
    downloadImage(imageUrl, imageName);
  };

  return (
    <button  onClick={handleDownload}>
      Download
    </button>
  );
};

export default DownloadButton;
