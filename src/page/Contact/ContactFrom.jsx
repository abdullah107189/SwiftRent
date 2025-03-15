const ContactForm = () => {
  return (
    <section className="mxw mx-auto px-4 pb-16 grid grid-cols-1 md:grid-cols-2 gap-14 mb-10">
      {/* Left Side - Get in Touch */}
      <div className="space-y-6">
        <h2 className=" text-xl pb-4 sm:text-3xl text-center  text-[#FFFFFF] font-bold">
          Get in Touch
        </h2>
        <form className="space-y-6 ">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 pb-2">
            <input
              type="text"
              className="w-full  p-4 block bg-[#222222] text-gray-400 border-none rounded-full focus:outline-none focus:ring-0"
              placeholder="Your Name *"
              required
            />

            <input
              type="email"
              className="w-full  p-4 block bg-[#222222] text-gray-400 border-none rounded-full focus:outline-none focus:ring-0"
              placeholder="Your Email *"
              required
            />
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 pb-2">
            <input
              type="text"
              className="w-full  p-4  bg-[#222222] text-gray-400 border-none rounded-full focus:outline-none focus:ring-0"
              required
              placeholder="Your Number *"
            />
            <input
              type="text"
              className="w-full  p-4  bg-[#222222] text-gray-400 border-none rounded-full focus:outline-none focus:ring-0"
              required
              placeholder="Subject *"
            />
          </div>

          <div className="">
            <textarea
              className="w-full  p-4 rounded-4xl bg-[#222222] text-gray-400 border-none  focus:outline-none focus:ring-0"
              rows="4"
              required
              placeholder="Message *"
            ></textarea>
          </div>

          <div className="text-center">
            <button className="w-full fillBtn cursor-pointer p-3.5 flex justify-center text-center items-center">
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Right Side - Google Maps Embed */}
      <div className=" py-2">
        <div className="h-[350px] sm:h-[420px]">
          <h2 className=" text-xl pb-4 sm:text-3xl text-center  text-[#FFFFFF] font-bold">
            {' '}
            Location
          </h2>
          <iframe
            className="rounded-4xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.680856404126!2d90.39540585322665!3d23.794755208239323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70c15ea1de1%3A0x97856381e88fb311!2sBanani%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2ssa!4v1741807295587!5m2!1sen!2ssa"
            width="100%"
            height="100%"
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
