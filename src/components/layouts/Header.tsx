import { Menu, ArrowUpRight } from "lucide-react";
import { PrimaryButton } from "../buttons/PrimaryButton";
import MossAndMugLogo from "../../assets/moss-mug-logo.png";

export const Header = () => {
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

  return (
    <header className="border border-slate-300 font-figtree">
      <div className="bg-brand-darkgreen text-center py-3 px-4">
        <h1 className="flex justify-center gap-2 font-semibold text-slate-50">
          A GOOD DAY STARTS HERE
          COFFEE, BAKED BREADS, & A SUNNY SEAT
        </h1>
      </div>

      <div className="flex justify-between py-4 px-3">
        <span className="flex gap-2">
          <img
            src={MossAndMugLogo}
            alt="moss-and-mug-logo"
            className="size-10 md:size-9 rounded-full"
          />
          <h1 className="font-bold text-[clamp(25px,0.3vw,27.5px)] text-brand-darkgreen">
            moss & mug
          </h1>
        </span>

        {/* Shows on mobile devices */}
        <span className="border border-slate-300 p-1 rounded-md md:hidden">
          <Menu className="text-[clamp(1rem,3vw,2rem)] text-brand-darkgreen" />
        </span>
        {/* For tablet and desktop devices */}
        <nav className="hidden md:flex gap-3 items-center">
          {navs.map((nav) => (
            <a
              key={nav.href}
              href={nav.href}
              className="text-brand-darkgreen text-[clamp(14px,.9vw,16rem)] font-semibold"
            >
              {nav.name}
            </a>
          ))}
        </nav>
        <PrimaryButton className="hidden text-[clamp(14px,.9vw,16rem)] md:flex">
          Find your favorite
          <ArrowUpRight className="text-[clamp(14px,.9vw,16rem)] text-slate-50" />
        </PrimaryButton>
      </div>
    </header>
  );
};
