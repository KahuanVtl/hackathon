import './Perfil.css';

import perfil from './assets/Avatar.svg';
import libras from './assets/Rectangle 24.svg';
import matematica from './assets/Rectangle 24 (1).svg';

function Perfil(){
    return(
        <div className='perfil-container'>
            <div className='perfil-perfil'>
                <img src={perfil} alt='' className='perfil-perfil-img' />
                <h2 className='perfil-perfil-h2'>José da Silva</h2>
                <ul className='perfil-lista-ul'>
                    <a href='#' className='perfil-lista-a'><li className='perfil-lista-li'>Dashboard</li></a>
                    <a href='#' className='perfil-lista-a'><li className='perfil-lista-li'>Certificados</li></a>
                    <a href='#' className='perfil-lista-a'><li className='perfil-lista-li'>Colabore</li></a>
                    <a href='#' className='perfil-lista-a'><li className='perfil-lista-li'>Favoritos</li></a>
                    <a href='#' className='perfil-lista-a'><li className='perfil-lista-li'>Logout</li></a>
                </ul>
            </div>
            <div className='perfil-container2'>
                <div className='perfil-card'>
                    <div className='perfil-card-interno'>
                        <img src={libras} alt='' className='perfil-card-interno-img' />
                        <h3>Curso</h3>
                        <h2>Libras</h2>
                        <p>Duração: 10h</p>
                    </div>
                </div>
                <div className='perfil-card'>
                    <div className='perfil-card-interno'>
                        <img src={matematica} alt='' className='perfil-card-interno-img' />
                        <h3>Curso</h3>
                        <h2>Matemática</h2>
                        <p>Duração: 10h</p>
                    </div>
                </div>
                <div className='perfil-card'>
                    <div className='perfil-card-interno'>
                        <img src={libras} alt='' className='perfil-card-interno-img' />
                        <h3>Curso</h3>
                        <h2>Libras</h2>
                        <p>Duração: 10h</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Perfil;