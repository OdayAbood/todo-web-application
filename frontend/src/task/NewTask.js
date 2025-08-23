import React , {useState} from 'react'

import { TaskHook } from '../hooks/TaskHook'


const NewTask = ()=>{
    const {addTask , isLoading} = TaskHook();
     const [category , setCategory] = useState("work || personal");
    const [task , setTask] = useState("");
    const [error , setError] = useState("");
    const task1 = {category , task}
    const handleSubmit = (e)=>{
        e.preventDefault();
        addTask(task1 , setError);
        
    }
    return(
        <div className="flex justify-center mt-10">
        <form onSubmit={handleSubmit} className=" bg-custme-glass rounded-lg shadow-custom w-96 box-border p-4 h-96">
            <label className="form-label mx-3">Category</label>
            <input className="form-input m-auto min-w-80" type='text' value={category} onChange={(e)=> setCategory(e.target.value)} onFocus={()=>{setError("") ; setCategory("")}}/>
            <label className="form-label mx-3">Content</label>
            <input className="form-input min-w-80" type='text' value={task} onChange={(e)=> setTask(e.target.value)} onFocus={()=>{setError("")}} />
            <div className={error === "" ? (null) : ("error")}>{error}</div>
            <button className='btn translate-x-24 translate-y-12'>{isLoading ? ("waiting.."):("Add New Task") }</button>
        </form>
        </div>
    )
}

export default NewTask