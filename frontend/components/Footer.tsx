import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ChevronRight, Building2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-white tracking-tight">
                NEXT TECH<span className="text-blue-400"> ENGINEERING</span>
              </h3>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Precision manufacturers since 2013. Delivering quality fixtures, 
              moulds, and plastic parts across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "Home", href: "/" },
                { name: "Products", href: "/products" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-blue-400 transition text-sm flex items-center gap-1 group"
                  >
                    <ChevronRight
                      size={12}
                      className="opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="flex items-start gap-3 group">
                <Phone size={15} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+919810541602"
                  className="hover:text-blue-400 transition"
                >
                  +91 9810541602
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <Mail size={15} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <a
                    href="mailto:nexttechengg@gmail.com"
                    className="hover:text-blue-400 transition block"
                  >
                    nexttechengg@gmail.com
                  </a>
                  <a
                    href="mailto:haroon_1174@gmail.com"
                    className="hover:text-blue-400 transition block"
                  >
                    haroon_1174@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">
                  Plot No: 12, Khasra No.21, Mainapur Ind. Area, Meerut Road, Ghaziabad
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Business Hours
            </h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="flex items-center gap-3">
                <Clock size={15} className="text-blue-400 flex-shrink-0" />
                <span>
                  <span className="text-gray-300">Mon - Sat:</span> 9:00 AM - 7:00 PM
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={15} className="text-gray-700 flex-shrink-0" />
                <span className="text-gray-600">Sunday: Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Next Tech Engineering. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs">
            GST: <span className="text-gray-500">09ANPPM5546H1ZG</span>
          </p>
        </div>
      </div>
    </footer>
  );
}