import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 rounded">
            
  <nav className="grid grid-flow-col gap-4">
    <Link href='/become-a-partner' >Become a Partner</Link>
    <Link href='/contact' >Contact</Link>
    <Link href='/impressum' >Impressum</Link>
    <Link href='/privacy' >Privacy</Link>
  </nav> 
  <nav>
    <div className="grid grid-flow-col gap-4 text-indigo-800 ">
    <Link href='https://www.instagram.com/eduardo_natalia_almadance/' >
    <Image height={24} width={24} src='/assets/images/instagram.svg' alt='instagram' />
    </Link>
    <Link href='https://www.youtube.com/@almadancebachatasalsa9317' >
    <Image height={24} width={24} src='/assets/images/youtube.svg' alt='youtube' />
    </Link>
    <Link href='https://www.facebook.com/FrankfurtBachataFestival'>
    <Image height={24} width={24} src='/assets/images/facebook.svg' alt='facebook' />
    </Link>
    </div>
  </nav> 
    <aside>
      <Image
          src='/assets/images/logo.svg'
          alt='logo'
          width={40}
          height={40}
          className='object-contain'
        />
         <p className="font-bold">
          My Event Ticket <br/>Save your event tickets here
         </p> 
          <p>Alma Dance Frankfurt © {new Date().getFullYear()} </p>
     </aside> 
</footer>
  )
}

export default Footer