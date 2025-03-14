const PageHeader = ({
  subTitle,
  title,
  titleWhite,
  titleOrange,
  line = true,
  image,
}) => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[60vh] md:h-[70vh] flex items-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div
        className={`absolute h-14 w-[1px] -bottom-7 right-[50%] z-10 bgOrange ${
          line ? "" : "hidden"
        }`}
      ></div>
      {/* Content */}
      <div className="relative mx-auto">
        <div
          className="text-center mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p className=" orange tracking-[0.3rem] text-xs uppercase ">
            {subTitle}
          </p>
          <h1
            data-aos-delay="500"
            className="md:text-5xl text-3xl font-extrabold  text-white"
          >
            {title ? title : titleWhite}
            <span className="text-[#F5B754]"> {titleOrange}</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
