import { AboutExperience } from "@/components/about/about-experience";
import { PageHeader } from "@/components/shared/page-header";
import { ABOUT_HERO } from "@/lib/about-content";

export const metadata = {
  title: "About the Senate",
  description: ABOUT_HERO.description,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title={ABOUT_HERO.title} description={ABOUT_HERO.description} />
      <AboutExperience />
    </>
  );
}
