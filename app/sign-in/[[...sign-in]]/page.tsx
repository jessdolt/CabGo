"use client";
import { SignIn } from "@clerk/nextjs";
import AuthCover from "@/components/AuthCover";

export default function Page() {
  return (
    <AuthCover>
      <SignIn />
    </AuthCover>
  );
}
