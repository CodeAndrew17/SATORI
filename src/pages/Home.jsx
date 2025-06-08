// pages/Home.jsx
import styled from 'styled-components';
import Clock from '../components/Clock';
import GlassCard from '../components/GlassCard';
import MyDatePicker from '../components/DatePicker';
import Notes from '../components/Notes';

const HomeWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;  /*los tres primeros numeros son  crear el color en rgb y el ultimo es el canal alpha*/
  background: linear-gradient(160deg, rgba(20, 20, 43, 0.9), rgba(11, 28, 61, 0.8), rgba(0, 51, 102, 0.7), rgba(0, 64, 128, 0.6), rgba(0, 96, 160, 0.5));

  /*nota: el background por si mismo define un gradiente lineal con multiples colores tonos de azul
  y oscuros ademas de sus diferentes opacidades desde 0.9 hasta 0.5 el gradiente va en un angulo de 160 grados*/

  background-blend-mode: soft-light; /* esta es la propiedad clave q genera la textura combina el gradiente con el fondo*/
  color: white;
  padding: 1rem;
  box-sizing: border-box; /* asegura que el padding no cause overflow es lo qmantiene todo compactado marginado y sin scroll ni vertical ni horizontal */
  overflow: hidden;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem; /* espacio entre reloj y calendario */
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    width: 100%; /* Asegura que los elementos ocupen todo el ancho */
    align-items: center; /* Centra los elementos */
}

`;

const CalendarContainer = styled.div`
  display: flex;
  justify-content: flex-ce;
  align-items: flex-start;
`;

export default function Home() {
  return (
    <HomeWrapper>
      <FlexRow>
        <GlassCard
          width= "300px"
          height = "110px" //para controlar ancho y alto 
          onClick = {() => console.log("clickeando vro")}
        >
          <Clock />
        </GlassCard>

        <CalendarContainer>
          <MyDatePicker />
        </CalendarContainer>

        <GlassCard>
          <Notes />
        </GlassCard>

      </FlexRow>
    </HomeWrapper>
  )
}
