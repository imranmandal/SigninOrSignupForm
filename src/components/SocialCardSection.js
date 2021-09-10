import React from "react";
import SocialCard from "./SocialCard";

const SocialCardSection = ({ title, socialCardData }) => {
  return (
    <>
      <div className="py-4 md:py-2">
        {title && <p>{title}</p>}

        <div className="grid grid-cols-2 gap-x-4">
          {socialCardData.length > 0 &&
            socialCardData.map((social) => (
              <SocialCard logoUrl={social.logoUrl} name={social.name} />
            ))}
        </div>
      </div>
    </>
  );
};

export default SocialCardSection;
