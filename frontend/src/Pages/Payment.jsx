import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backicon from '../assets/svg/backicon.svg';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [upiId, setUpiId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Payment submitted successfully!');
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
    setCardNumber('');
    setExpiryDate('');
    setCvv('');
    setUpiId('');
  };

  const handleHomeClick = () => navigate('/');

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <button onClick={handleHomeClick} className="absolute left-0 top-4 ml-4">
        <img src={backicon} alt="Back" className="h-6 w-6" />
      </button>
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md transition-all duration-300 hover:shadow-xl">
        <h1 className="text-3xl font-semibold text-blue-800 mb-8 text-center">Payment Page</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Select Payment Method <span className="text-red-500">*</span>
            </label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              value={paymentMethod}
              onChange={handlePaymentMethodChange}
              required
            >
              <option value="">Choose a payment method</option>
              <option value="credit_card">Credit Card</option>
              <option value="debit_card">Debit Card</option>
              <option value="apple_pay">Apple Pay</option>
              <option value="google_pay">Google Pay</option>
            </select>
          </div>

          {(paymentMethod === 'credit_card' || paymentMethod === 'debit_card') && (
            <>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Card Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  maxLength="16"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ''))}
                  required
                />
              </div>

              <div className="flex space-x-4">
                <div className="flex-1">
                  <label className="block text-gray-700 font-medium mb-2">
                    Expiry Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    maxLength="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value.replace(/[^0-9/]/g, '').substring(0, 5))}
                    required
                  />
                </div>

                <div className="flex-1">
                  <label className="block text-gray-700 font-medium mb-2">
                    CVV <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    maxLength="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').substring(0, 3))}
                    required
                  />
                </div>
              </div>
            </>
          )}

          {(paymentMethod === 'apple_pay' || paymentMethod === 'google_pay') && (
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                UPI ID <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="yourname@bank"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                required
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-3 rounded-md hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
