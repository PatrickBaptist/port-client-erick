import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss"
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import { animateScroll as scroll } from 'react-scroll';


function Footer() {
    
    function buttonback() {   
        scroll.scrollToTop();
    }

    return(
        <footer>
            <div className="contact">
                <h1>CONTATO</h1>
                <div className="divider"></div>
            </div>
            <div className="div-spans">
                <span>Instagram: <a href="https://www.instagram.com/e.ricking?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer">@e.ricking</a></span>
                <span>e-mail: erick.show95@gmail.com</span>
                <span>Telefone e Whatsapp: <a href="https://wa.me/5521971701316" target="_blank" rel="noreferrer">(21) 97170-1316</a></span>
        
                <span className="developer">desenvolvido por: <a href="https://patrickbaptista-portfolio.netlify.app/" target="_blank" rel="noreferrer">&#169;Patrick Baptista</a></span>
                
            </div>

            <div className="container-gotop">
            <FontAwesomeIcon icon={faArrowAltCircleUp} onClick={buttonback} className="gotop" />
            </div>
        </footer>
    )
}

export default Footer