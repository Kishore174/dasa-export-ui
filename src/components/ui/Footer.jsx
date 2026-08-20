import React from "react";
import { Phone, Mail, MapPin, Globe, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";

const footerLinks = {
  Company: [
    { label: "About Us", path: "/about" },
    { label: "Our Products", path: "/products" },
    { label: "Certifications", path: "/certificates" },
    { label: "Contact Us", path: "/contact" },
  ],
  Products: [
    { label: "Tomato Powder", path: "/products" },
    { label: "Moringa Powder", path: "/products" },
    { label: "Turmeric Powder", path: "/products" },
    { label: "Beetroot Powder", path: "/products" },
    { label: "Onion Powder", path: "/products" },
    { label: "Garlic Powder", path: "/products" },
  ],
  Services: [
    { label: "Commercial Terms", path: "/payment-terms" },
    { label: "Custom Packaging", path: "/products" },
    { label: "Export Logistics", path: "/about" },
    { label: "Bulk Quotations", path: "/contact" },
  ],
};

const certs = ["ISO 22000", "APEDA", "FSSAI", "HACCP", "Organic"];

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden font-body"
      style={{ background: "#0A1A0F" }}
    >
      {/* Gold top border */}
      <div
        className="w-full h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }}
      />

      {/* Ambient glow */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[50rem] h-[20rem] rounded-full opacity-[0.07] blur-3xl pointer-events-none"
        style={{ background: "var(--gold)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10">

        {/* Top grid */}
        <div
          className="grid lg:grid-cols-[1.4fr_repeat(3,1fr)] gap-12 pb-16 border-b"
          style={{ borderColor: "rgba(201,168,76,0.12)" }}
        >
          {/* Brand column */}
          <div>
            <Link to="/">
              <img
                src={logo}
                alt="DASA Exports"
                className="h-20 w-auto object-contain rounded-xl"
                style={{
                  filter: "drop-shadow(0 4px 16px rgba(201,168,76,0.35))",
                }}
              />
            </Link>
            <p className="mt-5 text-sm leading-7 max-w-xs text-[rgba(255,255,255,0.7)]">
              Premium agricultural exports from Tamil Nadu, India — quality you can trust, delivered to every corner of the world.
            </p>

            {/* Contact details */}
            <ul className="mt-8 flex flex-col gap-3">
              {[
                { icon: Phone, text: "+91 98941 32848", href: "tel:+919894132848" },
                { icon: Mail,  text: "contact@dasaexports.com", href: "mailto:contact@dasaexports.com" },
                { icon: MapPin, text: "Tamil Nadu, India" },
                { icon: Globe, text: "www.dasaexports.com", href: "https://www.dasaexports.com" },
              ].map(({ icon: Icon, text, href }) => (
                <li key={text} className="flex items-center gap-3 text-sm text-[rgba(255,255,255,0.65)]">
                  <Icon size={14} style={{ color: "var(--gold)", flexShrink: 0 }} />
                  {href ? (
                    <a href={href} className="hover:text-[var(--gold)] transition-colors">
                      {text}
                    </a>
                  ) : (
                    text
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4
                className="font-mono text-[10px] uppercase tracking-[3px] mb-6"
                style={{ color: "var(--gold)" }}
              >
                {heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.path}
                      className="text-sm text-[rgba(255,255,255,0.6)] transition-colors duration-200 hover:text-[var(--gold)] flex items-center gap-1 group"
                    >
                      {item.label}
                      <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications row */}
        <div
          className="flex flex-wrap items-center gap-3 py-8 border-b"
          style={{ borderColor: "rgba(201,168,76,0.12)" }}
        >
          <span
            className="font-mono text-[10px] uppercase tracking-[2px] mr-2"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Certifications:
          </span>
          {certs.map((c) => (
            <Link
              key={c}
              to="/certificates"
              className="px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-wider border transition-colors hover:bg-[rgba(201,168,76,0.15)]"
              style={{
                borderColor: "rgba(201,168,76,0.25)",
                color: "var(--gold)",
                background: "rgba(201,168,76,0.06)",
              }}
            >
              {c}
            </Link>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-[rgba(255,255,255,0.4)]">
            © {new Date().getFullYear()} DASA Exports. All rights reserved. · From India to the World.
          </p>
          <div className="flex items-center gap-6 text-xs text-[rgba(255,255,255,0.4)]">
            <Link to="/payment-terms" className="hover:text-[var(--gold)] transition-colors">
              Payment Terms &amp; Policies
            </Link>
            <Link to="/contact" className="hover:text-[var(--gold)] transition-colors">
              Contact Desk
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
