"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import styles from './ourposts.module.css';

export function OurPosts({ vidios }) {
  return (
    <div className={`${styles.blogArea} main_section`}>
      <div className="max-w-screen-xl mx-auto">
        <div className="row">
          <div className="col-lg-5 m-auto">
            <div className="heading1 text-center space-margin60">
              <h5 className="vl-section-subtitle">Our Videos</h5>
              <div className="space24"></div>
              <h2 className="vl-section-title text-anime-style-1">
                Expert Financial Insights and Educational Videos
              </h2>
            </div>
          </div>
        </div>

        <Swiper
          spaceBetween={20}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper mt-10"
        >
          {vidios?.map((video, index) => (
            <SwiperSlide key={index}>
              <a
                href={video.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={video.title}
              >
                <div className={styles.blogItem}>
                  <div className={`${styles.blogThumb} image-anime`}>
                    <img
                      src={video.image.url}
                      alt={video.title}
                      className="w-full h-auto rounded"
                    />
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
