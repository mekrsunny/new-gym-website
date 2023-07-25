import React, { useContext, useEffect, useRef } from 'react'
import logo from "../../../media/dumble.png"
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../../Context/AuthContext';
import Routine from '../../UI/Routine/Routine';

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
        path: "#diet",
        display: 'Diet',
        id: 4
    }
];

export default function ProfileHeader() {
    const { dispatch } = useContext(AuthContext)
    let navigate = useNavigate();
    const headerRef = useRef(null);
    const headerFunc = () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            headerRef.current.classList.add('sticky_header')
        } else {
            headerRef.current.classList.remove('sticky_header')
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', headerFunc);
        return () => window.removeEventListener('scroll', headerFunc);
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        const targetAttr = e.target.getAttribute('href');
        if (targetAttr === "#diet") {
            navigate("/diet")
        }
        if (targetAttr === "#home") {
            navigate("/")
        }
        const location = document.querySelector(targetAttr).offsetTop;
        window.scrollTo({
            left: 0,
            top: location - 60,
        })
    }
    const logoutHandler = () => {
        dispatch({
            type: "LOGOUT",
        })
        navigate("/");
    }
    return <header className="header" ref={headerRef}>
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

                    </ul>
                </div>

                {/* nav right */}
                <div className="nav_right">
                    <button className="register_btn" onClick={logoutHandler}>Logout</button>
                    <span className="mobile_menu">
                        <i className="fa-solid fa-bars"></i>
                    </span>

                </div>
            </div>
        </div>
    </header >

}
