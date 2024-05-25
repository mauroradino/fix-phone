import CaracteristicasInicio from "../../components/CaracteristicasInicio/CaracteristicasInicio"
import Inicio from "../../components/Inicio/Inicio"
import PreguntaFalla from "../../components/PreguntaFalla/PreguntaFalla"
import Opiniones from "../../components/Opiniones/Opiniones"
import "./HomePage.css"


const HomePage = () => {
    return (
        <main>
            <Inicio />
            <PreguntaFalla />
            <CaracteristicasInicio />
            <Opiniones />
        </main>
    )
}

export default HomePage