import MenuImage from "../../assets/moss-and-mug-menu.jpg";
import { Reveal } from "../ui/Reveal";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  favorite?: boolean;
};

const coffeeBar: MenuItem[] = [
  {
    name: "Honey oat latte",
    description: "Double espresso, oat milk, local wildflower honey",
    price: "$5.50",
    favorite: true,
  },
  {
    name: "Maple cold brew",
    description: "Slow-steeped overnight, finished with maple cream",
    price: "$5.75",
  },
  {
    name: "Classic flat white",
    description: "Velvety microfoam over our seasonal espresso",
    price: "$4.75",
  },
  {
    name: "Garden matcha",
    description: "Stone-ground matcha, whisked by hand, your choice of milk",
    price: "$5.50",
  },
];

const kitchen: MenuItem[] = [
  {
    name: "Almond morning bun",
    description: "Buttery, flaky, baked fresh every morning",
    price: "$4.50",
  },
  {
    name: "Avocado toast",
    description: "Seeded sourdough, lemon, chili crunch",
    price: "$9.00",
  },
  {
    name: "Olive oil loaf cake",
    description: "Citrus glaze, because you deserve cake",
    price: "$4.75",
  },
];

const MenuList = ({ items }: { items: MenuItem[] }) => (
  <ul className="divide-y divide-slate-300">
    {items.map((item, i) => (
      <Reveal as="li" key={item.name} animation="fade-up" delay={i * 80}>
        <div className="py-5">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <div className="flex items-baseline gap-3">
              <h3 className="font-semibold text-brand-darkgreen text-xl">
                {item.name}
              </h3>
              {item.favorite && (
                <span className="rounded-sm bg-brand-yellow/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-darkgreen">
                  House favorite
                </span>
              )}
            </div>
            <span className="font-semibold text-brand-darkgreen text-lg">
              {item.price}
            </span>
          </div>
          <p className="mt-1 text-slate-600">{item.description}</p>
        </div>
      </Reveal>
    ))}
  </ul>
);

export const MenuSection = () => {
  return (
    <section
      id="menu"
      className="bg-brand-white font-figtree px-4 py-16 md:px-8 md:py-24 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: intro + image */}
        <div className="flex flex-col gap-6">
          <Reveal animation="fade-up">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-green">
              Good things, made fresh
            </p>
          </Reveal>
          <Reveal animation="fade-up" delay={100}>
            <h2 className="font-bold text-brand-darkgreen text-4xl leading-tight md:text-5xl">
              Your usual, or something new?
            </h2>
          </Reveal>
          <Reveal animation="fade-up" delay={200}>
            <p className="max-w-md text-slate-700 text-base md:text-lg leading-relaxed">
              A few things we love to make. Everything&rsquo;s made with care,
              and there&rsquo;s always something fresh behind the counter.
            </p>
          </Reveal>

          <Reveal animation="scale-in" delay={300}>
            <div className="mt-2 overflow-hidden">
              <img
                src={MenuImage}
                alt="Matcha latte and almond croissant on a marble table"
                className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </Reveal>

          <Reveal animation="fade-up" delay={400}>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-darkgreen/70">
              Good food. Good mood. No rush.
            </p>
          </Reveal>
        </div>

        {/* Right: menu lists */}
        <div className="flex flex-col">
          <Reveal animation="fade-up">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-green">
              The coffee bar
            </p>
          </Reveal>
          <Reveal animation="fade-up" delay={100}>
            <div className="mt-2 flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-bold text-brand-darkgreen text-2xl md:text-3xl">
                Sip something lovely
              </h3>
              <span className="text-sm text-slate-500">
                Made fresh, just for you
              </span>
            </div>
          </Reveal>
          <Reveal animation="fade-in" delay={200}>
            <div className="mt-4 h-px w-full bg-brand-darkgreen" />
          </Reveal>
          <MenuList items={coffeeBar} />

          <div className="mt-10">
            <Reveal animation="fade-up">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-green">
                A little something to eat
              </p>
            </Reveal>
            <Reveal animation="fade-up" delay={100}>
              <div className="mt-2 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-bold text-brand-darkgreen text-2xl md:text-3xl">
                  Fresh from our kitchen
                </h3>
                <span className="text-sm text-slate-500">
                  The pastry case changes daily
                </span>
              </div>
            </Reveal>
            <Reveal animation="fade-in" delay={200}>
              <div className="mt-4 h-px w-full bg-brand-darkgreen" />
            </Reveal>
            <MenuList items={kitchen} />
          </div>

          <Reveal animation="fade-up" delay={200}>
            <p className="mt-8 text-sm text-slate-500">
              Our menu changes with the seasons. Just ask us about dairy-free,
              gluten-free, or extra-hungry options.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
