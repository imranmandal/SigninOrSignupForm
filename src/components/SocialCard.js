import React from "react";

const SocialCard = ({ logoUrl, name }) => {
  return (
    <>
      <div className="rounded-border text-center cursor-pointer my-2 hover:shadow-md">
        <img className="h-6 inline-block" src={logoUrl} />
        <span className="font-medium text-md pl-2">{name}</span>
      </div>
    </>
  );
};

export default SocialCard;
