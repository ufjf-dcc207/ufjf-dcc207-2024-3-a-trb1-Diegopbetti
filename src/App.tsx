import './App.css'
import Ficha from './components/Ficha'
import { TREINO, IMAGES } from './TreinoInfo';

function App() {

  return (
    <>
      <div className='aplicativo'>
        <Ficha TREINO={TREINO} IMAGES={IMAGES}/>
      </div>
    </>
  )
}

export default App
