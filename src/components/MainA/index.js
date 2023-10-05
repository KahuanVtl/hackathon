import './MainA.css';

import MainAIMG from '../../assets/Imagem Main.svg';
import Button from '../Button';

function MainA() {
    return (
        <div className='MainA-container'>
            <div className='MainA-Image'>
                <img src={MainAIMG} alt='Homem dando Aula desenho' />
            </div>
            <div className='MainA-Text'>
                <h2 className='MainA-text-tittle'>Conecte-se.</h2>
                <h2 className='MainA-text-tittle'>Ensine.</h2>
                <h2 className='MainA-text-tittle'>Aprenda.</h2>
                <h2 className='MainA-text-tittle'>Faça a diferença!</h2>
                <p className='MainA-text-subtitle'>Compartilhe sabedoria e transforme vidas.</p>
                <p>Junte-se à nossa comunidade de ensino voluntário!</p>
                <div className="MainA-custom-button">
                    <a href='/'><Button /></a>
                </div>
            </div>
        </div>
    )
}

export default MainA;
