import styles from './Header.module.scss'

export default function Header() {
    return (
        <header className={`d-flex flex-column justify-content-center align-items-center vw-100 vh-100`}>
            <h1 className='text-light'>Pedro Paulo Marcelino</h1>

            <div className={styles.button_box}>
                <button>
                    <svg width="180px" height="60px" viewBox="0 0 180 60">
                        <polyline points="179,1 179,59 1,59 1,1 179,1" />
                        <polyline points="179,1 179,59 1,59 1,1 179,1" />
                    </svg>
                    
                    <span className='fw-bold fs-5 text-white'>DETAILS</span>
                </button>
            </div>
        </header>
    )
}