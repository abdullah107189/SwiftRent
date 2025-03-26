import React, { useState, useEffect } from "react";
import SectionHeader from "../../../components/shared/SectionHeader";
import AboutCard from "../AboutCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const reviews = [
  {
    name: "Dan Martin",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 5,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Sarah Johnson",
    review:
      "Amazing experience! The service was top-notch. Really impressed with the professionalism",
    rating: 5,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Michael Brown",
    review:
      " Really impressed with the professionalismReally impressed with the professionalism.",
    rating: 4,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Emma Watson",
    review:
      "Absolutely loved it! Will come back for sure Really impressed with the professionalism.",
    rating: 5,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "John Doe",
    review:
      "Best experience ever! Highly recommended Really impressed with the professionalism.",
    rating: 4,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Alice Green",
    review:
      "Superb service and great value for money!Really impressed with the professionalism",
    rating: 5,
    image: "https://via.placeholder.com/150",
  },
];

export default function ClientsSay() {
  const [slidePercentage, setSlidePercentage] = useState(100);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidePercentage(33.33); // Desktop (3 cards)
      } else if (window.innerWidth >= 768) {
        setSlidePercentage(50); // Tablet (2 cards)
      } else {
        setSlidePercentage(100); // Mobile (1 card)
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mxw ">
      <SectionHeader title="Testimonials" subtitle="What Clients Say" />

      <div className="relative">
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false} // No Indicators
          infiniteLoop={true}
          autoPlay={true} // Auto Play Enabled
          interval={3000} // 3 seconds per slide
          stopOnHover={true} // Stops when hovered
          showArrows={false} // Side Buttons Hidden
          centerMode={true}
          centerSlidePercentage={slidePercentage} // Responsive card layout
        >
          {reviews.map((review, index) => (
            <div key={index} className="cursor-pointer">
              <AboutCard review={review} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
