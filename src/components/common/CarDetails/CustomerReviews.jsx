import { useState } from 'react';
import Rating from '@mui/material/Rating';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useSelector } from 'react-redux';

const CustomerReviews = ({ onReviewSubmit }) => {
  const { user } = useSelector(state => state.auth);
  const axiosSecure = useAxiosSecure();
  const [review, setReview] = useState('');
  const [value, setValue] = useState(2);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleReviewSubmit = async () => {
    if (!review) {
      setMessage({ type: 'error', text: 'Please enter a review!' });
      return;
    }

    try {
      await axiosSecure.post('/reviews', {
        text: review,
        rating: value,
        username: user?.displayName || 'user',
        photo: user?.photoURL || '',
        email: user?.email,
      });

      setMessage({ type: 'success', text: 'Review submitted successfully!' });
      setReview('');
      setValue(2);
      onReviewSubmit();
    } catch (error) {
      setMessage({
        type: 'error',
        text: error.response?.data?.message || 'Something went wrong!',
      });
    }
  };

  return (
    <div className="mt-8 pt-4 border-t">
      <h3 className="font-semibold mb-2">Add Review</h3>
      <div className="space-y-3">
        <textarea
          value={review}
          onChange={e => setReview(e.target.value)}
          className="w-full p-3 rounded-md border border-[#f5b754] bg-[#222222] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f5b754] transition duration-300"
          rows={4}
          placeholder="Write your review..."
        ></textarea>

        <Rating
          name="half-rating"
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
          precision={0.5}
          sx={{
            '.MuiRating-icon': { color: '#f5b754' },
            '.MuiRating-decimal': { color: 'white' },
          }}
        />

        {message.text && (
          <p
            className={`mt-2 ${
              message.type === 'error' ? 'text-red-500' : 'text-green-500'
            }`}
          >
            {message.text}
          </p>
        )}
<br/>
        <button
          onClick={handleReviewSubmit}
          className="mt-3 px-4 py-2 bg-[#f5b754] hover:bg-yellow-500 text-white rounded-md transition duration-300"
        >
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default CustomerReviews;
