"use client";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const AmcLogosSlider = () => {
  const [amcLogos, setAmcLogos] = useState([]);
  const [mutualFundCategoryId, setMutualFundCategoryId] = useState("");

  // Fetch categories and get Mutual Funds category only
  const fetchCategories = async () => {
    try {
      const res = await fetch("/api/amc-category");
      const data = await res.json();

      const mutualFundCategory = data.find(
        (cat) => cat.title === "Mutual Funds"
      );

      if (mutualFundCategory) {
        setMutualFundCategoryId(mutualFundCategory._id);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // Fetch AMC logos by Mutual Funds category ID, filter `addisstatus: true`
  const fetchAmcLogos = async (categoryID) => {
    try {
      const res = await fetch("/api/amc-logos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ categoryID }),
      });

      const data = await res.json();
      const filteredLogos = data?.data?.filter((logo) => logo.addisstatus);
      setAmcLogos(filteredLogos || []);
    } catch (error) {
      console.error("Error fetching AMC logos:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (mutualFundCategoryId) {
      fetchAmcLogos(mutualFundCategoryId);
    }
  }, [mutualFundCategoryId]);

  return (
    <div className="max-w-screen-xl mx-auto main_section">
      <div className="row">
        <div className="col-lg-5 m-auto">
          <div className="heading1 text-center space-margin60">
            <h5 className="vl-section-subtitle">Our Partners</h5>
            <div className="space24"></div>
            <h2 className="vl-section-title text-anime-style-1">
              Trusted Partners Powering Your Financial Growth
            </h2>
          </div>
        </div>
      </div>

      <Carousel
        className="w-full mx-auto"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="-ml-1">
          {amcLogos.map((logo, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/5"
            >
              <div className="px-5">
                <a
                  href={logo.logourl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={`https://redvisionweb.com/${logo.logo}`}
                    alt={logo.logoname}
                    width={160}
                    height={180}
                    className=" transition ease-in-out duration-75"
                  />
                </a>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default AmcLogosSlider;
