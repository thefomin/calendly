import { Header } from "@/shared/ui";
import { ReactNode } from "react";

export function LayoutRoot({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen w-screen place-items-center">
        {children}
      </main>
    </>
  );
}
