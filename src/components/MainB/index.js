import './MainB.css';
import MainBIMG from '../../assets/sobre nos 1.svg';

function MainB() {
    return (
        <div className='MainB-container'>
            <div className='column'>
                <h2>Educação para todos</h2>
                <p>Somos uma comunidade dedicada a compartilhar conhecimento e transformar vidas através do ensino voluntário. Temos um compromisso inegociável para que a educação seja acessível a todos.</p>
            </div>
            <div className='column'>
                <img src={MainBIMG} alt='Imagem de um grupo de amigos' />
            </div>
        </div>
    )
}

export default MainB;
