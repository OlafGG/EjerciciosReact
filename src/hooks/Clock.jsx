import React, { Component, useState } from 'react'

const [contador, setContador] = useState(estadoInicial);

const Clock = () => {

    const estadoInicial = {
           // Se genera una fecha como estado inicial del componente
           fecha: new Date(),
           edad: 0,
           nombre: 'Martín',
           apellidos: 'San José'

    };


    

    useEffect(() => {
        console.log('Componente actualizado');

        const intervalID = setInterval(() => {
            console.log('Actualizacion del componente');
            tick()
        }, 1000);

        return () => {
            console.log('Componente va a desaparecer');
            document.title = "Tiempo detenido";
            clearInterval(intervalID);
        };
    }, []);

    return (
        <div>
         <h2>
         Hora Actual:
         {contador.fecha.toLocaleTimeString()}
         </h2>
         <h3>{contador.nombre} {contador.apellidos}</h3>
         <h1>Edad: {contador.edad}</h1>
         </div>
    );
}


function tick(){

    setContador({
        fecha: new Date(),
        edad: contador.edad + 1
    });
}

export default Clock;
