import { MdArrowOutward } from "react-icons/md";
import carParallex from "../../assets/ContactBanner/Homepage-Model-S-Desktop-US.avif";
import { FaWhatsapp } from "react-icons/fa";
const CarParallax = () => {
  const text = "GET IN TOUCH";
  const letters = text.split("").map((char, index) => (
    <span key={index} className="inline-block mx-[2px]">
      {char === " " ? "\u00A0\u00A0\u00A0" : char}
    </span>
  ));
  return (
    <div>
      <div
        className="mx-auto w-full flex justify-center text-center items-center bg-cover bg-fixed bg-center bg-no-repeat shadow-lg h-[500px] sm:h-[550px] "
        style={{ backgroundImage: `url(${carParallex})`, width: '100%' }}
        className="mx-auto w-full overflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat shadow-lg h-[500px] sm:h-[550px] "
        style={{ backgroundImage: `url(${carParallex})`, width: "100%" }}
      >
        <div className=" w-96 mx-auto">
          <div className="space-y-2 text-center">
            {/* Title */}
            <p className="text-xl text-[#F5B754] uppercase tracking-wide text-center">
              {letters}
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold text-center">
              Interested in Renting?
            </h2>
            <p className="text-sm text-white py-2">
              Don't hesitate and send us a message.
            </p>

            {/* WhatsApp Button */}
            <div className="flex gap-4">
              <a
                href="https://wa.me/yourwhatsappnumber"
                target="_blank"
                rel="noopener noreferrer"
                className=" fillBtn transition-all  duration-300 
  hover:-translate-y-1.5"
              >
                <p className="flex items-center justify-center gap-2">
                  <FaWhatsapp /> <span>WhatsApp</span>
                </p>
              </a>
              <button className="outlineBtn hover:-translate-y-1.5">
                Rent Now{" "}
                <span>
                  <MdArrowOutward />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarParallax;
