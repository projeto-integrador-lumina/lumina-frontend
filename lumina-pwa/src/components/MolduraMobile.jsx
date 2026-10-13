import React from "react";

const MolduraMobile = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-[375px] min-h-screen bg-white rounded-[32px] flex flex-col overflow-hidden relative">
        {children}
      </div>
    </div>
  );
};

export default MolduraMobile;
