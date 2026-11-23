import type { GlossaryTerm } from "../../schema";

/** Algorithms glossary expansion — Topological Sort, Monotonic Stack, Bellman-Ford, A*, Floyd-Warshall, Prefix Sum, Trie/String & Intervals. Consumed by: src/data/glossary/terms.ts. */
export const moreAlgorithmsTerms4: GlossaryTerm[] = [
  {
    term: "Topological Sort",
    fa: "مرتب‌سازی توپولوژیک",
    category: "algorithms",
    definition: {
      fa: "مرتب‌سازی خطی گره‌های یک گراف جهت‌دار بدون دور (DAG) به‌طوری که برای هر وابستگی `u → v`، گره `u` پیش از `v` قرار گیرد. در ترتیب بیلد پکیج‌ها، پیش‌نیاز دروس و زمان‌بندی تسک‌ها کاربرد دارد.",
      en: "A linear ordering of vertices in a directed acyclic graph (DAG) where every prerequisite edge u -> v places u before v — essential for build systems, package managers, and task scheduling.",
    },
    analogy: {
      fa: "مثل ترتیب پوشیدن لباس‌ها یا گذراندن دروس پیش‌نیاز دانشگاه: اول ریاضی ۱، بعد ریاضی ۲، و اگر دور وجود داشته باشد ترتیب ممکن نیست.",
      en: "Like planning college prerequisites: take Intro before Advanced — and if a circular dependency exists, no valid order exists.",
    },
    related: ["Graph", "BFS", "DFS", "Cycle Detection"],
  },
  {
    term: "Monotonic Stack",
    fa: "پشتهٔ یکنوا (Monotonic Stack)",
    category: "algorithms",
    definition: {
      fa: "پشته‌ای که عناصر داخل آن همیشه به‌صورت صعودی یا نزولی مرتب نگه داشته می‌شوند؛ با هر عنصر جدید، عناصر ناقض شرط pop می‌شوند تا مسائلی مثل «اولین عنصر بزرگ‌تر بعدی» یا «بزرگ‌ترین مستطیل هیستوگرام» در زمان O(n) حل شوند.",
      en: "A stack whose elements stay strictly increasing or decreasing by popping violating items on push, solving 'next greater element' and histogram area problems in O(n) time.",
    },
    analogy: {
      fa: "مثل صف تماشاگرانی که هرکس کوتاه‌تر از نفر پشتش باشد کنار می‌رود تا هر نفر فقط اولین فرد بلندتر مقابلش را ببیند.",
      en: "Like a line where anyone shorter than the newcomer steps out, leaving every element paired directly with its next taller neighbor.",
    },
    related: ["Stack", "Time Complexity", "Sliding Window"],
  },
  {
    term: "Prefix Sum",
    fa: "مجموع پیشوندی (Prefix Sum)",
    category: "algorithms",
    definition: {
      fa: "آرایه‌ای کمکی که هر خانهٔ آن جمع عناصر از ابتدای آرایه تا آن اندیس است؛ پس از O(n) پیش‌پردازش، مجموع هر زیرآرایهٔ `[l..r]` در زمان ثابت O(1) با `prefix[r+1] - prefix[l]` محاسبه می‌شود.",
      en: "A precomputed array storing cumulative sums from index 0; after O(n) setup, any range sum [l..r] is answered in O(1) via prefix[r+1] - prefix[l].",
    },
    analogy: {
      fa: "مثل کیلومترشمار خودرو: برای دانستن مسافت بین شهر A و B کافی است عدد کیلومترشمار در B را منهای A کنید.",
      en: "Like a car odometer: to find the distance between two stops, just subtract the two readings.",
    },
    related: ["Array", "Sliding Window", "Fenwick Tree", "Segment Tree"],
  },
  {
    term: "Bellman-Ford Algorithm",
    fa: "الگوریتم بلمن-فورد",
    category: "algorithms",
    definition: {
      fa: "الگوریتم یافتن کوتاه‌ترین مسیر از یک مبدأ به همهٔ گره‌ها که برخلاف دایکسترا با یال‌های دارای وزن منفی نیز کار می‌کند و می‌تواند دور منفی (Negative Cycle) را در زمان O(V·E) تشخیص دهد.",
      en: "A single-source shortest-path algorithm that handles negative edge weights (unlike Dijkstra's) and detects negative-weight cycles in O(V * E) time.",
    },
    analogy: {
      fa: "مثل بررسی همهٔ مسیرهای پرواز در V−1 دور متوالی تا حتی تخفیف‌های منفی هم در کمترین هزینه لحاظ شوند.",
      en: "Like relaxing every flight route V-1 times so even cashback rebates (negative weights) propagate accurately.",
    },
    related: ["Dijkstra's Algorithm", "Graph", "Dynamic Programming", "Cycle Detection"],
  },
  {
    term: "A* Search",
    fa: "الگوریتم جستجوی A*",
    category: "algorithms",
    definition: {
      fa: "الگوریتم مسیریابی هوشمندانه‌ای که الگوریتم دایکسترا را با یک تابع تخمین (Heuristic) فاصله تا مقصد ترکیب می‌کند (`f = g + h`) تا در نقشه‌ها و بازی‌ها با بررسی گره‌های بسیار کمتر، کوتاه‌ترین مسیر را بیابد.",
      en: "A best-first pathfinding algorithm combining Dijkstra's actual cost with a heuristic estimate to the goal (f = g + h), finding shortest paths far faster in maps and games.",
    },
    analogy: {
      fa: "دایکسترا مثل جستجو در همهٔ جهات به‌طور یکسان است؛ A* مثل داشتن قطب‌نماست که اول خیابان‌هایی را چک می‌کند که به سمت مقصد می‌روند.",
      en: "Dijkstra explores equally in every direction; A* carries a compass pointing toward the destination so it checks promising roads first.",
    },
    related: ["Dijkstra's Algorithm", "Graph", "Priority Queue", "BFS"],
  },
  {
    term: "Floyd-Warshall",
    fa: "الگوریتم فلوید-وارشال",
    category: "algorithms",
    definition: {
      fa: "الگوریتم برنامه‌نویسی پویا برای یافتن کوتاه‌ترین مسیر میان **تمامی جفت گره‌ها** در یک گراف وزن‌دار (All-Pairs Shortest Path) در زمان O(V³) و با کد بسیار کوتاه.",
      en: "A dynamic-programming algorithm that computes shortest paths between every pair of vertices in a weighted graph in O(V^3) time with just three nested loops.",
    },
    analogy: {
      fa: "مثل ساخت جدول کامل فاصلهٔ بین همهٔ شهرهای کشور با بررسی اینکه آیا عبور از شهر میانی k مسیر را کوتاه‌تر می‌کند یا نه.",
      en: "Like filling out a full mileage chart between every pair of cities by checking whether routing through each intermediate city shortens the trip.",
    },
    related: ["Dynamic Programming", "Graph", "Adjacency Matrix", "Bellman-Ford Algorithm"],
  },
  {
    term: "Binary Lifting",
    fa: "پرش دودویی (Binary Lifting)",
    category: "algorithms",
    definition: {
      fa: "تکنیک پیش‌پردازش روی درخت‌ها که جد ۲ᵏ-ام هر گره را ذخیره می‌کند تا یافتن k-امین جد یا پایین‌ترین جد مشترک دو گره (LCA) در زمان O(log n) انجام شود.",
      en: "A tree preprocessing technique storing each node's 2^k-th ancestor so k-th ancestor queries and Lowest Common Ancestor (LCA) lookups run in O(log n) time.",
    },
    analogy: {
      fa: "مثل پریدن از روی پله‌ها با گام‌های توان ۲ (۱۶، ۸، ۴، ۲، ۱) به‌جای بالا رفتن تک‌تک پله‌ها.",
      en: "Like leaping up stairs in powers-of-two jumps (16, 8, 4, 2, 1) instead of climbing one step at a time.",
    },
    related: ["Tree", "Dynamic Programming", "Binary Search", "Bitwise Operation"],
  },
  {
    term: "Merge Intervals",
    fa: "ادغام بازه‌ها (Merge Intervals)",
    category: "algorithms",
    definition: {
      fa: "الگوی الگوریتمی پرکاربرد در مصاحبه‌ها که بازه‌های زمانی یا عددی را بر اساس نقطهٔ شروع مرتب می‌کند و سپس در یک پیمایش O(n) بازه‌های هم‌پوشان را ادغام می‌نماید (مثل تقویم جلسات).",
      en: "A classic interview pattern: sort ranges by start time, then sweep once in O(n) to merge overlapping intervals or count concurrent meetings.",
    },
    analogy: {
      fa: "مثل خط کشیدن روی ساعات اشغال تقویم روزانه و یکی کردن جلساتی که با هم هم‌پوشانی دارند تا زمان‌های آزاد مشخص شود.",
      en: "Like merging overlapping calendar blocks into continuous busy spans so free slots stand out immediately.",
    },
    related: ["Sorting Algorithm", "Greedy Algorithm", "Array"],
  },
];
