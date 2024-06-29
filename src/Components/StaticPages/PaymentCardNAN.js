import React from 'react';
import FormaStatic from "./FormaStatic";

function PaymentCardNAN() {

    return (
        <div >
            <FormaStatic
                url = "/add_payment"
                img= "/NiceGirlBigKYK.png"
                title="Отсутствует способ оплаты"
                description="У вас нет ни одного способа оплаты"
                headertitle="Платежи"
                buttontitle="Добавить способ оплаты"
            />
        </div>
    )
        ;
}

export default PaymentCardNAN;