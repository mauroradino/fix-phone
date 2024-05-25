import "./CardGaleria.css"


const CardGaleria = ({ imagen, titulo }) => {
    return (
        <div className="cardGaleria">
            <img className="imagenCard" src={imagen} alt="Imagen Card" />
            <h3 className="tituloCard">{titulo}</h3>
            <button className="btnPresupuestar">Presupuestar</button>
        </div>
    )
}

export default CardGaleria