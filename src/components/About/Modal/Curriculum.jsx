import styles from './Curriculum.module.scss'

import curriculum from '../../../images/Pedro_Paulo_Marcelino.pdf'

const Curriculum = ({ handleShowCurriculum }) => {
    return (
        <div className={styles.modal_container} onClick={() => handleShowCurriculum(false)}>
            <div className={styles.modal_box}>
                <iframe
                    src={curriculum}
                    className={styles.pdf}
                    title="Pedro Paulo Marcelino"
                />
            </div>
        </div>
    )
}

export default Curriculum