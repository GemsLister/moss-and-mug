import { PrimaryButton } from "../buttons/PrimaryButton";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="font-figtree py-16 px-4 md:py-24 md:px-8 lg:py-32 lg:px-12">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-1">
          <span className="bg-brand-green size-2.5 rounded-full animate-pulse"></span>
          <h3 className="text-brand-green text-md font-medium">
            YOUR NEIGHBORHOOD HAPPY PLACE
          </h3>
        </div>

        {/* Tagline */}
        <h1 className="font-bold text-brand-darkgreen text-5xl">
          A little green in your <span className="text-brand-green">day.</span>
        </h1>
      </div>
      <div className="mt-7">
        <p className="text-slate-700">
          Good coffee, slow mornings, and a sunny little corner to call yours.
          Come on in, we saved you a seat.
        </p>
      </div>
      <div className="mt-7 flex flex-col gap-4">
        <div>
          <PrimaryButton>
            <span className="inline-block p-1">See what's brewing</span>
            <ArrowUpRight className="size-4 inline-block" />
          </PrimaryButton>
        </div>

        <a href="#" className="text-brand-darkgreen font-medium">
          Get to know us <ArrowDown className="size-4 inline-block" />
        </a>
      </div>
    </section>
  );
};
