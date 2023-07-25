import React, { useEffect } from 'react'
import "./Login.css"
import LoginPage from './LoginPage'
import LoginHeader from './LoginHeader'
import Aos from 'aos'
export default function Login() {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div id="login">
            <LoginHeader />
            <LoginPage />
        </div>
    )
}