import './style.scss'
import { useContext } from 'react'
import { UserContext } from '../../context/openMenu';
import { useNavigate } from "react-router-dom"

function Menu() {

    const [openMenu, setOpenMenu] = useContext(UserContext)
    const navigate = useNavigate()

    const handleMenuClick = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <div className={`container-menu ${openMenu ? 'open' : ''}`}>
            <div className={`modal-menu ${openMenu ? 'open' : ''}`} onClick={handleMenuClick}>
                <div className='content-menu'>
                    <nav>
                        <ul>
                            <li onClick={() => navigate("/")}>HOME</li>
                            <li onClick={() => navigate("/internos")}>ENSAIOS INTERNOS</li>
                            <li onClick={() => navigate("/externos")}>ENSAIOS EXTERNOS</li>
                            <li onClick={() => navigate("/eventos")}>EVENTOS</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Menu