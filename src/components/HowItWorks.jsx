import { Search, MousePointerClick, CheckCircle2 } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: Search,
    title: "Search",
    description: "Search for the service or information you need.",
  },
  {
    id: 2,
    icon: MousePointerClick,
    title: "Explore",
    description: "Browse available options and choose what suits you.",
  },
  {
    id: 3,
    icon: CheckCircle2,
    title: "Get Started",
    description: "Follow the information and take the next step.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Simple Process
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How it works
          </h2>

          <p className="mt-4 text-slate-600">
            Finding the right service doesn't have to be complicated.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.id} className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">
                  <Icon size={27} />
                </div>

                <div className="mt-5">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-slate-500">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;