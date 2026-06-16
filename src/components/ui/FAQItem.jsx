// Tool Imports:
import { useState } from "react";

// Icon Imports:
import { PiPawPrintFill } from "react-icons/pi";
import { HiChevronDown } from "react-icons/hi";

export default function FAQItem({ id, question, answer, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={`faq-panel-${id}`}
          id={`faq-button-${id}`}
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between px-6 py-5 text-left"
        >
          <div className="flex items-center gap-4">
            <PiPawPrintFill className="text-xl text-clay" aria-hidden="true" />

            <span className="text-lg font-medium text-text md:text-xl">
              {question}
            </span>
          </div>

          <HiChevronDown
            aria-hidden="true"
            className={`cursor-pointer text-2xl text-text transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      </h3>

      <div
        id={`faq-panel-${id}`}
        role="region"
        aria-labelledby={`faq-button-${id}`}
        className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-border px-6 py-5">
            <p className="leading-relaxed text-text">{answer}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
