import RoscaInclinada from "../assets/RoscaInclinada.jpg"
import RoscaMartelo from "../assets/RoscaMartelo.jpg"
import RoscaScott from "../assets/RoscaScott.webp"
import TricepsBarra from "../assets/TricepsBarra.jpg"
import TricepsMergulho from "../assets/TricepsMergulho.jpg"
import TricepsCorda from "../assets/TricepsCorda.jpg"
import './Ficha.css'
import Treino from './Treino'

type TreinoTuplaType = [string, string, number, number, number];

const TREINO: TreinoTuplaType[] = [
  ["RoscaScott", "Rosca Scott com barra W", 4, 8, 10],
  ["TricepsCorda", "Extensão de tríceps com corda", 4, 8, 10],
  ["RoscaMartelo", "Rosca martelo", 3, 10, 12],
  ["TricepsBarra", "Tríceps com barra reta", 3, 10, 12],
  ["RoscaInclinada", "Rosca inclinada com halter", 3, 10, 12],
  ["TricepsMergulho", "Tríceps mergulho no aparelho", 3, 10, 12],
];

const IMAGES: { [key: string]: string } = {
  RoscaScott,
  TricepsCorda,
  RoscaMartelo,
  TricepsBarra,
  RoscaInclinada,
  TricepsMergulho,
};

function Ficha() {

    return (
      <>
        <div className="container">
        <h4>Treino D</h4>
          <p>Biceps, Tríceps</p>
          <p>Lista de exercícios</p>
            <div className="sub-container">
                <div className='nome-do-treino'>
                    {TREINO.map(([nomeImagem, exercicio, series, repeticoes1, repeticoes2], index) => (
                      <Treino
                        key={index}
                        imagem={IMAGES[nomeImagem]} 
                        exercicio={exercicio}
                        series={series}
                        repeticoes1={repeticoes1}
                        repeticoes2={repeticoes2}
                      />
                    ))}
                </div>
            </div>
        </div>
      </>
    )
  }
  
  export default Ficha