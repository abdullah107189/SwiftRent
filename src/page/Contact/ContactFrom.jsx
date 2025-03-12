import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactForm = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-6 sm:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left Side - Get in Touch */}
      <div className="space-y-6" data-aos="fade-right">
        <h2 className="text-3xl font-bold text-[#F5B754]">Get in Touch</h2>
        <form className="space-y-4 ">
          <div className="flex flex-wrap gap-4">
            <input
              type="text"
              className="w-full sm:w-60 p-3 block bg-[#222222] text-white border border-gray-600 focus:ring focus:ring-[#F5B754] rounded-l-full rounded-r-full "
              placeholder="Your Name *"
              required
            />

            <input
              type="email"
              className="w-full sm:w-60 p-3 block bg-[#222222] text-white border border-gray-600 focus:ring focus:ring-[#F5B754] rounded-l-full rounded-r-full "
              placeholder="Your Email *"
              required
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <input
              type="text"
              className="w-full sm:w-60 p-3 block bg-[#222222] text-white border border-gray-600 focus:ring focus:ring-[#F5B754] rounded-l-full rounded-r-full "
              required
              placeholder="Your Number *"
            />
            <input
              type="text"
              className="w-full sm:w-60 p-3 block bg-[#222222] text-white border border-gray-600 focus:ring focus:ring-[#F5B754] rounded-l-full rounded-r-full "
              required
              placeholder="Subject *"
            />
          </div>

          <div>
            <textarea
              className="w-full p-3 rounded bg-[#222222] text-white border border-gray-600 focus:ring focus:ring-[#F5B754]"
              rows="4"
              required
              placeholder="Message *"
            ></textarea>
          </div>

          <button className="w-full py-3 bg-[#F5B754] text-black font-bold rounded hover:bg-[#f5a233] transition">
            Submit
          </button>
        </form>
      </div>

      {/* Right Side - Contact Form */}
      <div
        className="bg-[#1C1818] p-8 rounded-lg shadow-lg"
        data-aos="fade-left"
      >
        <div>
          <label className="block text-white mb-1">Location</label>
          <input
            type="text"
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:ring focus:ring-[#F5B754]"
          />
          this is contact Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Tempore fugit doloribus sit, ab laudantium facilis vel quos odit
          fuga quam?
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
