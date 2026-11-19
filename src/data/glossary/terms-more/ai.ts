import type { GlossaryTerm } from "../../schema";

/** DATA FILE — Glossary terms (ai, extended). Merged into terms.ts → /glossary page. */
export const moreAiTerms: GlossaryTerm[] = [
  {
    term: "Neural Network",
    fa: "شبکه عصبی",
    category: "ai",
    definition: {
      fa: "شبکه عصبی لایه‌هایی از واحد‌های محاسباتی ساده است که با وزن‌های قابل‌آموزش به هم وصل‌اند: داده از لایه‌ای به لایه‌ی بعد می‌رود و وزن‌ها طوری تنظیم می‌شوند که خروجی درست شود.",
      en: "A neural network is layers of simple computational units connected by trainable weights: data flows layer to layer, and the weights adjust until the output is right.",
    },
    analogy: {
      fa: "مثل زنجیره‌ای از کارگران روی خط مونتاژ: هر ایستگاه فقط یک کار ساده انجام می‌دهد و نتیجه را به بعدی می‌دهد؛ با تمرین، هر ایستگاه ظرافت کارش را تنظیم می‌کند تا محصول نهایی درست شود.",
      en: "Like an assembly line of workers: each station performs one simple step and passes results along; with practice, every station fine-tunes its task until the final product is right.",
    },
    related: ["LLM", "Training vs Inference", "Embedding"],
  },
  {
    term: "Token",
    fa: "توکن",
    category: "ai",
    definition: {
      fa: "در دنیای LLM، توکن واحدِ متن است: یک کلمه، بخشی از کلمه یا علائم. مدل با توکن‌ها می‌خواند و می‌نویسد و هزینه و محدودیت طول هم بر اساس توکن شمرده می‌شود، نه کلمه.",
      en: "In the LLM world, a token is the unit of text: a word, part of a word, or punctuation. Models read and write in tokens, and both pricing and length limits are counted in tokens, not words.",
    },
    analogy: {
      fa: "مثل تکه‌های لگو برای متن: جمله به تکه‌های استاندارد شکسته می‌شود؛ کارت سازنده با هر تکه حساب می‌کند و جعبه‌ی ساخت هم ظرفیت تکه‌ای مشخص دارد.",
      en: "Like Lego bricks for text: sentences break into standard pieces; the builder charges per piece, and the build box itself has a piece capacity.",
    },
    related: ["LLM", "Context Window", "Temperature"],
  },
  {
    term: "Context Window",
    fa: "پنجره‌ی متن",
    category: "ai",
    definition: {
      fa: "پنجره‌ی متن حداکثر توکنی است که مدل در یک لحظه می‌تواند ببیند: پرامپت شما + تاریخچه + خروجی همه در همین سقف جای می‌گیرند. بیرونِ پنجره برای مدل وجود ندارد — فراموش می‌شود.",
      en: "The context window is the maximum number of tokens a model can see at once: your prompt, the conversation history and the output all share this ceiling. Outside the window, the model has no memory of it.",
    },
    analogy: {
      fa: "میز کار شما که فقط به اندازه‌ی سطحش جا دارد: برگه‌های قدیمی برای جا شدن برگه‌ی جدید کنار گذاشته می‌شوند؛ مدل همان چیزی را می‌بیند که الان روی میز است.",
      en: "Like your desk, which only fits its own surface: old papers get pushed aside to make room for new ones — the model only sees what's currently on the desk.",
    },
    related: ["Token", "LLM", "RAG"],
  },
  {
    term: "Temperature",
    fa: "دما",
    category: "ai",
    definition: {
      fa: "دما پیچِ تصادفی بودن خروجی مدل است: نزدیک صفر یعنی همیشه محتمل‌ترین کلمه (خروجی ثابت و قابل‌اعتماد برای کارهای دقیق)؛ بالاتر یعنی تنوع و خلاقیت، همراه ریسک بی‌ثباتی.",
      en: "Temperature is the randomness dial for model output: near zero means always the most likely word (stable, dependable output for precise tasks); higher means variety and creativity, with instability risk.",
    },
    analogy: {
      fa: "مثل پیچ صندلی قهوه‌ساز: دمای صفر یعنی هر بار دقیقاً همان یک قهوه‌ی استاندارد؛ دمای بالا یعنی هر بار ترکیبی متفاوت — گاهی جذاب، گاهی نامفهوم.",
      en: "Like a coffee machine's dial: at zero, the exact same standard coffee every time; at high settings, a different blend each round — sometimes delightful, sometimes confusing.",
    },
    related: ["Token", "Prompt", "LLM"],
  },
  {
    term: "Training vs Inference",
    fa: "آموزش در برابر استنتاج",
    category: "ai",
    definition: {
      fa: "آموزش یعنی ساختن توانایی مدل با میلیون‌ها مثال (گران و طولانی)؛ استنتاج یعنی استفاده‌ی روزمره از همان مدل آماده (سریع و ارزان). تغییر رفتار اساسی فقط با آموزش دوباره ممکن است.",
      en: "Training builds the model's ability with millions of examples (expensive and long); inference is the everyday use of that finished model (fast and cheap). Changing core behavior requires retraining.",
    },
    analogy: {
      fa: "فرق دارد بین سال‌های آموزش یک جراح (گران و سخت) و عمل‌های روزمره‌اش (سریع و پرتکرار)؛ مهارت جدید یعنی دوره‌ی آموزشی جدید، نه فقط یک عمل بیشتر.",
      en: "The difference between a surgeon's years of training (expensive, hard) and their daily operations (fast, repeatable); a new skill means a new training program — not just one more operation.",
    },
    related: ["Neural Network", "Fine-tuning", "LLM"],
  },
  {
    term: "Vector Database",
    fa: "پایگاه داده برداری",
    category: "ai",
    definition: {
      fa: "پایگاه داده برداری برای نگه‌داشتن و جست‌وجوی میلیون‌ها embedding ساخته شده: به‌جای تطبیق دقیق، «نزدیک‌ترین‌های معنایی» را در کسری از ثانیه می‌یابد؛ ستون فقرات RAG و جست‌وجوی معنایی.",
      en: "A vector database is built to store and search millions of embeddings: instead of exact matching, it finds the semantic nearest neighbors in fractions of a second — the backbone of RAG and semantic search.",
    },
    analogy: {
      fa: "مثل کتابدارانی که به‌جای تطبیق دقیق عنوان، از روی «حسِ موضوعی» شبیه‌ترین کتاب‌ها را در چند ثانیه از میلیون‌ها قفسه بیرون می‌کشند.",
      en: "Like librarians who, instead of exact title matching, pull the most topically similar books from millions of shelves within seconds by thematic feel.",
    },
    related: ["Embedding", "RAG", "Index"],
  },
];
