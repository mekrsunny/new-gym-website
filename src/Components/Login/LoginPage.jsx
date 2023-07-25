import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./LoginPage.css"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase"
import { AuthContext } from '../../Context/AuthContext';
export default function LoginPage() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    let navigate = useNavigate();
    const { dispatch } = useContext(AuthContext)
    const createHandler = () => {
        document.querySelector(".login_page_title").style.display = "none";
        document.querySelector(".signup_page_title").style.display = "block";
        document.querySelector("#name").style.display = "block";
        document.querySelector("#nameLabel").style.display = "block";
        document.querySelector(".login_btn").style.display = "none";
        document.querySelector(".signup_btn").style.display = "block";
        document.querySelector(".login_container").style.height = "400px";
        document.querySelector(".signupText").style.display = "none";
    }
    const closeHandler = () => {
        navigate("/");
    }
    const loginHandler = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setError(false);
                dispatch({
                    type: "LOGIN",
                    payload: user
                })
                navigate("/profile")
            })
            .catch((err) => {
                setError(true);
                console.log(err.message);
            })
    }
    const signupHandler = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate("/")
            })
            .catch((err) => {
                console.log(err.message);
            })
    }
    return <section>
        <div
            className="login_container"
            data-aos='fade-up' data-aos-delay='100' data-aos-duration='2000'
        >
            <button onClick={closeHandler} className='close'>
                <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="login_page_title">
                Log In
            </div>
            <div className="signup_page_title">
                Sign Up
            </div>

            <div className="credentials">
                <label htmlFor="name" id='nameLabel'>Name : </label>
                <input type="text" id='name' placeholder='Enter your name' onChange={(e) => setUserName(e.target.value)} />
                <label className='emailLabel' htmlFor="email">Email : </label>
                <input type="email" id='email' placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">Password : </label>
                <input type="password" id='password' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="btn">
                <button className="login_btn" onClick={loginHandler}>LOGIN</button>
                <button className="signup_btn" onClick={signupHandler} >SIGN UP</button>
            </div>
            <div className="signupText">
                Don't have an account? <span className='create' onClick={createHandler}>Create One</span>
            </div>

            <div className='error_message'>{error && "Invalid user details"}</div>

        </div>
    </section>
}
