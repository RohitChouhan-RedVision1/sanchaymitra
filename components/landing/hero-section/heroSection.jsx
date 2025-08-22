
import React from 'react';
import styles from './HeroSection.module.css';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <div className={styles.heroSectionArea} style={{ backgroundImage: 'url(/all-images/bg/hero-bg1.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="max-w-screen-xl mx-auto  pt-[70px] px-2 md:px-0">
                <div class="grid lg:grid-cols-2 grid-cols-1 items-center justify-center">
                    <div>
                        <div className={styles.headingArea}>
                            <h5 data-aos="fade-left" data-aos-duration="800">Secure your future and grow with us.</h5>
                            <div class="space20"></div>
                            <h1 class="text-anime-style-1">Professional Guidance for Every Stage of Your Financial Journey</h1>
                            <div class="space20"></div>
                            <p data-aos="fade-left" data-aos-duration="1000">From Planning to Prosperity — We’re With You.</p>
                            <div class="space32"></div>
                            <div className={`${styles.btnArea} flex flex-col md:flex-row  pr-4 md:pr-0 gap-4`}>
                                <Link href="/service/mutual-funds" className={`${styles.vlBtn1} ${styles.btn2}`}>Explore Our Services</Link>
                                <Link href="/contact-us" className={" vl-btn6"}>Join Us Today</Link>
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoon-in" data-aos-duration="1000">
                        <div className={styles.heroImagesArea}>
                            <div className={styles.img1}>
                                <img src="/all-images/hero/hero-img1.webp" alt=""  />
                            </div>
                             
                            <img src="/elements/elements2.svg" className={`${styles.elements2} aniamtion-key-4`} alt="" />
                            <img src="/elements/elements3.svg" className={`${styles.elements3} aniamtion-key-1`} alt="" />
{/*                             <img src="/elements/elements4.svg" className={`${styles.elements4} aniamtion-key-2`} alt="" /> */}
                            <img src="/elements/elements5.svg" className={`${styles.elements5} keyframe5`} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
