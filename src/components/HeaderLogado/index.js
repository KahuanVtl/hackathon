import './HeaderLogado.css';
import logo from '../../assets/Logo.svg';

function HeaderLogado(){
    return(
        <div className='header-container'>
            <div className='header-image'>
                <img src={logo} alt='Logo Ensinei' />
                <ul className='header-lista-ul'>
                    <li className='header-lista-li'><a href='/' className='header-lista-li-a'>Home</a></li>
                    <li className='header-lista-li'><a href='#' className='header-lista-li-a'>Configurações</a></li>
                    <li className='header-lista-li'><a href='#' className='header-lista-li-a'>Ajuda</a></li>
                </ul>
            </div>
            <div className='header-search'>
                <input placeholder='Buscar conteúdo...' className='header-input'/>
            </div>
        </div>
    )
}

export default HeaderLogado;