import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Spinner from '../../Spinner';
import { FaStar } from 'react-icons/fa';

const CustomerFeedback = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: reviews = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['carReviews'],
    queryFn: async () => {
      const res = await axiosSecure.get('/car/review');

      return res.data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }
  refetch();
  return (
    <div className="grid grid-cols-1 overflow-y-auto gap-6">
      {reviews.map(review => (
        <div
          key={review._id}
          className="bg-white/10 p-5 rounded-xl shadow-md hover:shadow-lg transition duration-300 space-y-3"
        >
          <div className="flex items-center gap-4">
            <img
              src={review.photo}
              alt={review.username}
              className="w-14 h-14 rounded-full object-cover border"
            />
            <div>
              <h4 className="font-semibold text-gray-100">{review.username}</h4>
              <div className="flex items-center text-yellow-500">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < review.rating ? 'text-yellow-500' : 'text-gray-300'
                      }
                    />
                  ))}
              </div>
            </div>
          </div>
          <p className="text-gray-100 text-sm italic">"{review.text}"</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerFeedback;
