import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

// Social media icons component
const SocialIcon = ({ icon: Icon }) => (
  <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white">
    <Icon className="text-sm" />
  </div>
);

const ExpertDetails = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const [expert, setExpert] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Biography");

  useEffect(() => {
    axiosPublic
      .get("/about")
      .then((res) => {
        const selected = res.data.find((item) => item._id === id);
        setExpert(selected);
      })
      .catch((err) => console.error("Error fetching expert:", err))
      .finally(() => setLoading(false));
  }, [axiosPublic, id]);

  if (loading)
    return <p className="text-center mt-10 text-white">Loading...</p>;

  if (!expert)
    return <p className="text-center mt-10 orange">Expert not found</p>;

  return (
    <div className="min-h-screen  text-white flex items-center justify-center py-10">
      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-8 px-4">
        {/* Left Section: Image and Contact */}
        <div className="flex flex-col items-center md:w-1/3">
          <img
            src={expert.image}
            alt={expert.name}
            className="w-64 h-80 object-cover rounded-xl shadow-md mb-6"
          />
          <div className="flex gap-4 mb-4 cursor-pointer">
            <SocialIcon icon={FaLinkedinIn} />
            <SocialIcon icon={FaFacebookF} />
            <SocialIcon icon={FaInstagram} />
            <SocialIcon icon={FaWhatsapp} />
          </div>
          <p className="text-sm tBlack">
            My e-mail address:{" "}
            <span className="font-semibold">{expert.email}</span>
          </p>
        </div>

        {/* Right Section: Details */}
        <div className="md:w-2/3">
          {/* Name and Role */}
          <h1 className="text-2xl font-bold mb-2">
            Hello, I’m {expert.name}. I work as your sales consultant at{" "}
            <span className="orange">{expert.role}</span>.
          </h1>
          <p className="mb-5 text-sm tBlack">{expert.jobResponsibility}</p>

          {/* Qualifications */}
          <ul className="list-none mb-14 ">
            {expert.qualifications.map((qualification, index) => (
              <li key={index} className="flex items-center gap-2 tBlack mb-3">
                <span className="orange">✓</span> {qualification}
              </li>
            ))}
          </ul>

          {/* Tabs */}
          <div className="flex gap-4 mb-4 ">
            {["Biography", "Education", "Awards"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm font-semibold pb-1 ${
                  activeTab === tab
                    ? "orange border-b-2 border-orange"
                    : "tBlack"
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="tBlack ">
            {activeTab === "Biography" && <p>{expert.bio}</p>}
            {activeTab === "Education" && (
              <ul className="list-disc list-inside ">
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
  );
};

export default ExpertDetails;
