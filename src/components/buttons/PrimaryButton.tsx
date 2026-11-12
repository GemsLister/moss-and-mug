type PrimaryButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export const PrimaryButton = ({ children, className }: PrimaryButtonProps) => {
  return (
    <button className={`flex items-center gap-1 font-figtree bg-brand-darkgreen text-slate-50 p-2 ${className}`}>
      {children}
    </button>
  );
};