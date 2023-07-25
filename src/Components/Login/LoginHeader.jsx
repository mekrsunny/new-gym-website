import React, { useEffect, useRef } from 'react'
import "./LoginHeader.css"
import logo from "../../media/dumble.png"
export default function LoginHeader() {
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
        const location = document.querySelector(targetAttr).offsetTop;
        window.scrollTo({
            left: 0,
            top: location - 60,
        })
    }
    return (
        <div>
            <div className='nav'>
                <div className="nav_wrapper">
                    <div className="logo">
                        <div className="logo_image">
                            <img src={logo} alt="" />
                        </div>
                        <h2 className="title">Fitness Gym</h2>
                    </div>
                </div>
            </div>

        </div>
    )
}
