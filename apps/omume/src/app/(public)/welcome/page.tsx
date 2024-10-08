import Companies from "./_components/Companies"
import Features from "./_components/Features"
import Hero from "./_components/Hero"

export default function Welcome() {
  return (
    <div>
      <Hero />
      <Companies />
      <Features />
      <Features invert />
      <Features />
    </div>
  )
}
