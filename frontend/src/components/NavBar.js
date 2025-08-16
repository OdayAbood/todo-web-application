import React , {useEffect , useContext} from "react"
import {NavLink , Link} from 'react-router-dom'
import { userContext } from "../context/userContext"

const NavBar = ()=>{
    const {user , checkIfuser} = useContext(userContext);
    useEffect(()=>{
        checkIfuser()
    },[])
    return(
        <div className="flex justify-center ">
            <ul className="flex  justify-around  w-96 bg-glass rounded-3xl">
                {user? (<ul className="flex  justify-around  w-96 bg-glass rounded-3xl">
                           <li><NavLink to="/" className = "link-nav">Home</NavLink></li>
                           <li><NavLink to="/setting" className = "link-nav">Setting</NavLink></li>
                           <li><NavLink to="/hometask" className = "link-nav">Tasks</NavLink></li>
                        </ul>)
                        :(
                        <ul className="flex  justify-around  w-96 bg-glass rounded-3xl">
                            <li><NavLink to="/" className = "link-nav">Home</NavLink></li>
                            <li><NavLink to="/signin" className = "link-nav">SignIn</NavLink></li>
                            <li><NavLink to="/signup" className = "link-nav">SignUp</NavLink></li>
                        </ul>
                    )}
               
            </ul>
        </div>
    )
}
export default NavBar