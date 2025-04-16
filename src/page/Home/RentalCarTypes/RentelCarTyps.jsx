import React from 'react';
import RentalCarTypesCard from './RentalCarTypesCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './rentel.css';
import { Navigation, Pagination } from 'swiper/modules';
import NameCard from '../../../components/shared/card/NameCard';

const carTypes = [
  { title: 'Luxury Cars', image: 'https://i.ibb.co/fVN3X7bc/download.jpg' },
  { title: 'Sport Cars', image: 'https://i.ibb.co/N6kQLJkH/Toyota-Crown.webp' },
  { title: 'SUV', image: 'https://i.ibb.co/SD94Nd9t/images-3.jpg' },
  { title: 'Luxury Cars', image: 'https://i.ibb.co/RGwWWKhC/images-4.jpg' },
  { title: 'Sport Cars', image: 'https://i.ibb.co/4ZpjFtKZ/images-5.jpg' },
  { title: 'SUV', image: 'https://i.ibb.co/LDHmcmsZ/images-6.jpg' },
];

export default function RentalCarTypes() {
  return (
    <div className="">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-rentel-pagination"></span>`;
          },
        }}
      >
        {carTypes.map((car, index) => (
          <SwiperSlide key={index}>
            <NameCard image={car?.image} name={car?.title}></NameCard>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Pagination Dots */}
      <div className="swiper-pagination mt-4 flex justify-center"></div>
    </div>
  );
}
