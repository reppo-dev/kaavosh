import type { InterviewField } from "../schema";

/**
 * DATA FILE — Interview questions. Consumed by: /interview hub page,
 * /interview/[field] Q&A page, landing page stats.
 */
export const aiMlInterview: InterviewField = {
  slug: "ai-ml",
  title: { fa: "مصاحبه هوش مصنوعی و ML", en: "AI & ML interviews" },
  description: {
    fa: "سوال‌های واقعی مصاحبه‌های ML و LLM در ۲۰۲۶: مبانی یادگیری، بیش‌برازش، embeddingها، RAG و ارزیابی اپ‌های LLM — هرکدام با پاسخ کوتاه و شکستن قدم‌به‌قدم.",
    en: "Real 2026 ML & LLM interview questions: learning basics, overfitting, embeddings, RAG and evaluating LLM apps — each with a short answer and a step-by-step breakdown.",
  },
  icon: "brain-circuit",
  accent: "violet",
  questions: [
    {
      id: "supervised-vs-unsupervised-learning",
      question: {
        fa: "یادگیری نظارت‌شده و بی‌نظارت چه فرقی دارند؟ مثال بزنید.",
        en: "What's the difference between supervised and unsupervised learning? Give examples.",
      },
      difficulty: "junior",
      tags: ["ml-basics", "algorithms"],
      quickAnswer: {
        fa: "نظارت‌شده یعنی با جواب صحیح آموزش می‌دهید: به مدل داده‌های برچسب‌دار می‌دهید تا بعداً برای داده‌ی بی‌برچسب حدس بزند (طبقه‌بندی ایمیل هرز، پیش‌بینی قیمت). بی‌نظارت یعنی بدون جواب، فقط الگوها را کشف می‌کند: خوشه‌بندی مشتری‌ها یا کاهش ابعاد داده.",
        en: "Supervised means training with the answer key: you feed labeled data so the model can later guess on unlabeled data (spam detection, price prediction). Unsupervised means no answer key — the model discovers structure on its own: clustering customers, reducing dimensions.",
      },
      steps: [
        {
          title: { fa: "معلم با جواب‌ها", en: "A teacher with an answer key" },
          detail: {
            fa: "در یادگیری نظارت‌شده هر مثال یک جواب دارد: «این عکس گربه است»، «این ایمیل هرز است». مدل خطای حدسش را با جواب درست می‌سنجد و اصلاح می‌کند.",
            en: "In supervised learning every example comes with an answer: 'this photo is a cat', 'this email is spam'. The model measures its guess against the true answer and corrects itself.",
          },
        },
        {
          title: { fa: "دو خانواده‌ی نظارت‌شده", en: "Two supervised families" },
          detail: {
            fa: "رگرسیون وقتی جواب یک عدد است (قیمت خانه)، طبقه‌بندی وقتی یک کلاس است (گربه/سگ). انتخاب متریک هم متفاوت است: MSE در برابر precision/recall.",
            en: "Regression when the answer is a number (house price); classification when it's a category (cat/dog). Metrics differ too: MSE vs precision/recall.",
          },
        },
        {
          title: { fa: "بدون معلم، خودکاوی", en: "No teacher, self-discovery" },
          detail: {
            fa: "در یادگیری بی‌نظارت داده برچسب ندارد و مدل ساختار پنهان را پیدا می‌کند: مثلاً مشتری‌ها را بدون اینکه بگویید به سه خوشه‌ی «بخران، فصلی، فراری» تقسیم می‌کند.",
            en: "In unsupervised learning the data has no labels and the model finds hidden structure: e.g. splitting customers into 'loyal, seasonal, churned' clusters without you ever naming them.",
          },
        },
        {
          title: { fa: "کاربرد واقعی هرکدام", en: "Real-world uses" },
          detail: {
            fa: "نظارت‌شده: تشخیص تقلب، پیش‌بینی ریزش مشتری، تشخیص بیماری از عکس. بی‌نظارت: سگمنت‌کردن مشتری‌ها، تشخیص داده‌ی غیرعادی، فشرده‌سازی و embeddingها.",
            en: "Supervised: fraud detection, churn prediction, disease detection from images. Unsupervised: customer segmentation, anomaly detection, compression and embeddings.",
          },
        },
        {
          title: { fa: "خانواده‌ی سوم که می‌پرسند", en: "The third family they ask about" },
          detail: {
            fa: "یادگیری تقویتی: ایجنت با آزمون‌وخطا و پاداش یاد می‌گیرد (بازی، ربات). مدل‌های زبانی بزرگ هم ترکیبی‌اند: پیش‌بینی خودمونیتور (بی‌نظارت) + تنظیم با بازخورد انسانی (نظارت‌شده).",
            en: "Reinforcement learning: an agent learns by trial, error and reward (games, robotics). LLMs combine both: self-supervised next-token prediction + human-feedback tuning.",
          },
        },
      ],
      codeExample: {
        language: "python",
        code: `from sklearn.cluster import KMeans
from sklearn.datasets import load_iris

# unsupervised: no labels used at all
X = load_iris().data
kmeans = KMeans(n_clusters=3).fit(X)
print(kmeans.labels_[:10])   # model-discovered groups

# supervised: labels drive the loss
# model.fit(X_train, y_train)`,
        caption: {
          fa: "در خوشه‌بندی هیچ برچسبی به مدل ندادیم",
          en: "Clustering never sees a single label",
        },
      },
      followUps: [
        { fa: "semi-supervised چیست و کی به کار می‌آید؟", en: "What is semi-supervised learning and when is it useful?" },
        { fa: "چرا داده‌ی برچسب‌دار گران است؟", en: "Why is labeled data expensive?" },
      ],
      visual: "ml-training",
    },
    {
      id: "overfitting-and-underfitting",
      question: {
        fa: "بیش‌برازش (overfitting) چیست، چطور تشخیص و درمان می‌شود؟",
        en: "What is overfitting, how do you detect it, and how do you treat it?",
      },
      difficulty: "junior",
      tags: ["ml-basics", "validation", "regularization"],
      quickAnswer: {
        fa: "بیش‌برازش یعنی مدل به‌جای یاد گرفتن قاعده، مثال‌های آموزشی را حفظ کرده — روی داده‌ی دیده‌شده عالی و روی داده‌ی جدید ضعیف. تشخیص: شکاف بین خطای train و validation. درمان: داده‌ی بیشتر، مدل ساده‌تر، regularization، early stopping و cross-validation.",
        en: "Overfitting means the model memorized the training examples instead of learning the rule — great on seen data, poor on new data. Detection: the gap between train and validation error. Treatment: more data, a simpler model, regularization, early stopping and cross-validation.",
      },
      steps: [
        {
          title: { fa: "استعاره‌ی حفظ‌کردن آزمون", en: "The memorizing-the-test metaphor" },
          detail: {
            fa: "دانش‌آموزی که پاسخ‌نامه‌های سال قبل را حفظ کرده در همان آزمون‌ها ۲۰ می‌گیرد ولی در آزمون جدید می‌ترکد. مدل بیش‌برازش‌شده هم دقیقاً همین‌طور است.",
            en: "A student who memorized last year's answer sheets scores 20/20 on those exams but fails the new one. An overfit model behaves exactly the same.",
          },
        },
        {
          title: { fa: "چرا اتفاق می‌افتد", en: "Why it happens" },
          detail: {
            fa: "مدل پیچیده + داده‌ی کم = قدرت تطبیق بیشتر از نیاز واقعی؛ مدل حتی نویز و اتفاق‌های تصادفی داده‌ی آموزش را هم «یاد می‌گیرد»، چون هزینه‌ای برایش ندارد.",
            en: "Complex model + little data = more fitting power than the task needs; the model memorizes even the training noise, because nothing stops it.",
          },
        },
        {
          title: { fa: "تشخیص با دو نمودار", en: "Detecting it with two curves" },
          detail: {
            fa: "خطای train ریز می‌شود ولی خطای validation بالا می‌رود — شکاف معیار حفظ‌کردن است. اگر هر دو خطا بالای بمانند، کم‌برازش است (مدل خیلی ساده).",
            en: "Train error keeps shrinking while validation error climbs — the gap is the signature of memorization. If both stay high, it's underfitting (model too simple).",
          },
        },
        {
          title: { fa: "درمان‌ها به ترتیب اولویت", en: "Treatments, in priority order" },
          detail: {
            fa: "۱) داده‌ی بیشتر یا augmentation. ۲) مدل ساده‌تر (لایه/عمق کمتر). ۳) regularization (L2/dropout). ۴) early stopping وقتی validation بدتر شد. ۵) cross-validation برای تصمیم‌های مطمئن‌تر.",
            en: "1) More data or augmentation. 2) A simpler model (fewer layers/depth). 3) Regularization (L2/dropout). 4) Early stopping when validation worsens. 5) Cross-validation for sturdier decisions.",
          },
        },
        {
          title: { fa: "قانون طلایی جداکردن", en: "The golden rule of splitting" },
          detail: {
            fa: "همیشه سه مجموعه جدا: train برای یادگیری، validation برای تصمیم‌ها، test فقط یک‌بار در پایان. اگر با test بهینه‌سازی کنید، معیار شما لو رفته است.",
            en: "Always keep three splits: train to learn, validation to make decisions, test touched once at the end. If you optimize against test, your metric is compromised.",
          },
        },
      ],
      codeExample: {
        language: "python",
        code: `from sklearn.model_selection import cross_val_score
from sklearn.tree import DecisionTreeClassifier

for depth in (3, 10, None):        # None = unlimited growth
    model = DecisionTreeClassifier(max_depth=depth)
    scores = cross_val_score(model, X, y, cv=5)
    print(depth, round(scores.mean(), 3))
# deep trees memorize: train acc ~1.0, cv acc drops`,
        caption: {
          fa: "مقایسه‌ی عمق درخت با cross-validation، شکاف را نشان می‌دهد",
          en: "Comparing tree depth with cross-validation exposes the gap",
        },
      },
      followUps: [
        { fa: "فرق L1 و L2 regularization؟", en: "L1 vs L2 regularization?" },
        { fa: "در LLMها جلوی بیش‌برازش را چه می‌گیرد؟", en: "In LLMs, what prevents overfitting?" },
      ],
      visual: "ml-training",
    },
    {
      id: "what-are-embeddings",
      question: {
        fa: "embedding چیست و چرا قلب جست‌وجوی معنایی است؟",
        en: "What is an embedding and why is it the heart of semantic search?",
      },
      difficulty: "mid",
      tags: ["embeddings", "nlp", "vectors"],
      quickAnswer: {
        fa: "embedding یعنی تبدیل هر چیز (متن، عکس، محصول) به برداری از اعداد که معنا را نگه می‌دارد: چیزهای هم‌معنا در فضای برداری نزدیک هم می‌افتند. «سفارش من کجاست» و «پیگیری خریدم» با کلمات متفاوت ولی بردارهای نزدیک — برای همین جست‌وجوی معنایی و RAG روی آن سوار است.",
        en: "An embedding turns anything (text, image, product) into a vector of numbers that preserves meaning: similar things land close together in vector space. 'Where is my order' and 'track my purchase' use different words but get near-identical vectors — that's why semantic search and RAG are built on it.",
      },
      steps: [
        {
          title: { fa: "از کلمه به مختصات", en: "From words to coordinates" },
          detail: {
            fa: "مدل آموزش‌دیده، هر جمله را به یک بردار مثلاً ۱۵۳۶ عددی تبدیل می‌کند. مختصات بی‌معنا نیستند: جهت‌گیری‌ها معنا را رمز می‌کنند، مثل مختصات جغرافیایی که «نزدیکی» را نشان می‌دهند.",
            en: "A trained model maps each sentence to a vector of, say, 1536 numbers. The coordinates aren't meaningless: directions encode meaning, like geographic coordinates encode proximity.",
          },
        },
        {
          title: { fa: "فاصله = شباهت معنایی", en: "Distance = semantic similarity" },
          detail: {
            fa: "شباهت را با cosine similarity می‌سنجیم: زاویه‌ی بین دو بردار، نه فاصله‌ی مطلق. بردارهای هم‌جهت یعنی هم‌معنا؛ عمود یعنی بی‌ارتباط.",
            en: "Similarity is measured with cosine similarity: the angle between two vectors, not absolute distance. Same direction = same meaning; perpendicular = unrelated.",
          },
        },
        {
          title: { fa: "چرا از keyword بهتر است", en: "Why it beats keywords" },
          detail: {
            fa: "جست‌وجوی کلمه‌ای فقط match دقیق می‌بیند؛ embedding معنا را می‌بیند. «ماشین» و «خودرو» هیچ حرف مشترکی ندارند ولی بردارشان تقریباً یکی است.",
            en: "Keyword search matches exact tokens; embeddings match meaning. 'Car' and 'automobile' share no letters yet map to nearly the same vector.",
          },
        },
        {
          title: { fa: "کاربردها", en: "Applications" },
          detail: {
            fa: "جست‌وجوی معنایی در محصولات، RAG برای چت‌بات‌های مستندات، خوشه‌بندی بازخورد کاربران، تشخیص تکراری‌ها و سیستم‌های توصیه‌گر.",
            en: "Semantic product search, RAG for documentation chatbots, clustering user feedback, deduplication and recommender systems.",
          },
        },
        {
          title: { fa: "عملیات عملی", en: "The practical mechanics" },
          detail: {
            fa: "همه‌ی متن‌ها با یک مدل embedding به بردار تبدیل و در پایگاه برداری (مثل pgvector) ذخیره می‌شوند؛ در پرس‌وجو، پرسش به بردار تبدیل و نزدیک‌ترین‌ها با ANN (حدوداً نزدیک‌ترین همسایه) پیدا می‌شوند.",
            en: "All texts get embedded by the same model and stored in a vector database (e.g. pgvector); at query time the question is embedded and nearest neighbors are found with ANN search.",
          },
        },
      ],
      codeExample: {
        language: "python",
        code: `from openai import OpenAI
client = OpenAI()

def embed(text):
    return client.embeddings.create(
        model="text-embedding-3-small", input=text
    ).data[0].embedding

q1, q2 = embed("Where is my order?"), embed("Track my purchase")
sim = sum(a * b for a, b in zip(q1, q2))  # ≈ 0.93 → near-identical meaning`,
        caption: {
          fa: "دو جمله‌ی متفاوت، بردارهای تقریباً یکسان",
          en: "Two different sentences, almost identical vectors",
        },
      },
      followUps: [
        { fa: "چرا مدل embedding همه‌ی داده‌ها باید یکی باشد؟", en: "Why must all data use the same embedding model?" },
        { fa: "چگونه embedding را ارزیابی می‌کنید؟", en: "How do you evaluate embedding quality?" },
      ],
      visual: "ml-training",
    },
    {
      id: "rag-vs-fine-tuning",
      question: {
        fa: "کی RAG می‌خواهید و کی fine-tuning؟",
        en: "When do you need RAG vs fine-tuning?",
      },
      difficulty: "mid",
      tags: ["rag", "fine-tuning", "llm"],
      quickAnswer: {
        fa: "RAG برای دانشِ متغیر و اختصاصی است: مستندات را در زمان پرس‌وجو به مدل می‌دهید تا جوابش بر اساس آنها باشد — ارزان، به‌روز، با منبع. fine-tuning برای رفتار و سبک است: فرمت پاسخ، لحن و وظیفه‌ی خاص را در وزن مدل می‌نویسد. قانون: دانش = RAG، رفتار = fine-tune؛ معمولاً اول RAG را کامل کنید.",
        en: "RAG is for up-to-date, proprietary knowledge: you feed documents at query time so answers are grounded in them — cheap, fresh, and citable. Fine-tuning is for behavior and style: it bakes response format, tone and a task into the weights. Rule: knowledge = RAG, behavior = fine-tune; and usually finish RAG first.",
      },
      steps: [
        {
          title: { fa: "مشکلِ دانشِ مدل", en: "The model's knowledge problem" },
          detail: {
            fa: "مدل فقط چیزی می‌داند که در داده‌ی آموزشش بوده؛ درباره‌ی مستندات داخلی شرکت یا قیمت‌های امروز هیچ‌چیز نمی‌داند و اگر بپرسید، با اعتماد به نفس توهم می‌زند.",
            en: "A model only knows its training data: nothing about your internal docs or today's prices — ask anyway and it hallucinates confidently.",
          },
        },
        {
          title: { fa: "RAG: کتابخانه‌ی کنار دست", en: "RAG: a library at hand" },
          detail: {
            fa: "پرسش کاربر → embed → بازیابی چند مستند مرتبط از پایگاه برداری → گذاشتنشان در پرامپت → جوابِ مبتنی بر آن. مدل «همین الان» خوانده و می‌تواند منبع را هم بگوید.",
            en: "User question → embed → retrieve relevant docs from the vector store → put them in the prompt → an answer grounded in them. The model has 'just read' them and can cite sources.",
          },
        },
        {
          title: { fa: "fine-tuning: تغییر شخصیت", en: "Fine-tuning: changing behavior" },
          detail: {
            fa: "در fine-tuning با صدها مثال، وزن‌های مدل را کمی جابه‌جا می‌کنید تا خروجی‌ها به الگوی شما نزدیک شوند: JSON همیشه با این schema، لحن این برند، فرمت این گزارش.",
            en: "Fine-tuning nudges the model's weights with hundreds of examples so outputs match your pattern: JSON always in this schema, this brand's tone, this report's format.",
          },
        },
        {
          title: { fa: "مقایسه از سه زاویه", en: "Three-way comparison" },
          detail: {
            fa: "هزینه/سرعت: RAG ارزان و فوری، fine-tune یک‌بار گران. به‌روزرسانی: در RAG فقط مستند را اضافه کنید؛ در fine-tune دوباره آموزش. اعتماد: RAG قابل‌استناد است، fine-tune پاسخ را «بهتر می‌گوید» ولی منبع ندارد.",
            en: "Cost/speed: RAG is cheap and instant, fine-tuning is a one-time investment. Updates: RAG just adds documents; fine-tune retrains. Trust: RAG cites sources; fine-tune phrases better but can't cite.",
          },
        },
        {
          title: { fa: "ترتیب درست تصمیم", en: "The right decision order" },
          detail: {
            fa: "۱) اول پرامپت مهندسی‌شده‌ی خوب. ۲) اگر دانش لازم است → RAG. ۳) اگر فرمت/سبک هنوز ناپایدار است → fine-tune سبک. ۴) ترکیب هر سه خیلی رایج و موفق است.",
            en: "1) A well-engineered prompt first. 2) Knowledge needed → RAG. 3) Format/style still unstable → light fine-tune. 4) Combining all three is common and works.",
          },
        },
      ],
      codeExample: {
        language: "python",
        code: `# RAG: retrieve → ground → answer
question = user_message
docs = vector_db.similarity_search(embed(question), k=4)

context = "\\n\\n".join(f"[{i+1}] {d.text}" for i, d in enumerate(docs))
answer = llm.chat(
  system="Answer ONLY from the context; cite [n] for every claim.",
  user=f"Context:\\n{context}\\n\\nQuestion: {question}",
)`,
        caption: {
          fa: "پاسخ فقط از مستندات بازیابی‌شده و قابل‌استناد",
          en: "Answers come only from retrieved docs and stay citable",
        },
      },
      followUps: [
        { fa: "بازیابی بد چه بلایی سر RAG می‌آورد؟ چطور بازیابی را ارزیابی می‌کنید؟", en: "What does bad retrieval do to RAG — and how do you evaluate retrieval?" },
        { fa: "chunking را چطور طراحی می‌کنید؟", en: "How do you design chunking?" },
      ],
      visual: "none",
    },
    {
      id: "production-prompt-engineering",
      question: {
        fa: "پرامپت مهندسی برای محصول واقعی چه فرقی با تایپ در چت‌بات دارد؟",
        en: "How does production prompt engineering differ from chatting with a bot?",
      },
      difficulty: "mid",
      tags: ["prompting", "llm", "reliability"],
      quickAnswer: {
        fa: "پرامپت در محصول یک artifact مهندسی است، نه جمله‌ی یک‌بار مصرف: نسخه‌دار در گیت، با نقش و قواعد صریح، فرمت خروجی قابل‌parse، چند مثال (few-shot) و تست‌های خودکار. مثل تابع می‌نویسیدش و مثل کد بازبینی می‌کنید.",
        en: "A production prompt is an engineering artifact, not a one-off sentence: versioned in git, with an explicit role and rules, a parseable output format, few-shot examples and automated tests. You author it like a function and review it like code.",
      },
      steps: [
        {
          title: { fa: "پرامپت = تابع با قرارداد", en: "A prompt = a function with a contract" },
          detail: {
            fa: "ورودی و خروجی پرامپت باید قرارداد داشته باشد: «این فیلدها را می‌گیرم، JSON با این schema برمی‌گردانم». بدن قرارداد، هر تغییر مدل یا متن، کلاینت را می‌شکند.",
            en: "A prompt needs an input/output contract: 'takes these fields, returns JSON with this schema'. Without it, any model or wording change silently breaks clients.",
          },
        },
        {
          title: { fa: "ساختار حرفه‌ای", en: "Professional structure" },
          detail: {
            fa: "بخش‌های ثابت: نقش و هدف، قواعد مطلق (چیزهایی که هرگز)، فرمت خروجی، مثال‌های خوب و بد، و متغیرها به‌صورت {{placeholders}} — نه پرامپتِ رمان‌وار در یک پاراگراف.",
            en: "Fixed sections: role and goal, absolute rules (nevers), output format, good and bad examples, and variables as {{placeholders}} — not one novel-like paragraph.",
          },
        },
        {
          title: { fa: "خروجی قابل‌پارس", en: "Machine-parseable output" },
          detail: {
            fa: "درخواست JSON schema یا structured output کنید و بعد از گرفتن، parse و validate کنید (مثل Zod). برای خطای parse، یک بار تلاش مجدد با پیام خطا — مدل‌ها از اصلاح خوب یاد می‌گیرند.",
            en: "Request a JSON schema / structured output, then parse and validate it (e.g. Zod). On parse failure, retry once feeding the error back — models correct well from error messages.",
          },
        },
        {
          title: { fa: "few-shot به‌جای توضیح طولانی", en: "Few-shot beats long explanations" },
          detail: {
            fa: "دو-سه مثال واقعی از ورودی→خروجی مطلوب معمولاً از ده خط توضیح مؤثرتر است. مثال‌های مرزی (edge case) را هم بدهید تا مدل بداند در مرز چه بخواهد.",
            en: "Two or three real input→output examples usually beat ten lines of prose. Include edge-case examples so the model knows what you want at the boundaries.",
          },
        },
        {
          title: { fa: "تست و نسخه‌بندی", en: "Tests and versioning" },
          detail: {
            fa: "مجموعه‌ی ارزیابی از پرامپت‌های واقعی بسازید (۲۰-۵۰ مورد)، هر تغییر پرامپت را روی آن اجرا کنید و امتیاز را مقایسه کنید. پرامپت در گیت با نسخه است؛ مثل هر کد دیگری.",
            en: "Build an eval set of 20–50 real prompts, run every prompt change against it, and compare scores. Prompts live in git with versions, like any other code.",
          },
        },
      ],
      codeExample: {
        language: "python",
        code: `SYSTEM = """You are a support-ticket classifier.
Rules:
- Return ONLY JSON, no prose.
- categories: billing | bug | howto | other
- If unsure, choose "other" — never invent categories.

Examples:
"I was charged twice"   → {"category": "billing"}
"App crashes on login" → {"category": "bug"}
"""

# parse + validate + one retry on failure
def classify(text):
    for attempt in (1, 2):
        raw = llm.chat(system=SYSTEM, user=text)
        try:
            out = json.loads(raw)
            assert out["category"] in CATEGORIES
            return out
        except Exception as e:
            if attempt == 2: raise
            text = f"{text}\\n\\nYour last reply failed: {e}. Reply with valid JSON only."`,
        caption: {
          fa: "قرارداد صریح + validate + تلاش مجدد = قابلیت اعتماد",
          en: "Explicit contract + validation + one retry = reliability",
        },
      },
      followUps: [
        { fa: "temperature را برای کدام وظایف صفر می‌کنید؟", en: "For which tasks do you set temperature to 0?" },
        { fa: "حمله‌ی prompt injection را چطور محدود می‌کنید؟", en: "How do you limit prompt injection?" },
      ],
      visual: "none",
    },
    {
      id: "evaluating-llm-apps",
      question: {
        fa: "چطور می‌فهمید اپ LLM شما «خوب» کار می‌کند؟ توهم‌زایی را چطور کنترل می‌کنید؟",
        en: "How do you know your LLM app works well? How do you control hallucinations?",
      },
      difficulty: "senior",
      tags: ["evaluation", "hallucination", "quality"],
      quickAnswer: {
        fa: "با یک مجموعه ارزیابی (eval set) از ۵۰-۱۰۰ مورد واقعی + متریک‌های خودکار (دقت دسته‌بندی، شباهت معنایی پاسخ با جواب مرجع، بررسی اینکه ادعاها در منابع هست) و نمونه‌گیری انسانی دوره‌ای. توهم‌زایی را هم با grounding حذف نمی‌کنید، کم می‌کنید: RAG با منابع، اجبار به استناد، محدود کردن پاسخ به context و اعتبارسنجی خروجی.",
        en: "With an eval set of 50–100 real cases plus automated metrics (classification accuracy, semantic similarity to reference answers, claim-grounding checks) and periodic human review. You don't eliminate hallucinations — you reduce them: RAG with sources, mandatory citations, restricting answers to the context, and output validation.",
      },
      steps: [
        {
          title: { fa: "بدون eval، تغییر = قمار", en: "Without evals, every change is a gamble" },
          detail: {
            fa: "اگر متریک نداشته باشید، هر تغییر پرامپت/مدل فقط «حس می‌شود» بهتر یا بدتر. eval set یعنی عدد: قبل و بعد از هر تغییر یک امتیاز مقایسه‌پذیر.",
            en: "Without metrics, every prompt or model change just 'feels' better or worse. An eval set gives you a number: a comparable score before and after every change.",
          },
        },
        {
          title: { fa: "eval set را چطور می‌سازید", en: "Building the eval set" },
          detail: {
            fa: "از لاگ‌های واقعی بگیرید: سوال‌های فراوان، سوال‌های مرزی، سوال‌های خراب. برای هر مورد جواب مرجع یا معیار قبول بنویسید. ۵۰ مورد خوب بهتر از ۵۰۰ مورد تصادفی است.",
            en: "Mine real logs: frequent questions, edge cases, failures. For each, write a reference answer or acceptance rule. 50 well-chosen cases beat 500 random ones.",
          },
        },
        {
          title: { fa: "متریک‌های خودکار", en: "Automated metrics" },
          detail: {
            fa: "برای وظایف مشخص: دقت، recall، فرمت معتبر. برای متن آزاد: شباهت معنایی با جواب مرجع، یا LLM-as-judge (یک مدل قوی با rubric امتیاز می‌دهد) — که خودش باید با نمونه‌ی انسانی کالیبره شود.",
            en: "For specific tasks: accuracy, recall, valid-format rate. For free text: semantic similarity to references, or LLM-as-judge (a stronger model scoring with a rubric) — calibrated against human samples.",
          },
        },
        {
          title: { fa: "کنترل توهم‌زایی", en: "Controlling hallucination" },
          detail: {
            fa: "توهم‌زایی ذات مدل است، ولی ریسک را می‌شود پایین آورد: پاسخ فقط از context بازیابی‌شده، استناد اجباری به منبع، پرسش «اگر در منابع نیست بگو نمی‌دانم»، و چک خودکار اینکه ادعاهای عددی در منبع موجودند.",
            en: "Hallucination is inherent, but risk drops: answer only from retrieved context, require citations, instruct 'say you don't know if the sources lack it', and auto-check that numeric claims exist in sources.",
          },
        },
        {
          title: { fa: "پایش در پروداکشن", en: "Monitoring in production" },
          detail: {
            fa: "در لاگ: تعداد «نمی‌دانم»، شکایت‌ها، نرخ regen. نمونه‌برداری هفتگی از مکالمات واقعی برای بازبینی انسانی. بازخورد کاربر (👍/👎) را به صف بازبینی و بعد به eval set وصل کنید.",
            en: "Track 'I don't know' rates, complaints, regenerate counts in logs. Sample real conversations weekly for human review. Wire user 👍/👎 into a review queue that feeds new eval cases.",
          },
        },
      ],
      codeExample: {
        language: "python",
        code: `# automated grounding check on every answer
def is_grounded(answer: str, sources: list[str]) -> bool:
    # every numeric claim in the answer must exist in a source
    numbers = re.findall(r"\\d+[\\d,.%]*", answer)
    blob = " ".join(sources)
    missing = [n for n in numbers if n not in blob]
    if missing:
        log.warning("ungrounded claims", missing=missing)
        return False
    return True

# run on the eval set nightly; alert when pass rate drops`,
        caption: {
          fa: "هر ادعای عددی باید در منابع باشد — وگرنه رد",
          en: "Every numeric claim must exist in the sources — otherwise reject",
        },
      },
      followUps: [
        { fa: "LLM-as-judge چه سوگیری‌هایی دارد؟", en: "What biases does LLM-as-judge have?" },
        { fa: "A/B testing در اپ LLM چطور انجام می‌شود؟", en: "How do you A/B test an LLM app?" },
      ],
      visual: "none",
    },
  ],
};
