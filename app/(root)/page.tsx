
import Hero from "@/components/shared/Hero"
import HeroVideo from "@/components/shared/HeroVideo"
import { Button } from "@/components/ui/button"
import { auth, currentUser } from "@clerk/nextjs";

export default function Home() {
  const { userId } = auth();
  console.log("user",userId)
  
  return (
    <div>
      <HeroVideo/>
      <Hero/>
      <Button variant="destructive" className="p-4">Click me</Button>
    </div>
  )
}