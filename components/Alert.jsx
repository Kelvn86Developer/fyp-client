import React from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai';
const Alert = ({ message }) => {
    return (
        <div className="alert w-full">
            <div className='flex ml-[24%] items-center gap-4 min-h-[40vh] '>
                <AiOutlineInfoCircle className="text-main-400 text-3xl" />
                <h1 className='w-[90%] text-xl'>{message} 😊</h1>
            </div>
        </div>
    )
}

Alert.defaultProps = {
    message: 'Sorry !, No content here today yet, enjoy ',
}
export default Alert