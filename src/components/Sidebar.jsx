import React from "react";
import { useNavigate } from "react-router-dom";
import { BlogEnquiryForm } from "./BlogEnquiryForm";

const Sidebar = ({
  latestPosts = [],
  maxNumber = 5,
  bannerTitle = "Boost Your Skills!",
  bannerDesc = "Join our premium courses and get certified today.",
  showForm = true,
}) => {
  const navigate = useNavigate();

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
      {showForm && <BlogEnquiryForm blockNavigation />}
    </aside>
  );
};

export default Sidebar;
