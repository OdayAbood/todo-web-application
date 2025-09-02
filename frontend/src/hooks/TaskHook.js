import React , {useState} from 'react'

import { useNavigate } from 'react-router-dom';

export const TaskHook = () => {
    const Navigate = useNavigate();
    const [isLoading , setLoading] = useState(false);
    const [tasks , setTasks ] = useState([]);
    const [completed , setCompleted] = useState(0);

    const getTasks = async ()=>{
        setLoading(true);
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/task/tasks`,{
            method:"GET",
            headers : {"Content-Type" : "application/json"},
            credentials : 'include'
        })
        const json = await res.json();

        if(json.succeed) {

            setTasks(json.tasks)
            setLoading(false);
        }
        if(json.succeed === false){
            setLoading(false);
        }
    }

    const getCompletedTasks = async ()=>{
        setLoading(true);
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/task/completedtasks`,{
            method:"GET",
            headers : {"Content-Type" : "application/json"},
            credentials : 'include'
        })
        const json = await res.json();

        if(json.succeed) {

            setTasks(json.tasks);
            setCompleted(tasks.length);
            setLoading(false);
        }
        if(json.succeed === false){
            setLoading(false);
        }
    }

    const getPersonalTasks = async ()=>{
        setLoading(true);
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/task/personaltasks`,{
            method:"GET",
            headers : {"Content-Type" : "application/json"},
            credentials : 'include'
        })
        const json = await res.json();

        if(json.succeed) {
        

            setTasks(json.tasks)
            setLoading(false);
        }
        if(json.succeed === false){
           
            setLoading(false);
        }
    }

    const getWorkTasks = async ()=>{
        setLoading(true);
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/task/worktasks`,{
            method:"GET",
            headers : {"Content-Type" : "application/json"},
            credentials : 'include'
        })
        const json = await res.json();

        if(json.succeed) {
           

            setTasks(json.tasks)
            setLoading(false);
        }
        if(json.succeed === false){
           
            setLoading(false);
        }
    }

    const addTask = async (task , setError)=>{
         setLoading(true);
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/task/newtask`,{
            method:"POST",
            headers : {"Content-Type" : "application/json"},
            credentials : 'include',
            body:JSON.stringify(task)
        })
        const json = await res.json();
       

        if(json.succeed) {
            setLoading(false);
            Navigate("/hometask");
        }
        if(json.succeed === false){
           
            if(json.mess)  setError(json.mess);
            setLoading(false);
        }

    }

    const deleteTask = async (taskId)=>{
         setLoading(true);
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/task/delete/${taskId}`,{
            method:"DELETE",
            headers : {"Content-Type" : "application/json"},
            credentials : 'include'
        })
        const json = await res.json();

        if(json.succeed) {
            setLoading(false);
          
            tasks.filter((task)=>{
               
               return task._id !== taskId
            }) ;
           
        }
        if(json.succeed === false){
       
            setLoading(false);
        }
    }
    
    const updateTask = async (task,taskId)=>{
         setLoading(true);
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/task/update/${taskId}`,{
            method:"PATCH",
            headers : {"Content-Type" : "application/json"},
            credentials : 'include',
            body : JSON.stringify(task)
        })
        const json = await res.json();

        if(json.succeed) {
            setLoading(false);
          
            tasks.map((task1)=>{
                if(task1._id === taskId) task1.task = task.task ;
                
            })
        }
        if(json.succeed === false){
           
            setLoading(false);
        }
    }
    const makeTaskCompleted = async (taskId)=>{
         setLoading(true);
         try{

             const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/task/update/complete/${taskId}`,{
                 method:"PATCH",
                 headers : {"Content-Type" : "application/json"},
                 credentials : 'include',
                 body : JSON.stringify({completed : true})
                })
                const json = await res.json();
                
                if(json.succeed) {
                    setLoading(false);
                     tasks.map((task1)=>{
                      if(task1._id === taskId) task1.completed = true ;
                      
                    })
                }
                if(json.succeed === false){
                   
                    setLoading(false);
                }
            }
            catch(err){
               
            }
    }
    return {tasks , getTasks , deleteTask , updateTask , addTask , isLoading , getWorkTasks , getCompletedTasks , getPersonalTasks , makeTaskCompleted , completed }
}

