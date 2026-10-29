export interface ArticleSection {
  title: string;
  text?: string;
  items?: { label?: string; text: string }[];
}

export default function ArticleBody({ sections }: { sections: ArticleSection[] }) {
  return <div className="min-w-0 space-y-9 sm:space-y-10">
    {sections.map(section => <section data-motion-reveal key={section.title}>
      <h2 className="mb-3 text-xl font-extrabold leading-snug tracking-[-.5px] text-primary sm:text-2xl">{section.title}</h2>
      {section.text && <p className="text-sm leading-7 sm:text-base">{section.text}</p>}
      {section.items && <ul className="mt-4 list-disc space-y-1 pl-6 text-sm leading-7 sm:text-base">
        {section.items.map(item => <li key={item.text} className={item.label ? "marker:text-accent" : undefined}>{item.label && <><strong className="font-bold text-accent">{item.label}</strong> – </>}{item.text}</li>)}
      </ul>}
    </section>)}
  </div>;
}
