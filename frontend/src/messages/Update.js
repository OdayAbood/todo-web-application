import React , {useState , useEffect} from 'react'
import { TaskHook } from '../hooks/TaskHook';

const Update = ({setupd , upd , task1})=>{
    const {updateTask} = TaskHook();
    const [task , setTask] = useState('');
    const handleUpdate = ()=>{
        const updatetask={task};
        updateTask(updatetask,upd);
        setupd(null);
    }
    useEffect(()=>{
        setTask(task1);
    } , [])
       const handleSubmit = (e)=>{
        e.preventDefault();
    }
    return (
        <div className="flex justify-center items-center absolute sm:left-1 z-50 right-1/4 sm:right-1">
            <div className="w-44 h-36 bg-white shadow-custom rounded-2xl box-border p-3">
                <p className="text-main-blue">Are you sure you wanna update it</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" className="w-full border-main-red border-2 my-2 rounded focus:outline-none p-1" value={task} onChange={(e)=>{setTask(e.target.value)}}/>
                <div className="flex justify-end gap-2">
                    <button className="greenbtn" onClick={handleUpdate}>Update</button>
                    <button className="redbtn"onClick={()=>{setupd(null)}}>Close</button>
                </div>
                </form>
            </div>

        </div>
    )
}
export default Update ;