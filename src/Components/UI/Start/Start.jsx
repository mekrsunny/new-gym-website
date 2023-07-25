import "./Start.css"
import React from 'react'
import trainerImage from "../../../media/trainer.png"

export default function Start() {
    return <section id="classes">
        <div className="container">
            <div className="start_wrapper">
                <div className="start_img">
                    <img src={trainerImage} alt=""
                        data-aos="fade-right"
                        data-aos-delay='100'
                        data-aos-duration='1500'
                    />
                </div>
                <div className="start_content"
                    data-aos="fade-right"
                    data-aos-delay='100'
                    data-aos-duration='1500'
                >
                    <h2 className="section_title">
                        Ready to make a <span className="highlights">Change?</span>
                    </h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore fuga repudiandae adipisci odio reprehenderit, distinctio itaque accusamus odit exercitationem iste, illo est quo. Modi voluptate nostrum ullam enim rerum impedit?</p>
                    <button className="register_btn">Get Started</button>
                </div>
            </div>
        </div>
    </section>
}
