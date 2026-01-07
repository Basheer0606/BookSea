import { Link } from "react-router-dom";
import "./signup.css";
import { useState } from "react";
export default function Signup({ childdata }) {
    console.log(childdata);
    // console.log(localStorage.getItem("users"));
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");
    const [email, setEmail]=useState("");
    const [fullname, setFullname]=useState("");
    const handleSignup = (e) => {
        e.preventDefault();
        const newUser = {
            username,
            password,
            email,
            fullname
        };
        const users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Signup successful!");
    };

    return(
        <>
        <div className="overlay">
            <img src="./Assets/sea.png" alt="sea-image" className="sea-image" />
            <form>
                <div className="logo-container">
                    <img src="../Assets/dolphin.png" alt="dolphin" className="dolphin-image-logo" />
                    <p className="logoName">BookSea</p>
                </div>
                <h2>Signup</h2>

                <div>
                    <label htmlFor="fullname">Full Name:</label>
                    <input type="text" id="fullname" name="fullname" value={fullname} onChange={(e) => setFullname(e.target.value)} required />
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>

                <div>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required />
                </div>

                <div className="signup-container">
                    <p>Already have an account?</p>
                    <Link className="login" to="/login" onClick={() => childdata && childdata(true)}>
                    Login
                    </Link>
                </div>
                <button type="submit" className="submit" onClick={(e)=>handleSignup(e)}>Signup</button>
            </form>
        </div>
        </>
    )
}