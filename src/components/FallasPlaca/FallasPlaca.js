import "./FallasPlaca.css"


const FallasPlaca = () => {
    return (
        <div className="divFallaPlaca">
            <img className="fallaPlacaImg" src="https://phonefix.netlify.app/img/placa.png" alt="celular roto" />
            <ul className="ulFallasTipicas">
                <h2>Fallas de Placa</h2>
                <li className="liFallasTipicas">No enciende</li>
                <li className="liFallasTipicas">No activa WiFi / Bluetooth</li>
                <li className="liFallasTipicas">Sin Red</li>
                <li className="liFallasTipicas">Sobrecalienta</li>
                <li className="liFallasTipicas">Fallas de iluminación</li>
            </ul>
        </div>
    )
}

export default FallasPlaca