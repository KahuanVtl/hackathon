import React, { useState } from 'react';
import './Work.css';

import Icone from '../../assets/Icone Mao.svg';
import grave from '../../assets/record.svg';
import compartilheEscuro from '../../assets/share.svg';
import sucessoEscuro from '../../assets/certificate.svg';
import graveEscuro from '../../assets/recordEscuro.svg';
import compartilhe from '../../assets/shareEscuro.svg';
import sucesso from '../../assets/certificateEscuro.svg';
import botao from '../../assets/botao.svg';
import botaoEscuro from '../../assets/botaoEscuro.svg';

function Work() {
    const [hoveredGrave, setHoveredGrave] = useState(false);
    const [hoveredCompartilhe, setHoveredCompartilhe] = useState(false);
    const [hoveredSucesso, setHoveredSucesso] = useState(false);

    return (
        <div className='work-all'>
            <div className='work-title'>
                <img src={Icone} alt='Icone de boneco com a mão para cima' />
                <h2>Como funciona?</h2>
            </div>
            <div className='work-container'>
                <div className='work-outside'>
                    <div className={`work-grave${hoveredGrave ? ' graveEscuro' : ''}`} onMouseEnter={() => setHoveredGrave(true)} onMouseLeave={() => setHoveredGrave(false)}>
                        <img src={hoveredGrave ? grave : graveEscuro} alt='' />
                        <h2>Grave seu</h2>
                        <h2>vídeo: Ensine!</h2>
                        <p>Seja uma inspiração! Grave quantos vídeos quiser sobre suas especialidades.</p>
                        <a href='/' className='saiba-mais1'>Saiba Mais</a>
                        <img src={hoveredGrave ? botao : botaoEscuro} alt='' className='saiba-img1' />
                    </div>
                </div>
                <div className='work-outside'>
                    <div className={`work-compartilhe${hoveredCompartilhe ? ' compartilheEscuro' : ''}`} onMouseEnter={() => setHoveredCompartilhe(true)} onMouseLeave={() => setHoveredCompartilhe(false)}>
                        <img src={hoveredCompartilhe ? compartilhe : compartilheEscuro} alt='' />
                        <h2>Compartilhe na</h2>
                        <h2>comunidade</h2>
                        <p>Verifique a qualidade de som e áudio e envie para a comunidade que se relaciona ao tema escolhido</p>
                        <a href='/' className='saiba-mais'>Saiba Mais</a>
                        <img src={hoveredCompartilhe ? botao : botaoEscuro} alt='' className='saiba-img'/>
                    </div>
                </div>
                <div className='work-outside'>
                    <div className={`work-sucesso${hoveredSucesso ? ' sucessoEscuro' : ''}`} onMouseEnter={() => setHoveredSucesso(true)} onMouseLeave={() => setHoveredSucesso(false)}>
                        <img src={hoveredSucesso ? sucesso : sucessoEscuro} alt='' />
                        <h2>Sucesso no</h2>
                        <h2>aprendizado!</h2>
                        <p>Milhares de alunos serão impactados com seus ensinamentos para um mundo melhor!</p>
                        <a href='/' className='saiba-mais'>Saiba Mais</a>
                        <img src={hoveredSucesso ? botao : botaoEscuro} alt=''className='saiba-img'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work;
