/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaInfo,
} from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SectionHeader from "../../../components/shared/SectionHeader";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Helmet } from "react-helmet-async";

// Social media icons component
const SocialIcon = ({ icon: Icon, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="w-[40px] h-[40px] border border-[#F5B754] bg-transparent rounded-full overflow-hidden  font-bold text-[14px] text-center flex items-center justify-center transition-all duration-300 hover:bg-[#F5B754] hover:text-[#1b1b1b]"
  >
    <Icon className="text-sm" />
  </a>
);

const ExpertDetails = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const [expert, setExpert] = useState(null);
  const [experts, setExperts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Biography");

  useEffect(() => {
    axiosPublic
      .get("/expert-teammate")
      .then((res) => {
        setExperts(res.data);
        const selected = res.data.find((item) => item._id === id);
        setExpert(selected);
      })
      .catch((err) => err.message)
      .finally(() => setLoading(false));
  }, [axiosPublic, id]);

  if (loading) return <p className="text-center mt-10 ">Loading...</p>;

  // Fallback if expert is not found
  if (!expert) {
    return (
      <p className="text-center mt-10 orange font-semibold">
        Expert not found.
      </p>
    );
  }

  const otherExperts = experts.filter((e) => e._id !== expert._id);

  return (
    <>
      <Helmet>
        <title>{expert?.name} | Expert Details | SwiftRent</title>
        <meta
          name="description"
          content={`Learn more about ${expert?.name}, a skilled expert at SwiftRent. Discover their qualifications, experience, and expertise in the field.`}
        />
      </Helmet>
      <div className="pt-5">
        <div className="min-h-screen flex items-center justify-center py-10">
          <div className="mxw w-full flex flex-col md:flex-row gap-8 px-4">
            {/* Left Section: Image and Contact */}
            <div className="flex flex-col items-center md:w-1/2">
              <img
                src={expert.image}
                alt={expert.name}
                className="w-[476px] h-[476px] object-cover rounded-xl shadow-md mb-6"
              />
              <div className="flex gap-4 mb-4 cursor-pointer">
                <SocialIcon icon={FaLinkedinIn} link={expert.linkedin} />
                <SocialIcon icon={FaFacebookF} link={expert.facebook} />
                <SocialIcon icon={FaInstagram} link={expert.instagram} />
                <SocialIcon
                  icon={FaWhatsapp}
                  link={`https://wa.me/${expert.phone}`}
                />
              </div>

              <p className="text-sm ">
                My e-mail address:{" "}
                <span className="font-semibold">{expert.email}</span>
              </p>
            </div>

            {/* Right Section: Details */}
            <div className="md:w-1/2">
              {/* Name and Role */}
              <h1 className="text-2xl font-bold mb-2">
                Hello, I’m {expert.name}. I work as your sales consultant at{" "}
                <span className="orange">{expert.role}</span>.
              </h1>

              <p className="mb-5 text-sm ">{expert.jobResponsibility}</p>

              {/* Qualifications */}
              <ul className="list-none mb-14">
                {expert.qualifications.map((qualification, index) => (
                  <li key={index} className="flex items-center gap-2  mb-3">
                    <span className="orange bg-black w-[40px] h-[40px] rounded-full flex items-center justify-center">
                      ✓
                    </span>{" "}
                    {qualification}
                  </li>
                ))}
              </ul>

              {/* Tabs */}
              <div className="flex gap-4 mb-4">
                {["Biography", "Education", "Awards"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-sm font-semibold pb-1 ${
                      activeTab === tab
                        ? "orange border-b-2 border-[#f5b754]"
                        : ""
                    }`}
                  >
                    {tab.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Tab Content */}

              <div className="">
                {activeTab === "Biography" && <p>{expert.bio}</p>}
                {activeTab === "Education" && (
                  <ul className="list-disc list-inside">
                    {expert.education.map((edu, index) => (
                      <li key={index}>{edu}</li>
                    ))}
                  </ul>
                )}
                {activeTab === "Awards" && (
                  <ul className="list-disc list-inside">
                    {expert.awards.map((award, index) => (
                      <li key={index}>{award}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Experts Section */}
        <SectionHeader title="" subtitle="Other Team Members" />
        <div className="mt-10 mxw">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} custom-rentel-pagination"></span>`;
              },
            }}
          >
            {otherExperts.map((expert) => (
              <SwiperSlide key={expert._id}>
                <div className="flex justify-center">
                  <Link
                    to={`/expert/${expert._id}`}
                    className="relative w-full max-w-xs h-[250px] md:h-[350px] rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                      <img
                        src={expert.image}
                        alt={expert.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute bottom-0 w-full h-[30%] bg-gradient-to-t from-black/80 to-transparent"></div>
                    </div>

                    {/* Bottom Info */}
                    <div className="flex items-center absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#1b1b1b] to-transparent rounded-b-xl">
                      <div className="flex items-center justify-center w-[40px] h-[40px] bg-[#F5B754] rounded-full font-semibold">
                        <FaInfo className="text-lg" />
                      </div>
                      <div className="ml-3 text-left">
                        <h1 className="text-md text-[#f8f9fa]/90 font-semibold ">
                          {expert.name}
                        </h1>
                        <p className="text-sm text-[#f8f9fa]/80 orange">
                          {expert.role}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Swiper Pagination */}
          <div className="swiper-pagination mt-4 flex justify-center"></div>
        </div>
      </div>
    </>
  );
};

export default ExpertDetails;
