import "./HomeWelcome.css"


const HomeWelcome = () => {
    return (
        <div className="homeWelcome">
            <div className="topHomeWelcome">
                <div className="textosHome">
                    <h1 className="tituloHome">Reparación Express</h1>
                    <h2 className="subtituloHome">Pedí tu presupuesto sin cargo y consultanos por nuestro servicio puerta a puerta. Las reparaciones son el día para que no te quedes sin tu iPhone.</h2>
                </div>
                <img src="https://phonefix.netlify.app/img/reparacionexpress.png" className="imagenHome" alt="imagen home" />
            </div>
            <div className="franjaBajaHome"><h3>Reparaciones Profesionales</h3></div>
        </div>
    )
}

export default HomeWelcome