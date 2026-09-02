import { ArrowRight, Search, ShieldCheck, Clock, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-indigo-200/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-blue-100/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">

          {/* Trust Badge */}
          <div className="mb-6 inline-flex animate-fade-in items-center gap-2 rounded-full border border-blue-100 bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
            <ShieldCheck size={16} className="text-blue-500" />
            Trusted by 10,000+ users
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline text-slate-500">4.9/5 rating</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            <span className="text-slate-700">Do You Need</span>
            <span className="relative mt-2 block text-blue-600">
              Any Help?
              <span className="absolute -bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-blue-400/50 sm:w-32" />
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Don't worry, <span className="font-semibold text-blue-600">SewaSathi</span> is here. 
            Find the information, services, and support you need — all in one place.
          </p>

          {/* Key Value Props */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-blue-100 p-1.5 text-blue-600">
                <Search size={14} />
              </div>
              <span>Curated Services</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-green-100 p-1.5 text-green-600">
                <Clock size={14} />
              </div>
              <span>Quick Response</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-purple-100 p-1.5 text-purple-600">
                <Users size={14} />
              </div>
              <span>Expert Support</span>
            </div>
          </div>

          {/* Main Message - styled as highlight */}
          <div className="mt-8 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-5 border border-blue-100/60">
            <p className="text-base font-semibold text-slate-800 sm:text-lg">
              ✦ Find your need. Find the right service. Find your solution. ✦
            </p>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#services"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02] hover:bg-blue-700 hover:shadow-blue-600/35 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
            >
              <Search size={18} className="transition-transform group-hover:scale-110" />
              Find a Service
            </a>

            <a
              href="#how-it-works"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:border-blue-300 hover:bg-blue-50/50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
            >
              How It Works
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Trust Indicator */}
          <div className="mt-10 flex items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              Available 24/7
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              100% Free
            </span>
            <span className="hidden lg:inline">•</span>
            <span className="hidden lg:flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              No hidden charges
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;