
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Search,
} from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Search,
      text: "Easy to Find",
    },
    {
      icon: ShieldCheck,
      text: "Trusted Services",
    },
    {
      icon: CheckCircle2,
      text: "Simple & Convenient",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/50">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-blue-200/20 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-indigo-200/20 blur-3xl" />

        <Sparkles
          size={32}
          className="absolute left-[8%] top-[18%] text-blue-400/20"
        />

        <Sparkles
          size={24}
          className="absolute bottom-[20%] right-[8%] text-indigo-400/20"
        />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">

          <div
            className={`max-w-2xl transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-semibold text-blue-700 shadow-sm sm:text-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-600" />
              Your trusted service platform
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl">
              Find the right service
              <span className="block text-blue-600">
                when you need it.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Discover useful services, information and resources
              from one convenient platform. Find what you need
              without the confusion.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/#categories"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700 hover:shadow-xl sm:px-7 sm:text-base"
              >
                Explore Categories

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="/#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 sm:px-7 sm:text-base"
              >
                How It Works
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-200 pt-6">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.text}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <Icon
                      size={17}
                      className="text-blue-600"
                    />

                    <span>{feature.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className={`relative mx-auto w-full max-w-xl transition-all delay-200 duration-1000 ${
              isVisible
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-8 scale-95 opacity-0"
            }`}
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-blue-400/10 blur-3xl" />

            <div >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/image1.jpg"
                  alt="Discover services on SewaSathi"
                  className="h-auto w-full object-cover"
                />

                <div className="absolute inset-x-4 bottom-4">
                  <div className="flex items-center justify-between rounded-xl border border-white/40 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md">
                    <div>
                      <p className="text-xs text-slate-500">
                        Find what you need
                      </p>

                      <p className="mt-0.5 text-sm font-semibold text-slate-900">
                        Services made simple
                      </p>
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
                      <ArrowRight size={17} />
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="absolute -right-3 -top-5 hidden rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:block sm:right-0">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
                  <ShieldCheck
                    size={20}
                    className="text-blue-600"
                  />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Platform
                  </p>

                  <p className="text-sm font-semibold text-slate-900">
                    Trusted & Useful
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
