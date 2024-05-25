import "./Caracteristica.css"


const Caracteristica = ({ imagen, titulo, subtitulo }) => {
    return (
        <div className="caracteristica">
            <img className="imagenCaracteristica" src={imagen} alt="imagen caracteristica" />
            <h4 className="titulo">{titulo}</h4>
            <h5 className="subtitulo">{subtitulo}</h5>
        </div>
    )
}

export default Caracteristica