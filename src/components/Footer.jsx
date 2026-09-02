const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 text-xl font-bold text-white">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm text-white">
                S
              </div>

              SewaSathi
            </div>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
              A simple platform for discovering useful services, information
              and resources.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">Platform</h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#services" className="hover:text-white">
                  Services
                </a>
              </li>

              <li>
                <a href="#categories" className="hover:text-white">
                  Categories
                </a>
              </li>

              <li>
                <a href="#how-it-works" className="hover:text-white">
                  How It Works
                </a>
              </li>

              <li>
                <a href="#faq" className="hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Company</h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="/about" className="hover:text-white">
                  About Us
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-white">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} ServiceHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;