"use client"
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import Image from 'next/image';


const PartnersPage = () => {
  return (

    <section className="bg-primary-50 bg-dotted-pattern bg-contain pt-1 pb-5 md:py-10">
    <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
      <div className="flex flex-col justify-center gap-8">
        <h1 className="h1-bold">Impressum</h1>
        <p className="p-regular-20 md:p-regular-24">
          </p>
      </div>

      <Image 
        src="/assets/images/hero2.svg"
        alt="hero"
        width={1000}
        height={1000}
        className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
      />
    </div>

    <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
    <div className="flex flex-col justify-center gap-8">

    <h2 className='font-bold  desc text-left'>Impressum</h2>

    <p>Impressum Angaben gem&auml;&szlig; &sect; 5 TMG</p>

<p>Alma Dance by Ivan Eduardo Millan Jorge</p>

<p>Oppenheimer Str. 48 60594 Frankfurt am Main</p>

<p>Vertreten durch:</p>

<p>Eduardo Millan</p>

<p>Kontakt</p>

<p>Telefon: +49 163 9641730</p>

<p>E-Mail: info@alma-dance.de</p>

<p>EU-Streitschlichtung</p>

<p>Die Europ&auml;ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:</p>

<p>https://ec.europa.eu/consumers/odr/.</p>

<p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>

<p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer</p>

<p>Verbraucherschlichtungsstelle teilzunehmen.</p>

<p></p>

<p>Haftung f&uuml;r Inhalte</p>

<p>Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder gespeicherte fremde Informationen zu &uuml;berwachen oder nach Umst&auml;nden zu forschen, die auf eine rechtswidrige T&auml;tigkeit hinweisen.</p>

<p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m&ouml;glich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>

<p>Haftung f&uuml;r Links</p>

<p>Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr &uuml;bernehmen. F&uuml;r die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf m&ouml;gliche Rechtsverst&ouml;&szlig;e &uuml;berpr&uuml;ft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>

<p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>

<p>Urheberrecht</p>

<p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f&uuml;r den privaten, nicht kommerziellen Gebrauch gestattet.</p>

<p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>

<p></p>

<p>Quelle:</p>

<p>e-recht24.de</p>

<p>https://www.e-recht24.de/impressum-generator.html</p>

    </div>

</div>
</section>


) }

export default PartnersPage;