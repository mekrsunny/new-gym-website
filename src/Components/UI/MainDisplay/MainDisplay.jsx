import "./MainDisplay.css"
import React from 'react'
import image from "../../../media/main.png"
import dumble from "../../../media/dumble.png"
import { useNavigate } from "react-router-dom"
export default function MainDisplay() {
    let navigate = useNavigate()
    const loginHandler = () => {
        navigate("/login")
    }
    const videoHandler = () => {
        window.open("https://www.youtube.com/watch?v=0by6K3wMlRc");
    }
    return (
        <section id="home">
            <div className="container">
                <div className="maindisplay_wrapper">
                    {/* main display content */}
                    <div className="maindisplay_content">
                        <h2 className="section_title" data-aos='fade-up' data-aos-duration='1800' >
                            Excercise is the <span className="key">key</span> to a <span className="healthy">Healthy</span>  LifeStyle
                        </h2>
                        <p data-aos='fade-up' data-aos-delay='100' data-aos-duration='2000' id="innercontent">Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Ipsa minus excepturi vitae, aliquam inventore delectus!</p>
                        <div className="maindisplay_btns" data-aos='fade-up' data-aos-delay='200' data-aos-duration='2000'>
                            <button className="register_btn" onClick={loginHandler}>Get Started</button>
                            <button className="watch_btn" onClick={videoHandler}>
                                <span>
                                    <i className="fa-solid fa-play"></i>
                                </span>
                                Watch Video
                            </button>
                        </div>
                    </div>

                    {/* main display image */}
                    <div className="maindisplay img">
                        <div className="maindidsplay_img_wrapper">
                            <div className="box-01">
                                <div className="box-02">
                                    <div className="box-03">
                                        <div className="box_img">
                                            <img src={image} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="heart_rate"
                                data-aos='fade-right'
                                data-aos-duration='1500'
                            >
                                <h5>Heart Rate</h5>
                                <span className="heart-pulse"><i className="fa-sharp fa-solid fa-heart-pulse"></i></span>
                                <h6>97 BPM</h6>
                            </div>

                            <div
                                className="gym_location"
                                data-aos='fade-left'
                                data-aos-duration='1500'
                            >
                                <span><i className="fa-sharp fa-solid fa-map-location"></i></span>
                                <h5>Find a gym <br /> near you</h5>
                            </div>

                            <div
                                className="dumble_icon"
                                data-aos='fade-down'
                                data-aos-duration='1500'
                            >
                                <img src={dumble} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
