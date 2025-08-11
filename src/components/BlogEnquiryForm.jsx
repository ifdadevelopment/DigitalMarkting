import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useContactForm } from "../utils/useContactForm";

export const BlogEnquiryForm = () => {
  const isLoggedIn = useSelector((state) => state.auth?.isLoggedIn);
  const user = useSelector((state) => state.auth?.user);

  const {
    formData,
    otpSent,
    otpVerified,
    otpLoading,
    otpCode,
    formSubmitStatus,
    formSubmitError,
    handleChange,
    handleSendOtp,
    handleVerifyOtp,
    handleSubmit,
    setOtpCode,
  } = useContactForm({
    name: user?.name || "",
    phone: "",
    course: "",
    email: user?.email || "",
    message: "",
    formHeading: "Blog Enquiry",
  });

  const [successMessageShown, setSuccessMessageShown] = useState(false);

  useEffect(() => {
    if (formSubmitStatus === "succeeded") {
      setSuccessMessageShown(true);
    }
  }, [formSubmitStatus]);

  return (
    <div className="bg-white p-6 rounded-lg shadow border">
      <h4 className="text-lg font-semibold mb-4 text-primary">Get in Touch</h4>
      <form
        className="space-y-3"
        onSubmit={(e) => {
          e?.preventDefault?.();
            e?.stopPropagation?.(); 
          handleSubmit(e);
        }}
      >
        {!isLoggedIn && (
          <>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none"
              required
            />

            <div className="flex gap-2">
              <input
                type="tel"
                name="phone"
                placeholder="Phone number with country code"
                pattern="^\+?[0-9]{10,15}$"
                title="Enter a valid phone number with country code"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none"
                required
              />
              <button
                type="button" 
                onClick={handleSendOtp}
                className="bg-white text-primary px-4 py-2 border text-xs rounded-md"
                disabled={otpLoading}
              >
                {otpLoading ? "Sending..." : otpSent ? "Resend OTP" : "Send OTP"}
              </button>
            </div>

            {otpSent && (
              <div className="flex gap-2">
                <input
                  type="text"
                  name="otp"
                  placeholder="Enter OTP"
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none"
                />
                <button
                  type="button" 
                  onClick={handleVerifyOtp}
                  
                  className="bg-green-600 text-white px-4 py-2 rounded-md"
                  disabled={otpVerified || otpLoading}
                >
                  {otpVerified ? "Verified ✅" : "Verify OTP"}
                </button>
              </div>
            )}
          </>
        )}
        <input
          type="text"
          name="course"
          placeholder="Blog Enquiry"
          value={formData.course}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none"
          rows="4"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded hover:bg-[#092759]"
          disabled={formSubmitStatus === "loading"}
        >
          {formSubmitStatus === "loading" ? "Submitting..." : "Submit"}
        </button>

        {successMessageShown && (
          <p className="text-green-600 text-sm mt-2">
            Form submitted successfully!
          </p>
        )}
        {formSubmitError && (
          <p className="text-red-600 text-sm mt-2">{formSubmitError}</p>
        )}
      </form>
    </div>
  );
};
