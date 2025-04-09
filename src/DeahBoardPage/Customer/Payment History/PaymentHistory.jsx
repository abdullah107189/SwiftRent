import { useState } from 'react';
import { FaMoneyBill } from 'react-icons/fa';
import Header from '../../../components/common/Header';

const PaymentHistory = () => {
  const [payments, setPayments] = useState([
    {
      id: 1,
      amount: '$150',
      date: '2025-04-10',
      method: 'Credit Card',
      status: 'Completed',
    },
    {
      id: 2,
      amount: '$200',
      date: '2025-04-15',
      method: 'PayPal',
      status: 'Pending',
    },
    {
      id: 3,
      amount: '$100',
      date: '2025-04-20',
      method: 'Bank Transfer',
      status: 'Completed',
    },
  ]);

  return (
    <>
      <Header title="Payment History" />
      <div className="min-h-screen p-6">
        <h1 className="text-3xl font-bold text-center  mb-6 flex items-center justify-center gap-2">
          <FaMoneyBill className="text-[#f5b754]" /> Payment History
        </h1>

        {payments.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full bg-[#f5b754]/1 shadow-lg rounded-lg">
              <thead>
                <tr className=" text-white">
                  <th className="p-3 text-left">Amount</th>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-left">Method</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {payments.map(payment => (
                  <tr
                    key={payment.id}
                    className="border-b hover:bg-[#f5b754]/10"
                  >
                    <td className="p-3">{payment.amount}</td>
                    <td className="p-3">{payment.date}</td>
                    <td className="p-3">{payment.method}</td>
                    <td
                      className={`p-3 font-semibold ${
                        payment.status === 'Completed'
                          ? 'text-green-600'
                          : 'text-yellow-600'
                      }`}
                    >
                      {payment.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-600">
            No payment history available.
          </p>
        )}
      </div>
    </>
  );
};

export default PaymentHistory;
