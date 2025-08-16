import React , {useContext , useEffect , useState} from 'react'
import {userContext} from "../context/userContext"
import { TaskHook } from '../hooks/TaskHook';
import { useNavigate } from 'react-router-dom';
const Setting = () => {
    const Navigate = useNavigate();
  const {user , Logout} = useContext(userContext);
  const {tasks , getTasks} = TaskHook();
  var completed = 0 ;
  var work = 0 ;
  const [pers , setPers] = useState(null);
  const [com , setCom] = useState(null);

  const numberOfComplted = ()=>{
    tasks.map(task =>{
      if(task.completed === true) completed = completed + 1 ;
      if(task.category === "work") work = work + 1 ;
    })
    setCom(completed);
    setPers(work);
  }
  const handleLog = ()=>{
    Logout();
    Navigate("/");
    window.location.reload();
  }

  useEffect(()=>{
    getTasks();
    numberOfComplted();
  },[tasks]);

  return (
    <div className="flex justify-center mt-10 w-full h-full">
      <div className="felx max-w-96 bg-glass shadow-custom w-72 h-600 rounded-3xl sm:w-4/5 ">
        <h1 className="text-white font-bold w-full flex justify-center box-border p-2 mt-4 border-b-4 border-hover">Setting Your Account</h1>
        <div  className="text-white font-bold w-full flex  box-border p-3 my-2 border-b-4 border-hover">
         User Name  :  {user.firstname}  {user.lastname}</div>
        <div className="text-white font-bold w-full flex  box-border p-3 my-2 border-b-4 border-hover">
          Number Of Tasks : {tasks.length}  
        </div>
        <div className="text-white font-bold w-full flex  box-border p-3 my-2 border-b-4 border-hover">
          Number Of Tasks Are Not Completed :  {tasks.length - com}
        </div>
        <div className="text-white font-bold w-full flex  box-border p-3 my-2 border-b-4 border-hover">
          Number Of Tasks Are Completed : {com} 
        </div>
        <div className="text-white font-bold w-full flex  box-border p-3 my-2 border-b-4 border-hover">
          Number Of Work Tasks : {pers} 
        </div>
        <div className="text-white font-bold w-full flex  box-border p-3 my-2 border-b-4 border-hover">
          Number Of Personal Tasks : {tasks.length - pers} 
        </div>
        <div className="text-white font-bold w-full flex  box-border p-3 my-2 border-b-4 border-hover">
          Log Out : <button className="ml-1 hover:text-main-red transition" onClick={handleLog}>Click Here</button> 
        </div>
      </div>
    </div>
  )
}

export default Setting