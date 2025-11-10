import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-5xl relative mx-auto min-h-screen">{children}</div>
  );
};

export default Container;
