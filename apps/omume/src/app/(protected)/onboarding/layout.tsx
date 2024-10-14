import Image from "next/image"
import dashboard from "./_assets/images/dashboard.png"
export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="xl:h-screen">
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_0.7fr] h-full">
        <div className="xl:max-w-[620px]">{children}</div>
        <div className="hidden xl:flex flex-col justify-center items-center h-full bg-gradient-to-r from-[#E0C3FC] to-[#8EC5FC] ">
          <Image src={dashboard} alt="Dashboard" width={538} height={365} />
        </div>
      </div>
    </section>
  )
}
