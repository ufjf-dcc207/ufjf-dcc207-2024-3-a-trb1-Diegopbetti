import './Ficha.css'
import Treino from './Treino'

function Ficha() {

    return (
      <>
        <div className="container">
        <h3>Treino D</h3>
            <div className="sub-container">
                <p>Biceps, Tríceps</p>
                <p>Lista de exercícios</p>
                <Treino />
            </div>
        </div>
      </>
    )
  }
  
  export default Ficha