import React , {useState} from 'react'
import {SignUpHook} from "../hooks/SignUpHook"

const SignUp = ()=>{
    const {signUp , isLoading} = SignUpHook();
    const [error , setError] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [firstname , setFirstname] = useState("");
    const [lastname , setLastname] = useState("");
    const user = {firstname , lastname , email , password};
    const handleSubmit = (e)=>{
      
        e.preventDefault();

    }
    return(
        <div className = 'flex justify-center items-center flex-row w-full h-full relative '>
        <form onSubmit={handleSubmit} className="absolute top-5 left-1/2 -translate-x-1/2 bg-custme-glass rounded-lg shadow-custom sm:w-96 w-72 box-border p-4 h-600">
            <label className="form-label">FirstName</label>
            <input  className="form-input" type='text' value={firstname} onChange={(e)=>{setFirstname(e.target.value)}} onFocus={()=>{setError("")}} />
            <label className="form-label">LastName</label>
            <input  className="form-input" type='text' value={lastname} onChange={(e)=>{setLastname(e.target.value)}}  onFocus={()=>{setError("")}}/>
            <label className="form-label ">Email</label>
            <input className="form-input m-auto" type='text' value={email} onChange={(e)=>{setEmail(e.target.value)}}  onFocus={()=>{setError("")}} />
            <label className="form-label ">PassWord</label>
            <input className="form-input" type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}  onFocus={()=>{setError("")}}   />
            <div className={error === "" ? (null) : ("error")}>{error}</div>
            <button className='btn m-3 absolute left-1/2 -translate-x-1/2 bottom-2 ' onClick={()=>{signUp(user,setError)}}>{isLoading?("Waiting..."):("SignUp")}</button>
        </form>
        </div>
    )
}

export default SignUp
