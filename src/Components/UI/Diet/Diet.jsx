import React, { useEffect, useState } from 'react'
import ProfileHeader from '../../Profile/ProfileHeader/ProfileHeader'
import Header from "../../Header/Header"
import "./Diet.css"
import salad from "../../../media/salad.png"
import Footer from '../Footer/Footer'
const dietList = [
    {
        day: '1',
        breakfast: "Oats Banana Pancakes with Protein Shake",
        lunch: "Multigrain roti along with palak chicken and Avocado bell pepper salad",
        pre: "Bananas",
        post: "Brown rice, peas paneer curry, sprouts vegetable salad"
    },
    {
        day: '2',
        breakfast: "Oatmeal with Greek Yogurt & Seasonal fruits Mango Juice",
        lunch: "	Multigrain roti, fish curry, vegetable salad",
        pre: "Toast with Jam",
        post: "Broken wheat khichidi along with carrot raita, egg white, and vegetable salad"
    },
    {
        day: '3',
        breakfast: "Poached Eggs, Whole Grain Toast, Protein Shake",
        lunch: "Quinoa upma, chicken and broccoli salad",
        pre: "Mixed Nuts & Dried Fruits",
        post: "Vegetable curry, brown rice, cucumber raita, Baby Potatoes, Chocolate Milk"
    },
    {
        day: '4',
        breakfast: "Oatmeal with Honey Apple Juice",
        lunch: "Grilled Chicken, Salad, Whole Grain Bread",
        pre: "Toast with Peanut Butter",
        post: "Methi Chicken, Brown Rice, Broccoli, Protein Shake"
    },
    {
        day: '5',
        breakfast: "Scrambled Egg, Whole Grain Toast, Smoothie",
        lunch: "Grilled chicken vegetable roti rolls, Green Salad",
        pre: "Mixed Nuts & Dried Fruits",
        post: "Chicken Stir Fry, Spring Onion, Peppers & Broccoli, Chocolate Milk"
    },
    {
        day: '6',
        breakfast: "Oatmeal, Whole Grain Toast, Orange Juice",
        lunch: "Whole Grain Chicken Wrap, Black Beans, Peppers & Greek Yogurt",
        pre: "Apple with peanut butter",
        post: "Keema bhurji and multigrain rotiLean Beef Mince, Sweet Potato, Protein Shake"
    },
    {
        day: '7',
        breakfast: "Oatmeal with Nuts, Smoothie",
        lunch: "Whole wheat pasta with chicken and Green Salad",
        pre: "Granola or Cereal",
        post: "Fish curry, boiled green peas salad, Brown Rice, Garden Peas, Milk"
    },
    {
        day: '7',
        breakfast: "Oatmeal with Nuts, Smoothie",
        lunch: "Whole wheat pasta with chicken and Green Salad",
        pre: "Granola or Cereal",
        post: "Fish curry, boiled green peas salad, Brown Rice, Garden Peas, Milk"
    },
]
export default function Diet() {
    const [index, setIndex] = useState(0);
    const [day, setDay] = useState(1);
    const [breakfast, setBreakfast] = useState(dietList[0].breakfast);
    const [lunch, setLunch] = useState(dietList[0].lunch);
    const [pre, setPre] = useState(dietList[0].pre);
    const [post, setPost] = useState(dietList[0].post);
    const prevHandler = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    }
    const nextHandler = () => {
        if (index != 6) {
            setIndex(index + 1);
        }

    }
    useEffect(() => {
        console.log(index);
        setDay(dietList[index].day)
        setBreakfast(dietList[index].breakfast);
        setLunch(dietList[index].lunch);
        setPre(dietList[index].pre);
        setPost(dietList[index].post);
    }, [index]);
    return <section id='d'>
        <div className='wrapper diet_wrapper_main'>
            <div className="container">
                {/* <ProfileHeader /> */}
                <Header />
                <div className="diet_main">
                    <div className="slogan"> <span className="yes">"YES !!!"</span> <br /> Food is Important</div>
                    <div className="picture">
                        <img src={salad} alt="" />
                    </div>
                </div>
            </div>
            <div className="container-2">
                <div className="container">
                    <div className="diet_wrapper">
                        <div className="navigator">
                            <div className="prev"><span className="left"><i className="fa-solid fa-angles-left" onClick={prevHandler}></i></span> </div>
                            <div className="curr_day">Day : {day} </div>
                            <div className="next"><span className="right"><i className="fa-solid fa-angles-right" onClick={nextHandler}></i></span> </div>
                        </div>
                        <div className="content">
                            <div className="breakfast_row row ">
                                <div className="type">BreakFast</div>
                                <div className="food">{breakfast}</div>
                            </div>
                            <div className="lunch_row row">
                                <div className="type">Lunch</div>
                                <div className="food">{lunch}</div>
                            </div>
                            <div className="pre_row row">
                                <div className="type">Pre Workout</div>
                                <div className="food">{pre}</div>
                            </div>
                            <div className="post_row row">
                                <div className="type">Post Workout</div>
                                <div className="food">{post}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </section>

}
