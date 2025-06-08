import styled from 'styled-components';

const ContainerCard = styled.div`
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    padding: 1.5rem;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    transition: all 0.2s ease-in-out; /* Suaviza el efecto */

    &:hover {
        transform: translateY(-1px); /* Eleva ligeramente */
        box-shadow: 0 8px 40px rgba(0, 0, 0, 0.3); /* Ajusta la sombra */
        filter: brightness(1.1);
    }

    width: ${({width}) => width || '100%'};
    height: ${({height}) => height || 'auto'};
    cursor: ${({onClick}) => onClick ? 'pointer' : 'default'};

    @media (max-width: 768px) {
    max-width: 30%;
    max-height: 50vh;
    }
`;


//props para manejar el ancho y alto pero son funciones q si mal no recuerdo son de estilos por lo tanto no son una funcion a ejecutar como un onClick
export default function GlassCard({children, style, width, height, onClick }) { //children es todo lo q se ponga dentro de GlassCard y style es opcional pero da mas flexibilidad

    return <ContainerCard style={style} width={width} height={height} onClick = {onClick} >{children}</ContainerCard>;
}