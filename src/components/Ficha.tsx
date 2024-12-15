import './Ficha.css'
import Treino from './Treino'


function Ficha() {

    return (
      <>
        <div className="container">
        <h4>Treino D</h4>
          <div className="parte-treinada">
            <b>Biceps, Tríceps</b>
            <p>Lista de exercícios</p>
          </div>
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