import React from "react";

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-5 py-2 rounded-lg bg-neutral-800 text-white">
      {children}
    </div>
  );
};

export default Button;
