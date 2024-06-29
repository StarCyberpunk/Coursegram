import React from 'react';
import FormaStatic from "./FormaStatic";

function SaveSuccessCourse() {

    return (
        <div >
            <FormaStatic
                url = "/mycourses"
                img= "/SadGirl.png"
                title="Курс был сохранен!"
                description="Вы можете найти этот курсв вашем профиле"
                headertitle="Избранное"
                buttontitle="Продолжить"
            />
        </div>
    )
        ;
}

export default SaveSuccessCourse;