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

function Externo() {
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
                <img src={Externo1} alt='photo1' />
                <img src={Externo2} alt='photo2' />
                <img src={Externo3} alt='photo3' />
                <img src={Externo4} alt='photo4' />
                <img src={Externo5} alt='photo5' />
                <img src={Externo6} alt='photo6' />
                <img src={Externo7} alt='photo7' />
                <img src={Externo8} alt='photo8' />
                <img src={Externo9} alt='photo9' />
                <img src={Externo10} alt='photo10' />
                <img src={Externo11} alt='photo11' />
                <img src={Externo12} alt='photo12' />
                <img src={Externo13} alt='photo13' />
                <img src={Externo14} alt='photo14' />
                <img src={Externo15} alt='photo15' />
                <img src={Externo16} alt='photo16' />
            </div>
        </div>
    )
}

export default Externo;