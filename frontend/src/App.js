import Raact , {useContext , useEffect} from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import NotUser from './components/NotUser';
import SignIn from './authentication/SignIn';
import SignUp from './authentication/SignUp';
import HomeTask from './task/HomeTask';
import NavBar from './components/NavBar';
import NewTask from './task/NewTask';
import UserContextProvider, { userContext } from './context/userContext';
import Setting from './components/Setting';


function App() {
  const {user , checkIfuser} = useContext(userContext);

  useEffect(()=>{
    checkIfuser()
  },[]);
  
  return (
    <div className="App">  
    <UserContextProvider>
    <BrowserRouter>
       <NavBar/>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/signin" element={user ? (<Home/>):(<SignIn/>)}/>
         <Route path="/signup" element={user ? (<Home/>):(<SignUp/>)}/>
         <Route path="/hometask" element={user ? (<HomeTask/>):(<NotUser/>)}/>
         <Route path="/notuser" element={user ? (<HomeTask/>):(<NotUser/>)}/>
         <Route path="/setting" element={user ? (<Setting/>):(<NotUser/>)}/>
         <Route path='/newtask' element={user ? (<NewTask/>):(<Home/>)}/>
       </Routes>
    </BrowserRouter>
    </UserContextProvider>
    </div>
  );
}

export default App