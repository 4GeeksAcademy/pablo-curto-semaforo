import React, { useEffect, useState } from "react";

function Semaforo (){
    const [Color, setColor] = useState("red");
    const [ActivePurple, setActivePurple] = useState(false);


    const botonPurple = () => {
        setActivePurple(!ActivePurple);
    };

    const ManualColor = () => {
        if (!ActivePurple) {
            if (Color === "red") {
                setColor("yellow");
            } else if (Color === "yellow") {
                setColor("green");
            } else if (Color === "green") {
                setColor("red");
            }
        } else {
            if (Color === "red") {
                setColor("yellow");
            } else if (Color === "yellow") {
                setColor("green");
            } else if (Color === "green") {
                setColor("purple");
            } else if (Color === "purple") {
                setColor("red");
            }
        }
    };

    return (
        <div>
            <div className="container contenedorBarra"></div>
            <div className="container text-center">
                <div className="traffic-light">
                    <div onClick={() => 
						setColor("red")} 
						className={"light red" + ((Color === "red") ? " glow" : "")}>
					</div>
                    <div onClick={() =>
						setColor("yellow")} 
						className={"light yellow mt-3" + ((Color === "yellow") ? " glow" : "")}>
					</div>
                    <div onClick={() => 
						setColor("green")} 
						className={"light green mt-3" + ((Color === "green") ? " glow" : "")}>
					</div>
                    	{ActivePurple && <div 
						className={"light purple mt-3" + ((Color === "purple") ? " glow" : "")}>
					</div>}
                </div>
                <div className="container mt-4">
                    <button onClick={ManualColor} className="btn btn-warning mx-2">Cambiar de color</button>
                    <button onClick={botonPurple} className="btn btn-warning mx-2">{ActivePurple ? "Quitar Color Purpura" : "Añadir Color Purpura"}</button>
                </div>
            </div>
        </div>
    );
}

export default Semaforo