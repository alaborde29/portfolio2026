import { setRequestLocale, getTranslations } from "next-intl/server";
import { ProfileSection } from "@/components/about";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: AboutPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <section className="px-4 py-16">
      <div className="container mx-auto max-w-6xl">
        <ProfileSection />
      </div>
    </section>
  );
}
