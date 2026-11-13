type PrimaryButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
};

export const PrimaryButton = ({ children, className, href }: PrimaryButtonProps) => {
  const classes = `flex items-center gap-1 font-figtree bg-brand-darkgreen text-slate-50 p-2 ${className ?? ""}`;
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return <button className={classes}>{children}</button>;
};