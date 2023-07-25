import "./Exercises.css"
import React from 'react'
import lungs from "../../../media/lunges.png"
import yoga from "../../../media/yoga-pose.png"
import extended from "../../../media/extended.png"
export default function Exercises() {
    return <section id="schedule">
        <div className="container">
            <div className="exercise_top">
                <h2 className="section_title">
                    Benefits of <span className="highlights">Exercise</span>
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Totam minus neque provident, ratione fugit voluptas?
                </p>
            </div>
            {/* exercise list */}
            <div className="exercise_wrapper">
                <div className="exercise_item"
                    data-aos="fade-right"
                    data-aos-delay='100'
                    data-aos-duration='1500'>
                    <span className="exercise_icon">
                        <img src={lungs} alt="" />
                    </span>
                    <div className="exercise_content">
                        <h4>Healthy Life</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quibusdam!</p>
                    </div>
                </div>

                <div className="exercise_item"
                    data-aos="zoom-in"
                    data-aos-delay='100'
                    data-aos-duration='1500'
                >
                    <span className="exercise_icon">
                        <img src={yoga} alt="" />
                    </span>
                    <div className="exercise_content">
                        <h4>Reducing Blood Pressure</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="exercise_item"
                    data-aos="fade-left"
                    data-aos-delay='100'
                    data-aos-duration='1500'
                >
                    <span className="exercise_icon">
                        <img src={extended} alt="" />
                    </span>
                    <div className="exercise_content">
                        <h4>Flexibility</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quibusdam!</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
}
