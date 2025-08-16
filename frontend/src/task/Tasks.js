import React , {useState , useEffect} from'react'
import Delete from '../messages/Delete'
import Update from '../messages/Update'
import { TaskHook } from '../hooks/TaskHook'

const Tasks =()=>{
    const [del , setDel] = useState(null);
    const [upd , setUpd] = useState(null);
    const [isCategory , setCategory] = useState(false);
    const [type , setType] = useState("")
    const {tasks , getTasks , getCompletedTasks , getPersonalTasks , getWorkTasks , makeTaskCompleted} = TaskHook();
    const handleDelete = (id)=>{
        setDel(id);
        setUpd(null);
       
    }
    const handleUpdate = (id)=>{
        setUpd(id);
        setDel(null);
    }

    useEffect(()=>{
        if(!isCategory)
        getTasks();
    else{
        if(type === "work") getWorkTasks();
        else if (type === "personal") getPersonalTasks();
        else getCompletedTasks();
    }

    },[tasks])

    const handleWork = ()=>{
        setCategory(true);
        setType("work")
        getWorkTasks();
    }
    const handlePersonal = ()=>{
        setCategory(true);
        setType("personal");
        getPersonalTasks();
    }
    const handleCompleted = ()=>{
        setCategory(true);
        setType("completed");
        getCompletedTasks();
    }
    const handleTaskCompleted = (id)=>{
        makeTaskCompleted(id);
    }
    return(
        <div className="w-full h-96 bg-custom-glass flex justify-around flex-wrap sm:mt-0 mt-6">
            <div className="w-96 h-96 bg-custme-glass relative rounded-2xl shadow-custom lg:-translate-y-9 p-4 overflow-y-auto">
                {tasks.length !== 0? (
                    tasks.map(task=>{
                        return(

                            <div key={task._id} className={"flex my-2 justify-center items-center"}>
                   <div className="task">{task.task}</div>
                   <div className="flex ">
                    <button onClick={()=>handleDelete(task._id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" 
                      stroke="currentColor" className="size-5 text-white ">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 
                      9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 
                      19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 
                      0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108
                      0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0
                      0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964
                      0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                     </svg>
                    </button>
                    {del === task._id ? (<Delete setdel={setDel} del={del}/>) : (null)}
                    <button onClick={()=>handleUpdate(task._id)}>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" 
                     stroke="currentColor" className="size-5 text-white">
                     <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 
                     1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 
                     1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 
                     0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0
                     0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg>
                    </button>
                    {upd === task._id ? (<Update setupd={setUpd} upd={upd} task1={task.task + ""}/>) : (null)}
                    <button className={task.completed ? ("completed"):("notcompleted")} onClick={()=> handleTaskCompleted(task._id)}></button>
                   </div>
                </div>
                     )
                    })
                ) : (<div className="task flex justify-center">There is no task go and add some</div>)}
            </div>
            <div className="categories">
                 <button className="category" onClick={()=> {setCategory(false); getTasks()}}>Tasks</button>
                 <button className="category" onClick={handleWork}>Work</button>
                 <button className="category" onClick={handlePersonal}>Personal</button>
                 <button className="category" onClick={handleCompleted}>Completed</button>
            </div>
        </div>
    )
}
export default Tasks ;