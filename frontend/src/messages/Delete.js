import React from 'react'
import { TaskHook } from '../hooks/TaskHook';

const Delete = ({del , setdel})=>{
    const {deleteTask} = TaskHook();
    const handleDelete = ()=>{
        deleteTask(del);
        setdel(null);
    }
    return (
        <div className="flex justify-center items-center absolute sm:left-1 z-50 right-1/4 sm:right-1">
            <div className="w-44 h-32 bg-white shadow-custom rounded-2xl box-border p-3">
                <p className="text-main-blue mb-7">Are you sure you wanna delete it</p>
                <div className="flex justify-end gap-2">
                    <button className="greenbtn" onClick={handleDelete}>Delete</button>
                    <button className="redbtn" onClick={()=>{setdel(null)}}>Close</button>
                </div>
            </div>

        </div>
    )
}
export default Delete ;