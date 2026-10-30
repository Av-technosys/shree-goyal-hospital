import Image from "next/image";
import { ChevronDown } from "lucide-react";

const questions = [
  {
    question: "What tests are performed during the first antenatal visit?",
    answer: "Your obstetrician will check your blood pressure and BMI and may recommend blood tests, such as a complete blood count (CBC) and blood typing. Other tests and the timing of an ultrasound will depend on your medical history and stage of pregnancy.",
  },
  {
    question: "How often will I need to schedule antenatal checkups?",
    answer: "Your doctor will plan your checkups based on your stage of pregnancy and individual health needs. At your first visit, you can discuss your appointment schedule and when to return for your next checkup.",
  },
  {
    question: "When is the first ultrasound scan typically scheduled?",
    answer: "A routine dating scan is commonly offered around 11–14 weeks of pregnancy. Your doctor may recommend an earlier scan depending on your symptoms, medical history and individual care needs.",
  },
  {
    question: "What dietary changes or prenatal supplements are recommended early on?",
    answer: "Eat a varied, balanced diet and discuss folic acid and any other supplements with your doctor. Your care team can advise on the supplements and doses suitable for your pregnancy and any dietary adjustments you may need.",
  },
  {
    question: "Can my partner accompany me during consultations and scans?",
    answer: "You can ask to have your partner or a support person with you during antenatal appointments. Please confirm arrangements with our team when booking your consultation or scan.",
  },
];

export default function FAQ() {
  return <section aria-labelledby="faq-heading" className="py-16 lg:py-20">
    <div className="mx-auto max-w-[1240px] px-4 sm:px-5 xl:px-0">
      <h2 data-motion-reveal id="faq-heading" className="mb-9 text-center font-extrabold text-primary text-[30px] leading-[1.15] tracking-[-1px] sm:text-4xl">Frequently Asked <span className="text-accent">Questions</span></h2>
      <div className="grid items-center gap-8 md:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-10">
        <Image data-motion-reveal src="/Home/FAQ.png" alt="An expectant mother speaking with her doctor during an antenatal consultation" width={520} height={520} sizes="(max-width: 767px) 100vw, (max-width: 1279px) 43vw, 528px" className="mx-auto h-auto w-full max-w-[520px] rounded-2xl" />
        <div data-motion-reveal>
          {questions.map(({ question, answer }, index) => <details key={question} name="home-faq" open={index === 0} className="group border-b border-slate-100 last:border-b-0">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-5 py-6 text-sm font-semibold leading-6 text-primary focus-visible:rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary [&::-webkit-details-marker]:hidden">
              <span>{index + 1}. {question}</span>
              <ChevronDown size={16} aria-hidden="true" className="mt-1 shrink-0 transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none" />
            </summary>
            <p className="pb-6 pr-6 text-[13px] leading-5 text-[#526176]">{answer}</p>
          </details>)}
        </div>
      </div>
    </div>
  </section>;
}
