"use client";

import PageTransition from "@/components/Transations/PageTransation";
import StairTransition from "@/components/Transations/StairTransaction";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StairTransition />
      <PageTransition>
        <section className="mt-11">{children}</section>
      </PageTransition>
    </>
  );
}