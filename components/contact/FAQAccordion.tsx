"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@/components/ui/Icons";

/**
 * Contact page FAQ accordion — one item open at a time, smooth
 * grid-rows height animation, full keyboard support via native buttons.
 */

interface FAQ {
  question: string;
  answer: string;
}

const FAQS: FAQ[] = [
  {
    question: "How long does a typical website project take?",
    answer:
      "Most SmoothCuts projects run between 1-3 weeks from discovery to launch, depending on scope. We'll give you a fixed timeline in your proposal so there are never any surprises.",
  },
  {
    question: "What does a SmoothCuts website cost?",
    answer:
      "Our custom websites typically start at $500 for foundational business sites and scale based on complexity, pages, and custom functionality. We offer clear, itemized proposals — no hidden fees.",
  },
  {
    question: "Do you work with clients outside your city?",
    answer:
      "Absolutely. We work with clients across the country and internationally. All our discovery, design reviews, and handoffs happen seamlessly over video call and shared digital tools.",
  },
  {
    question: "What do I need to prepare before we start?",
    answer:
      "Just your goals and a rough idea of what you need. We handle the rest — from strategy and copywriting to design and development. You don't need to have everything figured out.",
  },
  {
    question: "Will I own my website after it launches?",
    answer:
      "100%. You own everything — the design, the code, the content, and all the assets. We hand over full credentials and documentation on launch day.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-b border-t border-line">
      {FAQS.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={faq.question}>
            <h3>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-button-${i}`}
                className="flex min-h-12 w-full items-center justify-between gap-6 py-6 text-left text-lg font-semibold text-snow transition-colors duration-150 hover:text-violet"
              >
                {faq.question}
                <ChevronDownIcon
                  size={20}
                  className={`shrink-0 text-violet transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-button-${i}`}
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl pb-6 text-base leading-relaxed text-mute">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
