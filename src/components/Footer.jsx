import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';
import WhatsAppButton from "./WhatsAppButton";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          <div>
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
                <a href="/#categories" className="hover:text-white transition-colors">
                  Categories
                </a>
              </li>

              <li>
                <a href="/#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>

              <li>
                <a href="/#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Company</h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Connect with Us
            </h3>

            <ul className="mt-4 space-y-3 text-sm">

              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 flex-shrink-0 text-blue-500"
                />

                <span className="text-slate-400">
                  Itahari-4, Sunsari, Nepal
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="flex-shrink-0 text-blue-500"
                />

                <a
                  href="tel:9811005396"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  +977 9812345678
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Mail
                  size={18}
                  className="mt-0.5 flex-shrink-0 text-blue-500"
                />

                <a
                  href="mailto:frostek702@gmail.com"
                  className="break-all text-slate-400 hover:text-blue-400 transition-colors"
                >
                  hello@sewasathi.com
                </a>
              </li>

            </ul>

            <div className="mt-6">
              <h4 className="mb-3 text-sm font-medium text-slate-300">
                Follow Us
              </h4>

              <div className="flex flex-wrap gap-3">

                <a
                  href="https://www.facebook.com"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:shadow-lg"
                >
                  <FaFacebook
                    size={18}
                    className="text-slate-400 hover:text-white"
                  />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 hover:shadow-lg"
                >
                  <FaInstagram
                    size={18}
                    className="text-slate-400 hover:text-white"
                  />
                </a>

                <WhatsAppButton number="9779812345678" />

              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} SewaSathi. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;