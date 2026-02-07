import { setRequestLocale, getTranslations } from "next-intl/server";
import { getProjectsByType } from "@/data/projects";
import { ProjectGrid } from "@/components/projects";

interface MobileProjectsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: MobileProjectsPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projects.mobile" });

  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default async function MobileProjectsPage({ params }: MobileProjectsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("projects.mobile");
  const mobileProjects = getProjectsByType("mobile");

  return (
    <section className="px-4 py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <ProjectGrid projects={mobileProjects} />
      </div>
    </section>
  );
}
