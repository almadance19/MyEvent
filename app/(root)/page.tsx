
import Hero from "@/components/shared/Hero"
import HeroVideo from "@/components/shared/HeroVideo"
import { auth, currentUser } from "@clerk/nextjs";

export default function Home() {
  const { userId } = auth();
  console.log("user",userId)
  
  return (
    <div>
      <HeroVideo/>
      <Hero/>
    </div>
  )
}