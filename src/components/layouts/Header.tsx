import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { PrimaryButton } from "../buttons/PrimaryButton";
import MossAndMugLogo from "../../assets/moss-mug-logo.png";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navs = [
    {
      name: "The Menu",
      href: "/",
    },
    {
      name: "Our little story",
      href: "/about",
    },
    {
      name: "Come by",
      href: "/contact",
    },
  ];

  // Lock body scroll when the menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="border border-slate-300 font-figtree">
      <div className="bg-brand-darkgreen text-center py-3 px-4">
        <h1 className="flex justify-center gap-2 font-semibold text-slate-50">
          A GOOD DAY STARTS HERE
          COFFEE, BAKED BREADS, & A SUNNY SEAT
        </h1>
      </div>

      <div className="flex justify-between py-4 px-3">
        <a href="/" className="flex gap-2 items-center">
          <img
            src={MossAndMugLogo}
            alt="moss-and-mug-logo"
            className="size-10 md:size-9 rounded-full"
          />
          <h1 className="font-bold text-[clamp(25px,0.3vw,27.5px)] text-brand-darkgreen">
            moss & mug
          </h1>
        </a>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          className="flex items-center border border-slate-300 p-1 rounded-md md:hidden transition-colors hover:bg-brand-lightgreen"
        >
          <Menu className="text-[clamp(1rem,3vw,2rem)] text-brand-darkgreen" />
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-3 items-center">
          {navs.map((nav) => (
            <a
              key={nav.href}
              href={nav.href}
              className="text-brand-darkgreen text-[clamp(14px,.9vw,16rem)] font-semibold transition-colors hover:text-brand-green"
            >
              {nav.name}
            </a>
          ))}
        </nav>
        <PrimaryButton className="hidden text-[clamp(14px,.9vw,16rem)] md:flex transition-transform hover:scale-105">
          Find your favorite
          <ArrowUpRight className="text-[clamp(14px,.9vw,16rem)] text-slate-50" />
        </PrimaryButton>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-50 bg-brand-white transition-all duration-500 ease-out md:hidden ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        {/* Header of the overlay */}
        <div className="flex justify-between items-center py-4 px-3 border-b border-slate-200">
          <a href="/" className="flex gap-2 items-center">
            <img
              src={MossAndMugLogo}
              alt="moss-and-mug-logo"
              className="size-10 rounded-full"
            />
            <h1 className="font-bold text-2xl text-brand-darkgreen">
              moss & mug
            </h1>
          </a>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className={`border-2 border-brand-darkgreen rounded-xl p-2 text-brand-darkgreen transition-all duration-300 hover:bg-brand-darkgreen hover:text-brand-white ${
              isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
            }`}
          >
            <X className="size-6" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-4">
          {navs.map((nav, index) => (
            <a
              key={nav.href}
              href={nav.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between py-7 border-b border-slate-200 text-3xl font-bold text-brand-darkgreen transition-all duration-500 hover:text-brand-green ${
                isOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-6"
              }`}
              style={{
                transitionDelay: isOpen ? `${index * 100 + 150}ms` : "0ms",
              }}
            >
              {nav.name}
              <ArrowUpRight className="size-6 text-brand-green" />
            </a>
          ))}
        </nav>

        {/* CTA at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-200">
          <PrimaryButton
            className={`w-full justify-center text-base transition-all duration-500 ${
              isOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Find your favorite
            <ArrowUpRight className="text-slate-50" />
          </PrimaryButton>
        </div>
      </div>
    </header>
  );
};
