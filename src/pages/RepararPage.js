import "./RepararPage.css"
import GaleriaHome from "../components/GaleriaHome/GaleriaHome"
import HomeWelcome from "../components/HomeWelcome/HomeWelcome"
import FallasTipicas from "../components/FallasTipicas/FallasTipicas"
import FallasPlaca from "../components/FallasPlaca/FallasPlaca"
const HomePage = () => {
    return (
        <main>
            <HomeWelcome />
            <GaleriaHome />
            <FallasTipicas />
            <FallasPlaca />
        </main>
    )
}

export default HomePage