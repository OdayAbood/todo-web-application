import React , {useState} from 'react'
import { useNavigate } from "react-router-dom";

export const SignUpHook= ()=> {
     const Navigate = useNavigate();
     const [isLoading , setLoading] = useState(false);
     const signUp = async (user , setError)=>{
        setLoading(true);
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/user/signup`,{
            method : "POST",
            credentials : 'include',
            headers : {"Content-Type" : "application/json"} ,
            body : JSON.stringify(user)
        })
        const json = await res.json();

        if(json.succeed){
           
            setLoading(false);
            Navigate("/signin");
        }
        if(json.succeed === false){
            setLoading(false);
            if(json.mess) setError(json.mess);
            if(json.err) ;
        }
    }
  return {signUp , isLoading};
}
