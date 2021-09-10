import React from "react";
import { toast } from "react-toastify";
import Divider from "../components/Divider";
import Form from "../components/Form";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import SocialCardSection from "../components/SocialCardSection";

const SignUp = () => {
  const formInputFields = [
    {
      type: "email",
      name: "email",
      label: "Email address",
      placeholder: "john.doe@acme.com",
    },
    {
      type: "password",
      name: "password",
      label: "Password",
      placeholder: "********",
    },
    {
      type: "password",
      name: "confirmPassword",
      label: "Confirm Password",
      placeholder: "********",
    },
  ];

  const formFooterFields = [
    {
      type: "checkbox",
      name: "rememberMe",
      value: "Remember me",
      label: "Remember me",
    },
    {
      type: "link",
      label: "Email address",
    },
  ];

  const socialCardData = [
    {
      logoUrl: "https://img.icons8.com/color/48/000000/google-logo.png",
      name: "Google",
    },
    {
      logoUrl: "https://img.icons8.com/ios-glyphs/30/000000/github.png",
      name: "GitHub",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    toast("Form is submitting...");
  };

  return (
    <div className="flex">
      <div className="container">
        <Header
          subTitle="Already have an account?"
          linkText="Sign In here"
          link="/signIn"
        />

        <Form
          inputFields={formInputFields}
          onSubmit={handleSubmit}
          btnText="Sign Up"
        />

        <Divider text="Or sign up with" />

        <SocialCardSection socialCardData={socialCardData} />
      </div>
      <HeroImage />
    </div>
  );
};

export default SignUp;
