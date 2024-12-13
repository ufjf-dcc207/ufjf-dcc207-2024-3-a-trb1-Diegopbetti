import './Treino.css'
import biceps from "../assets/biceps.png"

function Treino() {

    return (
      <>
        <div className='exercicio'>
            <button>X</button>
            <img src={biceps} alt="" />
            <p>Exercicio aleatório</p>
            <p>séries</p>
        </div>
      </>
    )
  }
  
  export default Treino