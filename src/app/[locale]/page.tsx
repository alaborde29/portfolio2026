import { setRequestLocale } from "next-intl/server";
import { Hero, SectionCards } from "@/components/home";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <SectionCards />
    </>
  );
}
