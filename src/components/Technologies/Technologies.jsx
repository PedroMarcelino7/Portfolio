import styles from './Technologies.module.scss'

import { useState, useEffect } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { technologies } from '../../data'

export default function Technologies() {
    return (
        <section id='technologies'>
            <Swiper
                slidesPerView={1}
                navigation
            >
                {technologies.map((technology, index) => (
                    <SwiperSlide key={index} className='d-flex justify-content-center align-items-center'>
                        <img src={technology.image} alt="" style={{ width: '50%' }} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}