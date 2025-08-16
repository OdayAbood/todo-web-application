import React from'react'
import homeImage from '../images/homeImage.jpeg'
import { Link } from 'react-router-dom'

const NotUser =()=>{
    return(
        <div>
        <div className = 'flex justify-center flex-row  h-auto  relative top-16 '>
            <div className="w-80 h-80 bg-custme-glass  relative rounded-2xl shadow-custom ">
                    <p className="text-white p-3 box-border font-serif w-full ">If YOU Alrady have an account click on signin, If you do not click on signup</p>
                    <img className="size-36 absolute left-1/2 -translate-x-1/2 rounded-md" src={homeImage}/>
                <div className="flex justify-evenly items-center absolute gap-2 bottom-1 left-1/2 -translate-x-1/2 " >
                    <Link to="/signin" className="btn flex justify-center items-center ">Sign In</Link>
                    <Link to="/signup" className="btn flex justify-center items-center ">Sign Up</Link>
                </div>
            <p className="flex font-serif text-white w-64 bg-custom-glass shadow-custom p-4 absolute -bottom-64 left-1/2 -translate-x-1/2 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Iusto dolor debitis recusandae magnam sit accusamus eaque, omnis,
                  aut nulla, doloremque rem repudiandae qui neque.
                 Doloremque ullam totam animi laboriosam suscipit.</p>
            </div>
        </div>
        </div>
    )
}
export default NotUser ;