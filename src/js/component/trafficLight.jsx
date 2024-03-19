import React, { useState } from "react";



const TrafficLight = () => {

    const [Seleccionado, setSeleccionado] = useState('red');

	const cambiarColor = (color) => {
		setSeleccionado(color)
	}


	return (
        <div className="main">
            <div className="palito"></div>
		    <div className="contenedor-semaforo">
				<div 
				className={`red ${Seleccionado == 'red' ? 'light-on' : ''}`}
				onClick={()=>cambiarColor('red')}
				></div>
				<div className={`yellow ${Seleccionado == 'yellow' ? 'light-on' : ''}`}
				onClick={()=>cambiarColor('yellow')}
				></div>
				<div className={`green ${Seleccionado == 'green' ? 'light-on' : ''}`}
				onClick={()=>cambiarColor('green')}
				></div>
		    </div>
        </div>    
	);
};

export default TrafficLight;
