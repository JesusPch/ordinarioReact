import React, {useState} from "react";

export default function Cantidad(){
    const [cantidad, setCantidad] =useState(0);

    const sumar =()=>setCantidad(cantidad +1);
    const restar =()=>setCantidad(cantidad -1);

    return(
        <>
        
        <nav>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </nav>
        <h2>{cantidad}</h2>
        </>
    );
}