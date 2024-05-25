import "./FallasTipicas.css"


const FallasTipicas = () => {
    return (
        <div className="divFallasTipicas">
            <ul className="ulFallasTipicas">
                <h2>Fallas Tipicas</h2>
                <li className="liFallasTipicas">Cambios de pantalla</li>
                <li className="liFallasTipicas">Cambios de batería</li>
                <li className="liFallasTipicas">Cambios de periféricos</li>
                <li className="liFallasTipicas">Ingreso de liquido</li>
                <li className="liFallasTipicas">Reparación de Face ID</li>
                <li className="liFallasTipicas">Actualización de software</li>
            </ul>
            <img className="celularRoto" src="https://phonefix.netlify.app/img/fallas-tipicas.png" alt="celular roto" />
        </div>
    )
}

export default FallasTipicas