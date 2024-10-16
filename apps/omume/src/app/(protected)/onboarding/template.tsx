"use client";
import { Progress } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useOnboardingProgressStore } from "./_util/store";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const progress = useOnboardingProgressStore((state) => state.step);
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
      case "/onboarding/business/profile":
        title = "Create a business profile.";
        break;

      default:
        break;
    }
    return title;
  };
  return (
    <div className="px-4 pb-10 lg:pb-0 lg:px-10 lg:pl-20 pt-8">
      <div className="fixed top-0 left-0 pl-4 lg:pl-20 py-5 lg:py-10  bg-white z-10 w-full xl:w-1/2">
        <Link
          href={"/welcome"}
          className="font-bold text-2xl font-fugaz text-primary "
        >
          omume
        </Link>
      </div>
      <div className="pt-20 lg:pt-36 ">
        <Progress aria-label="onboarding progress" value={progress} />
        <p className="text-black font-inter font-semibold text-xl lg:text-4xl  mt-5 lg:mt-16 mb-6">
          {getTitle(pathname)}
        </p>
        <div className="pb-10"> {children}</div>
      </div>
    </div>
  );
}
