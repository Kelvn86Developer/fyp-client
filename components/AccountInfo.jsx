import React from 'react'

const AccountInfo = ({ student, lecturer, type }) => {
    const { fullName, regNumber, email, course, year,stream, modules } = student
    return (
        <div className='w-[46%] relative flex flex-col'>
            <h3 className='text-main-400 text-lg font-semibold'>Student info</h3>
            <div className="top-layer flex flex-col gap-2 w-[96%]">
                <div className="full-name bg-main-130 pl-2 py-1">
                    <p>{fullName}</p>
                </div>
                <div className="full-name bg-main-130 pl-2 py-1">
                    <p>{regNumber}</p>
                </div>
                <div className="full-name bg-main-130 pl-2 py-1">
                    <p>{email}</p>
                </div>
            </div>
            <div className="btn-edit-profile border-b-2 w-[30%] mt-8">
                <button className="bg-transparent text-gray-900 px-4 outline-none border-0 ">Edit Profile</button>
            </div>

             <div className="course-info flex flex-col mt-8">
                <h2 className='text-main-400 text-lg font-semibold'>Course info</h2>
                <div className="course flex items-center gap-4 w-full text-sm">
                    <span>{course}</span>
                    <span>{year}</span>
                    <span>{stream}</span>
                </div>
             </div>

             <div className="modules-info flex flex-col mt-8 gap-2">
                <h2 className='text-main-400 text-lg font-semibold'>Modules info</h2>
                {modules.map((module, index) => (
                    <div className="module flex items-center gap-4 w-full text-sm" key={module.id + index}>
                         <span>{module.title}</span>
                         <span>{module.code}</span>
                         <span>{module.lecturer}</span>
                    </div>
                ))}
             </div>
        </div>
    )
}


export default AccountInfo