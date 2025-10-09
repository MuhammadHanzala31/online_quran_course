import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#7AC043] text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-semibold mb-3">MyBrand</h3>
          <p className="text-sm">
            Building the future with modern web technologies.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-[#FFB706]">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#FFB706]">About</Link></li>
            <li><Link href="/services" className="hover:text-[#FFB706]">Services</Link></li>
            <li><Link href="/contact" className="hover:text-[#FFB706]">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <p>Email: info@mybrand.com</p>
          <p>Phone: +123 456 789</p>
          <p>Location: Karachi, PK</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#098A46] text-center py-4 text-sm">
        © {new Date().getFullYear()} MyBrand. All rights reserved.
      </div>
    </footer>
  );
}
