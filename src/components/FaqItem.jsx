import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
const InnerFaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded p-3">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between w-full text-left text-sm text-primary font-semibold"
      >
        <span>{question}</span>
        <FaChevronRight
          className={`transition-transform duration-300 ${
            open ? "rotate-90" : ""
          }`}
        />
      </button>
      {open && (
        <p className="text-sm text-gray-600 mt-2 pl-2 transition-all duration-300">
          {answer}
        </p>
      )}
    </div>
  );
};
const FaqItem = ({ title, faqs = [], content = [], question, answer }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const isFlatItem = question && answer && faqs.length === 0;

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={toggle}
        className="flex justify-between items-center w-full py-3 text-left text-primary font-semibold"
      >
        <span>{title || question}</span>
        <FaChevronRight
          className={`transition-transform duration-300 ${
            open ? "rotate-90" : ""
          }`}
        />
      </button>

      {open && (
        <div className="pl-4 pb-4 space-y-2">
          {faqs.length > 0 &&
            faqs.map((faq, i) => (
              <InnerFaqItem
                key={i}
                question={faq.question}
                answer={faq.answer}
              />
            ))}

          {isFlatItem && (
            <p className="text-sm text-gray-600 mt-2 pl-2">{answer}</p>
          )}

          {!faqs.length &&
            !isFlatItem &&
            (Array.isArray(content)
              ? content.map((item, i) => (
                  <div
                    key={i}
                    className="text-sm text-gray-700 font-nunito border-b pb-2"
                  >
                    {item}
                  </div>
                ))
              : content && (
                  <div className="text-sm text-gray-700 font-nunito border-b pb-2">
                    {content}
                  </div>
                ))}
        </div>
      )}
    </div>
  );
};

export default FaqItem;
