import React from "react";

const MolduraMobile = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white p-0 sm:p-4">
      <div className="w-full sm:max-w-[400px] min-h-screen bg-white sm:rounded-3xl shadow-xl border-0 sm:border border-gray-200 flex flex-col overflow-hidden relative">
        <div className="flex-1 flex flex-col">     
              {children}
        </div>
      </div>
    </div>
  );
};

export default MolduraMobile;
