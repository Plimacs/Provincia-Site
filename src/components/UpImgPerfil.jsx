import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import firebase from 'firebase/compat/app';
import 'firebase/storage';
import React, { useState } from 'react';

const UpImgPerfil = ({ userId }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const storage = getStorage(firebase);
      const storageRef = ref(storage, `usuarios/${userId}/compras/${selectedFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, selectedFile);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setUploadProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          console.log('Upload completo');
        }
      );
    }
  };

  return (
    <div>
      <h2>Enviar Imagens</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {uploadProgress > 0 && <div>{uploadProgress}% concluído</div>}
    </div>
  );
};

export default UpImgPerfil;