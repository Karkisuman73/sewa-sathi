import { ChevronDown, HelpCircle, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { faqs } from "../data/faq";

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section id="faq" className="bg-gradient-to-b from-white to-slate-50  sm:py-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="relative text-center">
          <div className="absolute left-1/2 top-0 -translate-x-1/2">
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-blue-400 to-blue-600" />
          </div>
          
          <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-blue-600">
            <HelpCircle size={16} />
            FAQ
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          
          <p className="mt-3 text-slate-600">
            Find answers to common questions about SewaSathi
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-blue-200 bg-white shadow-lg shadow-blue-100/50"
                    : "border-slate-200 bg-white/80 hover:border-slate-300 hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-slate-50/50"
                >
                  <div className="flex items-start gap-3">
                    <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                      isOpen ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-400"
                    }`}>
                      {faq.id}
                    </span>
                    <span className={`font-medium transition-colors ${
                      isOpen ? "text-blue-700" : "text-slate-900"
                    }`}>
                      {faq.question}
                    </span>
                  </div>

                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all ${
                    isOpen 
                      ? "bg-blue-50 text-blue-600 rotate-180" 
                      : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                  }`}>
                    <ChevronDown size={18} className="transition-transform" />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-slate-100 px-6 pb-6 pt-4">
                    <p className="text-sm leading-relaxed text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;