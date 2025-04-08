import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ExpertDetails = () => {
  const { id } = useParams();
  const [expert, setExpert] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExpert = async () => {
      try {
        const res = await fetch("http://localhost:3000/about");
        const data = await res.json();
        const selected = data.find((item) => item._id === id);
        setExpert(selected);
      } catch (err) {
        console.error("Error fetching expert:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchExpert();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  if (!expert)
    return <p className="text-center mt-10 text-red-500">Expert not found</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <img
        src={expert.image}
        alt={expert.name}
        className="w-64 h-64 object-cover rounded-xl mx-auto mb-6 shadow-md"
      />
      <h1 className="text-3xl font-bold text-center mb-2">{expert.name}</h1>
      <p className="text-center text-gray-500 mb-6">{expert.role}</p>
      <p className="text-base text-gray-700 leading-relaxed text-center">
        {expert.bio}
      </p>
      <div className="mt-6 text-center">
        <a
          href={expert.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Visit LinkedIn
        </a>
      </div>
    </div>
  );
};

export default ExpertDetails;
