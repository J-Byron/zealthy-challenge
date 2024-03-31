import { useState } from "react";

export const SupportTicket = ({
  name,
  email,
  description,
  status,
  onStatusChange,
  onReplyClick,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandCollapse = (e) => {
    setIsExpanded(!isExpanded);
  };

  const getStatusColor = () => {
    switch (status) {
      case 1:
        return "text-green-500";
      case 2:
        return "text-yellow-500";
      case 3:
        return "text-indigo-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div
      className={`max-w-xl w-full bg-white rounded-lg shadow-md p-3 cursor-pointer transition-all relative`}
      onClick={handleExpandCollapse}
    >
      <div className="flex justify-between mb-1">
        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-sm">{email}</p>
        </div>
        <div className="relative">
          <select
            value={status}
            onChange={(e) => onStatusChange(parseInt(e.target.value))}
            onClick={(e) => e.stopPropagation()}
            className={`font-semibold ${getStatusColor()} py-1 pl-2 rounded-md focus:outline-none text-right`}
          >
            <option value={1}>New</option>
            <option value={2}>In Progress</option>
            <option value={3}>Complete</option>
          </select>
        </div>
      </div>
      <p className={`text-gray-600 mb-1 ${isExpanded ? "w-4/5" : "w-full"}`}>
        {isExpanded
          ? description
          : `${description.slice(0, 50)}${
              description.length > 50 ? "..." : ""
            }`}
      </p>
      <button
        className="absolute bottom-4 right-4 py-1 px-2 bg-blue-500 text-white rounded-md focus:outline-none text-xs"
        onClick={(e) => {
          e.stopPropagation();
          onReplyClick();
        }}
      >
        Reply
      </button>
    </div>
  );
};
