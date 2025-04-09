import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from '../../redux/auth/authSlice';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.config';

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.auth);
  const navigate = useNavigate();

  const onSubmit = async data => {
    console.log('Current user:', auth.currentUser);
    if (data.newPassword !== data.confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'New password and confirmation do not match',
        confirmButtonColor: '#f5b754',
      });
      return;
    }

    try {
      const result = await dispatch(
        changePassword({ newPassword: data.newPassword })
      ).unwrap();
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: result,
        confirmButtonColor: '#f5b754',
        timer: 1500,
        timerProgressBar: true,
        showCloseButton: true,
      }).then(() => {
        navigate('../settings');
      });
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error || 'Failed to change password',
        confirmButtonColor: '#f5b754',
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-sm p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Change Password
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="newPassword"
              className="block mb-1 text-gray-600 text-sm"
            >
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              {...register('newPassword', {
                required: 'New password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
              placeholder="Enter new password"
              className="w-full px-3 py-2 border-2 rounded-md text-gray-500 border-gray-300 focus:border-[#f5b754] focus:outline-none"
            />
            {errors.newPassword && (
              <p className="text-red-500 text-sm">
                {errors.newPassword.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-1 text-gray-600 text-sm"
            >
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              {...register('confirmPassword', {
                required: 'Please confirm your new password',
              })}
              placeholder="Confirm new password"
              className="w-full px-3 py-2 border-2 rounded-md text-gray-500 border-gray-300 focus:border-[#f5b754] focus:outline-none"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className={`bg-[#f5b754] w-full rounded-md py-3 text-white hover:bg-[#f5b754ef] ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={loading}
            >
              {loading ? 'Changing...' : 'Change Password'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
