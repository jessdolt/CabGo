"use client";
import AuthCover from "@/components/AuthCover";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <AuthCover>
      <SignUp />
    </AuthCover>
  );
}
