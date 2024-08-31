import styles from './Certifications.module.scss'
import CertificationsCard from './CertificationsCard/CertificationsCard'

const Certifications = () => {
    return (
        <div className={styles.certifications}>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-4">
                        <CertificationsCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certifications