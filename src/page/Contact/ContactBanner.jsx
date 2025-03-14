import contactBanner from "../../assets/ContactBanner/car.avif";

const ContactBanner = () => {
  const text = "GET IN TOUCH";
  const letters = text.split("").map((char, index) => (
    <span key={index} className="inline-block mx-[2px]">
      {char === " " ? "\u00A0\u00A0\u00A0" : char}
    </span>
  ));
  return (
    <div className="e h-auto">
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[300px] sm:h-[400px] lg:h-[500px] flex items-center"
        style={{ backgroundImage: `url(${contactBanner})` }}
      >
        {/* Background Overlay */}
        <div className="absolute"></div>

        {/* Content */}
        <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl text-center mx-auto" data-aos="fade-up">
            <p className="text-xl text-[#FFFFFF] uppercase tracking-wide ">
              {letters}
            </p>
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
