"use client";
import { Progress } from "@nextui-org/react";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const getTitle = (path: string) => {
    let title = "";
    switch (path) {
      case "/onboarding":
        title = "How are you planning to use Omume?";
        break;
      case "/onboarding/user/interest":
        title = "What are your Interest?";
        break;
      case "/onboarding/user/profile":
        title = "Complete your profile.";
        break;
      case "/onboarding/bussiness/profile":
        title = "Create a business profile.";
        break;

      default:
        break;
    }
    return title;
  };
  return (
    <div className="px-4 lg:px-10 lg:pl-20 pt-10 lg:pt-28 max-w-2xl">
      <Progress
        aria-label="onboarding progress"
        value={45}
        className="max-w-xl"
      />
      <p className="text-black font-inter font-semibold text-xl lg:text-4xl  mt-5 lg:mt-16 mb-6">
        {getTitle(pathname)}
      </p>
      {children}
    </div>
  );
}
