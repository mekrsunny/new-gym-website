import React, { useState } from 'react'
import { BrowserRouter, Route, useNavigate } from 'react-router-dom';
import "./Routine.css"
import RoutinePage from './RoutinePage';
const workout = [
    {
        level: "Beginner",
        excercises: [
            {
                day: 1,
                type: "Chest, Back, Shoulders, Legs, Biceps, Triceps",
                workout_plan: {
                    "Chest workout": "Barbell Bench Press — target 4 sets of 8 reps",
                    "Back workout": "Lat-pulldowns — target 4 sets of 10 reps",
                    "Shoulders workout": "Seated Dumbbell Press — target 4 sets of 10 reps",
                    "Legs workout ": "Leg Extensions — target 4 sets of 10 reps",
                    "Biceps workout": "Barbell Bicep Curls — target 3 sets of 10 reps",
                    "Triceps workout": "Triceps Rope Pushdowns — target 3 sets of 15 reps"
                }
            },
            {
                day: 2,
                type: "Legs, Triceps, Biceps, Chest, Back, Shoulder",
                workout_plan: {
                    "Legs workout": "Leg Press Machine — target 4 sets of 8 reps",
                    "Triceps workout": "Overhead Bar Extensions — target 3 sets of 20 reps",
                    "Biceps workout": "EZ Bar Curls — target 4 sets of 10 reps",
                    "Chest workout": "Machine Chest Press — target 4 sets of 10 reps",
                    "Back workout": "T-Bar Row — target 4 sets of 10 reps",
                    "Shoulders workout": "Lateral Raises — target 3 sets of 20 reps"
                }

            },
            {
                day: 3,
                type: "Shoulders, Back, Chest, Legs, Triceps, Biceps",
                workout_plan: {
                    "Shoulders workout": "EZ Bar Upright Rows — target 3 sets of 15 reps",
                    "Back workout": "Close - Grip Pulldowns — target 4 sets of 12 reps",
                    "Chest workout ": "Cable Fly — target 4 sets of 10 reps",
                    "Legs workout": "Lunges — target 3 sets of 10 reps per leg",
                    "Triceps workout": "Skullcrushers — target 3 sets of 15 reps",
                    "Biceps workout": "Hammer Curls — target 3 sets of 12 reps",
                }
            }
        ],
    },
    {
        level: "Intermediate",
        excercises: [
            {
                day: 1,
                type: "Chest, Back, Shoulders, Legs, Biceps, Triceps",
                workout_plan: {
                    "Chest workout": "Barbell Bench Press — target 4 sets of 8 reps",
                    "Back workout": "Lat-pulldowns — target 4 sets of 10 reps",
                    "Shoulders workout": "Seated Dumbbell Press — target 4 sets of 10 reps",
                    "Legs workout ": "Leg Extensions — target 4 sets of 10 reps",
                    "Biceps workout": "Barbell Bicep Curls — target 3 sets of 10 reps",
                    "Triceps workout": "Triceps Rope Pushdowns — target 3 sets of 15 reps"
                }
            },
            {
                day: 2,
                type: "Legs, Triceps, Biceps, Chest, Back, Shoulder",
                workout_plan: {
                    "Legs workout": "Leg Press Machine — target 4 sets of 8 reps",
                    "Triceps workout": "Overhead Bar Extensions — target 3 sets of 20 reps",
                    "Biceps workout": "EZ Bar Curls — target 4 sets of 10 reps",
                    "Chest workout": "Machine Chest Press — target 4 sets of 10 reps",
                    "Back workout": "T-Bar Row — target 4 sets of 10 reps",
                    "Shoulders workout": "Lateral Raises — target 3 sets of 20 reps"
                }

            },
            {
                day: 3,
                type: "Shoulders, Back, Chest, Legs, Triceps, Biceps",
                workout_plan: {
                    "Shoulders workout": "EZ Bar Upright Rows — target 3 sets of 15 reps",
                    "Back workout": "Close - Grip Pulldowns — target 4 sets of 12 reps",
                    "Chest workout ": "Cable Fly — target 4 sets of 10 reps",
                    "Legs workout": "Lunges — target 3 sets of 10 reps per leg",
                    "Triceps workout": "Skullcrushers — target 3 sets of 15 reps",
                    "Biceps workout": "Hammer Curls — target 3 sets of 12 reps",
                }
            }
        ],
    },
    {
        level: "Expert",
        excercises: [
            {
                day: 1,
                type: "Chest, Back, Shoulders, Legs, Biceps, Triceps",
                workout_plan: {
                    "Chest workout": "Barbell Bench Press — target 4 sets of 8 reps",
                    "Back workout": "Lat-pulldowns — target 4 sets of 10 reps",
                    "Shoulders workout": "Seated Dumbbell Press — target 4 sets of 10 reps",
                    "Legs workout ": "Leg Extensions — target 4 sets of 10 reps",
                    "Biceps workout": "Barbell Bicep Curls — target 3 sets of 10 reps",
                    "Triceps workout": "Triceps Rope Pushdowns — target 3 sets of 15 reps"
                }
            },
            {
                day: 2,
                type: "Legs, Triceps, Biceps, Chest, Back, Shoulder",
                workout_plan: {

                    "Legs workout": "Leg Press Machine — target 4 sets of 8 reps",
                    "Triceps workout": "Overhead Bar Extensions — target 3 sets of 20 reps",
                    "Biceps workout": "EZ Bar Curls — target 4 sets of 10 reps",
                    "Chest workout": "Machine Chest Press — target 4 sets of 10 reps",
                    "Back workout": "T-Bar Row — target 4 sets of 10 reps",
                    "Shoulders workout": "Lateral Raises — target 3 sets of 20 reps"
                }

            },
            {
                day: 3,
                type: "Shoulders, Back, Chest, Legs, Triceps, Biceps",
                workout_plan: {
                    "Shoulders workout": "EZ Bar Upright Rows — target 3 sets of 15 reps",
                    "Back workout": "Close - Grip Pulldowns — target 4 sets of 12 reps",
                    "Chest workout ": "Cable Fly — target 4 sets of 10 reps",
                    "Legs workout": "Lunges — target 3 sets of 10 reps per leg",
                    "Triceps workout": "Skullcrushers — target 3 sets of 15 reps",
                    "Biceps workout": "Hammer Curls — target 3 sets of 12 reps",
                }
            }
        ],
    }

]
export default function Routine() {
    // let navigate = useNavigate();
    const [flag, setFlag] = useState(false);
    const [day, setDay] = useState(0);
    return (
        <>
            {
                <div className="routine_wrapper" id="diet">
                    <div className="type_selector">
                        <div className="question">Choose your category</div>
                        <div className="button_container">
                            {workout.map((e, i) => {
                                return (<button className='levels' key={i} onClick={() => {
                                    setFlag(true);
                                    setDay(e.excercises[2].day);
                                }}>{e.level}</button>)
                            })}
                            {flag && <RoutinePage
                                day={day}
                                heading={""}
                                list={""}
                            />}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
