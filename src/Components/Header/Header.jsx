import "./Header.css"
import "../App.css"
import React, { useContext, useRef } from 'react'
import logo from "../../media/dumble.png"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const nav_links = [
    {
        path: '#home',
        display: 'Home',
        id: 1
    },

    {
        path: '#schedule',
        display: 'Schedule',
        id: 2
    },
    {
        path: '#classes',
        display: 'Classes',
        id: 3
    },
    {
        path: '#pricing-plan',
        display: 'Pricing',
        id: 4
    },

];
export default function Header() {
    const { dispatch } = useContext(AuthContext)
    const { currentUser } = useContext(AuthContext)
    let navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        if (e.target.getAttribute('href') === "#home") {
            navigate("/");
        }
        else {
            const targetAttr = e.target.getAttribute('href');
            const location = document.querySelector(targetAttr).offsetTop;
            window.scrollTo({
                left: 0,
                top: location - 60,
            })
        }

    }
    const loginHandler = () => {
        navigate("/login")
    }
    const logoutHandler = () => {
        dispatch({
            type: "LOGOUT",
        })
        navigate("/");
    }
    const profileHandler = () => {
        navigate("/profile");
    }
    return <header className="header" >
        <div className="container">
            <div className="nav_wrapper">
                {/* Logo */}
                <div className="logo">
                    <div className="logo_image">
                        <img src={logo} alt="" />
                    </div>
                    <h2 className="logo-title">Fitness Gym</h2>
                </div>
                {/* nav bar */}

                <div className="navigation">
                    <ul className="menu">
                        {
                            nav_links.map((link) => (
                                <li key={link.id} className="nav_items" >
                                    <a onClick={handleClick} href={link.path} >{link.display}</a>
                                </li>
                            ))
                        }

                        {currentUser && <li key="5" className="nav_items"> <a onClick={profileHandler}>Profile</a> </li>}

                    </ul>
                </div>

                {/* nav right */}
                <div className="nav_right">
                    {!currentUser && <button className="register_btn" onClick={loginHandler}>Login</button>}
                    {currentUser && <button className="register_btn" onClick={logoutHandler}>Logout</button>}
                    <span className="mobile_menu">
                        <i className="fa-solid fa-bars"></i>
                    </span>

                </div>
            </div>
        </div>
    </header >

}
