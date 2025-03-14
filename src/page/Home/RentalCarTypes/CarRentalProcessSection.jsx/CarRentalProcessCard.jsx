const CarRentalProcessCard = () => {
  return (
    <div className="relative h-[300px] md:h-[350px] rounded-3xl overflow-hidden shadow-lg group sBgBlack">
      {/* Service Name */}
      <div className=" text-white lg:pt-20 lg:p-10 md:pt-10 md:p-5 pt-14 p-7">
        <h1 className="text-2xl font-bold ">Choose A Car</h1>
        <p className="tBlack mt-3">
          View our range of cars, find your perfect car for the coming days.
        </p>
      </div>

      {/* Custom Rounded Bottom Left Corner */}
      <div className="absolute bottom-0 left-0 w-20 h-20 fBgBlack rounded-tr-[50px]"></div>

      {/* Service Number in Circle with Border & Hover Effect */}
      <div className="absolute bottom-0 left-0 flex items-center justify-center w-15 h-15 sBgBlack text-white font-bold text-xl rounded-full ">
        01.
      </div>
    </div>
  );
};

export default CarRentalProcessCard;
