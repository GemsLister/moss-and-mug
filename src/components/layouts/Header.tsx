import { Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="border border-slate-300">
      <div className="bg-brand-darkgreen text-center py-3 px-4">
        <h1 className="font-semibold text-slate-50">A GOOD DAY STARTS HERE COFFEE, BAKED BREADS, & A SUNNY SEAT</h1>
      </div>

      <div className="flex justify-between py-4 px-3">
        <h1 className="font-bold text-[clamp(1.5rem,3vw,2rem)] text-brand-darkgreen">
          moss & mug
        </h1>
        <span className="border border-slate-300 p-1 rounded-md md:hidden">
          <Menu className="text-[clamp(1rem,3vw,2rem)] text-brand-darkgreen" />
        </span>
      </div>
    </header>
  );
};
