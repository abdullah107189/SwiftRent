import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FaMoneyBill } from "react-icons/fa";
import Header from "../../../components/common/Header";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useSelector((state) => state.auth);
  const axiosSecure = useAxiosSecure();
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) {
      console.log("No user email found");
      setLoading(false);
      return;
    }

    console.log("Fetching payments for email:", user.email);
    setLoading(true);
    axiosSecure
      .get(`/payments/${user.email}`)
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : [];
        console.log("Payments data:", data);
        setPayments(data);
      })
      .catch((err) => {
        console.error("Error fetching payments:", err);
        alert("Failed to load payment history.");
      })
      .finally(() => setLoading(false));
  }, [user, axiosSecure]);

  if (loading) return <div>Loading your payment history…</div>;

  return (
    <>
      <Header title="Payment History" />
      <div className="min-h-screen md:p-6 p-3">
        <h1 className="text-3xl font-bold text-center mb-6 flex items-center justify-center gap-2">
          <FaMoneyBill className="orange" /> Payment History
        </h1>
        {payments.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full shadow-lg rounded-lg">
              <thead className="sBgBlack">
                <tr className=" ">
                  <th className="p-3 text-left">Amount</th>
                  <th className="p-3 text-left">Date & Time</th>
                  <th className="p-3 text-left">trxID</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment) => (
                  <tr
                    key={payment._id}
                    className="border-b hover:bg-[#f5b754]/20"
                  >
                    <td className="p-3">${payment.price.toFixed(2)}</td>
                    <td className="p-3">{payment.paymentTime}</td>
                    <td className="p-3">{payment.trxID}</td>
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
