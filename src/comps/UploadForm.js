import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
const UploadForm = () => {
    const [error, setError] = useState(null);
    const [file, setFile] = useState(null);
    const fileTypes = ["image/png", "image/jpeg"]
    const changeHandler = (e) => {
        let selected = e.target.files[0];
        if (selected && fileTypes.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png or image)');
        }
    }

    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler} />
                <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div >}
                {file && <div className="error">{file.name}</div >}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}

export default UploadForm;