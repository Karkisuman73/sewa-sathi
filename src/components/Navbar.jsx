import { Menu, Search, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import MegaMenu from "./MegaMenu";
import { services } from "../data/services";
import SearchServices from "./Search";

const Navbar = () => {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        <a
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-slate-900"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
            S
          </div>

          SewaSathi
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          <button
            onClick={() => setMegaMenuOpen((prev) => !prev)}
            className="flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-blue-600"
          >
            Services

            <ChevronDown
              size={16}
              className={`transition-transform ${
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
            href="#faq"
            className="text-sm font-medium text-slate-700 hover:text-blue-600"
          >
            FAQ
          </a>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
        <button
  onClick={() => {
    setSearchOpen((prev) => !prev);
    setMegaMenuOpen(false);
  }}
  aria-label="Search"
  className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100"
>
  {searchOpen ? <X size={19} /> : <Search size={19} />}
</button>

          <a
            href="/contact"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Get Started
          </a>
        </div>

        <button
          onClick={() => {
            setMobileMenuOpen((prev) => !prev);
            setMegaMenuOpen(false);
          }}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="relative hidden lg:block">
        <MegaMenu
          isOpen={megaMenuOpen}
          onClose={() => setMegaMenuOpen(false)}
          services={services}
        />
      </div>

        <SearchServices
    isOpen={searchOpen}
    onClose={() => setSearchOpen(false)}
    services={services}
  />


      {mobileMenuOpen && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">

            <button
              onClick={() => setMegaMenuOpen((prev) => !prev)}
              className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left font-medium text-slate-700 hover:bg-slate-50"
            >
              <span>Services</span>

              <ChevronDown
                size={18}
                className={`transition-transform ${
                  megaMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>



            {megaMenuOpen && (
              <div className="mt-1 rounded-xl bg-slate-50 p-3">
                {services.map((service) => {
                  const Icon = service.icon;

                  return (
                    <div key={service.id} className="py-3">

                      <div className="flex items-center gap-2 px-2 pb-2">
                        <Icon
                          size={17}
                          className="text-blue-600"
                        />

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
                            className="block rounded-md px-2 py-2 text-sm text-slate-600 hover:bg-white hover:text-blue-600"
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

            <a
              href="/#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg px-3 py-3 font-medium text-slate-700 hover:bg-slate-50"
            >
              How It Works
            </a>

            <a
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg px-3 py-3 font-medium text-slate-700 hover:bg-slate-50"
            >
              About
            </a>

            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg px-3 py-3 font-medium text-slate-700 hover:bg-slate-50"
            >
              FAQ
            </a>

            <a
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 block rounded-lg bg-blue-600 px-4 py-3 text-center font-semibold text-white hover:bg-blue-700"
            >
              Get Started
            </a>

          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;