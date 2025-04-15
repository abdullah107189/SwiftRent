import { Link } from 'react-router-dom';
import { FaCarCrash } from 'react-icons/fa';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-[#1e1e1e] flex flex-col items-center justify-center text-white px-4 text-center">
      <FaCarCrash className="text-red-500 text-6xl mb-4 animate-bounce" />
      <h1 className="text-5xl font-bold mb-2">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Oops! Page Not Found</h2>
      <p className="mb-6 text-gray-400">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-full transition duration-300"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
