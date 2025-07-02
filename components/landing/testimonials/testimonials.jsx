

"use client";
import * as React from "react";
import { useState } from "react";
import styles from './testimonials.module.css';
import Link from "next/link";
import Slider from "react-slick";
import { FaAngleUp } from "react-icons/fa6";

export function Testimonials({ testimonials }) {
    function createMarkup(post) {
        return { __html: post };
    }

    const [selectedTestimonial, setSelectedTestimonial] = useState(null);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        autoplaySpeed: 2000,
        swipeToSlide: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    vertical: false,
                    slidesToShow: 1,
                }
            }
        ]
    };

    const settings1 = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        swipeToSlide: true,
        arrows: false
    };

    return (
        <div
            className={`${styles.testimonialSectionArea} main_section main_section px-4`}
        >
            <div className="max-w-screen-xl mx-auto">
                <div className="row">
                    <div className="col-lg-5 m-auto">
                       <div className={`${styles.heading1} heading1 space-margin60 text-center`}>
                            <h5 className="text-[var(--rv-primary)]">Testimonial</h5>
                            <div className="space20"></div>
                            <h2 className="text-anime-style-1">Client Success Stories</h2>
                         </div>
                    </div>
                 </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    {/* Main Testimonial */}
                    <div className="md:col-span-7 w-full">
                        <div className={styles.testimonialHorizentalSlider}>
                             <Slider {...settings1}>
                                     {testimonials.map((testimonial, index) => (
                                    <div className={styles.testimonialVertical} key={index}>
                                        <div className={styles.icon}>
                                            <div className="quoto">
                                                <img src="/icons/quito1.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="space32"></div>
                                        <div>
                                            <div className="line-clamp-2 text-black" dangerouslySetInnerHTML={createMarkup(testimonial.content)}></div>
                                            <button
                                                onClick={() => setSelectedTestimonial(testimonial)}
                                                className="text-[16px] text-[var(--rv-primary)]  mt-1"
                                            >
                                                Read More
                                            </button>
                                        </div>
                                        <div className="space32"></div>
                                        <div className={styles.vericalBoxarea}>
                                            <div className={styles.imagesArea}>
                                                <div className={styles.img1}>
                                                    <img src={testimonial.image?.url || "/all-images/testimonial/default.jpg"} alt={testimonial.author} />
                                                </div>
                                                <div className={styles.text}>
                                                    <Link href="#">{testimonial.author}</Link>
                                                    <p>{testimonial.designation}</p>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="122" height="40" viewBox="0 0 122 40" fill="none">
                                                <g clipPath="url(#clip0_600_7362)">
                                                    {/* SVG content */}
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_600_7362">
                                                        <rect width="122" height="40" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>

                    {/* Vertical Slider - Thumbnails */}
                    <div className=" hidden md:block md:col-span-5 w-full overflow-hidden">
                        <div className={styles.sliderArea}>
                            <Slider {...settings}>
                                {testimonials.map((testimonial, index) => (
                                    <div key={index} className={`${styles.sliderBoxarea}`}>
                                        <div className={styles.sliderBox}>
                                            <div className={styles.img1}>
                                                <img src={testimonial.image?.url || "/all-images/testimonial/default.jpg"} alt={testimonial.author} />
                                            </div>
                                            <div className={styles.content}>
                                                <Link href="#">{testimonial.author}</Link>
                                                <p className="text-sm">{testimonial.designation}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                            {/* Arrows (optional functionality) */}
                            <div className={styles.testimonialArrows}>
                                <div className={styles.prevArrow}>
                                    <button><FaAngleUp /></button>
                                </div>
                                <div className={styles.nextArrow}>
                                    <button><i className="fa-solid fa-angle-down"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal */}
                {selectedTestimonial && (
                    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center px-4">
                        <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full overflow-y-auto max-h-[90vh] relative">
                            <button
                                onClick={() => setSelectedTestimonial(null)}
                                className="absolute top-2 right-3 text-2xl text-gray-600 hover:text-red-500"
                            >
                                &times;
                            </button>
                            <div dangerouslySetInnerHTML={createMarkup(selectedTestimonial.content)}></div>
                            <div className="mt-4">
                                <strong>{selectedTestimonial.author}</strong>
                                <p className="text-sm text-gray-500">{selectedTestimonial.designation}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
