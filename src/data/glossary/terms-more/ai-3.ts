import type { GlossaryTerm } from "../../schema";

/** DATA FILE — Glossary terms (AI & ML, part 3: NLP + LLM engineering). Merged into terms.ts → /glossary page. */
export const moreAiTerms3: GlossaryTerm[] = [
  {
    term: "Machine Learning",
    fa: "یادگیری ماشین",
    category: "ai",
    definition: {
      fa: "یادگیری ماشین به‌جای برنامه‌نویسی صریح قانون‌ها، الگوریتم را با داده آموزش می‌دهد تا خودش الگو را بیاموزد: با هزاران نمونه‌ی «ایمیل/اسپم بودن»، مدل قاعده‌ی تفکیک را استخراج می‌کند. سه شاخه‌ی اصلی: نظارت‌شده (برچسب دار)، بدون نظارت (کشف الگو) و تقویتی (پاداش/تنبیه).",
      en: "Machine learning trains algorithms on data to learn patterns instead of hand-coding rules: given thousands of labeled spam/not-spam emails, the model extracts the separating rule itself. Three main branches: supervised (labeled), unsupervised (pattern discovery), reinforcement (reward/punishment).",
    },
    analogy: {
      fa: "مثل یاد دادن تشخیص سیب سالم به کارآموز: به‌جای تعریف طولانی، هزار سیب نشانت می‌دهی با برچسب «سالم/گندیده» و او خودش معیار را می‌فهمد.",
      en: "Like teaching an apprentice to spot good apples: instead of a lecture, you show a thousand apples labeled good/rotten and they infer the criteria.",
    },
    related: ["Deep Learning", "Neural Network", "Training vs Inference", "MLOps"],
  },
  {
    term: "Deep Learning",
    fa: "یادگیری عمیق",
    category: "ai",
    definition: {
      fa: "یادگیری عمیق شاخه‌ای از ML با شبکه‌های عصبی چندلایه است که خودش ویژگی‌ها را از داده خام استخراج می‌کند — لایه‌های اول لبه‌ها را می‌بینند، لایه‌های بالاتر چهره و مفهوم را می‌سازند. در تصویر، صوت و زبان انقلابی کرده و به GPU های بزرگ و داده‌ی عظیم وابسته است.",
      en: "Deep learning is ML built on many-layered neural networks that extract features from raw data themselves — early layers detect edges, deeper ones compose faces and concepts. It revolutionized vision, speech and language, but depends on big GPUs and massive data.",
    },
    analogy: {
      fa: "مثل خط تولید شناخت: کارگر خط اول فقط خط و نقطه می‌بیند، خط بعدی شکل‌ها را می‌چیند، خط‌های بالاتر صورت می‌سازند — هر طبقه از خروجی طبقه‌ی پایین تغذیه می‌شود.",
      en: "Like an assembly line of recognition: the first station sees only lines and dots, the next assembles shapes, higher ones compose faces — each level feeds on the previous.",
    },
    related: ["Machine Learning", "Neural Network", "CNN", "Transformer"],
  },
  {
    term: "Reinforcement Learning",
    fa: "یادگیری تقویتی",
    category: "ai",
    definition: {
      fa: "یادگیری تقویتی عاملی است که با آزمون‌وخطا در محیط عمل می‌کند و از پاداش یاد می‌گیرد: هر تصمیم امتیازی دارد و هدف بیشینه‌کردن مجموع پاداش در طول زمان است. بازی‌ها، رباتیک و بهینه‌سازی توصیه‌گر از کاربردهایش است؛ RLHF نیز پایه‌ی هم‌راستاسازی مدل‌های زبانی است.",
      en: "Reinforcement learning trains an agent through trial and error in an environment: every action earns reward, and the goal is maximizing cumulative reward over time. Games, robotics and recommender tuning use it; RLHF — its language-model variant — powers LLM alignment.",
    },
    analogy: {
      fa: "مثل آموزش سگ با تشویقی: دستور درست = تشویقی، غلط = هیچ؛ سگ کم‌کم سیاستی می‌سازد که امتیاز کل را بیشینه کند.",
      en: "Like training a dog with treats: correct action = treat, wrong = nothing; the dog gradually builds a policy that maximizes total treats.",
    },
    related: ["RLHF", "Machine Learning", "Fine-tuning"],
  },
  {
    term: "MLOps",
    fa: "عملیات یادگیری ماشین",
    category: "ai",
    definition: {
      fa: "MLOps یعنی اعمال انضباط DevOps بر چرخه‌ی ML: نسخه‌بندی داده و مدل، آموزش تکرارپذیر، استقرار مدل، پایش drift (کهنه شدن داده) و بازآموزی خودکار. مدل خوب فقط نیمی از کار است؛ نیم دیگر این خط لوله‌ی عملیاتی است که آن را زنده نگه می‌دارد.",
      en: "MLOps brings DevOps discipline to the ML lifecycle: data/model versioning, reproducible training, model deployment, drift monitoring (data going stale) and automated retraining. A good model is half the job; the operational pipeline that keeps it healthy is the other half.",
    },
    analogy: {
      fa: "مثل فرق پختن یک غذای خوب با رستوران‌داری: دستور پخت (مدل) با یک نفر نیم‌روز کار است؛ زنجیره‌ی تأمین، آموزش آشپز و کنترل کیفیت هر روز (MLOps) کار واقعی است.",
      en: "Like the difference between cooking one great dish and running a restaurant: the recipe (model) is half a day's work; the supply chain, staff training and daily QC (MLOps) are the real job.",
    },
    related: ["CI/CD", "Monitoring", "Fine-tuning", "Machine Learning"],
  },
  {
    term: "Feature Engineering",
    fa: "مهندسی ویژگی",
    category: "ai",
    definition: {
      fa: "مهندسی ویژگی تبدیل داده‌ی خام به ستون‌های معنادار برای مدل است: از تاریخ تولد «سن» بساز، از متن «تعداد کلمات»، از تراکنش «نسبت خرید شبانه». در مدل‌های کلاسیک (درخت، رگرسیون) کیفیت ویژگی‌ها غالباً مهم‌تر از خود الگوریتم است.",
      en: "Feature engineering turns raw data into meaningful model inputs: derive 'age' from birthdate, 'word count' from text, 'night-purchase ratio' from transactions. For classic models (trees, regression), feature quality often matters more than the algorithm itself.",
    },
    analogy: {
      fa: "مثل آماده‌سازی مواد برای آشپز: پیاز را خرد و سرخ کنی (تبدیل کنی) غذا بهتر درمی‌آید؛ پیاز خام نیم‌پخت نتیجه‌ی بدی می‌دهد.",
      en: "Like prepping ingredients for the chef: dice and caramelize the onion (transform it) and the dish improves; raw onion just doesn't cook the same.",
    },
    related: ["Machine Learning", "Embedding", "Tokenizer"],
  },
  {
    term: "Natural Language Processing",
    fa: "پردازش زبان طبیعی",
    category: "ai",
    definition: {
      fa: "NLP شاخه‌ای است که زبان انسان را برای ماشین قابل محاسبه می‌کند: توکن‌سازی، برچسب‌گذاری نقش دستوری (POS)، شناسایی موجودیت‌ها (NER)، تحلیل احساس، خلاصه‌سازی و ترجمه. از مدل‌های آماری کلاسیک (HMM، TF-IDF) تا ترنسفورمرها تکامل یافته است.",
      en: "NLP makes human language computable for machines: tokenization, POS tagging, named entity recognition (NER), sentiment analysis, summarization and translation. It evolved from statistical models (HMM, TF-IDF) to transformers.",
    },
    analogy: {
      fa: "مثل آموزش خواندن به ربات: اول حروف را جدا می‌کند (توکن)، بعد نقش هر کلمه را می‌فهمد (فعل/فاعل)، بعد معنای کل جمله و منظور گوینده را.",
      en: "Like teaching a robot to read: first split words (tokens), then understand each word's role (verb/subject), then the sentence's meaning and the speaker's intent.",
    },
    related: ["NER", "POS Tagging", "LLM", "Tokenizer", "TF-IDF"],
  },
  {
    term: "NER",
    fa: "شناسایی موجودیت نام‌دار",
    category: "ai",
    definition: {
      fa: "Named Entity Recognition در متن موجودیت‌های مشخص را پیدا و دسته‌بندی می‌کند: اشخاص، سازمان‌ها، مکان‌ها، تاریخ‌ها، مبالغ. «علی در شرکت کاوش از ۱۴۰۳ کار می‌کند» → علی: PERSON، کاوش: ORG، ۱۴۰۳: DATE. پایه‌ی استخراج اطلاعات، چت‌بات‌های هوشمند و رعایت GDPR (ماسک کردن اسامی).",
      en: "Named Entity Recognition finds and classifies specific entities in text: people, organizations, locations, dates, amounts. 'Ali joined Kaavosh in 2024' → Ali: PERSON, Kaavosh: ORG, 2024: DATE. The base of information extraction, smarter chatbots and GDPR compliance (masking names).",
    },
    analogy: {
      fa: "مثل ماژیک‌های رنگی روی روزنامه: اسم اشخاص آبی، شرکت‌ها سبز، تاریخ‌ها زرد — با یک خواندن، همه‌ی «چه کسی/کجا/کی»ها برجسته می‌شوند.",
      en: "Like highlighting a newspaper with colored pens: people blue, companies green, dates yellow — one pass marks every who/where/when.",
    },
    related: ["Natural Language Processing", "POS Tagging", "BERT"],
  },
  {
    term: "POS Tagging",
    fa: "برچسب‌گذاری نقش دستوری",
    category: "ai",
    definition: {
      fa: "POS tagging به هر کلمه نقش دستوری می‌دهد: اسم، فعل، صفت، حرف اضافه. چون بسیاری از کلمات چندمعنایی‌اند («کتاب» اسم است، «کتاب می‌کند» فعل)، مدل به زمینه نگاه می‌کند. خروجی آن ورودیِ parser، NER و ترجمه‌ی ماشینی است.",
      en: "POS tagging assigns each word its grammatical role: noun, verb, adjective, preposition. Since many words are ambiguous ('book' is a noun, 'to book' a verb), the model looks at context. Its output feeds parsers, NER and machine translation.",
    },
    analogy: {
      fa: "مثل تشخیص نقش هر بازیکن در صحنه‌ی فوتبال از روی حرکت: همین شخص گاهی مهاجم است گاهی هافبک — فقط با دیدن کل صحنه می‌فهمی الان چه نقشی دارد.",
      en: "Like telling each player's current role from their position on the pitch: the same person can be striker or midfielder — only the whole play tells you which.",
    },
    related: ["Natural Language Processing", "NER", "Hidden Markov Model"],
  },
  {
    term: "TF-IDF",
    fa: "تی‌اف-آی‌دی‌اف",
    category: "ai",
    definition: {
      fa: "TF-IDF وزن کلمه را از دو ضرب می‌سازد: فراوانی در همین سند (TF) و کمیابی در کل مجموعه (IDF). کلمات پرتکرار در سند اما نادر در کل (مثل «کوانتوم» در یک مقاله‌ی فیزیک) وزن بالا می‌گیرند؛ کلمات همه‌جا حاضر («و»، «است») صفر می‌شوند. پایه‌ی جست‌وجوی کلاسیک و بردارسازی متن.",
      en: "TF-IDF weights a word by two factors: frequency in this document (TF) and rarity across the corpus (IDF). Words common here but rare overall (like 'quantum' in one physics paper) score high; everywhere-words ('the', 'is') score zero. The classic base of search and text vectorization.",
    },
    analogy: {
      fa: "مثل قاعده‌ی کتابدار: کلمه‌ای که در یک کتاب زیاد است ولی در کل کتابخانه‌ی نادر، احتمالاً موضوع همان کتاب است.",
      en: "Like a librarian's rule: a word frequent in one book but rare across the library probably names that book's subject.",
    },
    related: ["Bag of Words", "Embedding", "Natural Language Processing"],
  },
  {
    term: "Bag of Words",
    fa: "کیسه‌ی کلمات",
    category: "ai",
    definition: {
      fa: "Bag of Words متن را فقط به شمارش کلماتش تبدیل می‌کند — ترتیب حذف می‌شود: «گربه موش را دید» و «موش گربه را دید» یکسان می‌شوند. ساده و سریع برای طبقه‌بندی موضوعی و اسپم، اما ساختار جمله و نفی را گم می‌کند («نه خوب» با «خوب» یکی می‌شود!).",
      en: "Bag of Words reduces text to word counts — order is discarded: 'the cat saw the mouse' and 'the mouse saw the cat' become identical. Simple and fast for topic and spam classification, but it loses structure and negation ('not good' equals 'good'!).",
    },
    analogy: {
      fa: "مثل خالی کردن کیسه‌ی حروف بازی روی میز: می‌دانی چه حروفی داری ولی جمله‌ی اصلی را دیگر نمی‌توانی بازسازی کنی.",
      en: "Like dumping a Scrabble bag on the table: you know which letters you have, but the original sentence is gone.",
    },
    related: ["TF-IDF", "Embedding", "Natural Language Processing"],
  },
  {
    term: "Hidden Markov Model",
    fa: "مدل مارکوف پنهان",
    category: "ai",
    definition: {
      fa: "HMM سیستم توالی‌ای است که حالت‌های واقعی‌اش پنهان‌اند و فقط نشانه‌های آن‌ها دیده می‌شود: در تشخیص گفتار، «حالت» = فونم پنهان و «نشانه» = صدا شنیده‌شده. الگوریتم Viterbi محتمل‌ترین دنباله‌ی حالت را از توالی نشانه‌ها می‌یابد. برای POS tagging و سری‌های زمانی ساده هنوز کارآمد است.",
      en: "An HMM models sequences whose true states are hidden and only their emissions are visible: in speech recognition the hidden state is the phoneme, the emission is the audio heard. The Viterbi algorithm recovers the most likely state sequence from observations. Still effective for POS tagging and simple time series.",
    },
    analogy: {
      fa: "مثل حدس وضعیت هوا از لباس‌های مردم: بارانی/آفتابی را نمی‌بینی (حالت پنهان)، چتر و عینک آفتابی را می‌بینی (نشانه) و دنباله‌ی محتمل را استخراج می‌کنی.",
      en: "Like guessing the weather from passersby's clothing: you never see rain or sun (hidden states), only umbrellas and sunglasses (emissions) — and you infer the likeliest sequence.",
    },
    related: ["POS Tagging", "Natural Language Processing", "Machine Learning"],
  },
  {
    term: "RNN",
    fa: "شبکه‌ی عصبی بازگشتی",
    category: "ai",
    definition: {
      fa: "RNN شبکه‌ای است که برای توالی طراحی شده: در هر گام، خروجی گام قبلی را همراه ورودی جدید پردازش می‌کند — «حافظه‌ی مخفی» به آن اجازه می‌دهد زمینه‌ی قبلی متن/صدا را به یاد بیاورد. مشکل بزرگش محوشدن گرادیان در توالی‌های بلند است که LSTM آن را تخفیف داد و ترنسفورمر کاملاً جایگزینش شد.",
      en: "An RNN is a network built for sequences: at each step it processes the new input together with the previous step's hidden state — that memory lets it recall earlier context in text/audio. Its big flaw, vanishing gradients on long sequences, motivated LSTM; transformers have since largely replaced it.",
    },
    analogy: {
      fa: "مثل خواندن جمله با حافظه‌ی جاری: هر کلمه را با «تا الان فهمیدم» ترکیب می‌کنی — ولی هرچه جمله بلندتر، خاطره‌ی اول جمله محوتر.",
      en: "Like reading a sentence with running memory: each word merges with 'what I know so far' — but the longer the sentence, the fuzzier its beginning.",
    },
    related: ["LSTM", "Neural Network", "Transformer", "Vanishing Gradient"],
  },
  {
    term: "LSTM",
    fa: "ال‌اس‌تی‌ام",
    category: "ai",
    definition: {
      fa: "LSTM (حافظه‌ی کوتاه‌مدت بلند) نوع پیشرفته‌ی RNN با دروازه‌هاست: دروازه‌ی فراموشی چه چیزی از حافظه حذف شود، دروازه‌ی ورودی چه چیزی اضافه شود و دروازه‌ی خروجی چه چیزی بیرون برود. با این جاده‌ی حافظه‌ی پایدار، وابستگی‌های بلند (مثل توافق فاعل-فعل در جمله‌ی طولانی) را یاد می‌گیرد.",
      en: "LSTM (long short-term memory) is an advanced RNN with gates: a forget gate clears memory, an input gate adds to it, and an output gate releases it. That stable memory highway lets it learn long-range dependencies — like subject-verb agreement across a long sentence.",
    },
    analogy: {
      fa: "مثل دفترچه‌ی یادداشت هوشمند جلسه: هر لحظه تصمیم می‌گیری چه چیزی را خط بزنی، چه نکته‌ای اضافه کنی و چه چیزی را برای گزارش بلند بخوانی.",
      en: "Like a smart meeting notebook: each moment you decide what to cross out, what to jot down, and what to read out for the report.",
    },
    related: ["RNN", "Neural Network", "Vanishing Gradient"],
  },
  {
    term: "CNN",
    fa: "شبکه‌ی عصبی پیچشی",
    category: "ai",
    definition: {
      fa: "CNN با فیلترهای لغزان روی تصویر کار می‌کند: هر فیلتر یک الگو (لبه، بافت، چشم) را در هر جای تصویر پیدا می‌کند و لایه‌های بالاتر الگوهای پیچیده‌تر را می‌سازند. اشتراک وزن‌ها باعث می‌شود پارامتر کم و مقاومت به جابه‌جایی داشته باشد — ستون فقرات بینایی ماشین.",
      en: "CNNs run sliding filters over images: each filter detects one pattern (edge, texture, eye) anywhere in the frame, and deeper layers compose complex patterns. Weight sharing means few parameters and translation robustness — the backbone of computer vision.",
    },
    analogy: {
      fa: "مثل چند ذره‌بین تخصصی که روی عکس می‌لغزند: یکی فقط خط عمودی می‌بیند، یکی بافت پارچه؛ در طبقات بالاتر از ترکیبشان «چهره» ساخته می‌شود.",
      en: "Like specialized lenses sliding over a photo: one sees only vertical lines, another fabric texture — higher floors compose 'a face' from their findings.",
    },
    related: ["Deep Learning", "Neural Network"],
  },
  {
    term: "GPT",
    fa: "جی‌پی‌تی",
    category: "ai",
    definition: {
      fa: "GPT (ترنسفورمر مولد از پیش‌آموزش‌دیده) خانواده‌ی مدل‌های زبانی مولد OpenAI است: با پیش‌بینی توکن بعدی روی متن عظیم پیش‌آموزش می‌بیند و سپس با RLHF هم‌راستا می‌شود. معماری‌اش decoder-only است — بهینه برای تولید متن، گفت‌وگو و کدنویسی.",
      en: "GPT (Generative Pre-trained Transformer) is OpenAI's family of generative language models: pre-trained on massive text by predicting the next token, then aligned with RLHF. Its architecture is decoder-only — built for text generation, chat and code.",
    },
    analogy: {
      fa: "مثل نویسنده‌ای که با خواندن کتابخانه‌ای کامل آموزش دیده: کافی است نیمه‌جمله بدهی، محتمل‌ترین ادامه را روان می‌نویسد.",
      en: "Like a writer trained on an entire library: give them half a sentence and they fluently write its most plausible continuation.",
    },
    related: ["LLM", "Transformer", "RLHF", "BERT"],
  },
  {
    term: "BERT",
    fa: "برت",
    category: "ai",
    definition: {
      fa: "BERT مدل زبانی encoder-only گوگل است که با «حذف کلمات و حدس زدن» آموزش می‌بیند — پس هر توکن هم از چپ هم از راست زمینه می‌بیند. عالی برای فهم (جست‌وجو، طبقه‌بندی، NER) و نه تولید؛ نسخه‌های کوچکش (DistilBERT) در تولید اجرا می‌شوند.",
      en: "BERT is Google's encoder-only language model trained by masking words and guessing them — so every token sees context from both directions. Great for understanding (search, classification, NER), not generation; its distilled versions run in production.",
    },
    analogy: {
      fa: "مثل حل جدول کلمات متقاطع: کلمه‌ی پنهان را با دیدن هم سطر هم ستون حدس می‌زنی — برخلاف نویسنده که فقط از قبلی‌ها به بعدی می‌رسد.",
      en: "Like solving a crossword: you guess the hidden word using both its row and column — unlike a writer who only moves left-to-right.",
    },
    related: ["GPT", "Transformer", "NER", "Embedding"],
  },
  {
    term: "RoPE",
    fa: "جای‌گذاری چرخشی",
    category: "ai",
    definition: {
      fa: "RoPE (Rotary Positional Embedding) روش رمزگذاری موقعیت توکن‌ها در ترنسفورمرهای مدرن است: با چرخاندن بردار کوئری/کلید به زاویه‌ی متناسب با موقعیت، حاصل‌ضرب داخلی فقط به فاصله‌ی نسبی دو توکن بستگی پیدا می‌کند. به Llama و اکثر LLMهای ۲۰۲۴+ کمک می‌کند به توالی‌های بلند تعمیم یابند.",
      en: "RoPE (Rotary Positional Embedding) encodes token positions in modern transformers by rotating query/key vectors by an angle proportional to position — so inner products depend only on the relative distance between tokens. It helps Llama and most 2024+ LLMs generalize to longer sequences.",
    },
    analogy: {
      fa: "مثل عقربه‌های ساعت: به‌جای ذخیره‌ی «ساعت مطلق»، هر رویداد با زاویه‌ای نشان داده می‌شود و فاصله‌ی دو رویداد فقط تفاضل زاویه‌هاست.",
      en: "Like clock hands: instead of storing absolute times, each event is a rotation angle — the gap between events is just the angle difference.",
    },
    related: ["Attention", "Transformer", "GPT"],
  },
  {
    term: "Grouped-Query Attention",
    fa: "توجه گروهی-کوئری",
    category: "ai",
    definition: {
      fa: "GQA میان‌حل MHA و MQA است: چند کوئری سر دارند اما کلید/مقدارها را بین گروه‌ها به اشتراک می‌گذارند — مثلاً ۸ گروه کوئری به ازای هر سر KV. حافظه‌ی KV Cache و سرعت استنتاج به‌طور چشمگیر کم می‌شود با افت کیفیت جزئی؛ در Llama 2/3 و Mistral استاندارد شده است.",
      en: "GQA sits between multi-head and multi-query attention: several query heads exist, but keys/values are shared across groups — e.g., 8 query groups per KV head. KV-cache memory and inference speed improve dramatically with slight quality loss; Llama 2/3 and Mistral standardize it.",
    },
    analogy: {
      fa: "مثل چند گزارشگر که همه به یک آرشیو مشترک مراجعه می‌کنند به‌جای هرکدام آرشیو شخصی: فضای ذخیره به‌شده می‌شود و کیفیت گزارش تقریباً حفظ می‌شود.",
      en: "Like several reporters sharing one archive instead of each keeping a private one: storage shrinks dramatically while reporting quality barely drops.",
    },
    related: ["Attention", "KV Cache", "Transformer", "LLM"],
  },
  {
    term: "KV Cache",
    fa: "کش کلید-مقدار",
    category: "ai",
    definition: {
      fa: "KV Cache در استنتاج ترنسفورمر، کلید و مقدار توکن‌های قبلی را نگه می‌دارد تا در تولید هر توکن جدید، کل جمله از نو محاسبه نشود — تولید را از O(n²) به O(n) در هر گام می‌رساند. هزینه‌اش حافظه است: با توکن‌های بیشتر و batch بزرگ، VRAM پر می‌شود و GQA/کوانتیزاسیون راه‌حل‌های فشرده‌سازی‌اند.",
      en: "In transformer inference, the KV cache stores previous tokens' keys and values so generating each new token doesn't recompute the whole prefix — turning per-step cost from O(n²) to O(n). Its price is memory: more tokens and bigger batches fill VRAM, and GQA/quantization are the compression answers.",
    },
    analogy: {
      fa: "مثل نوشتن خلاصه‌ی گفت‌وگو روی تخته: برای جواب دادن به جمله‌ی جدید لازم نیست همه‌ی گفت‌وگو را از حافظه بازسازی کنی — نگاه به تخته کافی است.",
      en: "Like keeping the conversation summary on a whiteboard: to respond to the next line you glance at the board instead of replaying the whole chat.",
    },
    related: ["Attention", "Inference", "Grouped-Query Attention"],
  },
  {
    term: "LoRA",
    fa: "لورا",
    category: "ai",
    definition: {
      fa: "LoRA (انطباق کم‌رتبه) روش به‌روزرسانی کارآمد مدل است: به‌جای آموزش همه‌ی وزن‌ها، ماتریس‌های کوچک کم‌رتبه‌ای کنار وزن‌های منجمد قرار می‌گیرند — معمولاً کمتر از ۱٪ پارامتر آموزش می‌بیند. مدل پایه یک‌بار load می‌شود و صدها آداپتور LoRA کوچک برای وظایف مختلف روی آن سوار می‌شوند.",
      en: "LoRA (low-rank adaptation) fine-tunes cheaply: instead of training all weights, small low-rank matrices are inserted alongside frozen ones — typically training under 1% of parameters. The base model loads once; hundreds of tiny LoRA adapters for different tasks plug on top.",
    },
    analogy: {
      fa: "مثل لنز روی دوربین ثابت: به‌جای خرید دوربین جدید برای هر سبک عکاسی، فقط لنز را عوض می‌کنی — بدنه (مدل پایه) مشترک می‌ماند.",
      en: "Like lenses on one camera body: no new camera per photography style — you swap lenses while the body (base model) stays shared.",
    },
    related: ["PEFT", "Fine-tuning", "LLM", "DPO"],
  },
  {
    term: "PEFT",
    fa: "به‌روزرسانی کارآمد پارامتر",
    category: "ai",
    definition: {
      fa: "PEFT (Parameter-Efficient Fine-Tuning) خانواده‌ی روش‌هایی است که به‌جای آموزش کل مدل، فقط بخش کوچکی را آموزش می‌دهند: LoRA، آداپتورها، prefix tuning. مزیت: سخت‌افزار عادی کافی است، فراموشی فاجعه‌بار کمتر و هر وظیفه یک آداپتور چند-MB جدا می‌شود.",
      en: "PEFT (parameter-efficient fine-tuning) is the family of methods that train only a tiny slice of the model instead of all of it: LoRA, adapters, prefix tuning. Wins: runs on modest hardware, less catastrophic forgetting, and each task becomes a separate few-MB adapter.",
    },
    analogy: {
      fa: "مثل بازطراحی دکور اتاق به‌جای بازسازی کل خانه: دیوارها و لوله‌ها (وزن‌های پایه) دست‌نخورده می‌مانند و فقط رنگ و مبلمان (آداپتورها) عوض می‌شود.",
      en: "Like redecorating a room instead of rebuilding the house: walls and pipes (base weights) stay untouched; paint and furniture (adapters) change.",
    },
    related: ["LoRA", "Fine-tuning", "DPO"],
  },
  {
    term: "DPO",
    fa: "بهینه‌سازی ترجیح مستقیم",
    category: "ai",
    definition: {
      fa: "DPO (Direct Preference Optimization) جایگزین ساده‌تر RLHF است: به‌جای آموزش مدل پاداش و بهینه‌سازی با RL، مستقیم از جفت پاسخ «بهتر/بدتر» یاد می‌گیرد که پاسخ مطلوب را بالا ببرد. پایدارتر و ارزان‌تر از RLHF است و در هم‌راستاسازی مدل‌های باز (Zephyr و…) به کار رفته است.",
      en: "DPO (Direct Preference Optimization) is RLHF's simpler alternative: instead of training a reward model and optimizing it with RL, it learns directly from better/worse response pairs to boost the preferred one. More stable and cheaper than RLHF; used to align open models like Zephyr.",
    },
    analogy: {
      fa: "مثل آموزش سلیقه با مقایسه‌ی مستقیم دو غذا («این را بیشتر دوست داشتی») به‌جای ساختن فرمول پیچیده‌ی سلیقه و سپس بهینه‌سازی رویش.",
      en: "Like learning taste from direct pair comparisons ('you liked this one better') rather than first building a taste formula and then optimizing it.",
    },
    related: ["RLHF", "LoRA", "Fine-tuning", "LLM"],
  },
  {
    term: "FlashAttention",
    fa: "فلش‌اتنشن",
    category: "ai",
    definition: {
      fa: "FlashAttention بازپیاده‌سازی سریع الگوریتم توجه است: به‌جای نوشتن ماتریس‌های بزرگ توجه در حافظه‌ی GPU، بلوک‌ها را در SRAM سریع محاسبه و فقط نتیجه را می‌نویسد — دقیقاً همان جواب با حافظه‌ی کمتر و سرعت ۲-۴ برابر. امکان توالی‌های بلندتر و آموزش سریع‌تر LLMها را فراهم کرد.",
      en: "FlashAttention is a fast re-implementation of attention: instead of writing huge attention matrices to GPU HBM, it computes blocks in fast SRAM and writes only results — the exact same output, less memory, 2–4× faster. It unlocked longer sequences and quicker LLM training.",
    },
    analogy: {
      fa: "مثل حل مسائل با تخته‌ی کوچک کنار دست به‌جای رفت‌وبرگشت به تخته‌ی انتهای کلاس برای هر محاسبه — همان جواب‌ها، خیلی سریع‌تر.",
      en: "Like solving on a notepad at your desk instead of walking to the far blackboard for every calculation — identical answers, far faster.",
    },
    related: ["Attention", "KV Cache", "Transformer"],
  },
  {
    term: "Layer Normalization",
    fa: "نرمال‌سازی لایه‌ای",
    category: "ai",
    definition: {
      fa: "LayerNorm مقادیر هر لایه را برای هر نمونه نرمال می‌کند (میانگین صفر، واریانس یک) و بعد با پارامترهای آموزش‌پذیر مقیاس/جابه‌جا می‌کند. هدف: جلوگیری از انفجار/محو گرادیان و تثبیت آموزش شبکه‌های عمیق. در ترنسفورمرها بعد از هر بلوک attention/FFN می‌آید.",
      en: "LayerNorm normalizes each layer's activations per example (zero mean, unit variance), then rescales/shifts with learned parameters. Purpose: prevent gradient explosion/vanishing and stabilize deep-network training. In transformers it follows every attention/FFN block.",
    },
    analogy: {
      fa: "مثل تنظیم بلندی صدا بعد از هر اتاق استودیو: خروجی هر اتاق به سطح استاندارد برمی‌گردد تا اتاق بعدی نه خفه شود نه خشک‌اش بزند.",
      en: "Like normalizing audio levels after each studio room: every room's output returns to standard level so the next one neither drowns nor gets blasted.",
    },
    related: ["Neural Network", "Transformer", "Vanishing Gradient"],
  },
  {
    term: "SwiGLU",
    fa: "سویی‌جی‌ال‌یو",
    category: "ai",
    definition: {
      fa: "SwiGLU تابع فعال‌سازی پیشرفته در بلوک‌های FFN ترنسفورمر است: دو شاخه‌ی خطی می‌گیرد، یکی را با SiLU فعال می‌کند و در دیگری ضرب می‌کند — دروازه‌ای که یاد می‌گیرد چه اطلاعات عبور کند. جایگزین ReLU/GELU شده و در Llama و اکثر مدل‌های مدرن به کار رفته است.",
      en: "SwiGLU is the advanced activation in transformer FFN blocks: it takes two linear branches, activates one with SiLU, and multiplies them — a gate that learns what information passes. It replaced ReLU/GELU in Llama and most modern models.",
    },
    analogy: {
      fa: "مثل دریچه‌ای هوشمند که هم سیگنال را تعدیل می‌کند (SiLU) هم تصمیم می‌گیرد چه مقدار از آن رد شود (ضرب دروازه‌ای).",
      en: "Like a smart valve that both tunes the signal (SiLU) and decides how much of it flows through (the gating multiply).",
    },
    related: ["ReLU", "Transformer", "Layer Normalization"],
  },
  {
    term: "ReLU",
    fa: "رِی‌لُو",
    category: "ai",
    definition: {
      fa: "ReLU ساده‌ترین فعال‌سازی رایج است: ورودی منفی → صفر، مثبت → خودش. ارزانی، سرعت و رفع مشکل محو گرادیان برای مقادیر مثبت، آن را به فعال‌سازی پیش‌فرض شبکه‌های عمیق تبدیل کرد؛ عیبش «مردگی نورون» است که Leaky ReLU و GELU آن را نرم کرده‌اند.",
      en: "ReLU is the simplest common activation: negative input → zero, positive → itself. Its cheapness, speed, and non-vanishing gradients for positive values made it the default for deep nets; its flaw is 'dying neurons', softened by Leaky ReLU and GELU.",
    },
    analogy: {
      fa: "مثل شیر آب یک‌طرفه: فشار منفی (منفی) هیچ‌وقت عبور نمی‌کند و فشار مثبت بی‌تغییر می‌گذرد.",
      en: "Like a one-way valve: negative pressure never passes; positive pressure flows through unchanged.",
    },
    related: ["Neural Network", "Deep Learning", "Vanishing Gradient", "SwiGLU"],
  },
  {
    term: "Vanishing Gradient",
    fa: "محو گرادیان",
    category: "ai",
    definition: {
      fa: "در پس‌انتشار، خطا از لایه‌های آخر به اول منتقل می‌شود؛ در شبکه‌های عمیق با فعال‌سازی‌های اشباع‌شونده (sigmoid)، ضرب‌های پیاپی اعداد کوچک گرادیان را در لایه‌های اول تقریباً صفر می‌کند — یعنی لایه‌های اول دیگر یاد نمی‌گیرند. راه‌حل‌ها: ReLU، اتصال‌های باقی‌مانده (ResNet)، LSTM و LayerNorm.",
      en: "During backpropagation, error flows from late layers to early ones; in deep nets with saturating activations (sigmoid), multiplying many small numbers nearly zeroes gradients in early layers — they stop learning. Fixes: ReLU, residual connections (ResNet), LSTM, LayerNorm.",
    },
    analogy: {
      fa: "مثل شایعه‌ای که در زنجیره‌ی ۳۰ نفره‌ی «فقط کمی کمرنگ‌تر بگو» می‌چرخد: به نفر اول تقریباً هیچ پیامی نمی‌رسد.",
      en: "Like a message passed along thirty people each told to whisper it 'just slightly quieter' — the first person hears almost nothing.",
    },
    related: ["RNN", "ReLU", "Layer Normalization", "Deep Learning"],
  },
  {
    term: "Naive Bayes",
    fa: "بیز ساده",
    category: "ai",
    definition: {
      fa: "Naive Bayes دسته‌بندی احتمالاتی بر پایه‌ی قضیه‌ی بیز با فرض ساده‌کننده است که ویژگی‌ها مستقل‌اند: احتمال اسپم بودن ایمیل = جمع (احتمال هر کلمه در اسپم ÷ احتمالش در عادی). با این فرض ساده‌لوحانه، در طبقه‌بندی متن و اسپم‌فیلترها هنوز قوی و فوق‌سریع است.",
      en: "Naive Bayes is a probabilistic classifier based on Bayes' theorem with a simplifying assumption of feature independence: spam likelihood = sum of (each word's probability in spam ÷ in normal mail). Despite the naive assumption, it stays strong and blazing-fast for text and spam filtering.",
    },
    analogy: {
      fa: "مثل داوری فقط با شمارش نشانه‌ها: «کلمه‌ی رایگان در اسپم ۲۰ برابر عادی است، پس وزنش ۲۰» — بدون مدل‌سازی هم‌نشینی کلمات با هم.",
      en: "Like judging purely by counting signals: 'free appears 20× more in spam, so weight it 20' — with no modeling of word co-occurrence.",
    },
    related: ["Machine Learning", "TF-IDF", "Bag of Words", "SVM"],
  },
  {
    term: "SVM",
    fa: "ماشین بردار پشتیبان",
    category: "ai",
    definition: {
      fa: "SVM دسته‌بندی است که مرز جداکننده را طوری می‌کشد که حاشیه‌ی امن بین دو کلاس بیشینه باشد — نزدیک‌ترین نقاط (بردارهای پشتیبان) تا حد ممکن دور باشند. با ترفند هسته (kernel) مرزهای غیرخطی هم می‌کشد. برای داده‌ی با ابعاد زیاد و نمونه‌ی کم عالی است، ولی مقیاس‌پذیری به داده‌ی عظیم ندارد.",
      en: "SVM draws the separating boundary that maximizes the margin between classes — the nearest points (support vectors) end up as far apart as possible. The kernel trick adds non-linear boundaries. Excellent for high-dimensional, small-sample data; it doesn't scale to huge datasets.",
    },
    analogy: {
      fa: "مثل کشیدن بزرگ‌ترین جاده‌ی امن بین دو دهکده: نه از کنار دیوار یکی، بلکه وسطِ وسطِ فضای خالی — تا هیچ طرفی احساس خطر نکند.",
      en: "Like drawing the widest safe road between two villages: not hugging either fence, but right through the middle of the empty space.",
    },
    related: ["Machine Learning", "Naive Bayes", "Decision Tree"],
  },
  {
    term: "Random Forest",
    fa: "جنگل تصادفی",
    category: "ai",
    definition: {
      fa: "Random Forest صدها درخت تصمیم را روی نمونه‌ها و ویژگی‌های تصادفی آموزش می‌دهد و رأی اکثریتشان را می‌گیرد (bagging). هر درخت اشتباه خاص خودش دارد و رأی‌گیری خطاها را خنثی می‌کند — دقت بالا، مقاومت به بیش‌برازش و اهمیت ویژگی به‌عنوان هدیه. مدل‌های تخت (tabular) هنوز رقیب جدی‌اند.",
      en: "A random forest trains hundreds of decision trees on random samples and feature subsets, then takes their majority vote (bagging). Each tree has its own biases and the vote cancels them — high accuracy, overfitting resistance, and feature importances for free. Still a serious contender on tabular data.",
    },
    analogy: {
      fa: "مثل کمیته‌ی داوری از صد متخصص مستقل که هرکدام بخش متفاوتی از پرونده را دیده‌اند: رأی جمع کم‌خطاتر از هر داور تنهاست.",
      en: "Like a jury of a hundred independent experts, each having read a different slice of the file: the collective verdict beats any single judge.",
    },
    related: ["Decision Tree", "Machine Learning", "XGBoost"],
  },
  {
    term: "Decision Tree",
    fa: "درخت تصمیم",
    category: "ai",
    definition: {
      fa: "درخت تصمیم مدل قابل‌خواندنی است که داده را با سؤالات بله/خیر پله‌پله تقسیم می‌کند: «درآمد > X؟» → «سابقه‌ی بدهی دارد؟» → تصمیم نهایی در برگ. مزیتش تفسیرپذیری کامل و کار با داده‌ی ترکیبی است؛ عیبش بیش‌برازش آسان است که با محدود کردن عمق یا جنگل تصادفی مهار می‌شود.",
      en: "A decision tree is a readable model that splits data with yes/no questions: 'income > X?' → 'has debt history?' → final decision at a leaf. Pros: fully interpretable, handles mixed data; cons: overfits easily, tamed by depth limits or random forests.",
    },
    analogy: {
      fa: "مثل درخت تصمیم پشتیبانی فنی: «خاموش روشن شد؟» → «چراغ چشمک می‌زند؟» → «کابل عوض شد؟» — هر سؤال شاخه‌ی بعدی را باز می‌کند تا راه‌حل برسد.",
      en: "Like a tech-support script: 'does it power on?' → 'is the LED blinking?' → 'did you swap the cable?' — each question opens the next branch until a fix arrives.",
    },
    related: ["Random Forest", "Machine Learning", "XGBoost"],
  },
  {
    term: "XGBoost",
    fa: "ایکس‌جی‌بوست",
    category: "ai",
    definition: {
      fa: "XGBoost پیاده‌سازی بهینه‌ی گرادیان بوستینگ است: درخت‌ها به‌طور ترتیبی ساخته می‌شوند و هر درخت خطای درخت قبلی را اصلاح می‌کند — برخلاف جنگل تصادفی که موازی و مستقل است. در مسابقات داده و داده‌های جدولی تجاری دهه‌ها استاندارد دقت بوده است؛ LightGBM و CatBoost هم‌خانواده‌هایش‌اند.",
      en: "XGBoost is the optimized implementation of gradient boosting: trees are built sequentially, each correcting the previous one's errors — unlike random forest's parallel independent trees. It's been the accuracy standard in data competitions and commercial tabular data for a decade; LightGBM and CatBoost are siblings.",
    },
    analogy: {
      fa: "مثل گروه اصلاح‌گری متوالی: هر مشاور گزارش مشاور قبلی را می‌خواند و دقیقاً اشتباهاتش را هدف می‌گیرد، نه از صفر شروع کردن.",
      en: "Like a relay of reviewers: each consultant reads the previous one's report and targets its exact mistakes instead of starting from zero.",
    },
    related: ["Random Forest", "Decision Tree", "Machine Learning"],
  },
  {
    term: "Chain-of-Thought",
    fa: "زنجیره‌ی تفکر",
    category: "ai",
    definition: {
      fa: "Chain-of-Thought (CoT) تکنیک پرامپت است که از مدل می‌خواهد مراحل استدلال را پیش از جواب نهایی بنویسد: «بیا قدم‌به‌قدم…». چون هر گام توکن‌های زمینه‌ی گام بعد می‌شود، دقت در ریاضی، منطق و مسائل چندمرحله‌ای به‌طور چشمگیری بالا می‌رود. نسخه‌ی خودانگیخته‌اش در مدل‌های استدلالی مدرن (o1 و امثالش) داخلی شده است.",
      en: "Chain-of-Thought (CoT) prompting asks the model to write out its reasoning steps before the final answer: 'let's work through this…'. Since each step becomes context for the next, accuracy on math, logic and multi-step problems jumps sharply. Reasoning models like o1 have internalized it natively.",
    },
    analogy: {
      fa: "مثل تفاوت «جواب حفظی» با حل روی تخته: وقتی مجبور است مسیر را بنویسد، خطاهای میان‌راه خودش را نشان می‌دهند و جواب نهایی دقیق‌تر می‌شود.",
      en: "Like the difference between a memorized answer and solving on the board: forced to show its path, mistakes surface early and the final answer improves.",
    },
    related: ["Prompt", "LLM", "In-Context Learning", "GPT"],
  },
  {
    term: "In-Context Learning",
    fa: "یادگیری درون‌زمینه‌ای",
    category: "ai",
    definition: {
      fa: "یادگیری درون‌زمینه‌ای یعنی مدل بدون هیچ بازآموزی، فقط با دیدن چند مثال داخل پرامپت، الگوی وظیفه را یاد می‌گیرد: سه نمونه از «انگلیسی→فارسی» بدهی، ادامه را همین‌طور ترجمه می‌کند. توانایی نوظهور مدل‌های بزرگ است و zero-shot (بدون مثال) و few-shot (چند مثال) دارد.",
      en: "In-context learning means the model picks up a task's pattern from examples inside the prompt alone — no retraining: give three 'English→Persian' samples and it continues translating the same way. An emergent ability of large models, with zero-shot (no examples) and few-shot (a few) flavors.",
    },
    analogy: {
      fa: "مثل کارمند خبره که فرمت جدید گزارش را با دیدن دو نمونه‌ی پرشده بلافاصله ادامه می‌دهد — بدون جلسه‌ی آموزش.",
      en: "Like a seasoned employee who, shown two filled samples, instantly continues a new report format — no training session needed.",
    },
    related: ["Prompt", "LLM", "Chain-of-Thought", "Context Window"],
  },
  {
    term: "Function Calling",
    fa: "فراخوانی تابع",
    category: "ai",
    definition: {
      fa: "Function Calling سازوکاری است که LLM را به ابزارهای واقعی وصل می‌کند: ابزارها را با schema تعریف می‌کنی (مثلاً get_weather(city))، مدل در مواقع لازم به‌جای متن، درخواست ساخت‌یافته‌ی صدا زدن ابزار برمی‌گرداند، اپ آن را اجرا و نتیجه را به مدل می‌دهد. پایه‌ی ایجنت‌ها و اتصال مدل به داده‌ی زنده است.",
      en: "Function calling connects an LLM to real tools: you declare tools with schemas (e.g., get_weather(city)), and when needed the model returns a structured tool-call request instead of text; the app executes it and feeds the result back. The foundation of agents and live-data access.",
    },
    analogy: {
      fa: "مثل منشی‌ای که می‌داند چه وقت تلفن بزند: خودش شماره‌ها را نمی‌داند، اما با دیدن درخواست «رزرو جا»، فرم استاندارد رزرو را برای اپ پر می‌کند.",
      en: "Like an assistant who knows when to pick up the phone: they don't know the numbers, but on seeing 'book a table' they fill the standard booking form for the app.",
    },
    related: ["LLM", "Prompt", "GPT", "RAG"],
  },
];
