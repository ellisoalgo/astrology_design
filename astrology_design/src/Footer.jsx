import './styles/Footer.scss'

function Footer() {
  return (
    <footer className='footer'>
        <ul className='footer_sections'>
            <li>
                <a href="" className='footer_sections-link'>Mi luna</a>
            </li>
            <li>
                <a href="" className='footer_sections-link'>Equilibrio emocional</a>
            </li>
            <li>
                <a href="" className='footer_sections-link'>Quiénes somos</a>
            </li>
            <li>
                <a href="" className='footer_sections-link'>Contacto</a>
            </li>
        </ul>
        <a href="" className='footer_logo'>
            <img src="src/assets/Logo_fondo_transparente.PNG" alt="logo" className='footer_logo-logo'/>
        </a>
        <ul className='footer_socials'>
            <li>
                <a href="" className='footer_socials_link'>Logo insta</a>
            </li>
            <li>
                <a href="" className='footer_socials_link'>Logo tiktok</a>
            </li>
            <li>
                <a href="" className='footer_socials_link'>Logo youtube</a>
            </li>
            <li>
                <a href="" className='footer_socials_link'>Logo podimo</a>
            </li>
        </ul>
    </footer>
  )
}

export default Footer