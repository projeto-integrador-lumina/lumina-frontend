import React from "react";

const DaysWeek = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <p className="text-white text-sm">{children}</p>
      <span className="w-8 h-8 bg-tertiary border-2 border-white rounded-full"></span>
    </div>
  );
};

export default DaysWeek;
