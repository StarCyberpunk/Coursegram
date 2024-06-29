import React from 'react';
import CourseCardToBuy from "../Shared/CourseCardToBuy";
import HeaderCourse from "./HeaderCourse";
import CourseToLearn from "../Shared/CourseToLearn";

function ListCourses() {


    return (

        <div className='inline-block'>
            <HeaderCourse/>
            <CourseCardToBuy url = "/add_payment"
                             img= "/NiceGirlBigKYK.png"
                             title="HTML"
                             description="Изучение языка разметки HTML "
                             buttontitle="Купить"/>
            <CourseCardToBuy/>
        </div>
    );
}

export default ListCourses;