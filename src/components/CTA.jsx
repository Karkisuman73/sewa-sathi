import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="px-4 py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-blue-600 px-5 py-10 sm:rounded-3xl sm:px-8 sm:py-12 lg:px-14 lg:py-14">
        <div className="flex flex-col gap-8 sm:gap-10 lg:flex-row lg:items-center lg:justify-between">

          {/* Content */}
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-100 sm:text-sm">
              Need Help?
            </p>

            <h2 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
              Still have confusion? We are here to help.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-blue-100 sm:text-base">
              Not sure which service you need? Get in touch with us and
              we&apos;ll help you find the right direction.
            </p>
          </div>

          <div className="w-full sm:w-auto lg:shrink-0">
            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50 sm:w-auto sm:px-6 sm:py-3.5 sm:text-base"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
