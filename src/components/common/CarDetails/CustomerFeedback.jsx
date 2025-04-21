import { FaStar } from "react-icons/fa";

const CustomerFeedback = ({ reviews }) => {
  return (
    <div className="grid grid-cols-1 overflow-y-scroll mb-3 h-[450px] gap-6">
      {reviews.map((review) => (
        <div
          key={review._id}
          className="sBgBlack p-5 rounded-xl shadow-md hover:shadow-lg transition duration-300 space-y-3"
        >
          <div className="flex items-center gap-4">
            <img
              src={review.photo}
              alt={review.username}
              className="w-14 h-14 rounded-full object-cover border"
            />
            <div>
              <h4 className="font-semibold ">{review.username}</h4>
              <div className="flex items-center">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < review.rating ? "text-yellow-500" : "text-gray-300"
                      }
                    />
                  ))}
              </div>
            </div>
          </div>
          <p className="tBlack text-sm italic">"{review.text}"</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerFeedback;
