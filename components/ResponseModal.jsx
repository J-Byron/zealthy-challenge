// TODO Handle Modal functionality - open & close
// TODO Host on netlify

import React, { useState } from "react";
export const ResponseModal = ({ ticket, toggleModal }) => {
  const { name, email, description } = ticket;

  const [response, setResposne] = useState("");

  const handleChange = (e) => {
    setResposne(e.target.value);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
      <div className="flex flex-col bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-sm">{email}</p>
          </div>
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={toggleModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <textarea
          className="w-full h-24 border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 resize-none"
          value={response}
          onChange={handleChange}
        />
        <button
          className="py-1 px-2 mt-4 bg-blue-500 text-white rounded-md focus:outline-none text-xs "
          onClick={() => {
            console.log("Would normally send email here with body:", response);
            setResposne("");
            toggleModal();
          }}
        >
          send
        </button>
      </div>
    </div>
  );
};
