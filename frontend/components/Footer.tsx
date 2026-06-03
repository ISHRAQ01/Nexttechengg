import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">NEXT TECH ENGINEERING</h3>
            <p className="text-gray-400 text-sm">
              Precision manufacturers since 2013. Delivering quality fixtures, moulds, and plastic parts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/products" className="hover:text-white transition">Products</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone size={14} /> +91 9810541602
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} /> nexttechengg@gmail.com
              </li>
              <li className="flex item-center gap-2">
                <Mail size={14}/> haroon_1174@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} /> Plot No: 12, Khasra No.21, Mainapur Ind.Area,
                Meerut Road, Ghaziabad
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4">Business Hours</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Clock size={14} /> Mon-Sat: 9AM - 7PM
              </li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          <p>© 2026 Next Tech Engineering. All rights reserved.</p>
          <p className="mt-1">GST: 09*********1ZG</p>
        </div>
      </div>
    </footer>
  );
}