import RoscaInclinada from "../assets/RoscaInclinada.jpg"
import RoscaMartelo from "../assets/RoscaMartelo.jpg"
import RoscaScott from "../assets/RoscaScott.webp"
import TricepsBarra from "../assets/TricepsBarra.jpg"
import TricepsMergulho from "../assets/TricepsMergulho.jpg"
import TricepsCorda from "../assets/TricepsCorda.jpg"
import './App.css'
import Ficha from './components/Ficha'

type TreinoTuplaType = [string, string, number, number, number];

const TREINO: TreinoTuplaType[] = [
  ["RoscaScott", "Rosca Scott com barra W", 4, 8, 10],
  ["TricepsCorda", "Extensão de tríceps com corda", 4, 8, 10],
  ["RoscaMartelo", "Rosca martelo", 3, 10, 12],
  ["TricepsBarra", "Tríceps com barra reta", 3, 10, 12],
  ["RoscaInclinada", "Rosca inclinada com halter", 3, 10, 12],
  ["TricepsMergulho", "Tríceps mergulho no aparelho", 3, 10, 12],
];

function App() {

  return (
    <>
      <div className='aplicativo'>
        <Ficha/>
      </div>
    </>
  )
}

export default App
