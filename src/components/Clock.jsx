import {useState, useEffect} from 'react';
import styled from 'styled-components';


const TimeText = styled.h2`
    font-size: 2.5rem;
    font-family: 'Times New Roman', serif;
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
    letter-spacing: 3px;
    text-shadow: 1px 1px 3px rgba(255, 255, 255, 0.15);

    @media (max-width: 768px) {
        font-size: 1.8rem;
        letter-spacing: 1.5px;
    }

    @media (max-width: 480px) {
        font-size: 1.4rem;
        letter-spacing: 1px;
    }
`;


export default function Clock() {
    const [time, setTime] = useState(new Date()); //new Date es una clase nativa de js para obtener la fecha y hora actual (muy util) ademas declaramos y ahcemso uso de useState para actualizar la variable tiem con setTime

    useEffect(() => { //useEffect para montar el componente solo una vez y q solo cambia cuando algo cambia  dentro de el en este caso cada 1000 ms osea un 1 milisegundo para actualizar 
        const interval = setInterval(() => { // setInterval es una funcion de js puro  y se usa para actualizar time para q se cambie tiene q cambiar algo por eso lo usamos 
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval); // limpiamos cuando no se este mostrando y desmontamos (buena practica)
    }, []);

    return (
        <TimeText>
            {time.toLocaleTimeString() /*convierte la fecha y hora en string para mostrarlo en la pantalla con esa propiedad */}
        </TimeText>
    );
}