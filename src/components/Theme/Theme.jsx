import { useEffect, useState } from 'react'
import styles from './Theme.module.scss'

export default function Theme() {
    const [theme, setTheme] = useState(true)

    useEffect(() => {
        const htmlElement = document.querySelector('html');
        htmlElement.setAttribute('data-bs-theme', theme ? 'dark' : 'light')
    }, [theme]);

    return (
        <div className={styles.theme_container}>
            <div
                className={`d-flex justify-content-center align-items-center rounded-circle text-center ${styles.theme_box}`}
                onClick={() => setTheme(!theme)}
            >
                {theme ?
                    <i className="fs-4 bi bi-brightness-high-fill"></i>
                    :
                    <i className="fs-4 bi bi-moon-fill"></i>
                }
            </div>
        </div>
    )
}