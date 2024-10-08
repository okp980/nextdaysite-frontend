import Image from "next/image"
import dashboard from "./_assets/images/dashboard.png"
export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="lg:h-screen">
      <div className="flex h-screen">
        <div className="flex-1">{children}</div>
        <div className="hidden lg:flex flex-col justify-center items-center h-full bg-gradient-to-r from-[#E0C3FC] to-[#8EC5FC] w-[604px]">
          <Image src={dashboard} alt="Dashboard" width={538} height={365} />
        </div>
      </div>
    </section>
  )
}
