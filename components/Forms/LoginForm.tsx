import React from "react";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
const LoginForm = () => {
  return (
    <div className="space-y-6 w-1/3">
      <div>
        <h2 className="text-2xl font-semibold">Log In</h2>
      </div>
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Username or email address</Label>
          <Input
            id="email"
            placeholder="Enter your email"
            required
            type="email"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" required type="password" />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember" className="text-sm font-normal">
            Remember me
          </Label>
        </div>{" "}
        <div className="flex gap-2 items-center">
          <Button variant="outline" className="w-1/3" type="submit">
            Log In
          </Button>

          <Link
            className="text-blue-600 hover:text-blue-500 text-sm"
            href="/forgot-password"
          >
            Lost Your Password?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
