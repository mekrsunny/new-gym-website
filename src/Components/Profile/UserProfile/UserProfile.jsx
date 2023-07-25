import React, { useContext } from 'react'
import { AuthContext } from '../../../Context/AuthContext'
import Footer from '../../UI/Footer/Footer';
import Routine from '../../UI/Routine/Routine';
import ProfileHeader from '../ProfileHeader/ProfileHeader'
import "./UserProfile.css"

export default function UserProfile() {
    const { currentUser } = useContext(AuthContext);
    const useremail = currentUser.email.split("@")[0];
    // console.log(useremail);
    return (
        <>
            <div className='userprofile'></div>
            <div className="profile_wrapper">
                <ProfileHeader />
                <div className="container">
                    <div className="wrapper">
                        <div className="welcome_container">
                            <div className="name">Hello <span className='username'>{useremail}</span></div>
                            <div className="welcome">
                                Welcome Onboard!!!
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        </>
    )
}
