import React from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai';
const InfoCard = ({info}) => {
    return (
        <div className='relative bg-main-130 w-[56%] rounded-md flex flex-col gap-2 pl-3 pr-2 pt-2 min-h-[42vh]'>
            <div className="top-content flex flex-col mt-4 gap-1 justify-start">
                <div className="icon w-[20%]">
                    <AiOutlineInfoCircle className="text-main-400 text-3xl" />
                </div>

                <div className="greeting w-[50%] font-semibold">
                    <h3>Hello!, {info.lecturer}</h3>
                </div>
                <div className="info-content text-sm">
                    <p>New: {info.title}</p>
                </div>
                <div className="info-course text-sm">
                    <p>Department: {info.department}</p>
                </div>
            </div>

            <div className="bottom-content absolute bottom-3 left-3 self-end text-[0.7rem]">
                <p>Note: {info.note}</p>
            </div>
        </div>
    )
}

export default InfoCard