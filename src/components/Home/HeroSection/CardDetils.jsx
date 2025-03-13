import React from 'react';

function CarDetails() {
  return (
    <div className="bg-gray-800 rounded-2xl p-6 shadow-lg w-80">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-500 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7a2 2 0 012.828 0l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7m2 2l2-2m-2 2l7-7"
            />
          </svg>
          <span className="text-white">Doors</span>
        </div>
        <span className="text-white">4</span>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-500 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15.135 7.135a4 4 0 00-5.656 0L4.354 12.707a4 4 0 115.656 5.656L15.135 7.135z"
            />
          </svg>
          <span className="text-white">Passengers</span>
        </div>
        <span className="text-white">5</span>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-500 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7h12m0 0a3 3 0 11-6 0h6zM8 7V5a2 2 0 10-4 0v2m4 0v5a2 2 0 10-4 0V7"
            />
          </svg>
          <span className="text-white">Transmission</span>
        </div>
        <span className="text-white">Auto</span>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-500 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          <span className="text-white">Luggage</span>
        </div>
        <span className="text-white">2 Bags</span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-500 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-white">Age</span>
        </div>
        <span className="text-white">25</span>
      </div>
    </div>
  );
}

export default CarDetails;