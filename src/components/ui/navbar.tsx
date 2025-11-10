import { Button } from "@/components/index";

const Navbar = () => {
  const links = ["Pricing", " About", "Careers", "Blog"];

  return (
    <div className="w-full border-b border-b-neutral-100 top-0 relative">
      <div className="h-20 flex items-center justify-between max-w-7xl mx-auto px-2">
        <div className="font-bold text-2xl">LOGO</div>
        <div className="flex gap-6">
          {links.map((li) => {
            return (
              <a
                href="#"
                className="text-neutral-500 cursor-pointer hover:text-neutral-700 transition-colors duration-300"
                key={li}
              >
                {li}
              </a>
            );
          })}
        </div>

        <div className="flex gap-2 items-center">
          <div className="size-4 bg-black rounded-full"></div>
          <Button>Start Building</Button>
        </div>
      </div>
      <div className="h-px bg-amber-300 absolute "></div>
    </div>
  );
};

export default Navbar;
