import React , {createContext , useState} from 'react'


export const userContext = createContext();

const UserContextProvider = ({children}) => {
  
    const [user , setUser] = useState(null);

    const checkIfuser =async ()=>{
         const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api`,{
            method : "GET",
            credentials : 'include',
            headers : {"Content-Type" : "application/json"} 
        })
        const json = await res.json();

        if(json.succeed){
            setUser(json.user);
                    
        }
        if(json.succeed === false){
            
            if(json.mess) setUser(null);
            if(json.err) setUser(null);
        }
    }
    const Logout = async ()=>{
              const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/user/logout`,{
            method : "GET",
            credentials : 'include',
            headers : {"Content-Type" : "application/json"} 
        })
        const json = await res.json();

        if(json.succeed){
            setUser(null);
                    
        }

    }
    return(
       <userContext.Provider value={{user , checkIfuser , Logout}}>
            {children}
       </userContext.Provider>
    )
}
export default UserContextProvider
