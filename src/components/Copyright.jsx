import React from "react";

const Copyright = () => {
  return (
    <div className="bg-gray-900 text-white py-6 px-4 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Saurav Ghimire. All Rights Reserved.
      </p>
    </div>
  );
};

export default Copyright;
