import { FaMoneyBill } from 'react-icons/fa';
import Header from '../../components/common/Header';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useEffect, useState } from 'react';

const BillingPage = () => {
  const axiosSecure = useAxiosSecure();
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axiosSecure.get('/payments-histry');
        setPayments(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPayments();
  }, []);

  return (
    <>
      <Header title="Admin Dashboard" text="Welcome to SwiftRent" />
      <div className="p-6">
        <h1 className="text-2xl font-bold text-yellow-400 flex items-center gap-2">
          <FaMoneyBill /> Billing & Payments History
        </h1>
        <p className="tBlack mt-2">View all user payments and transactions.</p>

        {/* Payments Table */}
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-600">
            <thead className="bg-[#f5b754]/10">
              <tr>
                <th className="px-4 py-2 text-left">User</th>
                <th className="px-4 py-2 text-left">Car Name</th>
                <th className="px-4 py-2 text-left">Amount</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {payments.length > 0 ? (
                payments.map(payment => (
                  <tr key={payment._id}>
                    <td className="px-4 py-2">{payment.fullName}</td>
                    <td className="px-4 py-2">{payment.carName}</td>
                    <td className="px-4 py-2">${payment.price}</td>
                    <td className="px-4 py-2 text-green-500">
                      {payment.paymentStatus}
                    </td>
                    <td className="px-4 py-2">{payment.paymentTime}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4">
                    No Payments Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default BillingPage;
