import styles from './Technologies.module.scss'

import { useState, useEffect } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { technologies } from '../../data'

export default function Technologies() {
    const [slidePerView, setSlidePerView] = useState(1)

    function handleResize() {
        if (window.innerWidth < 768) {
            setSlidePerView(1)
        } else if (window.innerWidth < 992) {
            setSlidePerView(2)
        } else {
            setSlidePerView(3)
        }
    }

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
    }, [])

    return (
        <section id='technologies' className={styles.technologies}>
            <div className="container my-5">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={slidePerView}
                    navigation
                >
                    {technologies.map((technology, index) => (
                        <SwiperSlide key={index} className='d-flex justify-content-center align-items-center'>
                            <img src={technology.image} alt="" style={{ width: '175px', height: '150px' }} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}