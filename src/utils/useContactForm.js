import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitForm } from "../store/formSlice";
import { sendOtp, verifyOtp } from "../store/otpSlice";
import { toast } from "react-toastify";

export const useContactForm = (initialData) => {
  const dispatch = useDispatch();
  const formSubmitStatus = useSelector((state) => state.form.formSubmitStatus);
  const formSubmitError = useSelector((state) => state.form.formSubmitError);

  const [formData, setFormData] = useState(initialData);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpCode, setOtpCode] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendOtp = async () => {
    if (!formData.phone) {
      toast.error("Please enter your phone number");
      return;
    }
    setOtpLoading(true);
    const result = await dispatch(sendOtp(formData.phone));
    setOtpLoading(false);

    if (sendOtp.fulfilled.match(result)) {
      toast.success("OTP sent successfully");
      setOtpSent(true);
    } else {
      toast.error(result.payload || "Failed to send OTP");
    }
  };

  const handleVerifyOtp = async () => {
    if (!otpCode) {
      toast.error("Please enter the OTP");
      return;
    }
    setOtpLoading(true);
    const result = await dispatch(
      verifyOtp({ phone: formData.phone, otp: otpCode })
    );
    setOtpLoading(false);

    if (verifyOtp.fulfilled.match(result)) {
      toast.success("Phone verified!");
      setOtpVerified(true);
    } else {
      toast.error(result.payload || "Invalid OTP");
    }
  };

  const handleSubmit = async (e) => {
    e?.preventDefault?.();
    if (!otpVerified) {
      toast.error("Please verify your phone number before submitting.");
      return;
    }
    try {
      await dispatch(submitForm(formData)).unwrap();
      toast.success("Form submitted successfully!");
      setFormData(initialData);
      setOtpSent(false);
      setOtpVerified(false);
      setOtpCode("");
    } catch (error) {
      toast.error(error || "Failed to submit form");
    }
  };

  return {
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
  };
};
