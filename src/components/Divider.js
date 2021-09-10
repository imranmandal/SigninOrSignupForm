import React from "react";

const Divider = ({ text }) => {
  return (
    <>
      <div className="relative">
        <p className="pt-2 divider">{text}</p>
      </div>
    </>
  );
};

export default Divider;
