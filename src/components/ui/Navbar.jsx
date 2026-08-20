import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.jpeg";

export const DesignTokens = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');

    :root {
      --ink: #14211A;
      --forest: #1B3025;
      --forest-2: #223A2C;
      --ivory: #FFFFFF;
      --gold: #B08A3E;
      --terracotta: #B54B32;
      --sage: #7C9473;
      --line-dark: rgba(255,255,255,0.14);
      --line-light: rgba(20,33,26,0.12);
    }
    .font-display { font-family: 'Fraunces', serif; }
    .font-mono { font-family: 'IBM Plex Mono', monospace; }
    .font-body { font-family: 'Inter', sans-serif; }

    a, button { -webkit-tap-highlight-color: transparent; }
    :focus-visible { outline: 2px solid var(--gold); outline-offset: 2px; }

    @media (prefers-reduced-motion: reduce) {
      * { animation: none !important; transition: none !important; }
    }
  `}</style>
);

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Certificates", path: "/certificates" },
  { name: "Payment Terms", path: "/payment-terms" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 font-body">
      <nav
        className="transition-all duration-300 border-b"
        style={{
          background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.88)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderColor: scrolled ? "var(--line-light)" : "transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[84px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3.5 cursor-pointer">
            <div className="h-14 w-14 rounded-full overflow-hidden shrink-0 border-2 shadow-md" style={{ borderColor: "rgba(201,168,76,0.4)" }}>
              <img src={logo} alt="Dasa Exports" className="h-full w-full object-cover scale-105" />
            </div>
            <div className="leading-none">
              <h2 className="font-display font-bold text-2xl tracking-tight" style={{ color: "var(--ink)" }}>
                Dasa Exports
              </h2>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[2.8px] mt-1" style={{ color: "var(--gold)" }}>
                India — To The World
              </p>
            </div>
          </Link>

          {/* Desktop menu */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-[13.5px] font-medium tracking-wide transition-colors ${
                      isActive ? "text-[var(--gold)] font-semibold" : "text-gray-700 hover:text-[var(--gold)]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-md font-medium text-[13.5px] transition-transform hover:scale-105"
              style={{ background: "var(--ink)", color: "#FFFFFF" }}
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden h-9 w-9 flex items-center justify-center text-gray-900"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t bg-white shadow-xl" style={{ borderColor: "var(--line-light)" }}>
            <ul>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `px-6 py-4 flex items-center justify-between text-sm border-b last:border-b-0 ${
                        isActive ? "text-[var(--gold)] font-bold bg-gray-50" : "text-gray-800"
                      }`
                    }
                  >
                    {link.name}
                    <ArrowUpRight size={15} style={{ color: "var(--gold)" }} />
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="px-6 py-5">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block text-center w-full px-5 py-3 rounded-md font-medium text-sm text-white"
                style={{ background: "var(--ink)" }}
              >
                Request a Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;