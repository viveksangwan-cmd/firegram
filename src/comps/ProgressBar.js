import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import useStorage from './../Hooks/useStorage';

const ProgressBar = ({ file, setFile }) => {
    const { url, progress } = useStorage(file);
    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile])

    return (
        <motion.div className="progress-bar"
            initial={{ width: 0 }}
            animate={{ width: progress + '%' }}
        />
    )
}

export default ProgressBar;