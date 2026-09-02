import { Menu, Search, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import MegaMenu from "./MegaMenu";
import { services } from "../data/services";
import SearchServices from "./Search";

const Navbar = () => {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setMegaMenuOpen(false);
        setSearchOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-slate-900"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
              S
            </div>
            <span className="hidden sm:inline">SewaSathi</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            <button
              onClick={() => setMegaMenuOpen((prev) => !prev)}
              className="flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-blue-600"
            >
              Services
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  megaMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <a
              href="/#how-it-works"
              className="text-sm font-medium text-slate-700 hover:text-blue-600"
            >
              How It Works
            </a>

            <a
              href="/about"
              className="text-sm font-medium text-slate-700 hover:text-blue-600"
            >
              About
            </a>

            <a
              href="/#faq"
              className="text-sm font-medium text-slate-700 hover:text-blue-600"
            >
              FAQ
            </a>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <button
              onClick={() => {
                setSearchOpen((prev) => !prev);
                setMegaMenuOpen(false);
              }}
              aria-label="Search"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            >
              {searchOpen ? <X size={19} /> : <Search size={19} />}
            </button>

            <a
              href="/contact"
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            onClick={() => {
              setMobileMenuOpen(true);
              setMegaMenuOpen(false);
            }}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 lg:hidden transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mega Menu - Desktop */}
        <div className="relative hidden lg:block">
          <MegaMenu
            isOpen={megaMenuOpen}
            onClose={() => setMegaMenuOpen(false)}
            services={services}
          />
        </div>

        {/* Search Overlay */}
        <SearchServices
          isOpen={searchOpen}
          onClose={() => setSearchOpen(false)}
          services={services}
        />
      </header>

      {/* Mobile/Tablet Side Drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-50" : "opacity-0"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="flex h-16 items-center justify-between border-b border-slate-200 px-4">
            <a
              href="/"
              className="flex items-center gap-2 text-xl font-bold text-slate-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
                S
              </div>
              SewaSathi
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Drawer Content */}
          <nav className="flex h-[calc(100%-4rem)] flex-col overflow-y-auto px-4 py-4">
            {/* Search in drawer */}
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  onFocus={() => {
                    setSearchOpen(true);
                    setMobileMenuOpen(false);
                  }}
                />
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
              </div>
            </div>

            {/* Services Accordion */}
            <div className="mb-2">
              <button
                onClick={() => setMegaMenuOpen((prev) => !prev)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left font-medium text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <span>Services</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${
                    megaMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {megaMenuOpen && (
                <div className="mt-1 rounded-xl bg-slate-50 p-3">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <div key={service.id} className="py-3 border-b border-slate-200 last:border-0">
                        <div className="flex items-center gap-2 px-2 pb-2">
                          <Icon size={17} className="text-blue-600" />
                          <span className="text-sm font-semibold text-slate-900">
                            {service.category}
                          </span>
                        </div>
                        <div className="ml-7 space-y-1">
                          {service.subServices.map((subService) => (
                            <a
                              key={subService.id}
                              href={`/services/${service.category.toLowerCase()}/${subService.title
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMegaMenuOpen(false);
                              }}
                              className="block rounded-md px-2 py-2 text-sm text-slate-600 hover:bg-white hover:text-blue-600 transition-colors"
                            >
                              {subService.title}
                            </a>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Navigation Links */}
            <a
              href="/#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg px-3 py-3 font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              How It Works
            </a>

            <a
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg px-3 py-3 font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              About
            </a>

            <a
              href="/#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg px-3 py-3 font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              FAQ
            </a>

            {/* CTA Button */}
            <a
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 block rounded-lg bg-blue-600 px-4 py-3 text-center font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;