import './Treino.css'
import biceps from "../assets/biceps.png"

function Treino() {

    return (
      <>
        <div className='exercicio'>
            <input className='btn' type="checkbox"></input>            
            <img className='imagem' src={biceps} alt="" />
            <div className='series'> 
                <p>Exercicio aleatório</p>
                <p>séries</p>
            </div>
        </div>
      </>
    )
  }
  
  export default Treino