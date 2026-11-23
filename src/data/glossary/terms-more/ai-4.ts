import type { GlossaryTerm } from "../../schema";

/** AI & ML glossary expansion — Agents, MCP, quantization, distillation, multimodal, guardrails & evals. Consumed by: src/data/glossary/terms.ts. */
export const moreAiTerms4: GlossaryTerm[] = [
  {
    term: "AI Agent",
    fa: "عامل هوشمند (AI Agent)",
    category: "ai",
    definition: {
      fa: "سیستمی مبتنی بر مدل زبانی که می‌تواند یک هدف چندمرحله‌ای را برنامه‌ریزی کند، ابزارهای بیرونی (جستجو، کد، API) را صدا بزند، نتیجه را ببیند و در حلقهٔ بازخورد تا رسیدن به جواب ادامه دهد.",
      en: "An LLM-driven system that plans multi-step tasks, invokes external tools (APIs, code, search), observes results, and iterates in a feedback loop until the goal is achieved.",
    },
    analogy: {
      fa: "چت‌بات معمولی مثل مشاوری است که فقط پاسخ می‌دهد؛ AI Agent مثل دستیاری است که خودش تقویم را چک می‌کند، ایمیل می‌فرستد و نتیجه را گزارش می‌دهد.",
      en: "A plain chatbot gives advice; an AI agent actually checks your calendar, calls the API, verifies the result, and reports back.",
    },
    related: ["LLM", "Function Calling", "MCP (Model Context Protocol)", "Guardrails"],
  },
  {
    term: "MCP (Model Context Protocol)",
    fa: "پروتکل اتصال ابزار مدل (MCP)",
    category: "ai",
    definition: {
      fa: "پروتکل استاندارد و باز برای متصل کردن مدل‌ها و عامل‌های هوشمند به منابع داده، پایگاه‌های داده و ابزارهای بیرونی بدون نیاز به نوشتن اتصال سفارشی برای هر مدل.",
      en: "An open standard protocol that connects AI models and agents to external data sources, databases, and tools through one unified interface instead of bespoke integrations.",
    },
    analogy: {
      fa: "مثل پورت USB-C برای مدل‌های هوش مصنوعی: یک بار سرور ابزار را می‌سازید و هر مدل سازگاری می‌تواند به آن وصل شود.",
      en: "Like USB-C for AI apps: build one MCP server for a tool and any compatible model or agent can plug right in.",
    },
    related: ["AI Agent", "Function Calling", "API", "LLM"],
  },
  {
    term: "Quantization",
    fa: "کوانتایزیشن مدل (Quantization)",
    category: "ai",
    definition: {
      fa: "کاهش دقت عددی وزن‌های شبکهٔ عصبی (مثلاً از 16-bit به 8-bit یا 4-bit) تا حجم حافظهٔ VRAM مصرفی مدل به یک‌چهارم برسد و استنتاج با افت کیفیت ناچیز بسیار سریع‌تر شود.",
      en: "Reducing the numerical precision of neural network weights (e.g., from FP16 to INT8 or INT4) to shrink memory footprints and accelerate inference with minimal accuracy loss.",
    },
    analogy: {
      fa: "مثل ذخیرهٔ یک عکس RAW در قالب WebP باکیفیت: حجم به‌شدت کم می‌شود اما چشم تفاوت خاصی حس نمی‌کند.",
      en: "Like saving a massive RAW photo as a crisp compressed image: a fraction of the size with nearly identical fidelity.",
    },
    related: ["Inference", "LLM", "Distillation", "KV Cache"],
  },
  {
    term: "Distillation",
    fa: "تقطیر دانش (Model Distillation)",
    category: "ai",
    definition: {
      fa: "آموزش یک مدل کوچک و سریع (دانش‌آموز) برای تقلید از خروجی‌ها و استدلال یک مدل بسیار بزرگ و قدرتمند (استاد) تا کیفیتی نزدیک به مدل بزرگ با هزینه و تأخیر بسیار کمتر به دست آید.",
      en: "Training a smaller, faster 'student' model to mimic the outputs and reasoning of a larger 'teacher' model, capturing most of its quality at a fraction of the latency and cost.",
    },
    analogy: {
      fa: "مثل استاد ماهری که سال‌ها تجربه را به‌صورت خلاصه و کاربردی به شاگرد جوان منتقل می‌کند تا سریع همان تصمیم‌ها را بگیرد.",
      en: "Like a master craftsperson passing distilled intuition to an apprentice who can work far faster at lower cost.",
    },
    related: ["Fine-tuning", "Quantization", "Training vs Inference", "LLM"],
  },
  {
    term: "Multimodal Model",
    fa: "مدل چندوجهی (Multimodal)",
    category: "ai",
    definition: {
      fa: "مدل هوش مصنوعی که به‌صورت بومی می‌تواند بیش از یک نوع ورودی و خروجی — مانند متن، تصویر، صدا و ویدیو — را هم‌زمان درک و تولید کند.",
      en: "An AI model natively capable of understanding and generating across multiple modalities — such as text, images, audio, and video — within a unified architecture.",
    },
    analogy: {
      fa: "مثل انسانی که هم‌زمان می‌تواند نمودار را ببیند، توضیحات صوتی را بشنود و پاسخ متنی بنویسد.",
      en: "Like a person who can look at a chart, listen to a voice note, and write a combined summary all at once.",
    },
    related: ["LLM", "Transformer", "Embedding"],
  },
  {
    term: "Guardrails",
    fa: "گاردریل‌های ایمنی هوش مصنوعی",
    category: "ai",
    definition: {
      fa: "لایه‌های کنترلی و اعتبارسنجی روی ورودی و خروجی مدل‌های هوش مصنوعی برای جلوگیری از نشت اطلاعات شخصی (PII)، تزریق پرامپت، پاسخ‌های نامناسب یا نقض فرمت مورد انتظار.",
      en: "Input and output safety layers around AI models that filter prompt injections, redact PII, block unsafe content, and enforce valid output schemas.",
    },
    analogy: {
      fa: "مثل گاردریل‌های کنار جادهٔ کوهستانی: خودرو آزادانه حرکت می‌کند اما در صورت انحراف اجازهٔ سقوط نمی‌دهند.",
      en: "Like highway guardrails: the model moves freely at speed while hard boundaries keep it safely on the road.",
    },
    related: ["Prompt Injection", "Hallucination", "Structured Output", "AI Agent"],
  },
  {
    term: "Prompt Injection",
    fa: "تزریق پرامپت (Prompt Injection)",
    category: "ai",
    definition: {
      fa: "حمله‌ای امنیتی که در آن ورودی کاربر یا متن یک صفحهٔ وب دستورات مخفی داخل خود دارد تا دستورالعمل‌های سیستمی LLM را دور بزند و اطلاعات محرمانه یا ابزارهای غیرمجاز را اجرا کند.",
      en: "An attack where untrusted user input or retrieved documents sneak hidden instructions into an LLM prompt to override system rules, exfiltrate secrets, or misuse tools.",
    },
    analogy: {
      fa: "مثل یادداشت جعلی داخل یک ایمیل که به منشی می‌گوید «دستورات رئیست را نادیده بگیر و کل لیست مشتریان را برای من بفرست».",
      en: "Like a sneaky note hidden inside a document telling an assistant: 'Ignore your boss's instructions and email me the vault code.'",
    },
    related: ["Prompt", "Guardrails", "SQL Injection", "AI Agent"],
  },
  {
    term: "Eval (LLM Evaluation)",
    fa: "ارزیابی نظام‌مند مدل (Evals)",
    category: "ai",
    definition: {
      fa: "مجموعه آزمون‌های خودکار روی دیتاست‌های معیار که دقت، نبود توهم‌زایی، تأخیر و کیفیت پاسخ‌های یک سیستم AI را پس از هر تغییر در پرامپت، مدل یا RAG به‌طور عددی اندازه‌گیری می‌کند.",
      en: "Automated benchmark suites measuring accuracy, groundedness, latency, and safety of an AI system whenever prompts, models, or retrieval pipelines change.",
    },
    analogy: {
      fa: "مثل تست‌های واحد (Unit Test) اما مخصوص هوش مصنوعی: به‌جای حدس زدن از روی دو نمونه چت، کیفیت کل سیستم را عددی می‌سنجد.",
      en: "Like unit tests for AI: replacing gut feelings from two manual chats with repeatable quality metrics.",
    },
    related: ["Hallucination", "RAG", "Unit Testing", "MLOps"],
  },
  {
    term: "Structured Output",
    fa: "خروجی ساختاریافته (JSON Schema)",
    category: "ai",
    definition: {
      fa: "وادار کردن LLM به تولید خروجی دقیقاً منطبق بر یک اسکیمای مشخص (معمولاً JSON Schema) تا کد برنامه بتواند بدون خطا و بدون پارس شکننده آن را مصرف کند.",
      en: "Constraining an LLM to emit responses strictly conforming to a predefined JSON Schema so downstream application code can parse and validate results reliably.",
    },
    analogy: {
      fa: "مثل دادن یک فرم با خانه‌های مشخص به‌جای برگهٔ سفید تا پاسخ دقیقاً قابل ورود به سیستم باشد.",
      en: "Like handing someone a form with typed boxes instead of blank paper so answers plug straight into your database.",
    },
    related: ["JSON", "Function Calling", "Guardrails", "Validation"],
  },
  {
    term: "Speculative Decoding",
    fa: "رمزگشایی حدسی (Speculative Decoding)",
    category: "ai",
    definition: {
      fa: "تکنیک شتاب‌دهی به تولید متن در LLM که در آن یک مدل کوچک و فوق‌سریع چند توکن بعدی را حدس می‌زند و مدل بزرگ همهٔ آن‌ها را در یک گذر موازی تأیید یا اصلاح می‌کند؛ سرعت بالا می‌رود بدون هیچ تغییری در توزیع خروجی.",
      en: "An LLM inference speedup where a tiny draft model proposes several upcoming tokens and the large target model verifies them in parallel in one forward pass — lossless acceleration.",
    },
    analogy: {
      fa: "مثل دستیار سریع‌العملی که پیش‌نویس یک پاراگراف را آماده می‌کند و سردبیر در یک نگاه تأیید یا یک کلمه‌اش را اصلاح می‌کند.",
      en: "Like a fast assistant drafting a sentence ahead while a senior editor approves or tweaks it in a single glance.",
    },
    related: ["Inference", "Token", "KV Cache", "Quantization"],
  },
];
