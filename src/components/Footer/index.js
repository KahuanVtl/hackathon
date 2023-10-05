import './Footer.css';
import logo from '../../assets/Logo.svg';

import facebook from '../../assets/links/Facebook - Negative.svg';
import linkedin from '../../assets/links/LinkedIn - Negative.svg';
import instagram from '../../assets/links/Instagram - Negative.svg';
import youtube from '../../assets/links/YouTube - Negative.svg';
import setaEscura from '../../assets/botaoEscuro.svg';

function Footer() {
    return (
        <div className='footer-container'>
            <div className='column'>
                <img src={logo} alt='' />
                <p className='column-p'>Ensinei é um protótipo de aplicação de educação criado para finalidade de aprendizado como parte do Hack For Change da Alura e FIAP.</p>
                <div className='footer-links-icones'>
                    <a href='/' className='column-img'><img src={instagram} alt='Icone do Instagram' /></a>
                    <a href='/' className='column-img'><img src={linkedin} alt='Icone do Linkedin' /></a>
                    <a href='/' className='column-img'><img src={facebook} alt='Icone do Facebook' /></a>
                    <a href='/' className='column-img'><img src={youtube} alt='Icone do Youtube' /></a>
                </div>
            </div>
            <div className='column'>
                <h2 className='column-h2'>Onde estamos</h2>
                <p className='column-p'>Rua dos Estudantes, 2023</p>
                <p className='column-p'>Embu Guaçu, São Paulo</p>
                <p className='column-p'>CEP: 031020-23</p>
                <p className='column-p'>contato@ensinei.com.br</p>
                <p className='column-p'>www.ensinei.com.br</p>
            </div>
            <div className='column'>
                <h2 className='column-h2'>Newsletter</h2>
                <p className='column-p'>Cadastre-se para receber nossas notícias e atualizações e informações  sobre como colaborar com a plataforma.</p>
                <img
                    src={setaEscura}
                    alt='Seta Escura'
                    className='seta-escura'
                />
                <input
                    className='custom-input'
                    type='email'
                    placeholder='Digite seu e-mail'
                />
            </div>
        </div>
    )
}

export default Footer;
