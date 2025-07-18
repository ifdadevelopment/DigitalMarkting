import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { submitForm } from "../store/formSlice";

const Sidebar = ({
  latestPosts = [],
  maxNumber = 5,
  bannerTitle = "Boost Your Skills!",
  bannerDesc = "Join our premium courses and get certified today.",
  showForm = true,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Replace this with your actual auth selector
  const isLoggedIn = useSelector((state) => state.auth?.isLoggedIn); // Adjust based on your state
  const user = useSelector((state) => state.auth?.user); // Optional: access user data

  const [formData, setFormData] = useState({
    name: user?.name || "",
    phone: "",
    course: "",
    email: user?.email || "",
    message: "",
    formHeading: "Blog Enquiry",
  });

  const { formSubmitStatus, formSubmitError } = useSelector((state) => state.form);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitForm(formData));
    setFormData((prev) => ({
      ...prev,
      phone: "",
      course: "",
      message: "",
    }));
  };

  const displayedPosts = [...latestPosts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, maxNumber);

  return (
    <aside className="space-y-10 sticky top-20 h-fit">
  {displayedPosts.length > 0 ? (
  <div>
    <h3 className="text-xl font-semibold mb-4 text-primary">Latest Posts</h3>
    <div className="space-y-4">
      {displayedPosts.map((item) => (
        <div
          key={item._id}
          className="border-b pb-3 cursor-pointer hover:text-primary"
          onClick={() => navigate(`/blog/${item._id}`)}
        >
          <h4 className="font-bold text-gray-800">{item.title}</h4>
          <p className="text-sm text-gray-600">
            {item.excerpt?.slice(0, 60)}...
          </p>
        </div>
      ))}
    </div>
  </div>
) : (
  <p className="text-gray-500">Loading recent posts...</p>
)}


      <div className="bg-primary text-white p-6 rounded-lg shadow-lg text-center">
        <h4 className="text-lg font-semibold mb-2">{bannerTitle}</h4>
        <p className="text-sm">{bannerDesc}</p>
      </div>

      {showForm && (
        <div className="bg-white p-6 rounded-lg shadow border">
          <h4 className="text-lg font-semibold mb-4 text-primary">
            Get in Touch
          </h4>
          <form className="space-y-3" onSubmit={handleSubmit}>
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
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:outline-none"
                />
                <input
                  type="text"
                  name="course"
                  placeholder="Course Interested"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:outline-none"
                />
              </>
            )}

            {/* Subject & Message for both logged-in and not */}
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

            {formSubmitStatus === "succeeded" && (
              <p className="text-green-600 text-sm mt-2">Form submitted successfully!</p>
            )}
            {formSubmitError && (
              <p className="text-red-600 text-sm mt-2">{formSubmitError}</p>
            )}
          </form>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
