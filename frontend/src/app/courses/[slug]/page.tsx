import { notFound } from "next/navigation";
import { coursesData } from "@/data/coursesData";
import { courseSlugMap } from "@/lib/constants/courseSlugs";
import { CoursePageClient } from "./CoursePageClient";

// Generate static params for all 18 friendly routes at build time
export function generateStaticParams() {
  return Object.keys(courseSlugMap).map((slug) => ({
    slug,
  }));
}

// Generate dynamic metadata for search engines
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dataKey = courseSlugMap[slug] || slug;
  const course = coursesData[dataKey];
  if (!course) return {};
  return {
    title: `${course.title} | Versuzo`,
    description: course.tagline,
  };
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dataKey = courseSlugMap[slug] || slug;
  const course = coursesData[dataKey];

  if (!course) {
    notFound();
  }

  return <CoursePageClient course={course} />;
}
