import type { LearningPath } from "../schema";
import { frontendPath } from "./frontend";
import { backendPath } from "./backend";
import { devopsCloudPath } from "./devops-cloud";
import { mobilePath } from "./mobile";
import { aiMlPath } from "./ai-ml";
import { cybersecurityPath } from "./cybersecurity";

/**
 * DATA FILE — Learning paths registry. Consumed by: /paths grid page,
 * /paths/[slug] pages (generateStaticParams), landing paths preview.
 * To add a path: create its file here, then push it into this array.
 */
export const learningPaths: LearningPath[] = [
  frontendPath,
  backendPath,
  devopsCloudPath,
  mobilePath,
  aiMlPath,
  cybersecurityPath,
];

export function getPathBySlug(slug: string): LearningPath | undefined {
  return learningPaths.find((p) => p.slug === slug);
}
