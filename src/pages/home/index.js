import ModalBackground from '../../components/modal';
import Modelo2 from '../../assets/modelo-2.jpg'
import Modelo3 from '../../assets/modelo-3.JPG'
import Modelo4 from '../../assets/modelo-4.jpg'
import Modelo5 from '../../assets/modelo-5.JPG'
import './style.scss'

function Home() {
    return (
        <div className="container">
            <ModalBackground />
            <div className='content-home'>
                <h1>Fotógrafo</h1>
                <div className='right-span'>
                    <div className='right-content'>
                        <h3>Olá,</h3>
                        <p>ME CHAMO <span>ERICK</span></p>
                        <p>E ESTE É MEU <span>PORTFÓLIO</span></p>
                    </div>
                    <div className='span-content'>
                        <span>Especializado em retratos</span>
                        <span>natural do Rio de janeiro.</span>
                    </div>
                </div>
            </div>

            <main>
                <div className='about'>
                    <div className='content-about'>
                        <h1>SOBRE MIM</h1>
                        <div className='divider'></div>
                        <p>Comecei a trabalhar na area de fotografia em 2014, com ensaios de 15 anos e festas infantis, mas, foi em 2019 que tive o primeiro contato com a moda, onde preferi seguir minha carreira.</p>
                    </div>
                    <div className='modal-about'></div>
                </div>
            </main>

            <section>
            <div className='production-container'>
                    <div className='content-about'>
                        <h1>DIREÇÃO DE FOTOGRAFIA</h1>
                        <div className='divider'></div>
                        <p>A direção de fotografia é muito importante, entao, eu sempre direciono o cliente de uma forma que ele(a) não se sinta pressionado(a) e assim, conseguimos fazer as fotos o mais natural possível.</p>
                    </div>
                    <div className='grid-images'>
                        <img src={Modelo2} alt='imagens'/>
                        <img src={Modelo3} alt='imagens'/>
                        <img src={Modelo4} alt='imagens'/>
                        <img src={Modelo5} alt='imagens'/>
                    </div>
                    <div className='modal-about'></div>
                </div>
            </section>

    <form
    action="https://formspree.io/f/xbjvrprz"
    method="POST"
    >
        
            <h1>Faça seu contato!</h1>
            <div className="divider"></div>
    
    
    
        <div class="content-form">
            <label>
                Nome:
            </label>
                <input type="text" name="Nome" autocomplete="on" />
            
            <label>
                Telefone:
            </label>
                <input type="number" name="Telefone" autocomplete="on" />
        
            <label>
                Email:
            </label>
                <input type="email" name="Email" autocomplete="on" />

            <label>
            Mensagem:
            </label>
            <textarea name="Mensagem" placeholder="Digite sua mensagem..."></textarea>
            
            <div className='button-position'>
                <button type="submit">
                    Enviar
                </button>    
            </div>     
        </div>                       
    </form>

        </div>
    )
}

export default Home;