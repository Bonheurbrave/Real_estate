import React , {useState} from 'react'
import axios from 'axios';
function Upload() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
  
    const handleUpload = () => {
      const formData = new FormData();
      formData.append('image', selectedFile);
  
      axios.post('http://localhost:4000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(response => {
        console.log(response.data);
      }).catch(error => {
        console.error(error);
      });
    }
  return (
    <>
      <div>
      <h2>Image Uploader</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
    </>
  )
}

export default Upload