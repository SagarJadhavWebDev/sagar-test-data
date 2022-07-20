import React from "react";

const Loader = () => {
  return (
    <div className="mb-5 mt-5 flex justify-center">
      <div className="block ">
      <svg className="ringCustom ml-2" viewBox="25 25 50 50" stroke-width="5">
        <circle cx="50" cy="50" r="20" />
      </svg>
      <p className="mt-2 ">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
