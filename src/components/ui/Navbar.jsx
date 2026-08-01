import React, { useState, useEffect } from "react";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import logo from "../../assets/logo.jpeg";

/**
 * Shared font + design-token setup.
 * Import this <style> once at the app root (e.g. in App.jsx) instead of
 * duplicating it in every component. It's kept here inline so Navbar
 * still looks right if used standalone.
 */
const FontImport = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;0,9..144,900;1,9..144,500&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');

    :root {
      --forest-950: #122318;
      --forest-800: #1D3624;
      --forest-700: #28452F;
      --cream: #F6EFDE;
      --tomato: #C43E2A;
      --tomato-dark: #9A3020;
      --turmeric: #E3A62F;
      --moringa: #8FAE6B;
      --brass: #B08D57;
      --ink: #0D1810;
    }
    .font-display { font-family: 'Fraunces', serif; }
    .font-mono { font-family: 'IBM Plex Mono', monospace; }
    .font-body { font-family: 'Inter', sans-serif; }

    /* Signature motion: the manifest / trade-route ticker */
    @keyframes manifest-scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .manifest-track {
      animation: manifest-scroll 34s linear infinite;
    }
    .manifest-track:hover {
      animation-play-state: paused;
    }

    /* Subtle paper grain, used instead of a flat gradient wash */
    .grain-overlay {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
      mix-blend-mode: overlay;
    }

    @media (prefers-reduced-motion: reduce) {
      .manifest-track { animation: none; }
    }
  `}</style>
);

const navLinks = [
  { name: "Home", href: "#top" },
  { name: "About Us", href: "#why-us" },
  { name: "Our Products", href: "#catalog" },
  { name: "Catalog", href: "#catalog" },
  { name: "Certificates", href: "#certificates" },
  { name: "Payment Terms", href: "#payment-terms" },
  { name: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href) => {
    setOpen(false);
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 font-body">
      <FontImport />

      <nav
        className="max-w-7xl mx-auto px-4 transition-all duration-300"
        style={{ marginTop: scrolled ? "12px" : "20px" }}
      >
        <div
          className="flex items-center justify-between pl-5 pr-3 rounded-full border transition-all duration-300"
          style={{
            background: scrolled ? "rgba(18,35,24,0.88)" : "rgba(18,35,24,0.72)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderColor: scrolled ? "rgba(227,166,47,0.22)" : "rgba(246,239,222,0.14)",
            boxShadow: scrolled
              ? "0 8px 30px rgba(13,24,16,0.45)"
              : "0 8px 30px rgba(13,24,16,0.35)",
            paddingTop: scrolled ? "8px" : "12px",
            paddingBottom: scrolled ? "8px" : "12px",
          }}
        >
          {/* Logo — export-seal mark with image logo */}
          <div
            onClick={() => scrollTo("#top")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div
              className="relative h-11 w-11 rounded-full flex items-center justify-center border-2 shrink-0 overflow-hidden"
              style={{ borderColor: "var(--turmeric)" }}
            >
              <img
                src={logo}
                alt="Dasa Exports Logo"
                className="h-full w-full object-cover"
                style={{ mixBlendMode: "lighten" }}
              />
              <div
                className="absolute -inset-[3px] rounded-full border border-dashed opacity-60 pointer-events-none"
                style={{ borderColor: "var(--cream)" }}
              />
            </div>

            <div className="leading-none">
              <h2
                className="font-display font-semibold text-xl tracking-wide"
                style={{ color: "var(--cream)" }}
              >
                Dasa
              </h2>
              <p
                className="font-mono text-[10px] uppercase tracking-[3px] mt-1"
                style={{ color: "var(--turmeric)" }}
              >
                Est. Export Co.
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="relative text-sm tracking-wide cursor-pointer transition-colors group"
                style={{ color: "rgba(246,239,222,0.85)" }}
              >
                {link.name}
                <span
                  className="absolute left-0 -bottom-1 h-[1.5px] w-0 group-hover:w-full transition-all duration-300"
                  style={{ background: "var(--turmeric)" }}
                />
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => scrollTo("#contact")}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--tomato)", color: "var(--cream)" }}
            >
              <Phone size={15} />
              Get a Quote
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden h-10 w-10 rounded-full flex items-center justify-center border"
            style={{ borderColor: "rgba(246,239,222,0.25)", color: "var(--cream)" }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            className="lg:hidden mt-2 rounded-3xl border overflow-hidden"
            style={{
              background: "rgba(18,35,24,0.96)",
              borderColor: "rgba(246,239,222,0.14)",
            }}
          >
            <ul className="flex flex-col divide-y" style={{ borderColor: "rgba(246,239,222,0.1)" }}>
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="px-6 py-4 flex items-center justify-between text-sm cursor-pointer"
                  style={{ color: "var(--cream)" }}
                >
                  {link.name}
                  <ArrowUpRight size={15} style={{ color: "var(--turmeric)" }} />
                </li>
              ))}
            </ul>
            <div className="px-6 py-5">
              <button
                onClick={() => scrollTo("#contact")}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full font-medium text-sm"
                style={{ background: "var(--tomato)", color: "var(--cream)" }}
              >
                <Phone size={15} />
                Get a Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;