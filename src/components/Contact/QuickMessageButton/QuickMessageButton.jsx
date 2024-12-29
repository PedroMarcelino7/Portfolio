import styles from './QuickMessageButton.module.scss'

const QuickMessageButton = () => {
    return (
        <div className={styles.container}>
            <a href="#contact">
                <div className={styles.box}>
                    <i className="bi bi-chat-fill text-white d-flex" style={{ fontSize: '2rem' }}></i>
                </div>
            </a>
        </div>
    )
}

export default QuickMessageButton