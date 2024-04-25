import './style.scss'
import VgBg from '../../assets/erick/vdbg.mp4'

function ModalBackground() {
    return (
        <div className="container-modal">
            <div className='modal'></div>
            <video className='background' src={VgBg} autoPlay loop muted/>
        </div>
    );
}

export default ModalBackground;