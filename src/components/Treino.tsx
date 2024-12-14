import './Treino.css'

interface TreinoProps {
  imagem: string;
  exercicio: string;
  series: number;
  repeticoes1: number;
  repeticoes2: number
}

export default function ({imagem, exercicio, series, repeticoes1, repeticoes2}: TreinoProps){
    return (
        <div className='exercicio'>
            <input className='btn' type="checkbox"></input>            
            <img className='imagem' src={imagem} alt="" />
            <div className='series'> 
                <p>{exercicio}</p>
                <p>{series}x {repeticoes1}a{repeticoes2}</p>
            </div>
        </div>
    );
  }