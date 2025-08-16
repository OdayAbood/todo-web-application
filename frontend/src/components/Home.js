import React , {useContext , useEffect} from'react'
import homeImage from '../images/homeImage.jpeg'
import { Link } from 'react-router-dom'
import { userContext } from '../context/userContext'

const Home =()=>{
    const {user ,  checkIfuser} = useContext(userContext);
    useEffect(()=>{
         checkIfuser();
    },[])
    return(
        <div className = 'flex justify-center flex-row relative w-full h-full'>
            <div className = "absolute left-1/2 -translate-x-1/2 translate-y-20">
                 <img className = " rounded-2xl min-w-64 min-h-56 lg:max-w-575 lg:max-h-447 " src={homeImage} />
                 <Link to={user?("/hometask"):("/notuser")} className="font-bold absolute left-1/2 -translate-x-1/2 btn -bottom-20 flex
                  justify-center items-center ">Get Started</Link>
            </div>
        </div>
    )
}
export default Home ;