type PrimaryButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

export const PrimaryButton = ({
  children,
  className,
  href,
  onClick,
}: PrimaryButtonProps) => {
  const classes = `flex items-center gap-1 font-figtree bg-brand-darkgreen text-slate-50 p-2 ${className ?? ""}`;
  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};