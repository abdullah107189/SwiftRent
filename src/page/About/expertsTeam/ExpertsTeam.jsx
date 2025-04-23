import React, { useEffect, useState } from "react";
import SectionHeader from "../../../components/shared/SectionHeader";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./expert.css";
import ExpertCard from "./ExpertCard";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

export default function ExpertsTeam() {
  const axiosPublic = useAxiosPublic();
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    axiosPublic
      .get("/expert-teammate")
      .then((res) => setExperts(res.data))
      .catch((err) => err.message);
  }, [axiosPublic]);

  return (
    <div className="mxw md:pb-20 pb-10">
      <SectionHeader title="Certified Team" subtitle="Our Experts Team" />
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {experts.map((expert) => (
            <div key={expert._id} className="flex justify-center">
              <ExpertCard expert={expert} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
