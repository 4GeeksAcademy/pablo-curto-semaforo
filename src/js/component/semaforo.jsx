import React, { useEffect, useState } from "react";

function Semaforo (){
    const [contador,setContador] = useState(0);
    const [colorSem, setColorSem] = useState('yellow');
    const colores = ['red', 'yellow', 'green']

    useEffect(()=>{
        const nuevoColor = colores[contador%colores.length]
        setColorSem(nuevoColor);
    },[contador]);
    
    return(
        <><div className="container">
            <div className={"light red"+((colorSem === "red") ? " glowRed" : "")}>

            </div>
            <div className={"light yellow"+((colorSem === "yellow") ? " glowYellow" : "")}>
                
            </div>
            <div className={"light green"+((colorSem === "green") ? " glowGreen" : "")}>
                
            </div>
            
        </div>
        <button className="cambio" onClick={()=>setContador(contador+1)}>Cambiar color</button>
        </>
    )
}

export default Semaforo