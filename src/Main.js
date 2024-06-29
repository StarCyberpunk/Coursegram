import React from 'react';
import Navbar from "./Components/Navbar";
import { Route, Routes} from 'react-router-dom';
import Promo from "./Components/Promo/Promo";
import ListCourses from "./Components/Courses/ListCourses";
import MyCourses from "./Components/Courses/MyCourses";
import Topic from "./Components/Courses/Topic";
import AboutCourse from "./Components/Shared/AboutCourse";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import Messages from "./Components/Profile/Message";
import ListUserMessages from "./Components/Profile/ListUserMessage";
import ResultSuccess from "./Components/StaticPages/ResultSuccess";
import ResultUnSuccess from "./Components/StaticPages/ResultUnSuccess";
import SaveCourseNAN from "./Components/StaticPages/SavedCourseNAN";
import PaymentCardNAN from "./Components/StaticPages/PaymentCardNAN";
import Card from "./Components/Card/Card";
import SaveSuccessCourse from "./Components/StaticPages/SavedSuccessCourse";
import AddingCard from "./Components/Card/AddingCard";
import Settings from "./Components/Profile/Settings";



function Main() {

    return (

        <div className='main'>
            <div className=" bg-gray-300 shadow dark:bg-gray-500">
                <Routes>
                    <Route path="/" element={<Promo/>}/>
                    <Route path="/courses" element={<ListCourses/>}/>
                    <Route path="/mycourses" element={<MyCourses/>}/>
                    <Route path="/topic" element={<Topic/>}/>
                    <Route path="/aboutcourse" element={<AboutCourse/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/messages" element={<ListUserMessages/>}/>
                    <Route path="/messages/user" element={<Messages/>}/>
                    <Route path="/interes" element={<SaveCourseNAN/>}/>
                    <Route path="/success" element={<ResultSuccess/>}/>
                    <Route path="/unsuccess" element={<ResultUnSuccess/>}/>
                    <Route path="/none_payment" element={<PaymentCardNAN/>}/>
                    <Route path="/add_payment" element={<Card/>}/>
                    <Route path="/add_course" element={<SaveSuccessCourse/>}/>
                    <Route path="/add_card" element={<AddingCard/>}/>
                    <Route path="/settings" element={<Settings/>}/>

                </Routes>
            </div>
            <Navbar/>
        </div>
    );
}

export default Main;