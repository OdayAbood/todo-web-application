import {useState} from "react"
import { useNavigate } from "react-router-dom";

export const SignInHook = ()=>{
    const Navigate = useNavigate();
    const [isLoading , setLoading] = useState(false);
    const signIn = async (user , setError)=>{
        setLoading(true);
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/user/signin`,{
            method : "POST",
            credentials : 'include',
            headers : {"Content-Type" : "application/json"} ,
            body : JSON.stringify(user)
        })
        const json = await res.json();

        if(json.succeed){
            setLoading(false);
            Navigate("/hometask");
            window.location.reload();
        }
        if(json.succeed === false){
            setLoading(false);
            if(json.mess)  setError(json.mess);
            if(json.err) ;
        }
    }
    return {signIn , isLoading} ;
}