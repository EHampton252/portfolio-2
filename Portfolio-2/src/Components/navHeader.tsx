import "./navHeader.css"

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                    <div className="header-text">
                        <h2>Ethan Hampton</h2>
                    </div>
                <div className="header-links">
                    <ul className="nav">
                        <li><a href="./#home">Home</a></li>
                        <li><a href="./#about">About</a></li>
                        <li><a href="./#projects">Projects</a></li>
                        <li><a href="./#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;