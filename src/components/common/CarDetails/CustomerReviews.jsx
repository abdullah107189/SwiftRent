import { useState } from 'react';
import Rating from '@mui/material/Rating';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useSelector } from 'react-redux';

const CustomerReviews = () => {
  const { user } = useSelector(state => state.auth);
  const axiosSecure = useAxiosSecure();
  const [review, setReview] = useState('');
  const [value, setValue] = useState(2);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleReviewSubmit = async () => {
    if (!review) {
      setErrorMessage('Please enter a review!');
      return;
    }

    try {
      await axiosSecure.post('/reviews', {
        text: review,
        rating: value,
        username: user?.displayName || 'Anonymous',
        photo:
          user?.photoURL ||
          'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
        email: user?.email,
      });

      setSuccessMessage('Review submitted successfully!');
      setReview('');
      setValue(2);
    } catch (error) {
      setErrorMessage(error.response?.data?.message);
    }
  };

  return (
    <div>
      <div className="mt-8 pt-4 border-t">
        <h3 className="font-semibold mb-2">Add Review</h3>
        <div className="space-y-3">
          <textarea
            value={review}
            onChange={e => setReview(e.target.value)}
            className="w-full p-3 rounded-md border border-[#f5b754] focus:outline-none focus:ring-2 focus:ring-[#f5b754] bg-[#222222] text-white transition duration-300 placeholder-gray-400"
            rows={4}
            placeholder="Write your review..."
          ></textarea>
          <Rating
            name="half-rating"
            value={value}
            onChange={(event, newValue) => setValue(newValue)}
            precision={0.5}
            sx={{
              '.MuiRating-icon': {
                color: '#f5b754',
              },
              '.MuiRating-decimal': {
                color: 'white',
              },
            }}
          />
          <br />

          {/* Success or Error Message */}
          {successMessage && (
            <p className="text-green-500 mt-2">{successMessage}</p>
          )}
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
          <button
            onClick={handleReviewSubmit}
            className="mt-3 px-4 py-2 bg-[#f5b754] hover:bg-yellow-500 text-white rounded-md transition duration-300"
          >
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
