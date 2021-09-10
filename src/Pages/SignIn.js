import React from "react";
import { toast } from "react-toastify";
import Divider from "../components/Divider";
import Form from "../components/Form";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import SocialCardSection from "../components/SocialCardSection";

const SignIn = () => {
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
          subTitle="Sign in or"
          linkText="create an account"
          link="/signUp"
        />

        <SocialCardSection
          title="Sign in with"
          socialCardData={socialCardData}
        />

        <Divider text="Or continue with" />

        <Form
          inputFields={formInputFields}
          footerFields={formFooterFields}
          onSubmit={handleSubmit}
          btnText="Sign In"
        />
      </div>
      <HeroImage />
    </div>
  );
};

export default SignIn;
