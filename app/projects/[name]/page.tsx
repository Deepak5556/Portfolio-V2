import React from "react";
import ProjectClient from "./ProjectClient";
import { projects as staticProjects } from "@/lib/data";

/**
 * Generate static params for static export.
 * Includes both local metadata projects and live GitHub repositories.
 */
export async function generateStaticParams() {
  const paths: { name: string }[] = [];

  // Add local projects
  staticProjects.forEach((p) => {
    paths.push({ name: p.title.toLowerCase().replace(/\s+/g, "-") });
  });

  try {
    const res = await fetch("https://api.github.com/users/Deepak5556/repos?per_page=100", {
        next: { revalidate: 3600 }
    });
    
    if (res.ok) {
        const repos = await res.json();
        if (Array.isArray(repos)) {
            repos.forEach(repo => {
                const name = repo.name;
                if (!paths.find(p => p.name === name)) {
                    paths.push({ name });
                }
            });
        }
    }
  } catch (error) {
    console.error("Static generation fetch failed:", error);
  }

  // Final Deduplication
  const uniquePaths = Array.from(new Set(paths.map(p => p.name))).map(name => ({ name }));
  return uniquePaths;
}

export default function ProjectPage({ params }: { params: { name: string } }) {
  // Prevent dynamic routes from matching common static asset extensions
  if (params.name.match(/\.(png|jpg|jpeg|gif|svg|ico|webp)$/i)) {
    return null;
  }
  return <ProjectClient name={params.name} />;
}
