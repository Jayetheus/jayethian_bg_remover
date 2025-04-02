import React,  { useState } from 'react';

export default function Form(){
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('📁 Choose an Image');
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
        setFileName(selectedFile ? selectedFile.name : '📁 Choose an Image');
    }

    const handleSubmit = (event) => {

        event.preventDefault();
        if (!file) {
            alert('Please select a file before submitting.');
            return;
        }

        const formData = new FormData();
        formData.append('image', file);
        setLoading(true)
        const fetchData = async () => {await fetch('http://localhost:5000/upload', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.success) {
                alert('Background removed successfully!');
                const link = document.createElement('a');
                link.href = data.download_link;
                link.download = 'output.png';      
                link.click();
            } else {
                alert('Error removing background: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        }).finally(() => {
            setLoading(false);
        })};
        
        fetchData();
    }

    return(
        <div className="file-upload-container">
                {loading && 
                    <div id="loading-screen">
                        <div className="spinner"></div>
                    </div> 
                }
                <label htmlFor="file-input" className="file-upload-label">
                    {fileName}
                </label>
                <input type="file" onChange={handleChange} id="file-input" accept="image/*" required/><br/>
                <br/>
                <button className="upload-button" onClick={handleSubmit}>Remove Image Background</button>
        </div>
    )

}


