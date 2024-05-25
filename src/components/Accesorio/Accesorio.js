import "./Accesorio.css"


const Accesorio = ({ imagen, nombre, precio }) => {
    return (
        <div className="accesorio">
            <img className="imagenAccesorio" src={imagen} alt="imagen de accesorio" />
            <h3 className="tituloAccesorio">{nombre}</h3>
            <h4 className="precioAccesorio">$ {precio}</h4>
        </div>
    )
}

export default Accesorio