import React from "react";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const SignUpForm = () => {
  return (
    <div className="space-y-6 w-1/3">
      <div>
        <h2 className="text-2xl font-semibold">Register</h2>
      </div>
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="register-email">Email address</Label>
          <Input
            id="register-email"
            placeholder="Enter your email"
            required
            type="email"
          />
        </div>
        <div className="text-sm text-muted-foreground">
          <p>
            A link to set a new password will be sent to your email address.
          </p>
          <p className="mt-2">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <Link
              className="text-blue-600 hover:text-blue-500"
              href="/privacy-policy"
            >
              privacy policy
            </Link>
            .
          </p>
        </div>
        <Button className="w-1/3" type="submit" variant="outline">
          Register
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
