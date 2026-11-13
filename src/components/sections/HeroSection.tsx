import { PrimaryButton } from "../buttons/PrimaryButton";
import HeroImage from "../../assets/moss-and-mug-hero.jpg";
import { ArrowUpRight, ArrowDown, Coffee } from "lucide-react";

const numberedSection = [
  {
    number: "01",
    title: "Really good coffee",
  },
  {
    number: "02",
    title: "Baked here each day",
  },
  {
    number: "03",
    title: "Plant-powered picks",
  },
  {
    number: "04",
    title: "Always room for you",
  },
];

export const HeroSection = () => {
  return (
    <section id="hero" className="flex flex-col font-figtree scroll-mt-16">
      {/* Full-bleed image with floating text card */}
      <div className="relative">
        {/* Background image */}
        <div className="h-[320px] sm:h-[420px] md:h-[640px] lg:h-[720px] w-full overflow-hidden">
          <img
            src={HeroImage}
            alt="Moss and Mug café"
            className="h-full w-full object-cover animate-fade-in"
          />
        </div>

        {/* Floating text card */}
        {/* Mobile: static below image. Tablet/desktop: absolute overlay on the left */}
        <div className="md:absolute md:inset-0 md:flex md:items-center md:px-8 lg:px-16">
          <div className="mx-4 -mt-10 md:mx-0 md:mt-0 max-w-md lg:max-w-lg rounded-2xl bg-brand-white p-6 sm:p-8 md:bg-brand-white/95 md:backdrop-blur-md md:shadow-2xl md:p-10 lg:p-12 animate-fade-up">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="bg-brand-green size-2.5 rounded-full animate-pulse" />
              <h3 className="text-brand-green text-xs font-medium tracking-wide">
                YOUR NEIGHBORHOOD HAPPY PLACE
              </h3>
            </div>

            {/* Tagline */}
            <h1 className="mt-4 font-bold text-brand-darkgreen text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-[1.05]">
              A little green in your{" "}
              <span className="text-brand-green">day.</span>
            </h1>

            <p className="mt-5 text-slate-700 text-base lg:text-lg leading-relaxed">
              Good coffee, slow mornings, and a sunny little corner to call
              yours. Come on in, we saved you a seat.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
              <div>
                <PrimaryButton href="#menu">
                  <span className="inline-block p-1">See what's brewing</span>
                  <ArrowUpRight className="size-4 inline-block" />
                </PrimaryButton>
              </div>
              <a href="#story" className="text-brand-darkgreen font-medium transition-colors hover:text-brand-green">
                Get to know us <ArrowDown className="size-4 inline-block" />
              </a>
            </div>

            <div className="mt-7 flex items-center gap-3 border-t border-slate-200 pt-5">
              <div className="flex bg-brand-green w-fit p-1.5 rounded-full">
                <Coffee className="size-5 text-brand-white" />
              </div>
              <span className="text-slate-700 text-sm sm:text-base">
                Small-batch coffee.{" "}
                <span className="font-bold">Big-time cozy.</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Feature bar 01–04 (tablet/desktop) */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 bg-brand-lightgreen">
        {numberedSection.map((item, index) => (
          <div
            key={item.number}
            className="relative flex items-center gap-3 py-6 px-8 lg:px-12 animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {index !== numberedSection.length - 1 && (
              <span className="absolute right-0 top-1/2 h-8 w-px -translate-y-1/2 bg-slate-300" />
            )}
            <span className="font-semibold text-brand-green text-lg">
              {item.number}
            </span>
            <h3 className="font-medium text-brand-darkgreen text-base">
              {item.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Mobile feature grid */}
      <div className="md:hidden bg-brand-lightgreen">
        <div className="grid grid-cols-2 py-5 px-4 gap-3">
          {numberedSection.map((item, index) => (
            <div
              key={item.number}
              className="flex items-center gap-2 animate-fade-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <span className="font-semibold text-brand-green">{item.number}</span>
              <h3 className="font-medium text-[clamp(12px,.9rem,16px)] text-brand-darkgreen">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
