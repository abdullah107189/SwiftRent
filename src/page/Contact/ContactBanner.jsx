import contactBanner from "../../assets/ContactBanner/car.avif";
const ContactBanner = () => {
  return (
    <div className="e h-auto">
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[300px] sm:h-[400px] lg:h-[500px] flex items-center"
        style={{ backgroundImage: `url(${contactBanner})` }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[#624D38] opacity-20 sm:opacity-30 lg:opacity-40"></div>

        {/* Content */}
        <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl text-center mx-auto" data-aos="fade-up">
            <p className="text-xl text-gray-950">GET IN TOUCH</p>
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              Contact <span className="text-[#F5B754]">Us</span>
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactBanner;
