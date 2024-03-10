import styles from './Navbar.module.scss'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark" id='navbar'>
            <div className="container">
                <button className="navbar-toggler" type='button'
                    data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#header" className="nav-link fs-5" aria-current='page'>Socials</a>
                        </li>

                        <li className="nav-item">
                            <a href="#projects" className="nav-link fs-5" aria-current='page'>Projects</a>
                        </li>

                        <li className="nav-item">
                            <a href="#about" className="nav-link fs-5" aria-current='page'>About</a>
                        </li>

                        <li className="nav-item">
                            <a href="#" className="nav-link fs-5" aria-current='page'>Technologies</a>
                        </li>

                        <li className="nav-item">
                            <a href="#" className="nav-link fs-5" aria-current='page'>Education</a>
                        </li>

                        <li className="nav-item">
                            <a href="#" className="nav-link fs-5" aria-current='page'>Certifications</a>
                        </li>
                    </ul>


                </div>
            </div>
        </nav>
    )
}