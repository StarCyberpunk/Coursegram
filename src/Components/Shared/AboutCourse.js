import React from 'react';
import CircleButton from "./SingleComponents/CircleButton";
import Header from "./SingleComponents/Header";

function AboutCourse(props) {


    return (
        <div
            className="inline-block max-w-screen-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <Header title="Мои курсы"/>
            <div className=" items-center justify-between m-12">
                <img className="inline-block w-1/2 rounded-t-lg" src={props.img ?? "/promo1.png"} alt=""/>
            </div>
            <div className="p-5 text-start">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title ?? "О курсе"}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{ props.description ?? "Сегодня вы можете начать новую карьеру в веб-разработке, изучив HTML и CSS. Вам не нужен диплом по компьютерным наукам или дорогостоящеепрограммное обеспечение. Все, что вам нужно - это компьютер, немного времени, много решимости иучитель, которому вы доверяете."}</p>
                <p className="mb-3 font-normal text-gray-900 dark:text-white">Длительность: </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.duration ?? "22 часа"} </p>
            </div>
            <div className="inline-flex items-center gap-4 ">
            <a href={props.url ?? "/topic"}
               className="inline-flex justify-center min-w-52 min-h-16 mb-10 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Поступить на курс
            </a>
            <a href={props.url2 ?? "/add_course"}
               className="inline-flex justify-center min-w-16 min-h-16 mb-10 items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                     width="12.000000pt" height="11.000000pt" viewBox="0 0 1280.000000 1189.000000"
                     preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,1189.000000) scale(0.100000,-0.100000)"
                       fill="#FFFFFF" stroke="none">
                        <path d="M3250 11884 c-25 -2 -106 -11 -180 -20 -1485 -172 -2704 -1295 -3001
-2764 -133 -660 -67 -1507 171 -2223 252 -753 675 -1411 1397 -2172 342 -360
634 -630 1588 -1470 231 -203 488 -430 570 -505 1024 -920 1735 -1692 2346
-2547 l130 -183 132 0 132 1 130 192 c557 822 1212 1560 2185 2461 191 178
408 373 1027 923 956 852 1445 1343 1841 1850 643 825 968 1603 1064 2553 19
196 17 665 -5 835 -105 805 -441 1497 -998 2054 -557 557 -1250 894 -2054 998
-193 24 -613 24 -810 0 -733 -93 -1379 -387 -1920 -874 -191 -172 -406 -417
-535 -610 -30 -45 -57 -82 -60 -82 -3 0 -30 37 -60 82 -129 193 -344 438 -535
610 -531 478 -1170 773 -1878 867 -146 20 -562 34 -677 24z"/>
                    </g>
                </svg>
            </a>
            </div>
        </div>
    );
}

export default AboutCourse;