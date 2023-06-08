import React from 'react'

const SessionItem = ({ session }) => {
    return (
        <>
            <div className="status relative bg-inherit flex items-end mb-4 space-x-1 pb-2 px-4 pt-10">
                <p>Module: </p>
                <p>{session.module}</p>
            </div>
            <div className="class-id pl-4 flex justify-between w-[80%]">
                <span>{session.course}</span>
                <span>room: {session.venue}</span>
            </div>
            <div className="status pl-4">
                <span>{session.status}</span>
            </div>
            <div className="time pl-4">
                <p>{session.starts} - {session.ends}</p>
            </div>

            <div className="seats mt-4 pl-4">
                <p>Seats: {session.seats}</p>
            </div>
        </>
    )
}

export default SessionItem