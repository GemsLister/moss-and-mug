import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../ui/Reveal";

export const CtaSection = () => {
  return (
    <section className="bg-brand-tan font-figtree px-4 py-14 md:px-8 md:py-20 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <Reveal animation="fade-up" className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-darkgreen/70">
            Your next coffee date
          </p>
          <h2 className="mt-3 font-bold text-brand-darkgreen text-3xl leading-tight md:text-4xl lg:text-5xl">
            There&rsquo;s a cup with your name on it.
          </h2>
        </Reveal>

        <Reveal animation="fade-up" delay={200}>
          <a
            href="#visit"
            className="group inline-flex items-center gap-2 bg-brand-darkgreen px-6 py-3 font-semibold text-brand-white transition-all duration-300 hover:bg-brand-green"
          >
            Plan a little visit
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
};
