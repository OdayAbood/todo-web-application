import React , {useEffect , useContext , useState} from'react'
import Tasks from './Tasks';
import NewTask from './NewTask';
import WelcomeTask from './WelcomeTask';
import { userContext } from '../context/userContext';
import {TaskHook} from '../hooks/TaskHook'

const HomeTask =()=>{
     const { checkIfuser } = useContext(userContext);
    useEffect(()=>{
       checkIfuser();
    },[])
    return(
        <div className="mt-5">
            <WelcomeTask/>
            <Tasks/>
        </div>
    )
}
export default HomeTask ;