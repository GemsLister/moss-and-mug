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
    <section className="flex flex-col font-figtree ">
      <div className="pb-14 pt-16 px-4 md:py-24 md:px-8 lg:py-32 lg:px-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-1">
            <span className="bg-brand-green size-2.5 rounded-full animate-pulse"></span>
            <h3 className="text-brand-green text-md font-medium">
              YOUR NEIGHBORHOOD HAPPY PLACE
            </h3>
          </div>

          {/* Tagline */}
          <h1 className="font-bold text-brand-darkgreen text-5xl">
            A little green in your{" "}
            <span className="text-brand-green">day.</span>
          </h1>
        </div>
        <div className="mt-7">
          <p className="text-slate-700">
            Good coffee, slow mornings, and a sunny little corner to call yours.
            Come on in, we saved you a seat.
          </p>
        </div>
        <div className="mt-7 pb-9 flex flex-col gap-4 border-b border-slate-300">
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
        <div className="flex items-center gap-2 mt-8">
          <div className="flex bg-brand-green w-fit p-1 rounded-full">
            <Coffee className="size-5 text-brand-white" />
          </div>
          <div>
            <span className="text-slate-700">
              Small-batch coffee{" "}
              <span className="font-bold">with a side of green</span>
            </span>
          </div>
        </div>
      </div>
      {/* Hero Section Image */}
      <div>
        {/* Hero Image */}
        <div className="bg-brand-lightgreen">
          <img src={HeroImage} alt="Moss and Mug" className="w-full h-auto" />
          <div className="grid grid-cols-2 py-5 px-4 gap-3">
            {numberedSection.map((item) => (
              <div key={item.number} className="flex items-center gap-2">
                <span className="font-semibold text-brand-green">{item.number}</span>
                <h3 className="font-medium text-[clamp(12px,.9rem,16px)] text-brand-darkgreen">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
};
