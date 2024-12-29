import styles from './QuickMessageButton.module.scss'

const QuickMessageButton = () => {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <a href="#contact">
                    <i class="bi bi-chat-fill text-white d-flex" style={{ fontSize: '2rem' }}></i>
                </a>
            </div>
        </div>
    )
}

export default QuickMessageButton