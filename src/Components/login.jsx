// import Navbar from "./navbar";
import { useState } from "react";
import Signup from "./signup";
import "./login.css";
import { Link, Navigate, redirect } from "react-router-dom";
// import { users } from "./Details/logindetails";
import { useNavigate} from "react-router-dom";
export default function Login() {
    console.log(localStorage.getItem("users"));
    console.log(localStorage.getItem("booksdata"));
    const users=JSON.parse(localStorage.getItem("users")) || [];
    console.log(users);
    const checkLogin=(username,password)=>{
        for(let i=0;i<users.length;i++){
            if(users[i].username===username && users[i].password===password){
                localStorage.setItem("loggedinuser", JSON.stringify(users[i]));
                console.log(users[i]);
                return true;
            }
        }
        return false;
    }
    const [errorMessage, setErrorMessage]=useState(false);
    const navigate=useNavigate();
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");
    const [signin, setSignin] = useState(true);
    const [loggedin, setLoggedin]=useState(false);
    const handleSubmit=(e)=>{
        const k=checkLogin(username,password);
        if(k===true){
            
            setLoggedin(true);
            navigate("/home");
        }
        else{
            setErrorMessage(true);
        }
        e.preventDefault();
    }
    const datafromchild= (value) =>{
        setSignin(value);
    }
    return (
        <>
            <div className="overlay">
                <img src="./Assets/sea.png" alt="Image" className="sea-image" />
            {
                signin ? (
                    <form action="" >
                        <h2>Login</h2>
                        <div>
                            <label htmlFor="username">Username:</label>
                            <input type="text" id="username" name="username" value={username} onChange={(e) => {setUsername(e.target.value);setErrorMessage(false)}} required />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" value={password} onChange={(e) => {setPassword(e.target.value); setErrorMessage(false)}} required />
                        </div>
                        <div className="sigunp-container">
                            <p>if your are new user ?</p><Link className="signup" to="/signup" onClick={() => setSignin(false)}>Signup</Link>
                        </div>
                        <button type="submit" className="submit" onClick={(e)=>handleSubmit(e)}>Login</button>
                        {errorMessage && <div className="error">Invalid username or password</div>}
                    </form>
                ) :
                (
                    <Signup childdata={datafromchild} />
                )
            }
            </div>
        </>
    )
}