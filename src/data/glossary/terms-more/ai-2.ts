import type { GlossaryTerm } from "../../schema";

/** DATA FILE — Glossary terms (ai, extended). Merged into terms.ts → /glossary page. */
export const moreAiTerms2: GlossaryTerm[] = [
  {
    term: "Transformer",
    fa: "ترنسفورمر",
    category: "ai",
    definition: {
      fa: "ترنسفورمر معماری زیربنای LLMهای مدرن است: به‌جای پردازش کلمه‌به‌کلمه، همه‌ی توکن‌ها را با مکانیزم attention به‌طور موازی پردازش می‌کند و روابط دور در متن را می‌گیرد. انقلابی که GPTها از آن ساخته شدند.",
      en: "The Transformer is the architecture under modern LLMs: instead of word-by-word processing, it handles all tokens in parallel with attention, capturing long-range relationships — the breakthrough behind GPT.",
    },
    analogy: {
      fa: "فرق دارد بین خواندن جمله کلمه‌به‌کلمه با مداد و خواندن کل جمله با نگاهی که هر کلمه را هم‌زمان با همه‌ی کلمات دیگر مقایسه می‌کند — دومی ترنسفورمر است.",
      en: "The difference between reading a sentence word by word with a pencil, and one glance that compares every word against every other at once — the latter is a Transformer.",
    },
    related: ["Attention", "Neural Network", "LLM"],
  },
  {
    term: "Attention",
    fa: "مکانیزم توجه",
    category: "ai",
    definition: {
      fa: "attention به مدل می‌گوید موقع پردازش هر توکن، به کدام توکن‌های دیگر و با چه وزنی نگاه کند؛ «آن» در جمله‌ی طولانی به کدام اسم برمی‌گردد؟ ستون فقرات درک متن در ترنسفورمر است.",
      en: "Attention tells the model which other tokens to look at, and how strongly, while processing each one — which noun does 'it' refer back to? It's the backbone of Transformer understanding.",
    },
    analogy: {
      fa: "مثل خواندن نامه رسمی با ماژیک هایلایت: برای هر کلمه، کلمات مهم مرتبطش را هایلایت می‌کنی؛ بعضی کلمات خیر، بعضی با نور شدید — همان وزن‌های attention.",
      en: "Like reading a letter with a highlighter: for each word you highlight the related ones — some barely, some brightly. Those brightness levels are attention weights.",
    },
    related: ["Transformer", "LLM", "Embedding"],
  },
  {
    term: "Mixture of Experts",
    fa: "ترکیب متخصص‌ها",
    category: "ai",
    definition: {
      fa: "MoE یعنی مدل غول از ده‌ها «متخصص» ساخته شده و برای هر توکن فقط چند متخصص مرتبط فعال می‌شوند؛ پارامترهای کلان ولی هزینه‌ی محاسبه‌ی کنترل‌شده — راز مدل‌های بزرگ امروزی.",
      en: "MoE builds giant models from dozens of 'experts', activating only a few relevant ones per token: massive parameters with controlled compute — the trick behind today's largest models.",
    },
    analogy: {
      fa: "مثل بیمارستان با ۵۰ متخصص که برای هر بیمار فقط دو سه پزشکِ مرتبط را صدا می‌زند؛ نیروی کلان دارید ولی هر معاینه کوچک و سریع می‌ماند.",
      en: "Like a hospital with fifty specialists where each patient only summons two or three relevant doctors: huge staff, yet every consultation stays small and fast.",
    },
    related: ["Transformer", "LLM", "Inference"],
  },
  {
    term: "RLHF",
    fa: "یادگیری تقویتی از بازخورد انسانی",
    category: "ai",
    definition: {
      fa: "RLHF مرحله‌ای است که مدل پایه را «مودبانه و مفید» می‌کند: انسان‌ها جواب‌ها را رتبه می‌دهند، یک مدل پاداش از رتبه‌ها ساخته و رفتار مدل با آن به‌سمت جواب‌های ترجیحی هدایت می‌شود.",
      en: "RLHF is the stage that makes a base model helpful and safe: humans rank answers, a reward model learns those rankings, and the model is steered toward preferred answers.",
    },
    analogy: {
      fa: "مثل مربی‌گری یک نوآموز با تماشای هزار بازی: مربی جواب‌های خوب و بد را رتبه می‌زند و بازیکن یاد می‌گیرد به‌سمت سبکِ پسندیده بازی کند.",
      en: "Like coaching a rookie by reviewing a thousand games: the coach ranks good and bad moves, and the player learns to gravitate toward the preferred style.",
    },
    related: ["LLM", "Fine-tuning", "Hallucination"],
  },
  {
    term: "Inference",
    fa: "استنتاج",
    category: "ai",
    definition: {
      fa: "استنتاج لحظه‌ی استفاده از مدل آموزش‌دیده است: پرامپت می‌گیری، توکن‌به‌توکن جواب تولید می‌کند. هزینه‌ی هر درخواست API و تاخیر پاسخ همین‌جا تعیین می‌شود؛ بهینه‌سازی‌اش صنعت خودش است.",
      en: "Inference is the moment a trained model is used: it takes a prompt and generates tokens one by one. Every API call's cost and latency is decided here — optimizing it is an industry of its own.",
    },
    analogy: {
      fa: "فرق دارد بین ساختن ماشین (آموزش، گران و یک‌بار) و راندن آن هر روز (استنتاج، سریع و هر بار هزینه دارد) — تعمیر اساسی هم یعنی fine-tuning.",
      en: "Building the car vs driving it daily: training is the expensive one-time build; every trip is inference with its own cost and speed; a major overhaul is fine-tuning.",
    },
    related: ["Training vs Inference", "LLM", "Token"],
  },
  {
    term: "Tokenizer",
    fa: "توکن‌ساز",
    category: "ai",
    definition: {
      fa: "توکن‌ساز متن خام را به توکن‌های استاندارد می‌شکند: «unbelievable» شاید به سه تکه بشکند. هر مدل توکنایزر خودش را دارد و همین تعیین می‌کند یک پاراگراف چند توکن حساب می‌شود و چه هزینه‌ای دارد.",
      en: "A tokenizer splits raw text into standard tokens: 'unbelievable' may become three pieces. Every model has its own tokenizer, which decides how many tokens your paragraph costs.",
    },
    analogy: {
      fa: "مثل آشپز که مواد را به اندازه‌های استاندارد برش می‌زند قبل از پخت: هر رستوران برش خودش را دارد و حساب مواد هم بر اساس همان برش‌هاست.",
      en: "Like a chef cutting ingredients into standard sizes before cooking: each kitchen has its own cuts, and ingredient accounting follows those cuts.",
    },
    related: ["Token", "LLM", "Context Window"],
  },
];
