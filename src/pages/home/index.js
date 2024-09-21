import Modelo2 from '../../assets/modelo-2.jpg'
import Modelo3 from '../../assets/modelo-3.JPG'
import Modelo4 from '../../assets/modelo-4.jpg'
import Modelo5 from '../../assets/modelo-5.JPG'
import Erick from '../../assets/erick/erick-1.JPG'
import './style.scss'
import React, { useContext } from 'react';
import { ImageContext } from '../../context/openImage';
import { CurrentContext } from '../../context/currentImage';

function Home() {

    const [openImage, setOpenImage] = useContext(ImageContext)
    const [currentImage, setCurrentImage] = useContext(CurrentContext)

    const handleImageClick = () => {
        setOpenImage(false)
    }
    
    const openPicture = (image) => {
        setCurrentImage(image)
        setOpenImage(true)
    }

    return (
        <div className="container">
            <div className="content-home">
                <div className='right-span'>
                    <div className='right-content'>
                        <h3>Bem-vindo,</h3>
                        <p>EU SOU <span>ERICK</span></p>
                        <p>APAIXONADO POR <span>CAPTURAR HISTÓRIAS</span></p>
                    </div>
                    <div className='span-content'>
                        <span>Retratos autênticos e emocionantes</span>
                        <span>Baseado no Rio de Janeiro.</span>
                    </div>
                </div>
            </div>

            <main>
                <div className='about'>
                    <div className='content-about'>
                        <h1>SOBRE MIM</h1>
                        <div className='divider'></div>

                        <div className='img-p'>
                            <div className='erick-img'>
                                <img src={Erick} alt='imagens' loading="lazy"/>
                            </div>

                            <div className='paragraphs'>
                                <p>
                                    Comecei minha carreira na fotografia em 2014, fotografando ensaios de 15 anos e festas infantis. Esses eventos me deram uma base sólida para desenvolver minhas habilidades, capturando momentos espontâneos e emoções autênticas. Embora eu gostasse desse tipo de trabalho, sempre senti que poderia explorar mais o meu lado criativo. Foi então, em 2019, que tive meu primeiro contato com a fotografia de moda, e percebi que era nesse campo que eu queria investir. A possibilidade de trabalhar com estética, arte e colaborar com outros profissionais da área despertou em mim uma nova paixão.
                                </p>
                                <p>   
                                    A partir desse momento, decidi focar minha carreira na fotografia de moda, onde encontrei mais liberdade para experimentar técnicas e explorar minha visão artística. Trabalhar com conceitos criativos, contar histórias através de poses, roupas e cenários me proporcionou um novo leque de oportunidades. Hoje, após alguns anos nesse segmento, sinto que a transição para a moda foi essencial para meu crescimento profissional e para me desafiar continuamente a criar imagens únicas e impactantes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <section>
                <div className='production-container'>
                    <div className='content-section'>
                        <h1>DIREÇÃO DE FOTOGRAFIA</h1>
                        <div className='divider'></div>
                        <p>
                        A direção de fotografia é essencial para o sucesso de uma sessão, pois envolve tanto a parte técnica quanto a interação com o cliente. Por isso, sempre procuro orientar de forma cuidadosa e sensível, criando um ambiente onde o cliente se sinta à vontade e confiante, sem pressões. Meu objetivo é capturar imagens autênticas e espontâneas, permitindo que as emoções fluam de maneira natural. Ao equilibrar orientações com liberdade, as poses surgem de forma fluida, resultando em fotos que não só refletem a imagem, mas também a essência e personalidade de cada pessoa.
                        </p>
                    </div>
                    <div className='grid-images'>
                        <img src={Modelo2} alt='imagens' loading="lazy" onClick={() => openPicture(Modelo2)} />
                        <img src={Modelo3} alt='imagens' loading="lazy" onClick={() => openPicture(Modelo3)}/>
                        <img src={Modelo4} alt='imagens' loading="lazy" onClick={() => openPicture(Modelo4)}/>
                        <img src={Modelo5} alt='imagens' loading="lazy"  onClick={() => openPicture(Modelo5)}/>
                    </div>
                    {openImage && (
                        <div className="container-img" onClick={handleImageClick}>
                            <div className='content-img'>
                                <img src={currentImage} alt='imagens' />
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <form
            action="https://formspree.io/f/mzbnwdvq"
            method="POST"
            >
        
                <h2>Faça seu contato!</h2>
                <div className="divider"></div>
    
    
    
                <div className="content-form">
                    <label>
                        Nome:
                    </label>
                        <input type="text" name="Nome" autoComplete="on" />
                    
                    <label>
                        Telefone:
                    </label>
                        <input type="number" name="Telefone" autoComplete="on" />
                
                    <label>
                        Email:
                    </label>
                        <input type="email" name="Email" autoComplete="on" />

                    <label>
                    Mensagem:
                    </label>
                    <textarea name="Mensagem" placeholder="Digite sua mensagem..."></textarea>
                    
                    <div className='button-position'>
                        <button type="submit">
                            Enviar
                        </button>    
                    </div>     
                </div>     

            </form>

        </div>
    )
}

export default Home;