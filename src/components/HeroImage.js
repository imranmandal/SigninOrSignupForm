import React from "react";

const HeroImage = () => {
  return (
    <>
      <div className="heroImage">
        <div
          style={{
            backgroundImage: "url(/Images/hero.jpg)",
            backgroundPosition: "bottom center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "100%",
          }}
        ></div>
      </div>
    </>
  );
};

export default HeroImage;
