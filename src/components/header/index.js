import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import './styles.scss';
import { UserContext } from '../../context/openMenu';
import { faX } from '@fortawesome/free-solid-svg-icons/faX';
import { useNavigate } from "react-router-dom"

function Header() {

    const [openMenu, setOpenMenu] = useContext(UserContext)
    const navigate = useNavigate()

    const handleMenuClick = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <header>
            <div className='logo' onClick={() => navigate("/")}>
                <span className="name-1">
                    ERICK
                </span>
                <span className="name-2">
                    COUTINHO
                </span>
            </div>

            <nav className="nav-header">
                <ul>
                    <li onClick={() => navigate("/")}>HOME</li>
                    <li onClick={() => navigate("/internos")}>ENSAIOS INTERNOS</li>
                    <li onClick={() => navigate("/externos")}>ENSAIOS EXTERNOS</li>
                    <li onClick={() => navigate("/eventos")}>EVENTOS</li>
                </ul>
            </nav>

                <FontAwesomeIcon className='icon-bar' onClick={handleMenuClick} icon={ openMenu ? faX : faBars }/>
        </header>
    );
}

export default Header;