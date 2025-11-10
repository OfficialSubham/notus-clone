import { cn } from "@/utils/cn";

const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <div
      className={cn(
        "relative max-w-7xl mx-auto border-x  border-x-neutral-100 px-2",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Section;
