import styles from './Theme.module.scss'
import { useEffect, useState } from 'react'
import { useTheme } from '../../../contexts/ThemeContext'

export default function Theme() {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={styles.theme_container}>
            <div
                className={`d-flex justify-content-center align-items-center rounded-circle text-center ${styles.theme_box}`}
                onClick={toggleTheme}
            >
                {theme === 'dark' ?
                    <i className={`${styles.theme_icon} fs-4 bi bi-moon-fill`}></i>
                    :
                    <i className={`${styles.theme_icon} fs-4 bi bi-brightness-high-fill`}></i>
                }
            </div>
        </div>
    )
}