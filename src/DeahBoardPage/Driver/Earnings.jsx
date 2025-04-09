import { FaMoneyBill } from 'react-icons/fa';
import Header from '../../components/common/Header';

const Earnings = () => {
  const earningsData = {
    total: 1500,
    tripsCompleted: 25,
    lastTripEarnings: 50,
  };

  return (
    <>
      <Header title=" Earnings" />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center text-[#4caf50] mb-8 flex items-center justify-center gap-2">
          <FaMoneyBill /> Earnings
        </h2>

        <div className=" shadow-lg rounded-xl overflow-hidden p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Total Earnings */}
            <div className="bg-[#f3f6f9] rounded-xl p-6 text-center shadow-md">
              <h3 className="text-xl font-semibold text-gray-700">
                Total Earnings
              </h3>
              <p className="text-3xl font-bold text-green-600">
                ${earningsData.total}
              </p>
            </div>

            {/* Trips Completed */}
            <div className="bg-[#f3f6f9] rounded-xl p-6 text-center shadow-md">
              <h3 className="text-xl font-semibold text-gray-700">
                Trips Completed
              </h3>
              <p className="text-3xl font-bold text-blue-600">
                {earningsData.tripsCompleted}
              </p>
            </div>

            {/* Last Trip Earnings */}
            <div className="bg-[#f3f6f9] rounded-xl p-6 text-center shadow-md">
              <h3 className="text-xl font-semibold text-gray-700">
                Last Trip Earnings
              </h3>
              <p className="text-3xl font-bold text-yellow-600">
                ${earningsData.lastTripEarnings}
              </p>
            </div>
          </div>

          {/* Optional: Add a chart for earnings over time */}
          {/* <div className="mt-6">
          <h4 className="text-xl font-semibold text-gray-700 mb-4">Earnings Overview</h4>
          <EarningsChart data={earningsData} />
        </div> */}
        </div>
      </div>
    </>
  );
};

export default Earnings;
