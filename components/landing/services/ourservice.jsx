'use client'
import styles from './ourservice.module.css'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const OurServices = ({ services }) => {
    return (
        <div className={`${styles.serviceSectionArea} main_section`} style={{ backgroundImage: 'url(/all-images/bg/bg2.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="max-w-screen-xl mx-auto">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="heading1 space-margin60">
                            <h5>OUR SERVICE</h5>
                            <div className="space20"></div>
                            <h2 className="text-anime-style-1">Professional Services for Business Success</h2>
                        </div>
                    </div>
                </div>
                <div className={styles.serviceSingleSlider}>
                    <Swiper
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {services.map((service, index) => (
                            <SwiperSlide key={index}>
                                <div className={styles.serviceBoxarea}>
                                    <div className={styles.img1}>
                                        <img src="/all-images/service/service-img1.png" alt="" />
                                        <div className={styles.arrow}>
                                            <Link href={`/service/${service?.link}`}><ArrowRight /></Link>
                                        </div>
                                    </div>
                                    <div className={styles.contentArea}>
                                        <div className={styles.icons}>
                                            <img src="/icons/service1.svg" alt="" />
                                        </div>
                                        <div className="space24"></div>
                                        <Link href={`/service/${service?.link}`}>{service?.name}</Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default OurServices;
