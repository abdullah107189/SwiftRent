import carParallex from '../../assets/ContactBanner/Homepage-Model-S-Desktop-US.avif';
const CarParallax = () => {
  return (
    <div>
      <div
        className="mx-auto overflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat shadow-lg h-[500px] sm:h-[600px] lg:h-[700px]"
        style={{ backgroundImage: `url(${carParallex})` }}
      >
        <div className="mt-40">
          <div className="space-y-6">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F5B754]">
              Rent Your Car
            </h2>
            <p className="text-lg sm:text-xl">
              Interested in Renting? <br />
              Don't hesitate and send us a message.
            </p>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/yourwhatsappnumber"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-3 px-8 bg-[#25D366] text-white text-lg font-bold rounded-full hover:bg-[#128C7E] transition"
            >
              WhatsApp Rent Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarParallax;
