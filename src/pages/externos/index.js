import './style.scss'
import Externo1 from '../../assets/outside/externo-1.jpg'
import Externo2 from '../../assets/outside/externo-2.JPG'
import Externo3 from '../../assets/outside/externo-3.jpg'
import Externo4 from '../../assets/outside/externo-4.JPG'
import Externo5 from '../../assets/outside/externo-5.JPG'
import Externo6 from '../../assets/outside/externo-6.JPG'
import Externo7 from '../../assets/outside/externo-7.JPG'
import Externo8 from '../../assets/outside/externo-8.JPG'
import Externo9 from '../../assets/outside/externo-9.JPG'
import Externo10 from '../../assets/outside/externo-10.JPG'
import Externo11 from '../../assets/outside/externo-11.JPG'
import Externo12 from '../../assets/outside/externo-12.JPG'
import Externo13 from '../../assets/outside/externo-13.jpg'
import Externo14 from '../../assets/outside/externo-14.JPG'
import Externo15 from '../../assets/outside/externo-15.jpg'
import Externo16 from '../../assets/outside/externo-16.JPG'
import React, { useContext } from 'react';
import { ImageContext } from '../../context/openImage';
import { CurrentContext } from '../../context/currentImage';

function Externo() {

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
            <div className='content-externo'>
                <h1>ENSAIOS EXTERNOS</h1>
                <div className='divider'></div>

                <div className='content-ensaios'>
                <h3>Como produzo meus ensaios externos</h3>
                <p>Em primeiro contato com o cliente, busco perguntar sobre referências que ele(a) tenha e como gostaria que fossem feitas as fotos (local, horário, look, maquiagem e etc).</p>
                <p>Sempre envio ao cliente parte das imagens com  a pós produção para ter um feedback do que ele gostaria de mudar mediante a seu gosto/objetivo.</p>
                </div>

            </div>
            
            <div className='photos-outside'>
                <img src={Externo1} alt='photo1' onClick={() => openPicture(Externo1)}/>
                <img src={Externo2} alt='photo2' onClick={() => openPicture(Externo2)}/>
                <img src={Externo3} alt='photo3' onClick={() => openPicture(Externo3)}/>
                <img src={Externo4} alt='photo4' onClick={() => openPicture(Externo4)}/>
                <img src={Externo5} alt='photo5' onClick={() => openPicture(Externo5)}/>
                <img src={Externo6} alt='photo6' onClick={() => openPicture(Externo6)}/>
                <img src={Externo7} alt='photo7' onClick={() => openPicture(Externo7)}/>
                <img src={Externo8} alt='photo8' onClick={() => openPicture(Externo8)}/>
                <img src={Externo9} alt='photo9' onClick={() => openPicture(Externo9)}/>
                <img src={Externo10} alt='photo10' onClick={() => openPicture(Externo10)}/>
                <img src={Externo11} alt='photo11' onClick={() => openPicture(Externo11)}/>
                <img src={Externo12} alt='photo12' onClick={() => openPicture(Externo12)}/>
                <img src={Externo13} alt='photo13' onClick={() => openPicture(Externo13)}/>
                <img src={Externo14} alt='photo14' onClick={() => openPicture(Externo14)}/>
                <img src={Externo15} alt='photo15' onClick={() => openPicture(Externo15)}/>
                <img src={Externo16} alt='photo16' onClick={() => openPicture(Externo16)}/>
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

export default Externo;