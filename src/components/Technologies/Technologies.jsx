import styles from './Technologies.module.scss'

import { technologies } from '../../data'

import { Swiper, SwiperSlide } from 'swiper/react'

export default function Technologies() {
    return (
        <section id='technologies'>
            <div className="container my-5">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                >
                    {technologies.map((technology, index) => (
                        <SwiperSlide key={index}>
                            <img src={technology.image} alt="" style={{ width: '100%', height: '300px' }} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}