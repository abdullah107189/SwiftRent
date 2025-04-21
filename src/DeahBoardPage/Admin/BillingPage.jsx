import { FaMoneyBill } from "react-icons/fa";
import Header from "../../components/common/Header";

const BillingPage = () => {
  return (
    <>
      <Header title="Billing & Payments" />
      <div className="p-6">
        <h1 className="text-2xl font-bold text-yellow-400 flex items-center gap-2">
          <FaMoneyBill /> Billing & Payments
        </h1>
        <p className="tBlack mt-2">View all user payments and transactions.</p>

        {/* 🔽 You can load payment data here */}
        <div className="mt-6">
          <table className="min-w-full divide-y divide-gray-600 ">
            <thead className="bg-[#f5b754]/10">
              <tr>
                <th className="px-4 py-2 text-left">User</th>
                <th className="px-4 py-2 text-left">Amount</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {/* Dummy row */}
              <tr>
                <td className="px-4 py-2">MD IBRAHIM</td>
                <td className="px-4 py-2">$50</td>
                <td className="px-4 py-2 text-green-500">Paid</td>
                <td className="px-4 py-2">2025-04-10</td>
              </tr>
              {/* Map payment data here */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default BillingPage;
