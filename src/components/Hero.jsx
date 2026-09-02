import { ArrowRight, CheckCircle2, Sparkles, Shield, Zap, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Shield, text: "Secure & Trusted" },
    { icon: Zap, text: "Lightning Fast" },
    { icon: TrendingUp, text: "Growing Platform" },
  ];

  const floatingIcons = [
    { Icon: Sparkles, delay: "0s", top: "10%", left: "5%" },
    { Icon: Shield, delay: "1s", top: "75%", left: "8%" },
    { Icon: Zap, delay: "0.5s", top: "20%", right: "5%" },
    { Icon: TrendingUp, delay: "1.5s", top: "70%", right: "8%" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className={`space-y-8 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
              </span>
              Your trusted service platform
              <Sparkles size={14} className="text-blue-400" />
            </div>

            {/* Heading */}
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="text-slate-900">Find the right services,</span>
              <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  all in one place.
                </span>
                <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              Discover useful services, information and resources quickly and
              easily. Search, explore and find what you need from one convenient
              platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#categories"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-200 transition-all hover:shadow-xl hover:shadow-blue-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Category
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="#how-it-works"
                className="group inline-flex items-center justify-center rounded-xl border-2 border-slate-200 bg-white/80 backdrop-blur-sm px-8 py-4 font-semibold text-slate-700 transition-all hover:border-blue-300 hover:bg-blue-50 hover:shadow-md hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  How It Works
                  <span className="w-0 group-hover:w-5 overflow-hidden transition-all">
                    <ArrowRight size={16} />
                  </span>
                </span>
              </a>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6 pt-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-slate-600 bg-white/50 backdrop-blur-sm px-3 py-2 rounded-lg border border-slate-100"
                >
                  <feature.icon size={17} className="text-blue-600" />
                  {feature.text}
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4 border-t border-slate-200/60">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-indigo-400 flex items-center justify-center text-xs font-bold text-white"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-slate-600">
                  <span className="font-semibold text-slate-900">2.5k+</span> users trusted
                </span>
              </div>
              <div className="flex items-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-sm">★</span>
                ))}
                <span className="text-sm text-slate-600 ml-1">4.9/5</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className={`relative mx-auto max-w-lg transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
            }`}>
              {/* Glow Effect */}
              <div className="absolute -inset-8 rounded-3xl bg-gradient-to-r from-blue-400/30 to-indigo-400/30 blur-3xl animate-pulse" />

              {/* Main Card */}
              <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 backdrop-blur-xl p-6 shadow-2xl transition-all hover:shadow-3xl hover:scale-[1.02]">
                {/* Gradient Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600" />

                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">
                        S
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900">ServiceHub</div>
                        <div className="text-xs text-slate-500">Premium</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-blue-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
                      Live
                    </div>
                  </div>

                  {/* Search Bar Preview */}
                  <div className="relative rounded-xl bg-slate-50 p-4 border border-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-blue-100 flex items-center justify-center">
                        <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="h-3 w-32 bg-slate-300 rounded animate-pulse" />
                        <div className="h-2 w-48 bg-slate-200 rounded mt-1" />
                      </div>
                      <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
                        Go
                      </div>
                    </div>
                  </div>

                  {/* Service Cards Preview */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { color: "from-blue-400 to-blue-600", title: "Business" },
                      { color: "from-indigo-400 to-indigo-600", title: "Education" },
                      { color: "from-purple-400 to-purple-600", title: "Health" },
                      { color: "from-pink-400 to-pink-600", title: "Travel" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className={`group rounded-xl bg-gradient-to-br ${item.color} p-4 text-white transition-all hover:scale-105 hover:shadow-lg cursor-pointer`}
                      >
                        <div className="text-xs font-medium opacity-80">{item.title}</div>
                        <div className="mt-1 text-lg font-bold">4</div>
                        <div className="text-[10px] opacity-60">services</div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Stats */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-1">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="h-6 w-6 rounded-full border-2 border-white bg-slate-200" />
                        ))}
                      </div>
                      <span className="text-slate-600 text-xs">Active now</span>
                    </div>
                    <div className="text-xs text-slate-500">
                      ⚡ <span className="font-semibold text-slate-700">12</span> new today
                    </div>
                  </div>
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