import React, { useEffect, useState } from "react";

function Semaforo (){
    const [contador,setContador] = useState(0);
    const [colorSem, setColorSem] = useState('yellow');
    const colores = ['red', 'yellow', 'green']

    useEffect(()=>{
        const nuevoColor = colores[contador%colores.length]
        setColorSem(nuevoColor);
    },[contador]);
    
    let clic =1;
    
    function añadirMorado(){
        

        if(clic==1){
            document.querySelector("#luzMorada").style.height = "100px";
            document.querySelector("#contenedor").style.height = "500px";
            colores.push("purple")
            
            clic = clic + 1;
        }
        else{
            document.querySelector("#luzMorada").style.height = "0px";
            document.querySelector("#contenedor").style.height = "400px";
            clic = 1;
        }
        
    }

    return(
        <><div className="container" id="contenedor">
            <div
                onClick={()=>setColorSem("red")}
                className={"light red"+((colorSem === "red") ? " glowRed" : "")}>
            </div>
            <div 
                onClick={()=>setColorSem("yellow")}
                className={"light yellow"+((colorSem === "yellow") ? " glowYellow" : "")}>
            </div>
            <div 
                onClick={()=>setColorSem("green")}
                className={"light green"+((colorSem === "green") ? " glowGreen" : "")}>
            </div>
            <div id="luzMorada" onClick={()=>setColorSem("purple")}
                className={"light purple"+((colorSem === "purple") ? " glowPurple" : "")}>
            </div>
        </div>
        <button className="cambio" onClick={()=>setContador(contador+1)}>Cambiar color</button>
        <button className="morado" onClick={()=>añadirMorado()}>Añadir div morado</button>
        </>
    )
}

export default Semaforo