import { useRef } from "react"
import "./FormularioContacto.css"


const FormularioContacto = () => {
    const nombre = useRef(null)
    const email = useRef(null)
    const telefono = useRef(null)
    const modelo = useRef(null)
    const mensaje = useRef(null)

    const enviar = () => {
        nombre.current.value = ""
        email.current.value = ""
        telefono.current.value = ""
        modelo.current.value = ""
        mensaje.current.value = ""
    }
    return (
        <div className="divFormulario">
            <h1 className="tituloFormulario">Hablemos</h1>
            <input ref={nombre} className="inputFormulario" placeholder="Nombre" />
            <input ref={email} className="inputFormulario" placeholder="Email" />
            <input ref={telefono} className="inputFormulario" placeholder="Teléfono" />
            <input ref={modelo} className="inputFormulario" placeholder="Modelo Celular" />
            <input ref={mensaje} className="inputFormulario inputMensaje" placeholder="Mensaje" />
            <button className="botonFormulario" onClick={enviar}>Enviar</button>
        </div>
    )
}

export default FormularioContacto