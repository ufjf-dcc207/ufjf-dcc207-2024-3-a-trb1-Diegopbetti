import './Ficha.css'
import Treino from './Treino'

function Ficha() {

    return (
      <>
        <div className="container">
        <h4>Treino D</h4>
            <div className="sub-container">
                <div className='nome-do-treino'>
                    <p>Biceps, Tríceps</p>
                    <p>Lista de exercícios</p>
                </div>
                <Treino />
            </div>
        </div>
      </>
    )
  }
  
  export default Ficha