import CtaBanner from "@/app/components/cta-banner"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  const faqs = [
    {
      question: "Čo si mám priniesť na prvú návštevu?",
      answer:
        "Prosím, prineste si občiansky preukaz (alebo iný doklad totožnosti s fotkou), kartu poistenca, zoznam aktuálne užívaných liekov a akékoľvek relevantné lekárske záznamy alebo odporúčacie listy.",
    },
    {
      question: "Ako sa mám pripraviť na operáciu?",
      answer:
        "Špecifické pokyny na prípravu vám budú poskytnuté na základe vášho zákroku. Vo všeobecnosti to zahŕňa pôst, úpravu liekov a zabezpečenie pooperačnej starostlivosti.",
    },
    {
      question: "Aká je typická doba zotavenia?",
      answer:
        "Doba zotavenia sa výrazne líši v závislosti od typu operácie. Váš chirurg prediskutuje očakávané obdobie zotavenia a poskytne podrobné pooperačné pokyny.",
    },
    {
      question: "Akceptujete moju poisťovňu?",
      answer:
        "Akceptujeme širokú škálu zdravotných poisťovní. Pred termínom nás prosím kontaktujte s informáciami o vašej poisťovni, aby sme overili krytie.",
    },
    {
      question: "Čo ak mám urgentný problém mimo ordinačných hodín?",
      answer:
        "V prípade život ohrozujúcich stavov volajte prosím 112 (alebo 155) alebo choďte na najbližšiu pohotovosť. V prípade urgentných pooperačných problémov volajte našu pohotovostnú linku uvedenú vo vašich prepúšťacích dokumentoch.",
    },
  ]

  return (
    <div className="bg-white">
      <section className="py-16 md:py-24 bg-themeGray relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/abstract-medical-blue-waves.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          {" "}
          {/* Added relative z-10 */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Často Kladené Otázky</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Nájdite odpovede na bežné otázky o našich službách, termínoch a chirurgických zákrokoch.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  value={`item-${index}`}
                  key={index}
                  className="mb-4 border bg-white shadow-lg rounded-2xl overflow-hidden"
                >
                  <AccordionTrigger className="p-6 text-lg font-semibold text-gray-800 hover:no-underline hover:bg-themeBlue-light transition-colors text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="p-6 pt-4 text-gray-600 text-base">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  )
}
