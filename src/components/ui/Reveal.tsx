import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Animation class applied once the element enters the viewport */
  animation?: "fade-up" | "fade-in" | "scale-in";
  /** Delay before the animation starts (ms) */
  delay?: number;
  className?: string;
  /** Element to render as (defaults to div) */
  as?: "div" | "section" | "span" | "li";
  /** Only trigger once (default true) */
  once?: boolean;
};

/**
 * Wraps children and plays an entrance animation when they scroll into view.
 * Falls back to immediately visible if IntersectionObserver is unavailable.
 */
export const Reveal = ({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
  as = "div",
  once = true,
}: RevealProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  const Tag = as as "div";

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${className} ${
        visible ? `animate-${animation}` : "opacity-0"
      }`}
      style={visible && delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
};
