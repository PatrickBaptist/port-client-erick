import './style.scss'
import Event1 from '../../assets/eventos/event-1.jpg'
import Event2 from '../../assets/eventos/event-2.jpg'
import Event3 from '../../assets/eventos/event-3.jpg'
import Event4 from '../../assets/eventos/event-4.jpg'
import Event5 from '../../assets/eventos/event-5.jpg'
import Event6 from '../../assets/eventos/event-6.jpg'
import Event7 from '../../assets/eventos/event-7.jpg'
import Event8 from '../../assets/eventos/event-8.jpg'
import Event9 from '../../assets/eventos/event-9.jpg'
import Event10 from '../../assets/eventos/event-10.jpg'
import Event11 from '../../assets/eventos/event-11.jpg'
import Event12 from '../../assets/eventos/event-12.jpg'
import Event13 from '../../assets/eventos/event-13.jpg'
import Event14 from '../../assets/eventos/event-14.jpg'
import Event15 from '../../assets/eventos/event-15.jpg'
import Event16 from '../../assets/eventos/event-16.jpg'

function Eventos() {
    return (
        <div className="container-events">
            <h1>EVENTOS</h1>
            <div className='divider'></div>

            <div className='photos-events'>
                <img src={Event1} alt='photo1' />
                <img src={Event2} alt='photo2' />
                <img src={Event3} alt='photo3' />
                <img src={Event4} alt='photo4' />
                <img src={Event5} alt='photo5' />
                <img src={Event6} alt='photo6' />
                <img src={Event7} alt='photo7' />
                <img src={Event8} alt='photo8' />
                <img src={Event9} alt='photo9' />
                <img src={Event10} alt='photo10' />
                <img src={Event11} alt='photo11' />
                <img src={Event12} alt='photo12' />
                <img src={Event13} alt='photo13' />
                <img src={Event14} alt='photo14' />
                <img src={Event15} alt='photo15' />
                <img src={Event16} alt='photo16' />
            </div>

        </div>
    )
}

export default Eventos;