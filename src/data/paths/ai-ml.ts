import type { LearningPath } from "../schema";

/**
 * DATA FILE — Learning Path. Consumed by: /paths grid page,
 * /paths/[slug] roadmap page, landing page paths preview.
 */
export const aiMlPath: LearningPath = {
  slug: "ai-ml",
  icon: "brain-circuit",
  accent: "violet",
  title: { fa: "هوش مصنوعی و یادگیری ماشین", en: "AI & Machine Learning" },
  tagline: {
    fa: "به ماشین یاد بدهید از داده الگو بگیرد",
    en: "Teach machines to learn patterns from data",
  },
  description: {
    fa: "یادگیری ماشین یعنی به‌جای نوشتن قوانین، مثال‌ها را به مدل نشان دهید تا خودش قوانین را کشف کند. این مسیر با پایتون و آشنایی با داده شروع می‌شود، به یادگیری ماشین کلاسیک و شبکه‌های عصبی می‌رسد و با ساختن اپ‌های مبتنی بر LLM تمام می‌شود.",
    en: "Machine learning means instead of writing rules, you show a model examples and let it discover the rules. This path starts with Python and data literacy, moves through classical ML and neural networks, and ends with building LLM-powered apps.",
  },
  level: "beginner",
  totalDuration: { fa: "حدود ۸ تا ۱۲ ماه", en: "About 8–12 months" },
  roles: [
    { fa: "مهندس یادگیری ماشین جونیور", en: "Junior ML Engineer" },
    { fa: "دانشمند داده", en: "Data Scientist" },
    { fa: "مهندس هوش مصنوعی (LLM)", en: "AI (LLM) Engineer" },
    { fa: "تحلیل‌گر داده", en: "Data Analyst" },
  ],
  stages: [
    {
      id: "python-and-math",
      title: { fa: "پایتون و شهود ریاضی", en: "Python & math intuition" },
      duration: { fa: "۵ تا ۷ هفته", en: "5–7 weeks" },
      summary: {
        fa: "پایتون زبان اول این دنیاست. ریاضی لازم هم ترسناک نیست: بردار یعنی لیست اعداد، ماتریس یعنی جدول اعداد، و مشتق یعنی «این عدد به کدام سمت دارد می‌رود؟»",
        en: "Python is this world's first language. The math isn't scary either: a vector is a list of numbers, a matrix is a table of numbers, and a derivative means 'which way is this number heading?'",
      },
      topics: ["Python", "NumPy", "Linear Algebra", "Probability", "Pandas"],
      skills: [
        {
          fa: "با NumPy روی آرایه‌ها حساب کنید",
          en: "Compute over arrays with NumPy",
        },
        {
          fa: "داده را با pandas تمیز و بررسی کنید",
          en: "Clean and explore data with pandas",
        },
        {
          fa: "نمودارهای مفید از داده بکشید",
          en: "Draw meaningful charts from data",
        },
      ],
      resources: [
        {
          title: { fa: "آموزش رسمی پایتون", en: "Python official tutorial" },
          url: "https://docs.python.org/3/tutorial/",
          type: "docs",
        },
        {
          title: { fa: "دوره‌های Kaggle Learn", en: "Kaggle Learn — free micro-courses" },
          url: "https://www.kaggle.com/learn",
          type: "interactive",
        },
        {
          title: { fa: "CS50P — پایتون", en: "CS50P — Introduction to Programming with Python" },
          url: "https://cs50.harvard.edu/python/",
          type: "course",
        },
      ],
      visual: "none",
    },
    {
      id: "data-wrangling",
      title: { fa: "داده را بشناسید و آماده کنید", en: "Know and prepare your data" },
      duration: { fa: "۴ تا ۵ هفته", en: "4–5 weeks" },
      summary: {
        fa: "۸۰ درصد کار واقعی، تمیز کردن داده است: خانه‌های خالی، داده‌های تکراری و ستون‌هایی که عدد نیستند ولی باید باشند. مدل خوب با داده بد، جواب بد می‌دهد.",
        en: "80% of the real job is cleaning data: empty cells, duplicates, and columns that should be numbers but aren't. A great model with bad data gives bad answers.",
      },
      topics: ["EDA", "Visualization", "Feature Engineering", "Data Cleaning"],
      skills: [
        {
          fa: "یک دیتاست واقعی را تحلیل اکتشافی کنید",
          en: "Run exploratory analysis on a real dataset",
        },
        {
          fa: "ویژگی‌های جدید و مفید بسازید",
          en: "Engineer new, useful features",
        },
        {
          fa: "بایاس داده را تشخیص دهید",
          en: "Spot bias in your data",
        },
      ],
      resources: [
        {
          title: { fa: "Kaggle Learn — pandas", en: "Kaggle Learn — pandas" },
          url: "https://www.kaggle.com/learn/pandas",
          type: "interactive",
        },
        {
          title: { fa: "Kaggle Learn — Data Visualization", en: "Kaggle Learn — Data Visualization" },
          url: "https://www.kaggle.com/learn/data-visualization",
          type: "interactive",
        },
        {
          title: { fa: "مستندات pandas", en: "pandas official documentation" },
          url: "https://pandas.pydata.org/docs/",
          type: "docs",
        },
      ],
      visual: "none",
    },
    {
      id: "classical-ml",
      title: { fa: "یادگیری ماشین کلاسیک", en: "Classical machine learning" },
      duration: { fa: "۶ تا ۸ هفته", en: "6–8 weeks" },
      summary: {
        fa: "اینجا مدل‌ها را می‌سازید که از مثال یاد می‌گیرند: رگرسیون برای پیش‌بینی عدد، درخت تصمیم برای طبقه‌بندی، و مهم‌تر از همه — تشخیص وقتی مدل حفظ کرده ولی یاد نگرفته (overfitting).",
        en: "Here you build models that learn from examples: regression to predict numbers, decision trees to classify, and — most importantly — spotting when a model memorized instead of learned (overfitting).",
      },
      topics: ["Regression", "Classification", "scikit-learn", "Cross-Validation", "Metrics"],
      skills: [
        {
          fa: "مدل را آموزش داده و ارزیابی کنید",
          en: "Train and evaluate a model properly",
        },
        {
          fa: "بیش‌برازش را تشخیص دهید و درمان کنید",
          en: "Detect and treat overfitting",
        },
        {
          fa: "متریک درست را برای مسئله انتخاب کنید",
          en: "Choose the right metric for the problem",
        },
      ],
      resources: [
        {
          title: { fa: "Kaggle Learn — Intro to ML", en: "Kaggle Learn — Intro to Machine Learning" },
          url: "https://www.kaggle.com/learn/intro-to-machine-learning",
          type: "interactive",
        },
        {
          title: { fa: "مستندات scikit-learn", en: "scikit-learn official documentation" },
          url: "https://scikit-learn.org/stable/user_guide.html",
          type: "docs",
        },
        {
          title: { fa: "roadmap.sh — AI و Data Scientist", en: "roadmap.sh — AI & Data Scientist" },
          url: "https://roadmap.sh/ai-data-scientist",
          type: "roadmap",
        },
      ],
      visual: "ml-training",
    },
    {
      id: "deep-learning",
      title: { fa: "یادگیری عمیق و شبکه‌های عصبی", en: "Deep learning & neural networks" },
      duration: { fa: "۶ تا ۸ هفته", en: "6–8 weeks" },
      summary: {
        fa: "شبکه عصبی لایه‌هایی از محاسبات ساده است که با هم الگوهای پیچیده می‌سازند — مثل اینکه هزار سلول مغزی ساده، یک فکر پیچیده می‌سازند. اینجا با PyTorch مدل می‌سازید و آموزش می‌دهید.",
        en: "A neural network is layers of simple computations that together capture complex patterns — like many simple brain cells forming one complex thought. You build and train models with PyTorch.",
      },
      topics: ["Neural Networks", "PyTorch", "CNN", "Transformers", "Embeddings"],
      skills: [
        {
          fa: "شبکه عصبی ساده را از صفر آموزش دهید",
          en: "Train a simple neural network from scratch",
        },
        {
          fa: "حلقه آموزش (training loop) را بنویسید",
          en: "Write the training loop yourself",
        },
        {
          fa: "نقش اَتِنشن و ترنسفورمرها را توضیح دهید",
          en: "Explain attention and transformers",
        },
      ],
      resources: [
        {
          title: { fa: "آموزش رسمی PyTorch", en: "PyTorch official tutorials" },
          url: "https://pytorch.org/tutorials/",
          type: "docs",
        },
        {
          title: { fa: "Kaggle Learn — Deep Learning", en: "Kaggle Learn — Deep Learning" },
          url: "https://www.kaggle.com/learn/intro-to-deep-learning",
          type: "interactive",
        },
        {
          title: { fa: "دوره‌های Hugging Face", en: "Hugging Face Learn" },
          url: "https://huggingface.co/learn",
          type: "course",
        },
      ],
      visual: "ml-training",
    },
    {
      id: "llm-apps",
      title: { fa: "ساختن اپ با LLMها", en: "Building apps with LLMs" },
      duration: { fa: "۵ تا ۶ هفته", en: "5–6 weeks" },
      summary: {
        fa: "مدل‌های زبانی بزرگ APIهایی هستند که زبان می‌فهمند و تولید می‌کنند. اینجا یاد می‌گیرید مهندسی پرامپت تمیز بنویسید، با RAG دانش اختصاصی بدهید، خروجی را ارزیابی کنید و توهم‌زایی را مدیریت کنید.",
        en: "Large language models are APIs that understand and produce language. You learn clean prompt engineering, grounding them in your own data with RAG, evaluating outputs, and managing hallucinations.",
      },
      topics: ["LLM", "Prompting", "RAG", "Embeddings", "Evaluation", "Agents"],
      skills: [
        {
          fa: "چت‌باتی روی مستندات خودتان بسازید",
          en: "Build a chatbot over your own docs",
        },
        {
          fa: "پرامپت‌های قابل تست و نسخه‌پذیر بنویسید",
          en: "Write testable, versioned prompts",
        },
        {
          fa: "کیفیت خروجی را با مجموعه ارزیابی بسنجید",
          en: "Measure output quality with an eval set",
        },
      ],
      resources: [
        {
          title: { fa: "Hugging Face Learn — LLM Course", en: "Hugging Face LLM Course" },
          url: "https://huggingface.co/learn/llm-course/chapter1/1",
          type: "course",
        },
        {
          title: { fa: "دوره عمومی مهندسی پرامپت DeepLearning.AI", en: "DeepLearning.AI — Prompt Engineering short course" },
          url: "https://www.deeplearning.ai/short-courses/",
          type: "course",
        },
        {
          title: { fa: "مستندات OpenAI API", en: "OpenAI API documentation" },
          url: "https://platform.openai.com/docs",
          type: "docs",
        },
      ],
      visual: "ml-training",
    },
  ],
};
