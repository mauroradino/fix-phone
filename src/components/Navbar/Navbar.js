import logo from "../../assets/logoNav.png"
import { Link } from "react-router-dom"
import "./Navbar.css"


const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <div className="navLogoText">
                    <img src={logo} width="60px" alt="logo" />
                    <Link class="navbar-brand" to="/">Fix Phone</Link>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link" to="/">Inicio</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/Reparaciones">Reparaciones</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/Accesorios">Accesorios</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/Contacto">Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar