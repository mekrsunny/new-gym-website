import React from 'react'
import "./MainContainer.css"
import Header from "./Header/Header.jsx";
import Exercises from './UI/Exercises/Exercises';
import Footer from './UI/Footer/Footer';
import MainDisplay from './UI/MainDisplay/MainDisplay';
import Pricing from './UI/Pricing/Pricing';
import Start from './UI/Start/Start';
import Testimonials from './UI/Testimonials/Testimonials';
export default function MainContainer() {
    return (
        <div id='app'>
            <Header />
            <MainDisplay />
            <Exercises />
            <Start />
            <Pricing />
            <Testimonials />
            <Footer />
        </div>
    )
}
