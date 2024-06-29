import React from 'react';
import CourseCard from "../Shared/CourseCard";
import CourseToLearn from "../Shared/CourseToLearn";
import Header from "../Shared/SingleComponents/Header";
import {useNavigate} from "react-router-dom";

function MyCourses() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/profile");
    }

    return (

        <div className='inline-block'>
            <Header onClick ={handleClick} title="Мои курсы"/>
            <CourseToLearn/>
            <CourseCard url = "/aboutcourse"
                        img= "/NiceGirlBigKYK.png"
                        title="HTML"
                        description="Изучение языка разметки HTML "/>
            <CourseCard/>
        </div>
    );
}

export default MyCourses;