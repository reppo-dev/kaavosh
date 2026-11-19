import type { GlossaryTerm } from "../../schema";

/** DATA FILE — Glossary terms (algorithms & data structures). Merged into terms.ts → /glossary page. */
export const moreAlgorithmsTerms: GlossaryTerm[] = [
  {
    term: "Big-O Notation",
    fa: "نماد بیگ-او",
    category: "algorithms",
    definition: {
      fa: "بیگ-او زبان توصیف رشد هزینه‌ی الگوریتم نسبت به ورودی است: O(1) ثابت، O(log n) لگاریتمی، O(n) خطی، O(n²) درجه‌دو. به سرعت مطلق نمی‌گوید؛ به «چقدر بدتر می‌شوی وقتی ورودی بزرگ شود» می‌گوید.",
      en: "Big-O describes how an algorithm's cost grows with input size: O(1) constant, O(log n) logarithmic, O(n) linear, O(n²) quadratic. It says nothing about absolute speed — only how badly it degrades as input grows.",
    },
    analogy: {
      fa: "مثل انتخاب بین پله و آسانسور برای طبقه‌ی ۳ یا ۳۰: برای طبقه‌ی ۳ فرق مهم نیست؛ برای ۳۰، نرخ رشد هزینه تصمیم می‌گیرد — همان کاری که بیگ-او با الگوریتم می‌کند.",
      en: "Like choosing stairs vs an elevator for floor 3 or floor 30: at floor 3 it barely matters; at 30 the growth rate decides — exactly what Big-O measures for algorithms.",
    },
    related: ["Algorithm", "Sorting Algorithm", "Binary Search"],
  },
  {
    term: "Sorting Algorithm",
    fa: "الگوریتم مرتب‌سازی",
    category: "algorithms",
    definition: {
      fa: "الگوریتم‌هایی که یک لیست را مرتب می‌کنند و بین‌شان جدی فرق است: QuickSort و MergeSort به‌طور متوسط O(n log n) هستند، BubbleSort با O(n²) فقط برای آموزش خوب است. پایداری (استابل بودن) و مصرف حافظه هم ملاک انتخاب‌اند.",
      en: "Algorithms that order a list, with very different costs: QuickSort and MergeSort average O(n log n), while BubbleSort's O(n²) is only good for teaching. Stability and memory use matter when choosing too.",
    },
    analogy: {
      fa: "مثل مرتب‌کردن دست ورق: می‌توانی تک‌تک با همه مقایسه کنی (کند ولی ساده) یا دست را نصف کنی، هر نصفه را مرتب و بعد ادغام کنی (سریع‌تر، مثل MergeSort).",
      en: "Like sorting a deck of cards: compare every card against every other (slow but simple), or split the deck, sort halves and merge them (faster — that's MergeSort).",
    },
    related: ["Big-O Notation", "Algorithm", "Binary Search"],
  },
  {
    term: "Binary Search",
    fa: "جست‌وجوی دودویی",
    category: "algorithms",
    definition: {
      fa: "در داده‌ی مرتب، وسط را نگاه می‌کنی و نصف داده را یک‌جا کنار می‌گذاری؛ بعد دوباره وسطِ باقی‌مانده. با هر قدم فضای جست‌وجو نصف می‌شود — O(log n). شرطش این است که داده مرتب باشد.",
      en: "On sorted data, look at the middle and discard half in one move; then repeat on the remainder. Each step halves the search space — O(log n). The catch: the data must be sorted.",
    },
    analogy: {
      fa: "مثل بازی «عددت را حدس بزن» با جواب بیشتر/کمتر: هر حدس هوشمند نصف گزینه‌ها را حذف می‌کند؛ از یک میلیون عدد در ۲۰ حدس می‌رسی.",
      en: "Like the 'guess my number, higher/lower' game: each smart guess halves the options — a million numbers fall in about 20 guesses.",
    },
    related: ["Sorting Algorithm", "Big-O Notation", "Tree"],
  },
  {
    term: "Hash Table",
    fa: "جدول درهم‌ساز",
    category: "algorithms",
    definition: {
      fa: "جدول درهم‌ساز با یک تابع هش، کلید را به خانه‌ای در حافظه تبدیل می‌کند تا دسترسی به مقدار تقریباً O(1) شود. برخورد دو کلید در یک خانه (collision) با زنجیره یا پروبینگ مدیریت می‌شود.",
      en: "A hash table converts a key into a memory slot via a hash function so lookups cost ~O(1). Two keys landing in the same slot (a collision) are handled by chaining or probing.",
    },
    analogy: {
      fa: "مثل کمد رخت با شماره‌ی خودکار: ژاکتت را می‌دهی، شماره‌ای می‌گیری و دقیقاً می‌دانی کدام خانه مال توست — بدون گشتن بین هزار کمد.",
      en: "Like a coat-check that assigns numbers: hand over the coat, get a number, and walk straight to the right cubby — never searching a thousand lockers.",
    },
    related: ["Big-O Notation", "Index", "Encryption"],
  },
  {
    term: "Stack",
    fa: "پشته",
    category: "algorithms",
    definition: {
      fa: "پشته ساختاری LIFO است: آخرین چیزی که می‌گذاری، اول بیرون می‌آید. فراخوانی توابع، undo وردپرس و بررسی پرانتزهای متوازن همگی با پشته حل می‌شوند.",
      en: "A stack is LIFO: the last item in is the first out. Function calls, undo history and balanced-parentheses checks are all stacks.",
    },
    analogy: {
      fa: "مثل دسته‌ی بشقاب: بشقابی که آخر روی هم گذاشته شده، اول برداشته می‌شود؛ به بشقاب پایینی نمی‌رسی مگر بالایی‌ها را برداری.",
      en: "Like a stack of plates: the last plate placed is the first taken; you can't reach the bottom without removing the top ones.",
    },
    related: ["Queue", "Recursion", "Big-O Notation"],
  },
  {
    term: "Queue",
    fa: "صف",
    category: "algorithms",
    definition: {
      fa: "صف ساختاری FIFO است: اولین کسی که آمده، اول خدمت می‌شود. صف رویداد جاوااسکریپت، صف پیام سیستم‌ها و پیمایش سطح‌اول BFS همگی از همین ساختار استفاده می‌کنند.",
      en: "A queue is FIFO: first in, first served. JavaScript's event queue, system message queues and BFS traversal all use it.",
    },
    analogy: {
      fa: "مثل نانوایی: هر که زودتر در صف ایستاده، زودتر نان می‌گیرد — ترتیب ورود، ترتیب خدمت را تعیین می‌کند.",
      en: "Like a bakery line: whoever joined first gets served first — arrival order defines service order.",
    },
    related: ["Stack", "BFS", "Message Queue"],
  },
  {
    term: "Linked List",
    fa: "لیست پیوندی",
    category: "algorithms",
    definition: {
      fa: "لیست پیوندی گره‌هایی است که هر کدام مقدار و اشاره‌گر به گره بعدی دارند. درج و حذف وسط لیست O(1) است؛ ولی دسترسی تصادفی به خانه‌ی n باید از اول راه برود — O(n).",
      en: "A linked list is nodes where each holds a value and a pointer to the next. Insert/delete in the middle is O(1), but reaching item n requires walking from the head — O(n).",
    },
    analogy: {
      fa: "مثل گرده‌مایی «شکار گنج» که هر سرنخ، آدرس سرنخ بعدی را دارد؛ نمی‌توانی مستقیم بروی سرنخ ۵۰ — باید مسیر را از اول طی کنی.",
      en: "Like a treasure hunt where every clue holds the address of the next: you can't jump to clue 50 — you must walk the chain.",
    },
    related: ["Array", "Stack", "Queue"],
  },
  {
    term: "Tree",
    fa: "درخت",
    category: "algorithms",
    definition: {
      fa: "درخت ساختاری سلسله‌مراتبی است: یک ریشه و گره‌هایی با فرزند، بدون حلقه. DOM، سیستم فایل و BST (درخت جست‌وجوی دودویی که فرزند چپ کوچک‌تر و راست بزرگ‌تر است) نمونه‌هایش‌اند.",
      en: "A tree is a hierarchy: one root, nodes with children, no cycles. The DOM, file systems and BSTs (left child smaller, right child larger) are all trees.",
    },
    analogy: {
      fa: "مثل شجره‌نامه‌ی خانواده: از جد به نسل‌ها؛ هر شاخه مسیر مشخصی دارد و برای رسیدن به یک شخص، از ریشه دنبالش می‌کنی.",
      en: "Like a family tree: from ancestors down through generations; to find one person you follow the path from the root.",
    },
    related: ["Graph", "Binary Search", "DOM"],
  },
  {
    term: "Graph",
    fa: "گراف",
    category: "algorithms",
    definition: {
      fa: "گراف مجموعه‌ای از گره‌ها و یال‌هایی است که هر دو را به هم وصل می‌کند — با جهت یا بدون جهت و حتی با وزن. شبکه‌های اجتماعی، نقشه‌ی مسیرها و وابستگی بسته‌ها گراف‌اند.",
      en: "A graph is nodes connected by edges — directed or undirected, weighted or not. Social networks, route maps and package dependencies are graphs.",
    },
    analogy: {
      fa: "مثل نقشه‌ی مترو: ایستگاه‌ها گره و خطوط بین‌شان یال‌اند؛ «کوتاه‌ترین مسیر از A به B» همان مسئله‌ی کلاسیک گراف است.",
      en: "Like a metro map: stations are nodes, lines are edges; 'shortest path from A to B' is the classic graph problem.",
    },
    related: ["BFS", "DFS", "Tree"],
  },
  {
    term: "BFS",
    fa: "پیمایش سطح‌اول",
    category: "algorithms",
    definition: {
      fa: "BFS از گره شروع می‌کند و مثل موج، همه‌ی همسایه‌ها را لایه‌به‌لایه با کمک صف بررسی می‌کند. برای «کوتاه‌ترین مسیر در گراف بدون وزن» جواب بهینه می‌دهد.",
      en: "BFS starts at a node and explores neighbors layer by layer using a queue. It gives the shortest path in unweighted graphs.",
    },
    analogy: {
      fa: "مثل انتشار خبر در یک جمع: اول همه‌ی دوستان مستقیم می‌شنوند، بعد دوستانِ دوستان — موج وار، لایه به لایه.",
      en: "Like news spreading through a crowd: direct friends hear first, then friends-of-friends — a wave, layer by layer.",
    },
    related: ["DFS", "Graph", "Queue"],
  },
  {
    term: "DFS",
    fa: "پیمایش عمق‌اول",
    category: "algorithms",
    definition: {
      fa: "DFS از هر شاخه تا تهِ آن می‌رود و بعد برمی‌گردد سراغ شاخه‌ی بعدی — با پشته یا بازگشت. برای «وجود مسیر»، شمارش جزیره‌ها و جست‌وجوی درخت‌ها عالی است.",
      en: "DFS dives to the end of each branch before backtracking to the next — via a stack or recursion. Great for 'does a path exist', counting islands and tree traversal.",
    },
    analogy: {
      fa: "مثل گشتن در هزارتوی کاغذی: تا انتهای هر راه می‌روی؛ بن‌بست که شد، به آخرین انشعاب برمی‌گردی و راه بعدی را امتحان می‌کنی.",
      en: "Like walking a paper maze: follow each corridor to its end; at a dead end, backtrack to the last junction and try the next way.",
    },
    related: ["BFS", "Graph", "Recursion"],
  },
  {
    term: "Dynamic Programming",
    fa: "برنامه‌نویسی پویا",
    category: "algorithms",
    definition: {
      fa: "DP مسئله را به زیرمسئله‌های هم‌پوشان می‌شکند، جواب هر زیرمسئله را یک‌بار حساب و ذخیره می‌کند (memoization یا جدول) و از پایین می‌چیند. مسائل پیچیده را از نمایی به چندجمله‌ای می‌برد.",
      en: "DP breaks a problem into overlapping subproblems, computes and stores each answer once (memoization or a table), and builds bottom-up — turning exponential blow-ups into polynomial ones.",
    },
    analogy: {
      fa: "مثل حل یک مساله ریاضی چندمرحله‌ای که نتایج میانی را دفتر می‌کنی؛ هر بار به نتیجه‌ی میانی نیاز شد، دوباره حساب نمی‌کنی — ورق می‌زنی و می‌خوانی.",
      en: "Like solving a multi-step math problem while jotting intermediate results in a notebook: whenever needed again, you flip pages instead of recomputing.",
    },
    related: ["Recursion", "Big-O Notation", "Algorithm"],
  },
  {
    term: "Two Pointers",
    fa: "دو اشاره‌گر",
    category: "algorithms",
    definition: {
      fa: "الگوی دو اشاره‌گر: دو اندیس روی آرایه که از دو سر به هم نزدیک می‌شوند یا با سرعت متفاوت جلو می‌روند؛ جفت‌ها و زیرآرایه‌ها را بدون حلقه‌ی تو در تو پیدا می‌کند — O(n) به‌جای O(n²).",
      en: "The two-pointers pattern: two indices moving toward each other or at different speeds find pairs and subarrays without nested loops — O(n) instead of O(n²).",
    },
    analogy: {
      fa: "مثل دو نفر از دو سر یک طناب جمع می‌کنند تا وسط برسند؛ به‌جای اینکه یک نفر تک‌تک از همه‌ی نقاط چک کند.",
      en: "Like two people coiling a rope from both ends until they meet in the middle — instead of one person checking every point alone.",
    },
    related: ["Array", "Sliding Window", "Big-O Notation"],
  },
  {
    term: "Sliding Window",
    fa: "پنجره‌ی سرسره‌ای",
    category: "algorithms",
    definition: {
      fa: "پنجره‌ی سرسره‌ای یک بازه‌ی متحرک روی آرایه/رشته است: به‌جای محاسبه‌ی دوباره‌ی کامل هر پنجره، هنگام جابه‌جایی فقط عنصر واردشده را اضافه و خارج‌شده را کم می‌کنی — از O(n×k) به O(n).",
      en: "A sliding window is a moving range over an array/string: instead of recomputing each window fully, add the entering element and drop the leaving one — O(n×k) becomes O(n).",
    },
    analogy: {
      fa: "مثل قطار که از کنار مغازه می‌گذرد: به‌جای شمردن دوباره‌ی همه‌ی вагون‌ها در هر فریم، فقط یک вагون از جلو اضافه و یکی از عقب کم می‌کنی.",
      en: "Like a train passing a shop window: instead of recounting every carriage each frame, add one at the front and drop one at the back.",
    },
    related: ["Two Pointers", "Array", "Big-O Notation"],
  },
  {
    term: "Heap",
    fa: "هیپ",
    category: "algorithms",
    definition: {
      fa: "هیپ درختی نیمه‌مرتب است که بزرگ‌ترین (یا کوچک‌ترین) عنصر همیشه ریشه است: درج و حذف ریشه در O(log n) و دیدن ریشه O(1). صف اولویت و «K تا ابر» و مرتب‌سازی heapsort از آن ساخته می‌شوند.",
      en: "A heap is a semi-ordered tree where the largest (or smallest) element is always the root: insert/remove-root in O(log n), peek in O(1). Priority queues, 'top-K' and heapsort are built on it.",
    },
    analogy: {
      fa: "مثل تورنمنت تک‌حذفی که برنده همیشه بالای جدول است؛ اضافه‌شدن بازیکن جدید فقط چند جابه‌جایی ناحیه‌ای لازم دارد، نه یک مرتب‌سازی کامل.",
      en: "Like a single-elimination tournament where the champion always sits on top: adding a new player only reshuffles a few local spots — never a full re-sort.",
    },
    related: ["Sorting Algorithm", "Queue", "Big-O Notation"],
  },
];
