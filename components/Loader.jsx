import React from 'react'
import { CircularProgress } from '@mui/material';
const Loader = () => {
    return (
        <div className="loader flex justify-center items-center relative h-[50vh]">
            <CircularProgress />
        </div>
    )
}

export default Loader