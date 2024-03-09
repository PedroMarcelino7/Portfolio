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
                            <a href="#" className="nav-link" aria-current='page'>Home</a>
                        </li>

                        <li className="nav-item">
                            <a href="#" className="nav-link" aria-current='page'>Discover</a>
                        </li>

                        <li className="nav-item">
                            <a href="#" className="nav-link" aria-current='page'>Summary</a>
                        </li>

                        <li className="nav-item">
                            <a href="#" className="nav-link" aria-current='page'>Takeaways</a>
                        </li>

                        <li className="nav-item">
                            <a href="#" className="nav-link" aria-current='page'>Subscribe</a>
                        </li>
                    </ul>


                </div>
            </div>
        </nav>
    )
}