import React from 'react';
import FormaStatic from "./FormaStatic";

function SaveCourseNAN() {

    return (
        <div >
            <FormaStatic
                url = "/courses"
                img= "/BLM.png"
                title="Нет сохраненных курсов"
                description="Попробуйте сохранить курс снова через несколько минут"
                headertitle="Избранное"
                buttontitle="Перейти к поиску курса"
            />
        </div>
    )
        ;
}

export default SaveCourseNAN;