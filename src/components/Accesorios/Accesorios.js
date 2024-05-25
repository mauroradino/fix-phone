import Accesorio from "../Accesorio/Accesorio"
import AccesoriosJSON from "../../assets/accesorios.json"
import "./Accesorios.css"


const Accesorios = () => {
    return (
        <div className="divAccesorios">
            {AccesoriosJSON.map(accesorio => {
                return (
                    <Accesorio imagen={accesorio.imagen} nombre={accesorio.nombre} precio={accesorio.precio} />
                )
            })}
        </div>
    )
}

export default Accesorios