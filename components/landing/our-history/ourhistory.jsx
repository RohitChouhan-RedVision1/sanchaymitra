"use client"
import Link from "next/link"
import axios from "axios"
import { useEffect, useState } from "react"
import formatDate from "@/lib/formatDate";
import styles from './ourhistory.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

export function OurHistory() {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("/api/blogs/dashboardblogs");
                if (res.status === 200) {
                    setData(res.data);
                }
            } catch (error) {
                console.error("Failed to fetch blogs", error);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            <div className={`${styles.historySectionArea} sp1 bg1`}>
                <div class="max-w-screen-xl mx-auto">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="heading1 space-margin60">
                                <h5>Our History</h5>
                                <div class="space20"></div>
                                <h2 class="text-anime-style-1">The Story of Our Success</h2>
                            </div>
                        </div>
                    </div>
                    <div class="boredr"></div>
                    <div class="row">
                        <div class="col-lg-12" data-aos="fade-up" data-aos-duration="1000">
                            <div className={styles.historySingleSlider}>
                                <Swiper
                                    spaceBetween={30}
                                    slidesPerView={3}
                                    autoplay={{
                                        delay: 2000,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Autoplay]}
                                    loop={true}
                                >
                                    {data.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className={styles.historyBoxarea}>
                                                <h2>1995</h2>
                                                <div class="space32"></div>
                                                <span></span>
                                                <div class="space32"></div>
                                                <a href="project-single.html">Founder In London</a>
                                                <div class="space12"></div>
                                                <p>Over the years, we’ve grown from a small consultancy to leading provider.</p>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="container mx-auto">
                <div class="row">
                    <div class="col-lg-5 m-auto">
                        <div className={`heading1 text-center space-margin60`}>
                            <h5 class="vl-section-subtitle">Our Blog</h5>
                            <div class="space24"></div>
                            <h2 class="vl-section-title text-anime-style-1">Expert Financial Advice And Business Tips</h2>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-5" data-aos="fade-left" data-aos-duration="900">
                    <div className={styles.blogItem}>
                        <div className={`${styles.blogThumb} image-anime`}>
                            <img src="/all-images/blog/blog-img1.png" alt="" />
                        </div>
                        <div className={styles.blogContent}>
                            <div className={styles.blogMeta}>
                                <ul>
                                    <li>
                                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
                                            <g clip-path="url(#clip0_600_6756)">
                                                <path d="M5.61627 0C5.80006 0 5.97633 0.0811248 6.1063 0.225528C6.23626 0.369931 6.30927 0.565783 6.30927 0.77V2.2099H13.7511V0.7799C13.7511 0.575683 13.8241 0.379831 13.9541 0.235428C14.084 0.0910248 14.2603 0.0099 14.4441 0.0099C14.6279 0.0099 14.8042 0.0910248 14.9341 0.235428C15.0641 0.379831 15.1371 0.575683 15.1371 0.7799V2.2099H17.82C18.345 2.2099 18.8484 2.44153 19.2197 2.85388C19.591 3.26622 19.7997 3.82551 19.8 4.4088V19.8011C19.7997 20.3844 19.591 20.9437 19.2197 21.356C18.8484 21.7684 18.345 22 17.82 22H1.98C1.45504 22 0.951572 21.7684 0.580278 21.356C0.208985 20.9437 0.000262479 20.3844 0 19.8011L0 4.4088C0.000262479 3.82551 0.208985 3.26622 0.580278 2.85388C0.951572 2.44153 1.45504 2.2099 1.98 2.2099H4.92327V0.7689C4.92353 0.564874 4.99666 0.369304 5.12659 0.225139C5.25653 0.0809736 5.43265 -2.0819e-07 5.61627 0ZM1.386 8.5162V19.8011C1.386 19.8878 1.40136 19.9736 1.43122 20.0537C1.46107 20.1337 1.50482 20.2065 1.55998 20.2678C1.61514 20.3291 1.68062 20.3777 1.75269 20.4109C1.82475 20.444 1.90199 20.4611 1.98 20.4611H17.82C17.898 20.4611 17.9752 20.444 18.0473 20.4109C18.1194 20.3777 18.1849 20.3291 18.24 20.2678C18.2952 20.2065 18.3389 20.1337 18.3688 20.0537C18.3986 19.9736 18.414 19.8878 18.414 19.8011V8.5316L1.386 8.5162ZM6.60033 16.0809V17.9135H4.95V16.0809H6.60033ZM10.7247 16.0809V17.9135H9.07533V16.0809H10.7247ZM14.85 16.0809V17.9135H13.1997V16.0809H14.85ZM6.60033 11.7062V13.5388H4.95V11.7062H6.60033ZM10.7247 11.7062V13.5388H9.07533V11.7062H10.7247ZM14.85 11.7062V13.5388H13.1997V11.7062H14.85ZM4.92327 3.7488H1.98C1.90199 3.7488 1.82475 3.76587 1.75269 3.79904C1.68062 3.83221 1.61514 3.88082 1.55998 3.94211C1.50482 4.0034 1.46107 4.07615 1.43122 4.15623C1.40136 4.2363 1.386 4.32213 1.386 4.4088V6.9773L18.414 6.9927V4.4088C18.414 4.32213 18.3986 4.2363 18.3688 4.15623C18.3389 4.07615 18.2952 4.0034 18.24 3.94211C18.1849 3.88082 18.1194 3.83221 18.0473 3.79904C17.9752 3.76587 17.898 3.7488 17.82 3.7488H15.1371V4.7707C15.1371 4.97492 15.0641 5.17077 14.9341 5.31517C14.8042 5.45958 14.6279 5.5407 14.4441 5.5407C14.2603 5.5407 14.084 5.45958 13.9541 5.31517C13.8241 5.17077 13.7511 4.97492 13.7511 4.7707V3.7488H6.30927V4.7608C6.30927 4.96502 6.23626 5.16087 6.1063 5.30527C5.97633 5.44968 5.80006 5.5308 5.61627 5.5308C5.43247 5.5308 5.25621 5.44968 5.12624 5.30527C4.99628 5.16087 4.92327 4.96502 4.92327 4.7608V3.7488Z" fill="#061D19" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_600_6756">
                                                    <rect width="19.8" height="22" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg> 8 December 2025 <span> | </span></a>
                                    </li>
                                    <li>
                                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                            <path d="M4.9668 17.5C4.9668 14.2783 7.57847 11.6667 10.8001 11.6667C14.0218 11.6667 16.6335 14.2783 16.6335 17.5M14.1335 5.83333C14.1335 7.67428 12.641 9.16667 10.8001 9.16667C8.95918 9.16667 7.4668 7.67428 7.4668 5.83333C7.4668 3.99238 8.95918 2.5 10.8001 2.5C12.641 2.5 14.1335 3.99238 14.1335 5.83333Z" stroke="#061D19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg> By Alex Roy</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="space24"></div>
                            <h4 className={styles.blogTitle}>
                                <a href="blog-single.html">Actionable Insights to Strengthen Your Business’s Financial Health Optimizing</a>
                            </h4>
                            <div class="space16"></div>
                            <p>Whether you’re a startup or a established company, having the right financial strategies is essential to long-term success.</p>
                            <div class="space24"></div>
                            <div className={styles.blogIcon}>
                                <a href="blog-single.html">Read More <ArrowRight /></a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.blogItem}>
                        <div className={`${styles.blogThumb} image-anime`}>
                            <img src="/all-images/blog/blog-img1.png" alt="" />
                        </div>
                        <div className={styles.blogContent}>
                            <div className={styles.blogMeta}>
                                <ul>
                                    <li>
                                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
                                            <g clip-path="url(#clip0_600_6756)">
                                                <path d="M5.61627 0C5.80006 0 5.97633 0.0811248 6.1063 0.225528C6.23626 0.369931 6.30927 0.565783 6.30927 0.77V2.2099H13.7511V0.7799C13.7511 0.575683 13.8241 0.379831 13.9541 0.235428C14.084 0.0910248 14.2603 0.0099 14.4441 0.0099C14.6279 0.0099 14.8042 0.0910248 14.9341 0.235428C15.0641 0.379831 15.1371 0.575683 15.1371 0.7799V2.2099H17.82C18.345 2.2099 18.8484 2.44153 19.2197 2.85388C19.591 3.26622 19.7997 3.82551 19.8 4.4088V19.8011C19.7997 20.3844 19.591 20.9437 19.2197 21.356C18.8484 21.7684 18.345 22 17.82 22H1.98C1.45504 22 0.951572 21.7684 0.580278 21.356C0.208985 20.9437 0.000262479 20.3844 0 19.8011L0 4.4088C0.000262479 3.82551 0.208985 3.26622 0.580278 2.85388C0.951572 2.44153 1.45504 2.2099 1.98 2.2099H4.92327V0.7689C4.92353 0.564874 4.99666 0.369304 5.12659 0.225139C5.25653 0.0809736 5.43265 -2.0819e-07 5.61627 0ZM1.386 8.5162V19.8011C1.386 19.8878 1.40136 19.9736 1.43122 20.0537C1.46107 20.1337 1.50482 20.2065 1.55998 20.2678C1.61514 20.3291 1.68062 20.3777 1.75269 20.4109C1.82475 20.444 1.90199 20.4611 1.98 20.4611H17.82C17.898 20.4611 17.9752 20.444 18.0473 20.4109C18.1194 20.3777 18.1849 20.3291 18.24 20.2678C18.2952 20.2065 18.3389 20.1337 18.3688 20.0537C18.3986 19.9736 18.414 19.8878 18.414 19.8011V8.5316L1.386 8.5162ZM6.60033 16.0809V17.9135H4.95V16.0809H6.60033ZM10.7247 16.0809V17.9135H9.07533V16.0809H10.7247ZM14.85 16.0809V17.9135H13.1997V16.0809H14.85ZM6.60033 11.7062V13.5388H4.95V11.7062H6.60033ZM10.7247 11.7062V13.5388H9.07533V11.7062H10.7247ZM14.85 11.7062V13.5388H13.1997V11.7062H14.85ZM4.92327 3.7488H1.98C1.90199 3.7488 1.82475 3.76587 1.75269 3.79904C1.68062 3.83221 1.61514 3.88082 1.55998 3.94211C1.50482 4.0034 1.46107 4.07615 1.43122 4.15623C1.40136 4.2363 1.386 4.32213 1.386 4.4088V6.9773L18.414 6.9927V4.4088C18.414 4.32213 18.3986 4.2363 18.3688 4.15623C18.3389 4.07615 18.2952 4.0034 18.24 3.94211C18.1849 3.88082 18.1194 3.83221 18.0473 3.79904C17.9752 3.76587 17.898 3.7488 17.82 3.7488H15.1371V4.7707C15.1371 4.97492 15.0641 5.17077 14.9341 5.31517C14.8042 5.45958 14.6279 5.5407 14.4441 5.5407C14.2603 5.5407 14.084 5.45958 13.9541 5.31517C13.8241 5.17077 13.7511 4.97492 13.7511 4.7707V3.7488H6.30927V4.7608C6.30927 4.96502 6.23626 5.16087 6.1063 5.30527C5.97633 5.44968 5.80006 5.5308 5.61627 5.5308C5.43247 5.5308 5.25621 5.44968 5.12624 5.30527C4.99628 5.16087 4.92327 4.96502 4.92327 4.7608V3.7488Z" fill="#061D19" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_600_6756">
                                                    <rect width="19.8" height="22" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg> 8 December 2025 <span> | </span></a>
                                    </li>
                                    <li>
                                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                            <path d="M4.9668 17.5C4.9668 14.2783 7.57847 11.6667 10.8001 11.6667C14.0218 11.6667 16.6335 14.2783 16.6335 17.5M14.1335 5.83333C14.1335 7.67428 12.641 9.16667 10.8001 9.16667C8.95918 9.16667 7.4668 7.67428 7.4668 5.83333C7.4668 3.99238 8.95918 2.5 10.8001 2.5C12.641 2.5 14.1335 3.99238 14.1335 5.83333Z" stroke="#061D19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg> By Alex Roy</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="space24"></div>
                            <h4 className={styles.blogTitle}>
                                <a href="blog-single.html">Actionable Insights to Strengthen Your Business’s Financial Health Optimizing</a>
                            </h4>
                            <div class="space16"></div>
                            <p>Whether you’re a startup or a established company, having the right financial strategies is essential to long-term success.</p>
                            <div class="space24"></div>
                            <div className={styles.blogIcon}>
                                <a href="blog-single.html">Read More <ArrowRight /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
