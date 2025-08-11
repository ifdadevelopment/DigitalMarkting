import React from "react";
import { useSelector } from "react-redux";
import { useContactForm } from "../utils/useContactForm";
import { selectCourses } from "../store/courseSlice";

const CourseEnquiryForm = ({ onClose }) => {
  const courses = useSelector(selectCourses) || [];

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
    name: "",
    phone: "",
    course: "",
    email: "",
    message: "",
    formHeading: "Course Booking Demo",
  });

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>      
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="w-full border border-gray-300 rounded-md px-4 py-2"
      />
      <div className="flex gap-2">
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone number with country code"
          pattern="^\+?[0-9]{10,15}$"
          title="Enter a valid phone number with country code"
          className="w-full px-4 py-2 border rounded-md"
          disabled={otpSent}
          required
        />
        <button
          type="button"
          onClick={handleSendOtp}
          className="bg-white text-primary px-4 py-2 text-xs border rounded-md"
          disabled={otpLoading || otpSent}
        >
          {otpLoading ? "Sending..." : otpSent ? "OTP Sent" : "Send OTP"}
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
            className="w-full px-4 py-2 border rounded-md"
            disabled={otpVerified}
          />
          <button
            type="button"
            onClick={handleVerifyOtp}
            className="bg-green-600 text-white px-4 py-2 rounded-md"
            disabled={otpVerified || otpLoading}
          >
            {otpVerified ? "Verified" : "Verify OTP"}
          </button>
        </div>
      )}
      <select
        name="course"
        value={formData.course}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white"
      >
        <option value="">Select Course</option>
        {courses.map((course, index) => {
          const title = course?.courseTitle || course?.name || "";
          return (
            <option key={index} value={title}>
              {title}
            </option>
          );
        })}
      </select>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email Address"
        className="w-full border border-gray-300 rounded-md px-4 py-2"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        rows="4"
        className="w-full border border-gray-300 rounded-md px-4 py-2"
      />
      <button
        type="submit"
        disabled={formSubmitStatus === "loading" || !otpVerified}
        className="bg-[#0076FF] hover:bg-primary text-white font-semibold px-6 py-2 rounded-md transition w-fit ml-auto block"
      >
        {formSubmitStatus === "loading" ? "Submitting..." : "Apply Now"}
      </button>

      {formSubmitError && (
        <p className="text-red-500 text-sm">{formSubmitError}</p>
      )}
    </form>
  );
};

export default CourseEnquiryForm;
