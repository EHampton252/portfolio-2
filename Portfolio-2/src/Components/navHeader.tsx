import "./navHeader.css"

const Header = () => {
    return (
        <header className="header">
                <nav className="header-links">
                    <ul className="navigation">
                        <li><a href="./#home">Home</a></li>
                        <li><a href="./#about">About</a></li>
                        <li><a href="./#projects">Projects</a></li>
                        <li><a href="./#contact">Contact</a></li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header;