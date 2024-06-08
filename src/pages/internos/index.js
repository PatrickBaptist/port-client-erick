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
                <p>O estúdio fica em minha  residência,  assim, consigo mostrar ao cliente quem sou como pessoa, indo além do profissional.</p>
                </div>

            </div>
            
            <div className='photos-inside'>
                <img src={Interno1} alt='photo1' onClick={() => openPicture(Interno1)}/>
                <img src={Interno2} alt='photo2' onClick={() => openPicture(Interno2)}/>
                <img src={Interno3} alt='photo3' onClick={() => openPicture(Interno3)}/>
                <img src={Interno4} alt='photo4' onClick={() => openPicture(Interno4)}/>
                <img src={Interno5} alt='photo5' onClick={() => openPicture(Interno5)}/>
                <img src={Interno6} alt='photo6' onClick={() => openPicture(Interno6)}/>
                <img src={Interno7} alt='photo7' onClick={() => openPicture(Interno7)}/>
                <img src={Interno8} alt='photo8' onClick={() => openPicture(Interno8)}/>
                <img src={Interno9} alt='photo9' onClick={() => openPicture(Interno9)}/>
                <img src={Interno10} alt='photo10' onClick={() => openPicture(Interno10)}/>
                <img src={Interno12} alt='photo12' onClick={() => openPicture(Interno12)}/>
                <img src={Interno13} alt='photo13' onClick={() => openPicture(Interno13)}/>
                <img src={Interno14} alt='photo14' onClick={() => openPicture(Interno14)}/>
                <img src={Interno15} alt='photo15' onClick={() => openPicture(Interno15)}/>
                <img src={Interno16} alt='photo16' onClick={() => openPicture(Interno16)}/>
                <img src={Interno17} alt='photo17' onClick={() => openPicture(Interno17)}/>
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