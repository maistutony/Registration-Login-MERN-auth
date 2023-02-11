import './App.css';
import React,{useState} from 'react';
import SignUp from "./components/signUp"
import LoginForm from "./components/Login";
import UserPage from './components/userPage';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setuserName] = useState('');
  const[isRegistered,setisRegistered]=useState(false)
  const[isLoggedIn,setisLoggedIn]=useState(false)
  const[user,setuser]=useState({
    username:" ",
    userEmail:" "
  })
  
  return (
    <div className="App">
       {isRegistered ?<SignUp email={email} setEmail={setEmail} password={password}
       setPassword={setPassword} userName={userName} 
       setuserName={setuserName} 
       isRegistered={isRegistered} 
       setisRegistered={setisRegistered}/>: " "}
       {!isRegistered ? " " :<LoginForm  setisLoggedIn={setisLoggedIn} setisRegistered={setisRegistered} />}
       {isLoggedIn ? " " : <LoginForm setuser={setuser} setisLoggedIn={setisLoggedIn} setisRegistered={setisRegistered} /> }
       {isLoggedIn ? <UserPage user={user} /> : " " }
    </div>
  );
}

export default App;
