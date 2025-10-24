import { ReactNode } from "react";

export default function Section({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return <div id={id} className={`mx-auto w-full max-w-6xl px-4 ${className}`}>{children}</div>;
}
