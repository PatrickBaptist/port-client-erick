import './style.scss'
import Interno1 from '../../assets/inside/interno-1.JPG'
import Interno2 from '../../assets/inside/interno-2.jpg'
import Interno3 from '../../assets/inside/interno-3.jpg'
import Interno4 from '../../assets/inside/interno-4.jpg'
import Interno5 from '../../assets/inside/interno-5.jpg'
import Interno6 from '../../assets/inside/interno-6.jpg'
import Interno7 from '../../assets/inside/interno-7.jpg'
import Interno8 from '../../assets/inside/interno-8.JPG'
import Interno9 from '../../assets/inside/interno-9.JPG'
import Interno10 from '../../assets/inside/interno-10.JPG'
import Interno12 from '../../assets/inside/interno-12.JPG'
import Interno13 from '../../assets/inside/interno-13.JPG'
import Interno14 from '../../assets/inside/interno-14.JPG'
import Interno15 from '../../assets/inside/interno-15.jpg'
import Interno16 from '../../assets/inside/interno-16.jpg'
import Interno17 from '../../assets/inside/interno-17.JPG'
import React, { useContext } from 'react';
import { ImageContext } from '../../context/openImage';
import { CurrentContext } from '../../context/currentImage';

function Interno() {

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
        <div className="container-interno">
            <div className='content-interno'>
                <h1>ENSAIOS INTERNOS</h1>
                <div className='divider'></div>

                <div className='content-ensaios-internos'>
                <h3>Ensaios para editoriais, moda e executivo</h3>
                <p>
                O estúdio está localizado em minha residência, o que me permite criar um ambiente acolhedor e pessoal para os clientes. Essa proximidade não só facilita o acesso aos serviços, mas também proporciona uma experiência mais autêntica e conectada. Ao receber os clientes em minha casa, consigo mostrar quem sou como pessoa, estabelecendo um relacionamento mais próximo e verdadeiro. Essa interação vai além do simples aspecto profissional; ela permite que os clientes se sintam mais à vontade e confiantes, sabendo que estão lidando com alguém que valoriza a autenticidade e a transparência. Acredito que essa abordagem humanizada é fundamental para construir laços de confiança, o que resulta em um trabalho mais significativo e em imagens que refletem não apenas a estética, mas também a essência de cada cliente.
                </p>
                </div>

            </div>
            
            <div className='photos-inside'>
                <img src={Interno1} alt='photo1' loading="lazy" onClick={() => openPicture(Interno1)}/>
                <img src={Interno2} alt='photo2' loading="lazy" onClick={() => openPicture(Interno2)}/>
                <img src={Interno3} alt='photo3' loading="lazy" onClick={() => openPicture(Interno3)}/>
                <img src={Interno4} alt='photo4' loading="lazy" onClick={() => openPicture(Interno4)}/>
                <img src={Interno5} alt='photo5' loading="lazy" onClick={() => openPicture(Interno5)}/>
                <img src={Interno6} alt='photo6' loading="lazy" onClick={() => openPicture(Interno6)}/>
                <img src={Interno7} alt='photo7' loading="lazy" onClick={() => openPicture(Interno7)}/>
                <img src={Interno8} alt='photo8' loading="lazy" onClick={() => openPicture(Interno8)}/>
                <img src={Interno9} alt='photo9' loading="lazy" onClick={() => openPicture(Interno9)}/>
                <img src={Interno10} alt='photo10' loading="lazy" onClick={() => openPicture(Interno10)}/>
                <img src={Interno12} alt='photo12' loading="lazy" onClick={() => openPicture(Interno12)}/>
                <img src={Interno13} alt='photo13' loading="lazy" onClick={() => openPicture(Interno13)}/>
                <img src={Interno14} alt='photo14' loading="lazy" onClick={() => openPicture(Interno14)}/>
                <img src={Interno15} alt='photo15' loading="lazy" onClick={() => openPicture(Interno15)}/>
                <img src={Interno16} alt='photo16' loading="lazy" onClick={() => openPicture(Interno16)}/>
                <img src={Interno17} alt='photo17' loading="lazy" onClick={() => openPicture(Interno17)}/>
            </div>
            {openImage && (
                <div className="container-img" onClick={handleImageClick}>
                    <div className='content-img'>
                        <img src={currentImage} alt='imagens' />
                    </div>
                </div>
            )}

        </div>
    )
}

export default Interno;