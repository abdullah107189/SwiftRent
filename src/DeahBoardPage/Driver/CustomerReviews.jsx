import { FaStar } from 'react-icons/fa';
import Header from '../../components/common/Header';

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      customer: 'John Doe',
      rating: 5,
      comment:
        'Excellent service! The car was clean and the driver was very friendly.',
    },
    {
      id: 2,
      customer: 'Jane Smith',
      rating: 4,
      comment: 'Good experience, but the car could have been cleaner.',
    },
    {
      id: 3,
      customer: 'Ali Rahman',
      rating: 3,
      comment:
        'Average experience. The car was fine, but the driver was a bit late.',
    },
  ];

  return (
    <>
      <Header title="Customer Reviews" />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center text-[#f5b754] mb-8 flex items-center justify-center gap-2">
          <FaStar /> Customer Reviews
        </h2>

        <div className=" shadow-lg rounded-xl overflow-hidden">
          <div className="space-y-4">
            {reviews.map(review => (
              <div
                key={review.id}
                className="border-b py-4 px-6 flex items-start space-x-4 hover:bg-gray-900"
              >
                <div className="flex flex-col items-start space-y-1">
                  <span className="font-semibold text-lg ">
                    {review.customer}
                  </span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        className={`text-sm ${
                          index < review.rating
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm  mt-2">{review.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerReviews;
