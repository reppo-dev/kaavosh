import {
  BookOpen,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Globe,
  LayoutTemplate,
  MessagesSquare,
  Route,
  Server,
  Shield,
  Smartphone,
  Sparkles,
  Terminal,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/data/schema";

/**
 * Maps data-file icon names to lucide icons (keeps data files import-free).
 * Consumed by: path/interview/glossary cards.
 */
export const iconRegistry: Record<IconName, LucideIcon> = {
  "layout-template": LayoutTemplate,
  server: Server,
  cloud: Cloud,
  smartphone: Smartphone,
  "brain-circuit": BrainCircuit,
  shield: Shield,
  database: Database,
  terminal: Terminal,
  globe: Globe,
  "book-open": BookOpen,
  "messages-square": MessagesSquare,
  route: Route,
  sparkles: Sparkles,
  "code-2": Code2,
};
