import React from'react'
import { useNavigate } from 'react-router-dom';
import welcomeImage from '../images/wlcomeImage.jpeg'



const WelcomeTask =()=>{
    const Navigate = useNavigate();
    return(
        <div className="flex justify-evenly">
            <div className="w-72 mt-12">
                <h1 className="text-white font-serif text-3xl mb-0.5">Welcome to </h1>
                <h1 className="text-white font-serif text-2xl mb-0.5 mt-3">To-Do App </h1>
                <div className="w-80 backdrop-blur-md bg-glass p-3 box-border rounded-md shadow-custom mt-3">
                <button className=" text-white font-serif 
                text-xl w-full flex justify-start " onClick={()=> Navigate("/newtask")}>Add New Task</button>
                </div>
            </div>
            <img src={welcomeImage} className="w-64 h-52 hidden sm:inline rounded-2xl shadow-md lg:w-80 lg:h-72"/>        
        </div>
    )
}
export default WelcomeTask 