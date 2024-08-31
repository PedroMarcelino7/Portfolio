import styles from './Certifications.module.scss'
import CertificationsCard from './CertificationsCard/CertificationsCard'

import { certifications } from '../../data'

const Certifications = () => {
    return (
        <div className={styles.certifications}>
            <div className='container'>
                <div className="row">
                    {certifications.map((certification, index) => (
                        <div className="col-lg-4" key={index}>
                            <CertificationsCard certification={certification} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Certifications