import './styles/Header.scss'

function Header() {
    return(
        <header className='header'>
            <h1 className='header_title'>Tulunaki</h1>
            <nav className='header_menu'>
                <a href="" className='header_menu-link'>Mi luna</a>
                <a href="" className='header_menu-link'>Equilibrio emocional</a>
                <a href="" className='header_menu-link'>Quiénes somos</a>
                <a href="" className='header_menu-link'>Contacto</a>
            </nav>
        </header>
    )
}

export default Header