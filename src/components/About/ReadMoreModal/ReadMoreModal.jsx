import styles from './ReadMoreModal.module.scss'

const ReadMoreModal = ({ handleShowReadMore }) => {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.header}>
                    <h1>About me</h1>

                    <i onClick={() => handleShowReadMore(false)} className="bi bi-x text-black d-flex" style={{ fontSize: '2.5rem', cursor: 'pointer' }}></i>
                </div>

                <div className={styles.content}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt earum, facilis quam odio veritatis numquam voluptates nostrum ex fugiat laudantium rem eos soluta voluptatum animi nobis praesentium id quos cupiditate quod a totam nihil in! Ratione excepturi ipsum ipsa maiores, enim voluptas alias nesciunt. Temporibus harum culpa vitae, placeat eaque illum hic tenetur ipsam veritatis voluptatibus corrupti minima quibusdam soluta. Illum debitis doloribus porro itaque deserunt architecto repellat mollitia dolores eius libero odit modi perspiciatis facere enim quibusdam non pariatur velit, asperiores laborum rerum quas. Adipisci, repellat. Illo nam, iure accusantium aperiam sed quisquam, dolor fuga consectetur vel praesentium alias?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt earum, facilis quam odio veritatis numquam voluptates nostrum ex fugiat laudantium rem eos soluta voluptatum animi nobis praesentium id quos cupiditate quod a totam nihil in! Ratione excepturi ipsum ipsa maiores, enim voluptas alias nesciunt. Temporibus harum culpa vitae, placeat eaque illum hic tenetur ipsam veritatis voluptatibus corrupti minima quibusdam soluta. Illum debitis doloribus porro itaque deserunt architecto repellat mollitia dolores eius libero odit modi perspiciatis facere enim quibusdam non pariatur velit, asperiores laborum rerum quas. Adipisci, repellat. Illo nam, iure accusantium aperiam sed quisquam, dolor fuga consectetur vel praesentium alias?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt earum, facilis quam odio veritatis numquam voluptates nostrum ex fugiat laudantium rem eos soluta voluptatum animi nobis praesentium id quos cupiditate quod a totam nihil in! Ratione excepturi ipsum ipsa maiores, enim voluptas alias nesciunt. Temporibus harum culpa vitae, placeat eaque illum hic tenetur ipsam veritatis voluptatibus corrupti minima quibusdam soluta. Illum debitis doloribus porro itaque deserunt architecto repellat mollitia dolores eius libero odit modi perspiciatis facere enim quibusdam non pariatur velit, asperiores laborum rerum quas. Adipisci, repellat. Illo nam, iure accusantium aperiam sed quisquam, dolor fuga consectetur vel praesentium alias?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ReadMoreModal