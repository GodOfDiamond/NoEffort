"use client";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
}

export default function FAQAccordion({ items, title = "Veelgestelde vragen" }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">{title}</h2>
        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center text-white font-medium hover:bg-white/5 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-panel-${i}`}
              >
                <span>{item.question}</span>
                <span className="text-white/50 text-lg">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <div
                  id={`faq-panel-${i}`}
                  className="px-6 pb-4 text-white/60 text-sm leading-relaxed"
                >
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
