import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Feedback = () => {
  const [formData, setFormData] = useState({
    senderEmail: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setIsLoading(true); 

    try {
      // Sending API request to submit the feedback
      const response = await fetch("http://localhost:5000/api/userfeedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send form data as JSON
      });

      if (!response.ok) {
        throw new Error("Failed to submit feedback");
      }

      setAlert(true);

      setFormData({
        senderEmail: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending feedback:", error);
    } finally {
      setIsLoading(false);
      setTimeout(() => setAlert(false), 3000); // Hide alert after 3 seconds
    }
  };

  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center ">
      <div className="text-center mb-12  ">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 w-full">
          Feedback Form
        </h1>

        <p className="text-gray-600">Indian Railways</p>
        <button
          class="absolute top-0 left-0 z-[99]"
          onClick={() => {
            Navigate("/");
          }}
        >
          <img src="/src/assets/svg/backicon.svg" alt="" class="h-[9vh]" />
        </button>
      </div>
      <div className="max-w-lg   p-6 bg-white rounded-lg shadow-md w-3/4 md:w-3/4 lg:w-1/2 border">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Submit Feedback
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6 w-full">
          <div>
            <label
              htmlFor="senderEmail"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Email
            </label>
            <input
              type="email"
              id="senderEmail"
              name="senderEmail"
              value={formData.senderEmail}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              placeholder="you@gmail.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Feedback
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black resize-none"
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Sending..." : " Submit"}
          </button>

          {alert && (
            <div className="bg-green-100 text-green-700 border rounded-lg p-4 text-center mt-4">
              Thank You, We will contact you soon.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Feedback;
