import styles from './CertificationsCard.module.scss'

import teste from '../../../images/projects/Untitled.png'

const CertificationsCard = () => {
    return (
        <div className={styles.certifications_card}>
            <div className={styles.header}></div>

            <div className={styles.content}>
                <div className={`d-flex ${styles.content_header}`}>
                    <img src={teste} alt="" />

                    <h2>Title</h2>
                </div>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente aliquam dolorem explicabo, distinctio hic asperiores maiores excepturi aut, aspernatur magnam mollitia rem vero, deleniti suscipit neque cupiditate dolores eveniet consectetur. Placeat modi veritatis voluptate eveniet.
                </p>
            </div>

            <div className={styles.footer}>
                <button>View Details</button>
            </div>
        </div>
    )
}

export default CertificationsCard