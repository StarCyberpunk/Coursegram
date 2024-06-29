import React from 'react';
import Header from "../Shared/SingleComponents/Header";
import PaymentMethod from "./PaymentMethod";
import FormaStatic from "../StaticPages/FormaStatic";

function AddingCard(props){


    return (
        <div>
            <FormaStatic url = "/profile"
                         img= "/BLM.png"
                         title="Добавление карты будет реализвано чуть позже"
                         description=""
                         headertitle="Избранное"
                         buttontitle="Блин("/>
        </div>
    )
        ;
}

export default AddingCard;