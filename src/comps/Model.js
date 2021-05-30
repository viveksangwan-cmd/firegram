import React from 'react';
import { motion } from 'framer-motion';
const Model = ({ selectedImg, setSelectedImg }) => {

    const clickhandel = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setSelectedImg(null);
        }
    }

    return (
        <motion.div className="backdrop" onClick={clickhandel}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.img src={selectedImg} alt="Enlarged Pic."
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
            />
        </motion.div>
    )
}

export default Model;