import "./GaleriaHome.css"
import CardGaleria from "../CardGaleria/CardGaleria"


const GaleriaHome = () => {
    return (
        <div className="divGaleriaHome">
            <CardGaleria titulo="Pantalla" imagen="https://phonefix.netlify.app/img/pantallarota.png" />
            <CardGaleria titulo="Batería" imagen="https://phonefix.netlify.app/img/bateria.png" />
            <CardGaleria titulo="Carga" imagen="https://phonefix.netlify.app/img/nocarga.png" />
            <CardGaleria titulo="Cámara" imagen="https://phonefix.netlify.app/img/camara.png" />
        </div>
    )
}

export default GaleriaHome