import React from "react";

const FileUpload = () => {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("File uploaded:", file.name);
      // Process the file (e.g., send to API for scanning)
    }
  };

  return (
    <div className="file-upload">
      <h3>Upload a File</h3>
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
};

export default FileUpload;