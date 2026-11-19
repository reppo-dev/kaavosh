"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DifficultyBadge } from "@/components/ui/Badge";
import { CodeBlock } from "@/components/ui/CodeBlock";

/**
 * INTERVIEW TEASER — a live mock Q&A that flips open on scroll,
 * showing the 30-second answer and the first breakdown step.
 * Consumed by: landing page.
 */
export function InterviewTeaser() {
  const t = useTranslations("landing.interview");
  const c = useTranslations("common");
  const d = useTranslations("difficulty");
  const locale = useLocale();
  const Arrow = locale === "fa" ? ArrowLeft : ArrowRight;

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-14 grid items-center gap-8 lg:grid-cols-2">
          {/* mock question card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6"
          >
            <div className="flex flex-wrap items-center gap-2">
              <DifficultyBadge difficulty="mid" label={d("mid")} />
              <span className="rounded-full bg-white/[0.06] px-2.5 py-1 font-mono text-xs text-white/60 ring-1 ring-white/10">
                react
              </span>
              <span className="rounded-full bg-white/[0.06] px-2.5 py-1 font-mono text-xs text-white/60 ring-1 ring-white/10">
                rendering
              </span>
            </div>

            <h3 className="mt-4 text-lg font-bold sm:text-xl">
              {locale === "fa"
                ? "«ری‌اکت چطور تصمیم می‌گیرد کدام بخش صفحه را دوباره بکشد؟»"
                : "'How does React decide which parts of the page to redraw?'"}
            </h3>

            <div className="mt-4 rounded-xl border border-indigo-500/25 bg-indigo-500/[0.08] p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                {c("quickAnswer")}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-white/75">
                {locale === "fa"
                  ? "ری‌اکت دو درخت می‌سازد: یکی قبل از تغییر، یکی بعد از تغییر. آن‌ها را گره‌به‌گره مقایسه می‌کند و فقط جاهایی که واقعاً فرق کرده را دوباره می‌کشد."
                  : "React builds two trees: one before the change, one after. It compares them node by node and redraws only the spots that actually differ."}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/50">
                {c("stepByStep")}
                <motion.span
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                >
                  <ChevronDown className="size-3.5" />
                </motion.span>
              </p>
              <ol className="mt-2.5 space-y-2">
                {[
                  locale === "fa"
                    ? "درخت DOM را مثل شجره‌نامه خانوادگی تصور کن — هر گره یک عضو."
                    : "Picture the DOM tree as a family tree — every node is a member.",
                  locale === "fa"
                    ? "وقتی state عوض می‌شود، ری‌اکت نسخه‌ی جدید درخت را می‌سازد."
                    : "When state changes, React builds the new version of the tree.",
                  locale === "fa"
                    ? "دو نسخه را خط‌به‌خط مقایسه می‌کند (مثل دو شجره‌نامه کنار هم)."
                    : "It compares both versions line by line (like two trees side by side).",
                  locale === "fa"
                    ? "فقط گره‌های متفاوت دوباره رسم می‌شوند — بقیه دست‌نخورده می‌مانند."
                    : "Only differing nodes get redrawn — everything else stays untouched.",
                ].map((step, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.18, duration: 0.5 }}
                    className="flex items-start gap-2.5 text-sm text-white/70"
                  >
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-white/10 font-mono text-[10px] text-white/60">
                      {locale === "fa" ? ["۱", "۲", "۳", "۴"][i] : i + 1}
                    </span>
                    {step}
                  </motion.li>
                ))}
              </ol>
            </div>
          </motion.div>

          {/* code sample side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            <CodeBlock
              language="jsx"
              caption={
                locale === "fa"
                  ? "هر بار دکمه را بزنی فقط <Count/> دوباره رسم می‌شود."
                  : "Every click redraws only <Count/>."
              }
              code={`function Count() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{n}</button>;
}

function App() {
  return (
    <header>
      <h1>My page</h1>   {/* never re-renders */}
      <Count />          {/* redraws on click */}
    </header>
  );
}`}
            />
            <Link
              href="/interview"
              className="group inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-5 py-2.5 text-sm font-bold text-white/85 ring-1 ring-white/15 transition hover:bg-white/10"
            >
              {t("cta")}
              <Arrow className="size-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
