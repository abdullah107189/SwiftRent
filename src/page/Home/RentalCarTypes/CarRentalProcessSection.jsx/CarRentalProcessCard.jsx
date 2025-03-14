const CarRentalProcessCard = () => {
    return (
        <div className="relative w-full my-12 h-52 shadow-lg rounded-lg overflow-hidden group bg-[#222222] p-6">
            {/* Content Box */}
            <div className=" p-4 rounded-xl transition-transform duration-300 rounded-bl-[50px] group-hover:scale-105">
                <h2 className="text-white text-lg font-bold">Choose A Car</h2>
                <p className="text-[#999] mt-2">
                    View our range of cars, find your perfect car for the coming days.
                </p>
            </div>

            {/* Serial Number in Circle */}
            <div className="absolute left-0 bottom-0 flex items-center justify-center w-14 h-14 border border-[#F5B754] bg-transparent text-white font-bold text-lg rounded-full transition duration-300 group-hover:bg-[#F5B754] group-hover:text-[#1b1b1b]">
                01.
            </div>
        </div>
    );
};

export default CarRentalProcessCard;
