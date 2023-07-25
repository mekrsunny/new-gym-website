import React from 'react'
import "./Footer.css"
import logo from "../../../media/dumble.png"
export default function Footer() {
    const year = new Date().getFullYear();
    return <footer className='footer'
        data-aos="zoom-in-up"
        data-aos-delay='100'
        data-aos-duration='1000'
    >
        <div className="footer_wrapper">
            <div className="footer_box">
                <div className="logo">
                    <div className="logo_image">
                        <img src={logo} alt="" />
                    </div>
                    <h2 className="logo-title">Fitness Gym</h2>
                </div>
                <p>Making life healthy everyday</p>
            </div>
            <div className="footer_box">
                <h4 className="footer_title">Company</h4>
                <ul className="footer_links">
                    <li><a href="#home">Our Program</a> </li>
                    <li><a href="#home">Our Plan</a> </li>
                    <li><a href="#home">Become a Member</a> </li>
                </ul>
            </div>

            <div className="footer_box">
                <h4 className="footer_title">Quick Links</h4>
                <ul className="footer_links">
                    <li><a href="#home">About Us</a> </li>
                    <li><a href="#home">Contact Us</a> </li>
                    <li><a href="#home">Support</a> </li>
                </ul>
            </div>

            <div className="footer_box">
                <h4 className="footer_title">Quick Links</h4>
                <ul className="footer_links">
                    <li><a href="#home">About Us</a> </li>
                    <li><a href="#home">Contact Us</a> </li>
                    <li><a href="#home">Support</a> </li>
                </ul>
            </div>
        </div>
        <p className='copyright' >
            Copyright - {year} developed by Sunny. All rights reserved
        </p>
    </footer>
}
