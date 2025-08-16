import React ,{useState} from 'react'
import { SignInHook } from '../hooks/SignInHook';


const SignIn = ()=>{
    const {signIn , isLoading} = SignInHook();
    const [error , setError] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const user = {email , password}
    const handleSubmit = (e)=>{
        e.preventDefault();
        signIn(user,setError);
    }
    return(
        <div className = 'flex justify-center items-center flex-row w-full h-full relative  '>
        <form onSubmit={handleSubmit} className="absolute top-5 left-1/2 -translate-x-1/2 bg-custme-glass rounded-lg shadow-custom sm:w-96 box-border p-4 h-96 w-72">
            <label className="form-label mx-3">Email</label>
            <input className="form-input m-auto" type='text' value={email} onChange={(e)=>{setEmail(e.target.value)}}  onFocus={()=>{setError("")}}/>
            <label className="form-label mx-3">PassWord</label>
            <input className="form-input" type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}  onFocus={()=>{setError("")}}  />
            <div className={error === "" ? (null) : ("error")}>{error}</div>
            <button className='btn m-3 absolute left-1/2 -translate-x-1/2 bottom-2'>{isLoading?("Waiting..."):("SignIn")}</button>
        </form>
        </div>
    )
}

export default SignIn