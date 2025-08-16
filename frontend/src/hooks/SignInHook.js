import {useState} from "react"
import { useNavigate } from "react-router-dom";

export const SignInHook = ()=>{
    const Navigate = useNavigate();
    const [isLoading , setLoading] = useState(false);
    const signIn = async (user , setError)=>{
        setLoading(true);
        const res = await fetch("http://localhost:4000/api/user/signin",{
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