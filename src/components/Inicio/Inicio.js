import "./Inicio.css"


const Inicio = () => {
    return (
        <div className="divInicio">
            <div className="inicioIzquierda">
                <h1 className="tituloInicio">Repará tu iphone</h1>
                <div className="textosInicio">
                    <p className="textoInicio1">En 30 minutos</p>
                    <p className="textoInicio2">6 meses de garantía</p>
                    <p className="textoInicio3">Cuotas sin interes</p>
                    <button className="btnPresupuestarInicio">PRESUPUESTAR</button>
                </div>
            </div>
            <img className="imagenInicio" src="https://phonefix.netlify.app/img/index1.png" alt="Imagen de inicio" />
        </div>
    )
}

export default Inicio