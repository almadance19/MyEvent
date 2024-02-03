import Hero from "@/components/shared/Hero"
import HeroVideo from "@/components/shared/HeroVideo"
import { Button } from "@/components/ui/button"
 
export default function Home() {
  return (
    <div>
      <HeroVideo/>
      <Hero/>
      <Button variant="destructive" className="p-4">Click me</Button>
    </div>
  )
}