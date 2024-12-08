import LoginForm from "@/components/Forms/LoginForm";
import SignUpForm from "@/components/Forms/SignUpForm";
import PageHeader from "@/components/PageHeader";
import ServicesBanner from "@/components/ServicesBanner";
import React from "react";

const page = () => {
  return (
    <div>
      <PageHeader heading="My Account" />
      <div className="flex justify-center gap-24 mx-auto px-10 py-8">
        <LoginForm />
        <SignUpForm />
      </div>
      <ServicesBanner />
    </div>
  );
};

export default page;