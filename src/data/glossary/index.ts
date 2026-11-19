import type { GlossaryCategory, GlossaryTerm } from "../schema";
import { glossaryTerms } from "./terms";
import { glossaryCategories } from "./categories";

/**
 * DATA FILE — Glossary registry. Consumed by: /glossary page.
 * To add a term: append to terms.ts — counts update automatically.
 */
export { glossaryTerms, glossaryCategories };

export function getGlossaryCategoriesWithCounts(): {
  category: GlossaryCategory;
  count: number;
}[] {
  return glossaryCategories.map((category) => ({
    category,
    count: glossaryTerms.filter((t: GlossaryTerm) => t.category === category.id)
      .length,
  }));
}
