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

function Interno() {
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
                <img src={Interno1} alt='photo1' />
                <img src={Interno2} alt='photo2' />
                <img src={Interno3} alt='photo3' />
                <img src={Interno4} alt='photo4' />
                <img src={Interno5} alt='photo5' />
                <img src={Interno6} alt='photo6' />
                <img src={Interno7} alt='photo7' />
                <img src={Interno8} alt='photo8' />
                <img src={Interno9} alt='photo9' />
                <img src={Interno10} alt='photo10' />
                <img src={Interno12} alt='photo12' />
                <img src={Interno13} alt='photo13' />
                <img src={Interno14} alt='photo14' />
                <img src={Interno15} alt='photo15' />
                <img src={Interno16} alt='photo16' />
                <img src={Interno17} alt='photo17' />
            </div>

        </div>
    )
}

export default Interno;