import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss"
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Whats() {
    return (
            <div className="whats">
                <div className="span-content">
                    <span>Entre em contato: </span>
                </div>
                    <div>
                <a href="https:www.instagram.com/e.ricking?igsh=dTFoNXIweDk44MzZ3" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="insta-icon" />
                </a>
                <a href="https://wa.me/5521971701316" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faWhatsapp} className="whats-icon" />
                </a>
                    </div>
            </div>
    );
}

export default Whats;