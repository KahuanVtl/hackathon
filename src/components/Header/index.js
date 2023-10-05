import './Header.css';
import logo from '../../assets/Logo.svg';
import setaEscura from '../../assets/botaoEscuro.svg';

function Header() {
    return (
        <div className='header-container'>
            <div className='header-image'>
                <img src={logo} alt='Logo Ensinei' />
            </div>
            <div className='header-lista'>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='https://passosmagicos.org.br/'>Sobre</a></li>
                    <li><a href='/meus-cursos'>Acesse os Cursos</a></li>
                </ul>
            </div>
            <div className='logar'>
                <div className='logar-email'>
                    <p className='logar-p'>Login</p>
                    <input placeholder='E-mail' type='email' className='logar-input' />
                </div>
                <div className='logar-senha'>
                    <p className='logar-p'>Senha</p>
                    <input placeholder='E-mail' type='password' className='logar-input'/>
                </div>
                <img src={setaEscura} alt=''/>
            </div>
        </div>
    )
}

export default Header;
