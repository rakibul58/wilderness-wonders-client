import { ReactNode } from "react";

const SectionContainer = ({ children }: { children: ReactNode }) => {
  return <div className="mt-10 md:mt-32">{children}</div>;
};

export default SectionContainer;
