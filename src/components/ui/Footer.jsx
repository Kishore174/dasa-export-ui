import React from "react";
import { Phone, Mail, MapPin, Globe, ArrowUpRight } from "lucide-react";
import logo from "../../assets/logo.jpeg";

const footerLinks = {
  Company: ["About Us", "Our Story", "Careers", "Contact"],
  Products: ["Tomato Powder", "Moringa Powder", "Turmeric Powder", "Beetroot Powder", "Onion Powder", "Garlic Powder"],
  Services: ["Export Consulting", "Custom Packaging", "Private Label", "Bulk Orders"],
};

const certs = ["ISO 22000", "APEDA", "FSSAI", "HACCP", "Organic"];

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden font-body"
      style={{ background: "var(--forest-950)" }}
    >
      {/* Gold top border */}
      <div
        className="w-full h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }}
      />

      {/* Ambient glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[50rem] h-[20rem] rounded-full opacity-[0.07] blur-3xl pointer-events-none"
        style={{ background: "var(--gold)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10">

        {/* Top grid */}
        <div className="grid lg:grid-cols-[1.4fr_repeat(3,1fr)] gap-12 pb-16 border-b"
          style={{ borderColor: "rgba(201,168,76,0.12)" }}
        >
          {/* Brand column */}
          <div>
            <img
              src={logo}
              alt="DASA Exports"
              className="h-20 w-auto object-contain"
              style={{
                mixBlendMode: "lighten",
                filter: "drop-shadow(0 4px 16px rgba(201,168,76,0.35))",
              }}
            />
            <p className="mt-5 text-sm leading-7 max-w-xs" style={{ color: "var(--cream-dim)" }}>
              Premium agricultural exports from Tamil Nadu, India — quality you
              can trust, delivered to every corner of the world.
            </p>

            {/* Contact details */}
            <ul className="mt-8 flex flex-col gap-3">
              {[
                { icon: Phone, text: "+91 98941 32848", href: "tel:+919894132848" },
                { icon: Mail,  text: "info@dasaexports.com", href: "mailto:info@dasaexports.com" },
                { icon: MapPin, text: "Tamil Nadu, India" },
                { icon: Globe, text: "www.dasaexports.com", href: "https://www.dasaexports.com" },
              ].map(({ icon: Icon, text, href }) => (
                <li key={text} className="flex items-center gap-3 text-sm"
                  style={{ color: "rgba(246,239,222,0.55)" }}
                >
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
              <h4 className="font-mono text-[10px] uppercase tracking-[3px] mb-6"
                style={{ color: "var(--gold)" }}
              >
                {heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="/"
                      className="text-sm transition-colors duration-200 hover:text-[var(--gold)] flex items-center gap-1 group"
                      style={{ color: "rgba(246,239,222,0.5)" }}
                    >
                      {link}
                      <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications row */}
        <div className="flex flex-wrap items-center gap-3 py-8 border-b"
          style={{ borderColor: "rgba(201,168,76,0.12)" }}
        >
          <span className="font-mono text-[10px] uppercase tracking-[2px] mr-2"
            style={{ color: "rgba(246,239,222,0.35)" }}
          >
            Certifications:
          </span>
          {certs.map((c) => (
            <span
              key={c}
              className="px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-wider border"
              style={{
                borderColor: "rgba(201,168,76,0.25)",
                color: "var(--gold)",
                background: "rgba(201,168,76,0.06)",
              }}
            >
              {c}
            </span>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs" style={{ color: "rgba(246,239,222,0.3)" }}>
            © {new Date().getFullYear()} DASA Exports. All rights reserved. · From India to the World.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Use", "Shipping Policy"].map((t) => (
              <a key={t} href="/"
                className="text-xs transition-colors hover:text-[var(--gold)]"
                style={{ color: "rgba(246,239,222,0.3)" }}
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
