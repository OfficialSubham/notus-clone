const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative max-w-7xl mx-auto border-x  border-x-neutral-100 px-2">
      {children}
    </div>
  );
};

export default Section;
