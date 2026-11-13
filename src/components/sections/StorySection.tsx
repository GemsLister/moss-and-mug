import InteriorImage from "../../assets/moss-and-mug-interior.jpg";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../ui/Reveal";

export const StorySection = () => {
  return (
    <section
      id="story"
      className="bg-brand-white font-figtree"
    >
      <div className="flex flex-col lg:flex-row lg:items-stretch">
        {/* Image */}
        <Reveal
          animation="scale-in"
          className="lg:w-1/2 overflow-hidden"
        >
          <img
            src={InteriorImage}
            alt="The Moss & Mug café interior with plants and warm lighting"
            className="h-72 w-full object-cover lg:h-full"
          />
        </Reveal>

        {/* Story panel */}
        <div className="lg:w-1/2 bg-brand-darkgreen px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-32 flex items-center">
          <div className="max-w-lg text-brand-white">
            <Reveal animation="fade-up">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-green">
                A place at our table
              </p>
            </Reveal>

            <Reveal animation="fade-up" delay={100}>
              <h2 className="mt-4 font-bold text-4xl leading-tight md:text-5xl">
                More than coffee.
                <br />
                A little belonging.
              </h2>
            </Reveal>

            <Reveal animation="fade-up" delay={200}>
              <p className="mt-6 text-brand-white/80 leading-relaxed">
                We opened Moss &amp; Mug with one simple thought: the
                neighborhood needs a place to slow down. So we make the coffee
                with care, keep the pastries coming, and save you the sunny seat
                by the window.
              </p>
            </Reveal>

            <Reveal animation="fade-up" delay={300}>
              <p className="mt-5 text-brand-white/80 leading-relaxed">
                Come in after a walk, bring your book, stay for one more cup.
                We&rsquo;re really glad you&rsquo;re here.
              </p>
            </Reveal>

            <Reveal animation="fade-up" delay={400}>
              <a
                href="#about"
                className="group mt-8 inline-flex items-center gap-2 font-semibold text-brand-white underline decoration-brand-white/40 decoration-2 underline-offset-8 transition-colors hover:text-brand-green"
              >
                A little more about us
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
