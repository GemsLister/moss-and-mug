import { MapPin, Clock, ArrowUp } from "lucide-react";
import MossAndMugLogo from "../../assets/moss-mug-logo.png";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const Footer = () => {
  return (
    <footer className="bg-brand-white font-figtree px-4 pt-16 pb-8 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="flex items-center gap-3">
              <img
                src={MossAndMugLogo}
                alt="moss-and-mug-logo"
                className="size-10 rounded-full"
              />
              <h2 className="font-bold text-2xl text-brand-darkgreen">
                moss &amp; mug
              </h2>
            </span>
            <p className="mt-4 max-w-xs text-slate-600 leading-relaxed">
              A neighborhood café for good coffee, small joys, and one more
              chapter.
            </p>
          </div>

          {/* Say hello */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-darkgreen">
              Say hello
            </h3>
            <div className="mt-4 space-y-3">
              <p className="flex items-start gap-3 text-slate-700">
                <MapPin className="mt-0.5 size-5 shrink-0 text-brand-green" />
                <span>Sayre Highway, Malaybalay City</span>
              </p>
              <a
                href="mailto:hello@mossandmug.example"
                className="block text-slate-700 transition-colors hover:text-brand-green"
              >
                mossmug@mossandmug.example
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-darkgreen">
              When the door&rsquo;s open
            </h3>
            <div className="mt-4 space-y-3">
              <p className="flex items-start gap-3 text-slate-700">
                <Clock className="mt-0.5 size-5 shrink-0 text-brand-green" />
                <span>Every day, 7:30 am – 4:00 pm</span>
              </p>
              <p className="text-slate-600">
                A good morning starts whenever you get here.
              </p>
            </div>
          </div>

          {/* Reminder */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-darkgreen">
              A friendly reminder
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Your oat latte is better in person. The sunny seat is first come,
              first loved.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-slate-300 pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Moss &amp; Mug Caf&eacute;. Made
            with a little extra love.
          </p>
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-darkgreen transition-colors hover:text-brand-green"
          >
            Back to the top
            <ArrowUp className="size-4 transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
};
