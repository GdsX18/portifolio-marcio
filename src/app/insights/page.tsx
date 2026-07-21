import type { Metadata } from "next";
import HeroInsights from "@/sections/insights/HeroInsights";
import BlogEmptyState from "@/sections/insights/BlogEmptyState";

export const metadata: Metadata = {
  title: "Insights | Vilu",
  description: "Fique por dentro das nossas atualizações. Trazemos insights rápidos, precisos e eficazes sobre o mercado de tecnologia e gestão de produto.",
};

export default function InsightsPage() {
  return (
    <>
      <HeroInsights />
      <BlogEmptyState />
    </>
  );
}
