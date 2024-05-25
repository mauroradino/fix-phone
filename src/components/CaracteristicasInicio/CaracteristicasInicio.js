import Caracteristica from "../Caracteristica/Caracteristica"
import CaracteristicasJSON from "../../assets/caracteristicas.json"
import "./CaracteristicasInicio.css"


const CaracteristicasInicio = () => {
    return (
        <div className="divCaracteristicas">
            {CaracteristicasJSON.map(caracteristica => {
                return (
                    <Caracteristica imagen={caracteristica.imagen} titulo={caracteristica.titulo} subtitulo={caracteristica.subtitulo} />
                )
            })}
        </div>
    )
}

export default CaracteristicasInicio