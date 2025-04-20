import React, { useState } from "react";
import SectionHeader from "../../components/shared/SectionHeader";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How old do you have to be to rent a car?",
    answer: "You must be at least 21 years old to rent a car.",
  },
  {
    question: "How do I rent a car from SwiftRent?",
    answer:
      "To rent a car, browse our available listings, select your preferred vehicle, choose your rental dates, and proceed to checkout.",
  },
  {
    question: "What documents are required to rent a car?",
    answer:
      "You need a valid driving license, a national ID or passport, and a payment method to rent a car.",
  },
  {
    question: "Can I cancel my booking?",
    answer:
      "Yes, you can cancel your booking up to 24 hours before the scheduled rental time without any charges.",
  },
  {
    question: "Is there a mileage limit?",
    answer:
      "Some cars have a mileage limit. Please check the car details before booking.",
  },
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#222222] p-5 rounded-xl shadow-md transition-all duration-300">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center cursor-pointer"
      >
        <h3 className="text-lg font-medium orange">{question}</h3>
        <FaChevronDown
          className={`text-[#f5b754] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      {isOpen && (
        <p className="mt-4 text-sm tBlack transition-all duration-300">
          {answer}
        </p>
      )}
    </div>
  );
};

const FAQs = () => {
  return (
    <div className="py-16 fBgBlack">
      <div className="mxw">
        <SectionHeader title="Frequently Asked Questions" subtitle="FAQs" />
        <div className="space-y-6 mt-12">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
