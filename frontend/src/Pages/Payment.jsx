import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import backicon from '../assets/svg/backicon.svg';

const Payment = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [nationality, setNationality] = useState('91');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [upiId, setUpiId] = useState('');
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validateForm = () => {
    let formErrors = {};
    if (!name.trim()) formErrors.name = 'Name is required';
    if (!/^[A-Za-z\s]+$/.test(name)) formErrors.name = 'Name must contain only letters and spaces';

    if (!phoneNumber.trim()) formErrors.phoneNumber = 'Phone number is required';
    if (!/^\d{10}$/.test(phoneNumber)) formErrors.phoneNumber = 'Phone number must be 10 digits';

    if (!email.trim()) formErrors.email = 'Email is required';
    if (!/^[\w.%+-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email)) formErrors.email = 'Invalid email format';

    if (!address.trim()) formErrors.address = 'Address is required';

    if ((paymentMethod === 'credit_card' || paymentMethod === 'debit_card') && !/^\d{4}-\d{4}-\d{4}-\d{4}$/.test(cardNumber)) {
      formErrors.cardNumber = 'Card number must be in the format 1234-5678-9012-3456';
    }

    if ((paymentMethod === 'credit_card' || paymentMethod === 'debit_card') && !/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
      formErrors.expiryDate = 'Expiry date must be in MM/YY format';
    }

    if ((paymentMethod === 'credit_card' || paymentMethod === 'debit_card') && !/^\d{3,4}$/.test(cvv)) {
      formErrors.cvv = 'CVV must be 4 digits';
    }

    if (paymentMethod === 'upi' && !/^[\w.-]+@[a-zA-Z]{3,}$/.test(upiId)) {
      formErrors.upiId = 'Invalid UPI ID format';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const formatCardNumber = (value) => {
    return value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1-').slice(0, 19);
  };

  const formatExpiryDate = (value) => {
    return value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2').slice(0, 5);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      Swal.fire({
        title: 'Success!',
        text: 'Payment submitted successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        navigate('/');
      });
    }
  };

  const HomeClick = () => {
    navigate('/'); // Navigates to the home page
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-100">
      <button onClick={HomeClick} className='absolute left-0 top-2'>
        <img src={backicon} alt="Back" className='h-[5vh]' />
      </button>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-semibold text-blue-900 mb-6">Payment Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Full Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Nationality and Phone Number Row */}
          <div className="mb-4 flex gap-4">
            <div className="w-1/3">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Nationality
              </label>
              <select
                className="w-full px-3 py-2 border rounded-md"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                required
              >
                 <option value="91">India (+91)</option>
                <option value="1">USA (+1)</option>
                <option value="44">UK (+44)</option>
                <option value="61">Australia (+61)</option>
                <option value="81">Japan (+81)</option>
                <option value="49">Germany (+49)</option>
                <option value="33">France (+33)</option>
                <option value="39">Italy (+39)</option>
                <option value="41">Switzerland (+41)</option>
                <option value="86">China (+86)</option>
                <option value="55">Brazil (+55)</option>
                <option value="7">Russia (+7)</option>
                <option value="46">Sweden (+46)</option>
                <option value="65">Singapore (+65)</option>
                <option value="65">Singapore (+65)</option>
                <option value="34">Spain (+34)</option>
                <option value="62">Indonesia (+62)</option>
                <option value="66">Thailand (+66)</option>
                <option value="63">Philippines (+63)</option>
                <option value="27">South Africa (+27)</option>
                <option value="60">Malaysia (+60)</option>
                <option value="351">Portugal (+351)</option>
                <option value="30">Greece (+30)</option>
              </select>
            </div>

            <div className="w-2/3">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Phone Number
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your 10-digit phone number"
                required
              />
              {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Address
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded-md"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
              required
            ></textarea>
            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Select Payment Method
            </label>
            <select
              className="w-full px-3 py-2 border rounded-md"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="">Choose a payment method</option>
              <option value="credit_card">Credit Card</option>
              <option value="debit_card">Debit Card</option>
              <option value="upi">UPI (Google Pay/Other UPI)</option>
             
            </select>
          </div>

          {paymentMethod && (
            <div className="bg-gray-100 p-4 rounded-md mt-4">
              {paymentMethod === 'credit_card' || paymentMethod === 'debit_card' ? (
                <>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded-md"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                      placeholder="1234-5678-9012-3456"
                      required
                    />
                    {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
                  </div>

                  <div className="flex mb-4">
                    <div className="w-1/2 mr-2">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-md"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
                        placeholder="MM/YY"
                        required
                      />
                      {errors.expiryDate && <p className="text-red-500 text-xs mt-1">{errors.expiryDate}</p>}
                    </div>
                    <div className="w-1/2">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-md"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        placeholder="1234"
                        required
                      />
                      {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
                    </div>
                  </div>
                </>
              ) : paymentMethod === 'upi' || paymentMethod === 'google_pay' ? (
                <>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      UPI ID
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded-md"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      placeholder="example@upi"
                      required
                    />
                    {errors.upiId && <p className="text-red-500 text-xs mt-1">{errors.upiId}</p>}
                  </div>
                </>
              ) : null}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
