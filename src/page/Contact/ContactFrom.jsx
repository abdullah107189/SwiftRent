const ContactForm = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 sm:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left Side - Get in Touch */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-[#F5B754]">Get in Touch</h2>
        <form className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <input
              type="text"
              className="w-full sm:w-60 p-3 block bg-[#222222] text-white border border-gray-600 focus:ring focus:ring-[#F5B754] rounded-full"
              placeholder="Your Name *"
              required
            />

            <input
              type="email"
              className="w-full sm:w-60 p-3 block bg-[#222222] text-white border border-gray-600 focus:ring focus:ring-[#F5B754] rounded-full"
              placeholder="Your Email *"
              required
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <input
              type="text"
              className="w-full sm:w-60 p-3 block bg-[#222222] text-white border border-gray-600 focus:ring focus:ring-[#F5B754] rounded-full"
              required
              placeholder="Your Number *"
            />
            <input
              type="text"
              className="w-full sm:w-60 p-3 block bg-[#222222] text-white border border-gray-600 focus:ring focus:ring-[#F5B754] rounded-full"
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

      {/* Right Side - Google Maps Embed */}
      <div className=" p-2">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.680856404126!2d90.39540585322665!3d23.794755208239323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70c15ea1de1%3A0x97856381e88fb311!2sBanani%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2ssa!4v1741807295587!5m2!1sen!2ssa"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
