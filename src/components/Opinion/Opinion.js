import "./Opinion.css"


const Opinion = ({ imagen, texto, titulo }) => {
    return (
        <div className="opinion">
            <img className="imagenOpinion" src={imagen} alt="red social" />
            <h4 className="textoOpinion">{texto}</h4>
            <h3 className="tituloOpinion">{titulo}</h3>
        </div>
    )
}

export default Opinion