import opinionesJSON from "../../assets/opiniones.json"
import Opinion from "../Opinion/Opinion"
import "./Opiniones.css"


const Opiniones = () => {
    return (
        <div className="divOpiniones">
            <div className="divTituloOpiniones">
                <h2 className="textoTituloOpiniones">Opinión de nuestros clientes</h2>
            </div>
            <div className="divCardsOpiniones">
                {opinionesJSON.map((opinion) => {
                    return (
                        <Opinion imagen={opinion.imagen} titulo={opinion.titulo} texto={opinion.texto} />
                    )
                })}
            </div>

        </div>
    )
}

export default Opiniones 