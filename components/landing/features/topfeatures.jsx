'use client';
import styles from './topfeatures.module.css';
import React from 'react';
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopFeatures = () => {
  const cardData = [
    {
      animation: "fade-up",
      link: "/tools/calculators",
      title: 'Financial Calculator',
      description: 'Plan your finances better with intuitive calculators for SIP, Lumpsum, Retirement and more.',
      images: {
        default: '/images/calculator.svg',
        hover: '/images/calculator.svg'
      }
    },
    {
      animation: "fade-up",
      link: "/tools/financial-health",
      title: 'Financial Health',
      description: 'Analyze your financial wellness and understand areas where you can improve.',
      images: {
        default: '/images/medical-report.svg',
        hover: '/images/medical-report.svg'
      }
    },
    {
      animation: "fade-right",
      link: "/tools/pay-premium-online",
      title: 'Pay Premium Online',
      description: 'Conveniently pay your insurance premiums online with a few clicks.',
      images: {
        default: '/images/vip-card.svg',
        hover: '/images/vip-card.svg'
      }
    },
    {
      animation: "fade-right",
      link: "/tools/useful-links",
      title: 'Useful Links',
      description: 'Access curated links to financial portals, regulators, and knowledge resources.',
      images: {
        default: '/images/link.svg',
        hover: '/images/link.svg'
      }
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    arrows: false,
    customPaging: function (i) {
      return <button>{i + 1}</button>;
    },
    dotsClass: `${styles.slickDots}`
  };

  return (
    <div className={styles.projectSection}>
      <div className="max-w-screen-xl mx-auto main_section">
         <div className="row items-center">
          <div className="col-lg-6 m-auto">
            <div className="heading1 text-center space-margin60">
              <h5>OUR TOOLS</h5>
              <div className="space20"></div>
              <h2 className="text-anime-style-1">Empowering Financial Decisions</h2>
            </div>
          </div>
        </div>
      

        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8">
          <div className="md:col-span-1"></div>

          <div className="md:col-span-5 w-full">
            <Slider {...settings} className={styles.projectSingleBoxarea}>
              {cardData.map((card, index) => (
                <div key={index} className={`${styles.projectBoxarea} heading1`} data-aos={card.animation}>
                  <h5>Featured Tool</h5>
                  <div className="space16"></div>
                  <h2>
                    <Link href={card.link}>{card.title}</Link>
                  </h2>
                  <div className="space16"></div>
                  <p>{card.description}</p>
                  <div className="space24"></div>
                  <Link href={card.link}>Read More <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
              ))}
            </Slider>
          </div>

          <div className="block md:col-span-6">
            <div className={styles.allImages}>
              <div className={styles.imagesArea}>
                <div className={styles.img1}>
                  <img src="/all-images/project/project-img1.png" alt="Tool visual" />
                </div>
                <img src="/elements/basic-1-tool.png" alt="" className={`${styles.elements7} aniamtion-key-1 w-[250px]`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFeatures;
