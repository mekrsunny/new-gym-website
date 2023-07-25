import React from 'react'
import "./Pricing.css"
export default function Pricing() {
    return <section id='pricing-plan'>
        <div className="container">
            <div className="pricing_top">
                <h2 className="section_title">
                    Gym <span className="highlights">Pricing</span> Plan
                </h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing <br /> elit. Quasi repellat nulla porro ipsum distinctio. Quia.</p>
            </div>

            {/* pricing  */}
            <div className="pricing_wrapper">
                <div className="pricing_item pricing_item-01"
                    data-aos="flip-left"
                    data-aos-delay='100'
                    data-aos-duration='1500'
                >
                    <div className="pricing_card-top">
                        <h2 className='section_title'>Regular Member</h2>
                        <h2 className="pricing section_title">₹700 <span>/month</span></h2>
                    </div>

                    <div className="services">
                        <ul>
                            <li><span><i className="fa-solid fa-circle"></i></span> Unlimited access to gym</li>
                            <li><span><i className="fa-solid fa-circle"></i></span> Customer Support</li>
                            <li><span><i className="fa-solid fa-circle"></i></span> 3 classes per week</li>
                        </ul>

                    </div>
                    <button className='register_btn'>Join Now</button>
                </div>

                <div className="pricing_item pricing_item-02"
                    data-aos="flip-left"
                    data-aos-delay='100'
                    data-aos-duration='1500'
                >
                    <div className="pricing_card-top">
                        <h2 className='section_title'>Standard Member</h2>
                        <h2 className="pricing section_title">₹1000 <span>/month</span></h2>
                    </div>

                    <div className="services">
                        <ul>
                            <li><span><i className="fa-solid fa-circle"></i></span> Unlimited access to gym</li>
                            <li><span><i className="fa-solid fa-circle"></i></span> Customer Support</li>
                            <li><span><i className="fa-solid fa-circle"></i></span> Standard options</li>
                            <li><span><i className="fa-solid fa-circle"></i></span> 4 classes per week</li>
                        </ul>

                    </div>
                    <button className='register_btn'>Join Now</button>
                </div>

                <div className="pricing_item pricing_item-03"
                    data-aos="flip-left"
                    data-aos-delay='100'
                    data-aos-duration='1500'
                >
                    <div className="pricing_card-top">
                        <h2 className='section_title'>Premium Member</h2>
                        <h2 className="pricing section_title">₹1500 <span>/month</span></h2>
                    </div>

                    <div className="services">
                        <ul>
                            <li><span><i className="fa-solid fa-circle"></i></span> Unlimited access to gym</li>
                            <li><span><i className="fa-solid fa-circle"></i></span> Customer Support</li>
                            <li><span><i className="fa-solid fa-circle"></i></span> Personal Trainer</li>
                            <li><span><i className="fa-solid fa-circle"></i></span> Standard options</li>
                            <li><span><i className="fa-solid fa-circle"></i></span> 5 classes per week</li>
                        </ul>


                    </div>
                    <button className='register_btn'>Join Now</button>
                </div>
            </div>
        </div>
    </section>
}
