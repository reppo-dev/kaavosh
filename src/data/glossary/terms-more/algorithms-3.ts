import type { GlossaryTerm } from "../../schema";

/** DATA FILE — Glossary terms (algorithms part 3: sorting, search, paradigms). Merged into terms.ts → /glossary page. */
export const moreAlgorithmsTerms3: GlossaryTerm[] = [
  {
    term: "Merge Sort",
    fa: "مرتب‌سازی ادغامی",
    category: "algorithms",
    definition: {
      fa: "Merge Sort آرایه را بازگشتی نصف می‌کند تا تک‌عنصری شود، بعد نیمه‌های مرتب را با هم ادغام می‌کند. پیچیدگی تضمینی O(n log n) و پایدار (stable) است، ولی برای ادغام حافظه‌ی O(n) می‌خواهد — نسخه‌ی خارجی آن برای مرتب‌سازی داده‌های دیسکی به کار می‌رود.",
      en: "Merge Sort recursively splits the array down to single elements, then merges the sorted halves. It's guaranteed O(n log n) and stable, but needs O(n) extra memory for merging — its external variant sorts data larger than RAM.",
    },
    analogy: {
      fa: "مثل ادغام دو دست‌ورق مرتب: کارت بالای هر دست را مقایسه و کوچک‌تر را می‌گذاری؛ هرگز به مقایسه‌ی همه با همه نیازی نیست.",
      en: "Like merging two sorted piles of cards: compare the top cards, place the smaller one, repeat — no all-vs-all comparisons ever needed.",
    },
    related: ["Sorting Algorithm", "Divide and Conquer", "Quick Sort", "Time Complexity"],
  },
  {
    term: "Quick Sort",
    fa: "مرتب‌سازی سریع",
    category: "algorithms",
    definition: {
      fa: "Quick Sort یک pivot انتخاب می‌کند، آرایه را به «کوچک‌ترها» و «بزرگ‌ترها» تقسیم (partition) می‌کند و بازگشتی هر طرف را مرتب می‌کند. میانگین O(n log n) و درجا (حافظه O(log n)) است؛ در بدترین حالت (pivot بد) O(n²) می‌شود که با pivot تصادفی کنترل می‌شود. در عمل سریع‌ترین مقایسه‌ای معمول است.",
      en: "Quick Sort picks a pivot, partitions the array into 'smaller' and 'larger' sides, and recursively sorts each side. It averages O(n log n), sorts in place (O(log n) stack), and degrades to O(n²) only with consistently bad pivots — randomized pivots prevent that. It's usually the fastest comparison sort in practice.",
    },
    analogy: {
      fa: "مثل دسته‌بندی پرونده‌ها حول یک معیار: هر چیزی که از خط مبنا کمتر است یک سمت، بیشترش سمت دیگر؛ بعد همان کار را داخل هر سمت.",
      en: "Like sorting files around a benchmark: everything below the reference goes left, above goes right, then repeat inside each side.",
    },
    related: ["Sorting Algorithm", "Divide and Conquer", "Merge Sort", "Quickselect"],
  },
  {
    term: "Insertion Sort",
    fa: "مرتب‌سازی درجی",
    category: "algorithms",
    definition: {
      fa: "Insertion Sort مثل مرتب کردن کارت در دست: هر عنصر جدید را در جای درستش بین عناصر قبلی مرتب می‌لغزاند. روی داده‌ی تقریباً مرتب O(n) و در بدترین حالت O(n²)؛ به همین دلیل در Timsort و QuickSortهای واقعی برای قطعه‌های کوچک به کار می‌رود.",
      en: "Insertion Sort works like sorting cards in your hand: each new element slides left into its correct place among the already-sorted ones. It's O(n) on nearly-sorted data and O(n²) worst case — which is why hybrid sorts (Timsort, practical QuickSorts) use it for small chunks.",
    },
    analogy: {
      fa: "مثل جا دادن یک کتاب تازه در قفسه‌ی مرتب: از انتها تا جای درست کتاب‌ها را یک‌به‌یک جابه‌جا می‌کنی.",
      en: "Like slotting a new book into an ordered shelf: shift books one by one until you reach its spot.",
    },
    related: ["Sorting Algorithm", "Bubble Sort", "Selection Sort"],
  },
  {
    term: "Bubble Sort",
    fa: "مرتب‌سازی حبابی",
    category: "algorithms",
    definition: {
      fa: "Bubble Sort مرتب‌سازی آموزشی است: در هر گذر عناصر مجاور مقایسه و در صورت نیاز جابه‌جا می‌شوند تا بزرگ‌ترین مثل حباب به انتها برسد. O(n²) و فقط برای یادگیری مفهوم یا داده‌ی خیلی کوچک مناسب است؛ با پرچم swap روی داده‌ی مرتب O(n) می‌شود.",
      en: "Bubble Sort is the teaching sort: each pass compares adjacent elements and swaps them, letting the largest 'bubble' to the end. It's O(n²) — fine for learning or tiny inputs; with a swap flag it becomes O(n) on already-sorted data.",
    },
    analogy: {
      fa: "مثل صف دانش‌آموزان بر اساس قد که در هر دور، دو نفر کنار هم اگر غلط بودند جابه‌جا می‌شوند؛ بلندترین به‌تدریج ته صف می‌نشیند.",
      en: "Like lining students up by height where each round adjacent pairs swap if out of order — the tallest gradually sinks to the back.",
    },
    related: ["Sorting Algorithm", "Insertion Sort", "Selection Sort"],
  },
  {
    term: "Selection Sort",
    fa: "مرتب‌سازی انتخابی",
    category: "algorithms",
    definition: {
      fa: "Selection Sort در هر گام کمینه‌ی بخش مرتب‌نشده را پیدا و به ابتدای آن می‌برد. همیشه O(n²) مقایسه ولی فقط O(n) جابه‌جایی — برای وقتی که نوشتن گران است (مثل حافظه‌ی فلش) جالب است.",
      en: "Selection Sort repeatedly finds the minimum of the unsorted part and swaps it to the front. It always does O(n²) comparisons but only O(n) swaps — interesting when writes are expensive (e.g., flash memory).",
    },
    analogy: {
      fa: "مثل انتخاب بازیکن برای تیم: در هر دور از میان باقی‌مانده‌ها بهترین را انتخاب و به تیم اضافه می‌کنی.",
      en: "Like drafting players: each round you scan whoever is left and pick the best for your team.",
    },
    related: ["Sorting Algorithm", "Bubble Sort", "Insertion Sort"],
  },
  {
    term: "Counting Sort",
    fa: "مرتب‌سازی شمارشی",
    category: "algorithms",
    definition: {
      fa: "Counting Sort بدون مقایسه کار می‌کند: تعداد تکرار هر مقدار را می‌شمارد و بعد به ترتیب می‌نویسد. وقتی دامنه‌ی مقادیر (k) نسبت به n کوچک باشد O(n+k) است — سریع‌تر از O(n log n)، اما برای دامنه‌های بزرگ یا اعشاری مناسب نیست.",
      en: "Counting Sort never compares elements: it counts occurrences of each value, then writes values back in order. When the value range (k) is small relative to n it runs in O(n+k) — beating O(n log n) — but it's useless for huge or floating ranges.",
    },
    analogy: {
      fa: "مثل شمردن برگه‌های رأی با چند جعبه (۱ تا ۱۰): بعد از شمارش، ترتیب از خود تعدادها درمی‌آید، نه از مقایسه‌ی برگه‌ها.",
      en: "Like tallying votes into numbered boxes: after counting, the order falls out of the tallies themselves — no pairwise comparison.",
    },
    related: ["Sorting Algorithm", "Radix Sort", "Bucket Sort"],
  },
  {
    term: "Radix Sort",
    fa: "مرتب‌سازی مبنایی",
    category: "algorithms",
    definition: {
      fa: "Radix Sort اعداد را رقم‌به‌رقم (از کم‌ارزش‌ترین به پرارزش‌ترین) با یک مرتب‌سازی پایدار مثل Counting Sort مرتب می‌کند. برای n عدد با d رقم، O(d·(n+k)) است — خطی نسبت به n، وقتی تعداد ارقام محدود باشد.",
      en: "Radix Sort sorts numbers digit by digit (least significant first) using a stable pass such as Counting Sort. For n numbers with d digits it runs in O(d·(n+k)) — linear in n when digit count is bounded.",
    },
    analogy: {
      fa: "مثل مرتب کردن کارت‌های پستی بر اساس کد پستی: اول بر اساس رقم یکان جعبه‌بندی، بعد دهگان، بعد صدگان — بعد از هر دور ترتیب حفظ می‌شود.",
      en: "Like sorting mail by postal code: bucket by last digit, then by next digit, and so on — each stable pass preserves the previous ordering.",
    },
    related: ["Counting Sort", "Bucket Sort", "Sorting Algorithm"],
  },
  {
    term: "Bucket Sort",
    fa: "مرتب‌سازی سطلی",
    category: "algorithms",
    definition: {
      fa: "Bucket Sort داده را به چند سطل با بازه‌های مساوی می‌ریزد، هر سطل را جدا مرتب می‌کند (اغلب Insertion Sort) و سطل‌ها را پشت هم می‌گذارد. اگر داده یکنواخت پخش باشد میانگین O(n) است؛ در بدترین حالت (همه در یک سطل) به O(n²) سقوط می‌کند.",
      en: "Bucket Sort scatters data into buckets of equal ranges, sorts each bucket separately (often with insertion sort), then concatenates. With uniformly distributed data it averages O(n); if everything lands in one bucket it degrades to O(n²).",
    },
    analogy: {
      fa: "مثل مرتب کردن نامه‌ها بر اساس حرف اول خیابان: پخش در جعبه‌های حروف، مرتب‌سازی داخل هر جعبه، بعد روی‌هم‌چینی.",
      en: "Like sorting letters by street initial: toss into letter bins, sort inside each bin, then stack the bins in order.",
    },
    related: ["Counting Sort", "Radix Sort", "Sorting Algorithm"],
  },
  {
    term: "Linear Search",
    fa: "جست‌وجوی خطی",
    category: "algorithms",
    definition: {
      fa: "جست‌وجوی خطی عناصر را یکی‌یکی چک می‌کند تا هدف پیدا شود یا لیست تمام شود. O(n) است، به مرتب بودن نیازی ندارد و روی داده‌ی کوچک یا یک‌بارمصرف بهترین انتخاب ساده است.",
      en: "Linear search checks elements one by one until it finds the target or runs out. It's O(n), needs no ordering, and is the simplest sensible choice for small or one-off data.",
    },
    analogy: {
      fa: "مثل نگاه کردن همه‌ی جیب‌ها پشت سر هم برای پیدا کردن کلید — کند ولی همیشه جواب می‌دهد و هیچ ترتیبی هم نمی‌خواهد.",
      en: "Like patting every pocket in turn for your keys — slow but foolproof, and no sorting required.",
    },
    related: ["Binary Search", "Time Complexity"],
  },
  {
    term: "Greedy Algorithm",
    fa: "الگوریتم حریصانه",
    category: "algorithms",
    definition: {
      fa: "الگوریتم حریصانه در هر گام بهترین انتخاب محلی را می‌گیرد و دیگر برنمی‌گردد. وقتی مسئله «خاصیت انتخاب حریصانه» و «زیرساختار بهینه» داشته باشد راه‌حل بهینه می‌دهد (MST، هافمن، زمان‌بندی بازه)؛ در غیر این صورت فقط تقریب است. معمولاً سریع‌تر و ساده‌تر از برنامه‌نویسی پویاست.",
      en: "A greedy algorithm takes the best local choice at every step and never revisits it. When the problem has the greedy-choice property and optimal substructure (MST, Huffman, interval scheduling), it's optimal; otherwise it's just an approximation. Usually faster and simpler than dynamic programming.",
    },
    analogy: {
      fa: "مثل خوردن بشقاب غذا که همیشه بزرگ‌ترین لقمه‌ی باقی‌مانده را برمی‌داری: در خیلی بشقاب‌ها عالی تمام می‌شود، اما تضمینی نیست.",
      en: "Like eating a plate by always taking the biggest remaining bite: great on many plates, but there's no guarantee.",
    },
    related: ["Divide and Conquer", "Dynamic Programming", "Dijkstra's Algorithm", "Greedy Choice Property"],
  },
  {
    term: "Greedy Choice Property",
    fa: "خاصیت انتخاب حریصانه",
    category: "algorithms",
    definition: {
      fa: "خاصیت انتخاب حریصانه یعنی یک انتخاب محلی بهینه همیشه می‌تواند بخشی از یک راه‌حل بهینه‌ی سراسری باشد — پس لازم نیست از تصمیم‌ها برگردیم. اثباتش معمولاً با استدلال جایگزینی است: هر راه‌حل بهینه را می‌توان بدون افت کیفیت به راه‌حل حریصانه تبدیل کرد.",
      en: "The greedy-choice property means some optimal local choice is always part of a globally optimal solution — so you never need to backtrack. It's proven with an exchange argument: any optimal solution can be transformed into the greedy one without losing quality.",
    },
    analogy: {
      fa: "مثل این که ثابت کنی همیشه گرفتن بالاترین نمره‌ی کلاس در هر درس، مجموع نمرات را بیشینه می‌کند — پس نگرانی برای آینده بلاوجه است.",
      en: "Like proving that grabbing the top score available in each course always maximizes the total — so planning ahead changes nothing.",
    },
    related: ["Greedy Algorithm", "Dynamic Programming"],
  },
  {
    term: "Divide and Conquer",
    fa: "تقسیم و غلبه",
    category: "algorithms",
    definition: {
      fa: "الگوی تقسیم‌وغلبه مسئله را به زیرمسئله‌های مستقل کوچک‌تر می‌شکند (Divide)، آن‌ها را بازگشتی حل می‌کند (Conquer) و راه‌حل‌ها را ترکیب می‌کند (Combine). MergeSort و QuickSort نمونه‌های کلاسیک‌اند؛ قضیه‌ی اصلی (Master Theorem) پیچیدگی چنین روابط بازگشتی را می‌دهد.",
      en: "Divide and conquer breaks a problem into smaller independent subproblems (divide), solves them recursively (conquer), and combines the results (combine). MergeSort and QuickSort are classics; the Master Theorem gives the complexity of such recurrences.",
    },
    analogy: {
      fa: "مثل جمع کردن کل هزینه‌های سال: به ماه‌ها تقسیم کن، هر ماه را به هفته‌ها، جمع هر بخش را برگردان و در بالا جمع بزن.",
      en: "Like totaling a year's expenses: split into months, months into weeks, sum each part, then combine upward.",
    },
    related: ["Merge Sort", "Quick Sort", "Master Theorem", "Dynamic Programming", "Greedy Algorithm"],
  },
  {
    term: "Master Theorem",
    fa: "قضیه‌ی اصلی",
    category: "algorithms",
    definition: {
      fa: "قضیه‌ی اصلی برای روابط بازگشتی T(n) = aT(n/b) + f(n) پیچیدگی را بدون حل دستی می‌دهد: هزینه‌ی f(n) را با رشد aT(n/b) مقایسه می‌کنیم و پیچیدگی در یکی از سه حالت مشخص می‌شود. مثال: binary search با T(n)=T(n/2)+O(1) همان O(log n) است.",
      en: "The Master Theorem solves recurrences of the form T(n) = aT(n/b) + f(n) directly: compare f(n) against the growth of aT(n/b), and the answer falls into one of three standard cases. Example: binary search's T(n)=T(n/2)+O(1) yields O(log n).",
    },
    analogy: {
      fa: "مثل مقایسه‌ی دو ورزشکار برای تعیین سرنوشت مسابقه: کار اصلی (f(n)) در برابر کار شاخه‌ها (aT(n/b)) — هر کدام سنگین‌تر باشد، پیچیدگی را همان تعیین می‌کند (یا حالت برابر).",
      en: "Like a tug-of-war that decides the outcome: the top-level work f(n) versus the branching work aT(n/b) — whichever dominates sets the complexity (with a tie case).",
    },
    related: ["Divide and Conquer", "Time Complexity", "Merge Sort"],
  },
  {
    term: "Backtracking",
    fa: "عقب‌نشینی",
    category: "algorithms",
    definition: {
      fa: "Backtracking راه‌حل را قدم‌به‌قدم می‌سازد و به محض این که مسیر جاری قوانین مسئله را نقض کند، یک قدم عقب می‌رود و شاخه‌ی دیگر را امتحان می‌کند — جست‌وجوی عمق‌اول روی درخت حالت با هرس (pruning). n-Queens، سودوکو و تولید همه‌ی جایگشت‌ها مثال‌های کلاسیک‌اند.",
      en: "Backtracking builds a solution step by step and, the moment the current path violates a constraint, undoes the last step and tries the next option — a depth-first search over the state tree with pruning. n-Queens, Sudoku and permutation generation are classics.",
    },
    analogy: {
      fa: "مثل حل ماز با مداد: تا بن‌بست می‌روی، برگشتی و مسیر اشتباه را علامت می‌زنی تا دیگر واردش نشوی.",
      en: "Like solving a maze in pencil: walk until a dead end, back up, and mark the wrong corridor so you never re-enter it.",
    },
    related: ["DFS", "Recursion", "Brute Force", "Memoization"],
  },
  {
    term: "Memoization",
    fa: "حافظه‌سازی",
    category: "algorithms",
    definition: {
      fa: "Memoization یعنی ذخیره‌ی نتیجه‌ی هر فراخوانی و استفاده‌ی دوباره از آن: تابع بازگشتی قبل از محاسبه چک می‌کند جواب این ورودی قبلاً هست یا نه. با حذف محاسبه‌ی تکراری زیرمسئله‌های همپوشان، Fibonacci را از O(2ⁿ) به O(n) می‌رساند — نسخه‌ی top-down برنامه‌نویسی پویا.",
      en: "Memoization caches each call's result and reuses it: a recursive function checks whether the answer for an input already exists before computing. By eliminating repeated work on overlapping subproblems it takes Fibonacci from O(2ⁿ) to O(n) — the top-down form of dynamic programming.",
    },
    analogy: {
      fa: "مثل حل مسئله‌ی ریاضی که نتایج میانی را روی کاغذ می‌نویسی؛ هر وقت به همان عبارت رسیدی، به‌جای محاسبه‌ی دوباره به دفترچه نگاه می‌کنی.",
      en: "Like doing a long math problem while writing intermediate results in a notebook: whenever the same expression reappears, you read it instead of recomputing.",
    },
    related: ["Dynamic Programming", "Recursion"],
  },
  {
    term: "Tail Recursion",
    fa: "بازگشت دمی",
    category: "algorithms",
    definition: {
      fa: "در بازگشت دمی، فراخوانی بازگشتی آخرین عملیات تابع است و بعدش هیچ محاسبه‌ای نمی‌ماند. کامپایلرهایی که TCO دارند (Scala، Haskell، برخی موتورهای JS) آن را به حلقه تبدیل می‌کنند تا پشته رشد نکند؛ جاوا و Python این بهینه‌سازی را ندارند.",
      en: "In tail recursion the recursive call is the function's very last operation — nothing is left to do afterwards. Compilers with tail-call optimization (Scala, Haskell, some JS engines) turn it into a loop so the stack never grows; Java and Python do not.",
    },
    analogy: {
      fa: "مثل پاس‌دادن توپ: در بازگشت معمولی هر نفر توپ را نگه می‌دارد تا جواب برسد؛ در دمی، کارش تمام است و توپ را می‌سپارد و خارج می‌شود.",
      en: "Like passing a ball: in normal recursion every person holds theirs until the answer comes back; in tail recursion each person hands off and leaves immediately.",
    },
    related: ["Recursion", "Call Stack"],
  },
  {
    term: "Brute Force",
    fa: "جست‌وجوی فراگیر",
    category: "algorithms",
    definition: {
      fa: "Brute force همه‌ی گزینه‌های ممکن را بدون ترفند امتحان می‌کند تا جواب درست پیدا شود. همیشه درست است ولی معمولاً نمایی یا O(n²) است؛ به همین دلیل یا برای ورودی کوچک است یا نقطه‌ی شروعی برای الگوریتم‌های هوشمندتر (هرس، حریصانه، DP).",
      en: "Brute force tries every possible candidate until one works — always correct, usually exponential or O(n²). So it suits small inputs, or serves as the baseline that smarter techniques (pruning, greedy, DP) improve upon.",
    },
    analogy: {
      fa: "مثل امتحان کردن همه‌ی ترکیب‌های قفل تا باز شود — قطعی، ولی با هر رقم اضافه چند برابر کندتر.",
      en: "Like trying every lock combination until it opens — certain, but each extra digit multiplies the time.",
    },
    related: ["Backtracking", "Time Complexity"],
  },
  {
    term: "Dijkstra's Algorithm",
    fa: "الگوریتم دایکسترا",
    category: "algorithms",
    definition: {
      fa: "دایکسترا کوتاه‌ترین مسیر از مبدأ به همه‌ی رئوس در گراف با وزن غیرمنفی را پیدا می‌کند: با صف اولویت‌دار همیشه رأس با کمترین فاصله‌ی قطعی را انتخاب و همسایه‌هایش را relax می‌کند. با heap، O((V+E)log V) است. وزن منفی را پشتیبانی نمی‌کند — آن جا Bellman-Ford لازم است.",
      en: "Dijkstra finds shortest paths from a source to all vertices in a non-negative-weight graph: with a priority queue it always settles the closest vertex and relaxes its neighbors. With a heap it runs in O((V+E)log V). Negative weights break it — you'd need Bellman-Ford there.",
    },
    analogy: {
      fa: "مثل پخش اخبار قطعی مسافت در شهر: هر بار نزدیک‌ترین نقطه‌ی «قطعی‌شده» را از صف برمی‌داری و فاصله‌ی همسایه‌هایش را از راه آن به‌روز می‌کنی.",
      en: "Like spreading confirmed travel times across a city: always grab the nearest 'finalized' point from the queue and update its neighbors' distances through it.",
    },
    related: ["Graph", "Priority Queue", "BFS", "Greedy Algorithm"],
  },
  {
    term: "Minimum Spanning Tree",
    fa: "درخت پوشای کمینه",
    category: "algorithms",
    definition: {
      fa: "MST زیرمجموعه‌ای از یال‌هاست که همه‌ی رئوس را با کمترین مجموع وزن به هم وصل کند و حلقه نداشته باشد. الگوریتم‌های کلاسیک: Kruskal (مرتب‌سازی یال‌ها + Union-Find) و Prim (رشد با صف اولویت‌دار). کاربرد: طراحی شبکه و سیم‌کشی با کمترین هزینه.",
      en: "A minimum spanning tree picks edges that connect all vertices with minimum total weight and no cycles. Classic algorithms: Kruskal (sort edges + Union-Find) and Prim (grow with a priority queue). Applications: cheapest network and wiring design.",
    },
    analogy: {
      fa: "مثل وصل کردن برق به همه‌ی روستاها با کمترین کابل: هر بار ارزان‌ترین اتصالی را برمی‌داری که دور جدیدی نسازد.",
      en: "Like electrifying every village with the least cable: repeatedly take the cheapest connection that doesn't form a loop.",
    },
    related: ["Graph", "Greedy Algorithm", "Union-Find"],
  },
  {
    term: "Union-Find",
    fa: "اجتماع-یافتن",
    category: "algorithms",
    definition: {
      fa: "Union-Find (DSU) مجموعه‌های مجزا را مدیریت می‌کند: find نماینده‌ی مجموعه‌ی یک عنصر را می‌دهد و union دو مجموعه را یکی می‌کند. با دو بهینه‌سازی «فشرده‌سازی مسیر» و «اتحاد بر اساس رتبه»، هر عملیات تقریباً O(1) تمام‌عصر است. در Kruskal و تشخیص حلقه به کار می‌رود.",
      en: "Union-Find (disjoint set union) manages partitions of elements: find returns a set's representative and union merges two sets. With path compression and union by rank, operations run in near-constant amortized time. Used in Kruskal and cycle detection.",
    },
    analogy: {
      fa: "مثل گروه‌های دانش‌آموزی که هر گروه یک سرگروه دارد: اتحاد دو گروه یعنی یکی سرگروه دیگری را به رسمیت بشناسد؛ پرسیدن «هم‌گروه هستیم؟» یعنی سرگروه‌مان یکی است؟",
      en: "Like student groups each with a leader: merging groups means one leader defers to the other; 'are we in the same group?' means 'same leader?'",
    },
    related: ["Minimum Spanning Tree", "Graph"],
  },
  {
    term: "Cycle Detection",
    fa: "تشخیص حلقه",
    category: "algorithms",
    definition: {
      fa: "تشخیص حلقه در لیست پیوندی با الگوریتم لاک‌پشت-و-خرگوش (Floyd) انجام می‌شود: دو اشاره‌گر با سرعت ۱ و ۲؛ اگر به هم رسیدند حلقه هست و برای یافتن شروع حلقه یکی را به سر برمی‌گردانیم. در گراف جهت‌دار، DFS با سه رنگ (سفید/خاکستری/سیاه) حلقه‌ی بازگشتی را می‌یابد.",
      en: "Cycle detection in linked lists uses Floyd's tortoise-and-hare: two pointers moving at speeds 1 and 2; meeting means a cycle, and resetting one pointer to the head locates the cycle's start. In directed graphs, DFS with three colors (white/gray/black) finds back edges — the cycles.",
    },
    analogy: {
      fa: "مثل دونده‌ای سریع و آهسته در پیست: اگر پیست حلقه داشته باشد بالاخره از پشت به هم می‌رسند.",
      en: "Like a fast and a slow runner on a track: if the track loops, the fast one eventually laps the slow one.",
    },
    related: ["Linked List", "DFS", "Two Pointers"],
  },
  {
    term: "KMP Algorithm",
    fa: "الگوریتم KMP",
    category: "algorithms",
    definition: {
      fa: "KMP جست‌وجوی زیررشته را در O(n+m) انجام می‌دهد: پیش از جست‌وجو جدول failure می‌سازد که برای هر پیشوند الگو، بلندترین پیشوند-پسوندش را نگه می‌دارد؛ در عدم تطابق، الگو هرگز به عقب و متن هرگز به جلو برنمی‌گردد. برخلاف روش ساده که در بدترین حالت O(n·m) است.",
      en: "KMP finds a pattern in text in O(n+m): it first builds a failure table holding each prefix's longest proper prefix-suffix; on mismatch the pattern never slides backward and the text pointer never retreats — unlike naive matching's O(n·m) worst case.",
    },
    analogy: {
      fa: "مثل جست‌وجوی کلمه در متن که هیچ‌وقت چشم را به عقب برنمی‌گرداند: از حافظه می‌داند بعد از خرابی، ادامه‌ی الگو از کجا ادامه پیدا می‌کند.",
      en: "Like scanning text with eyes that never move backward: a memorized table tells you exactly where the pattern can resume after each failure.",
    },
    related: ["Rabin-Karp", "Time Complexity"],
  },
  {
    term: "Rabin-Karp",
    fa: "رابین-کارپ",
    category: "algorithms",
    definition: {
      fa: "Rabin-Karp جست‌وجوی زیررشته با هش است: هش پنجره‌ی متحرک متن و هش الگو مقایسه می‌شوند و با rolling hash، هش پنجره‌ی بعدی در O(1) به‌روز می‌شود. میانگین O(n+m) و بدترین حالت O(n·m) به دلیل برخورد هش؛ برای جست‌وجوی هم‌زمان چند الگو عالی است.",
      en: "Rabin-Karp searches by hashing: compare the hash of a sliding text window with the pattern's hash, updating each window's hash in O(1) with a rolling hash. Average O(n+m), worst O(n·m) on hash collisions; excellent for searching many patterns at once.",
    },
    analogy: {
      fa: "مثل مقایسه‌ی اثر انگشت برگه‌ها به‌جای خواندن متنشان: فقط وقتی اثر انگشت برابر شد، متن واقعی را دقیق چک می‌کنی.",
      en: "Like matching fingerprints instead of reading pages: only when fingerprints match do you actually compare the text.",
    },
    related: ["KMP Algorithm", "Hashing"],
  },
  {
    term: "Amortized Analysis",
    fa: "تحلیل تمام‌عصر",
    category: "algorithms",
    definition: {
      fa: "تحلیل تمام‌عصر هزینه‌ی متوسط هر عملیات در دنباله‌ای طولانی را می‌سنجد، نه بدترین حالت تک‌عملیات: آرایه‌ی پویا گاهی O(n) کپی می‌کند ولی به‌طور تمام‌عصر push آن O(1) است چون resize ها روی کل n درج پخش می‌شوند.",
      en: "Amortized analysis measures the average cost per operation over a long sequence, not a single operation's worst case: a dynamic array occasionally pays O(n) to copy, yet push is O(1) amortized because resizes are spread across all n insertions.",
    },
    analogy: {
      fa: "مثل قسط خانه: گاهی پرداخت بزرگ داری ولی میانگین ماهانه‌ی کل عمر وام عدد کوچک و ثابتی است.",
      en: "Like a mortgage: occasional big payments, but averaged across the loan's life the monthly figure stays small and stable.",
    },
    related: ["Time Complexity", "Hash Table", "Array"],
  },
  {
    term: "In-Place Algorithm",
    fa: "الگوریتم درجا",
    category: "algorithms",
    definition: {
      fa: "الگوریتم درجا خروجی را در همان حافظه‌ی ورودی می‌سازد و حداکثر حافظه‌ی کمکی O(log n) (معمولاً پشته‌ی بازگشت) می‌خواهد. QuickSort و Heap Sort درجایند؛ Merge Sort معمولی O(n) حافظه می‌خواهد. مزیتش حافظه‌ی کم و سازگاری با cache است.",
      en: "An in-place algorithm produces its output inside the input's own storage, using at most O(log n) extra memory (usually the recursion stack). QuickSort and Heap Sort are in-place; standard Merge Sort needs O(n) extra. Benefits: low memory and cache friendliness.",
    },
    analogy: {
      fa: "مثل مرتب کردن کتاب‌ها روی همان قفسه بدون میز کمکی — جابه‌جایی‌ها همه در قفسه انجام می‌شود.",
      en: "Like sorting books on the shelf itself with no spare table — every swap happens in place.",
    },
    related: ["Space Complexity", "Quick Sort", "Heap Sort", "Sorting Algorithm"],
  },
  {
    term: "Bitwise Operation",
    fa: "عملیات بیتی",
    category: "algorithms",
    definition: {
      fa: "عملیات بیتی (AND، OR، XOR، NOT، شیفت) مستقیم روی بیت‌های عدد کار می‌کند و در سخت‌افزار یک چرخه‌ی CPU تمام می‌شود. ترفندهای پرکاربرد: n & 1 برای زوج/فرد، n & (n−1) برای پاک کردن کم‌ارزش‌ترین ۱، XOR برای یافتن عدد بی‌جفت، و شیفت به‌جای ضرب/تقسیم بر دو.",
      en: "Bitwise operations (AND, OR, XOR, NOT, shifts) act directly on an integer's bits and complete in one CPU cycle. Common tricks: n & 1 for odd/even, n & (n−1) to clear the lowest set bit, XOR to find the unpaired element, and shifts as multiply/divide by two.",
    },
    analogy: {
      fa: "مثل کلیدهای روشن/خاموش روی تابلوی سوئیچ: هر کلید یک بیت است و این عملیات‌ها گروهی کلیدها را خاموش/روشن یا برعکس می‌کنند.",
      en: "Like a wall of toggle switches: each bit is a switch, and these operations flip, compare or copy groups of switches at once.",
    },
    related: ["Two Pointers", "Time Complexity"],
  },
  {
    term: "Heap Sort",
    fa: "مرتب‌سازی هیپی",
    category: "algorithms",
    definition: {
      fa: "Heap Sort ابتدا آرایه را max-heap می‌کند (O(n))، بعد مکرراً ریشه (بزرگ‌ترین) را با آخرین عنصر عوض و اندازه‌ی heap را کم می‌کند. زمان تضمینی O(n log n) و حافظه O(1) است؛ ولی پرش‌هایش در آرایه cache-unfriendly است و معمولاً کندتر از QuickSort در عمل اجرا می‌شود.",
      en: "Heap Sort first heapifies the array into a max-heap (O(n)), then repeatedly swaps the root (the maximum) with the last heap element and shrinks the heap. Guaranteed O(n log n) time and O(1) memory; its array jumps are cache-unfriendly, so it's usually slower than QuickSort in practice.",
    },
    analogy: {
      fa: "مثل مسابقه‌ی حذفی که هر دور قهرمان (بزرگ‌ترین) مشخص و کنار گذاشته می‌شود و بقیه دوباره مسابقه می‌دهند.",
      en: "Like a knockout tournament: each round crowns the current champion, sets them aside, and the rest play on.",
    },
    related: ["Heap", "Heapify", "Sorting Algorithm", "Quick Sort"],
  },
  {
    term: "Knapsack Problem",
    fa: "مسئله‌ی کوله‌پشتی",
    category: "algorithms",
    definition: {
      fa: "کوله‌پشتی ۰/۱ می‌پرسد: با ظرفیت وزنی محدود، کدام اشیاء را برداریم تا ارزش بیشینه شود؟ راه‌حل برنامه‌نویسی پویا: dp[i][w] = بهترین ارزش با i شیء و ظرفیت w، که هر شیء را «بردار یا نگذار» می‌کند. زمان O(n·W) — شبه‌چندجمله‌ای. نسخه‌ی بی‌کران (unbounded) و کسری (حریصانه) هم دارند.",
      en: "The 0/1 knapsack asks: with a weight capacity, which items maximize total value? The DP solution: dp[i][w] = best value using the first i items with capacity w, deciding 'take or skip' per item. Runs in O(n·W) — pseudo-polynomial. Unbounded and fractional variants exist (the latter is greedy-solvable).",
    },
    analogy: {
      fa: "مثل چمدان سفر با سقف وزن: برای هر وسیله تصمیم می‌گیری ارزشش می‌ارزد جای وزنش را بگیرد یا نه — و این تصمیم را برای هر ترکیب وزن ثبت می‌کنی تا دوباره حساب نکنی.",
      en: "Like packing luggage with a weight limit: for each item you decide whether its value justifies its weight, and you record the best answer for every weight so you never re-decide.",
    },
    related: ["Dynamic Programming", "Memoization", "Greedy Algorithm"],
  },
  {
    term: "Longest Common Subsequence",
    fa: "بلندترین زیردنباله‌ی مشترک",
    category: "algorithms",
    definition: {
      fa: "LCS بلندترین دنباله‌ای است که با حذف بعضی کاراکترها (بدون جابه‌جایی) از هر دو رشته درمی‌آید. DP کلاسیک آن: dp[i][j] از مقایسه‌ی آخرین کاراکترهای دو پیشوند ساخته می‌شود — برابر بودند: ۱+ dp[i−1][j−1]؛ نبودند: max دو حذف. زمان O(n·m) و پایه‌ی diff ابزارها.",
      en: "The longest common subsequence is the longest sequence obtainable by deleting some characters (without reordering) from both strings. The classic DP: dp[i][j] compares the two prefixes' last characters — equal means 1 + dp[i−1][j−1]; otherwise max over the two deletions. Runs in O(n·m) and powers diff tools.",
    },
    analogy: {
      fa: "مثل پیدا کردن مشترک‌ترین فهرست خرید بین دو نفر وقتی ترتیب مهم است: هر آیتم مشترک یا انتخاب می‌شود یا رد — جدول DP بهترین مجموعه را نگه می‌دارد.",
      en: "Like finding the longest shared to-do list respecting order: each shared item is either taken or skipped, and a table remembers the best combo for every prefix pair.",
    },
    related: ["Dynamic Programming", "Memoization"],
  },
  {
    term: "Quickselect",
    fa: "انتخاب سریع",
    category: "algorithms",
    definition: {
      fa: "Quickselect برای یافتن kامین عنصر کوچک/بزرگ از partition مدل QuickSort استفاده می‌کند ولی فقط سمتِ حاوی k را دنبال می‌کند. میانگین O(n) و بدترین حالت O(n²) (که با pivot تصادفی یا median-of-medians به O(n) تضمینی می‌رسد). برای «kامین بزرگ‌ترین» سریع‌تر از heap و مرتب‌سازی کامل است.",
      en: "Quickselect finds the k-th smallest/largest element using QuickSort-style partitioning but recurses only into the side containing k. Average O(n); worst O(n²), avoidable with random pivots or median-of-medians (guaranteed O(n)). Faster than a heap or full sort for a single k-th query.",
    },
    analogy: {
      fa: "مثل جدا کردن سکه‌های کمتر از یک مقدار: بعد از جدا کردن می‌دانی kامین کدام طرف است و فقط همان طرف را ادامه می‌دهی — نیمی را برای همیشه رها می‌کنی.",
      en: "Like partitioning coins by weight: after each split you know which side holds rank k and abandon the other half forever.",
    },
    related: ["Quick Sort", "Heap", "Sorting Algorithm"],
  },
];
