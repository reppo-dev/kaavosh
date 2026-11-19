import type { GlossaryTerm } from "../../schema";

/** DATA FILE — Glossary terms (algorithms & data structures, part 2: structures). Merged into terms.ts → /glossary page. */
export const moreAlgorithmsTerms2: GlossaryTerm[] = [
  {
    term: "Time Complexity",
    fa: "پیچیدگی زمانی",
    category: "algorithms",
    definition: {
      fa: "پیچیدگی زمانی می‌گوید با بزرگ‌تر شدن ورودی، زمان اجرای الگوریتم چقدر رشد می‌کند: جست‌وجوی خطی O(n) است چون با دو برابر شدن داده، کار دو برابر می‌شود؛ جست‌وجوی دودویی O(log n) است چون هر قدم نصف داده را کنار می‌گذارد.",
      en: "Time complexity describes how an algorithm's running time grows as input grows: linear search is O(n) because doubling the data doubles the work; binary search is O(log n) because each step discards half the data.",
    },
    analogy: {
      fa: "مثل جست‌وجوی اسم در دفتر تلفن: ورق‌زدن صفحه‌به‌صفحه با بزرگ‌تر شدن دفتر سخت‌تر می‌شود (O(n))، ولی پریدن به وسط و نصف‌کردن تقریباً به همان سرعت باقی می‌ماند (O(log n)).",
      en: "Like finding a name in a phone book: flipping page by page gets painfully slower as the book grows (O(n)), but jumping to the middle and halving stays fast no matter the size (O(log n)).",
    },
    related: ["Big-O Notation", "Space Complexity", "Amortized Analysis"],
  },
  {
    term: "Space Complexity",
    fa: "پیچیدگی فضایی",
    category: "algorithms",
    definition: {
      fa: "پیچیدگی فضایی می‌گوید الگوریتم علاوه بر ورودی چقدر حافظه‌ی اضافه می‌خواهد: مرتب‌سازی درجا O(1) است چون فقط چند متغیر موقت لازم دارد؛ MergeSort معمولی O(n) است چون یک کپی کامل از داده می‌سازد.",
      en: "Space complexity measures how much extra memory an algorithm needs beyond its input: in-place sorting is O(1) since it only uses a few temporaries, while standard MergeSort is O(n) because it copies the whole dataset.",
    },
    analogy: {
      fa: "مثل آشپزی در آشپزخانه: می‌توانی همان ظرف را خالی و پر کنی (فضای اضافه تقریباً صفر) یا برای هر مرحله ظرف جدید بچینی — آشپزخانه‌ی بزرگ‌تری لازم داری.",
      en: "Like cooking in a kitchen: you can reuse the same pot for every stage (near-zero extra space) or dirty a new dish per step — then you need a much bigger counter.",
    },
    related: ["Time Complexity", "Big-O Notation", "In-Place Algorithm"],
  },
  {
    term: "Binary Search Tree",
    fa: "درخت جست‌وجوی دودویی",
    category: "algorithms",
    definition: {
      fa: "BST درختی است که قانون دارد: هر مقدار کوچک‌تر از گره به زیردرخت چپ و هر مقدار بزرگ‌تر به زیردرخت راست می‌رود. همین قانون ساده، جست‌وجو، درج و حذف را در حالت متعادل O(log n) می‌کند.",
      en: "A BST is a tree with one rule: values smaller than a node go to its left subtree, larger values to the right. That single rule makes lookup, insert and delete O(log n) when the tree stays balanced.",
    },
    analogy: {
      fa: "مثل بازی «بیست سؤالی»: در هر سؤال نصف گزینه‌ها را کنار می‌گذاری؛ قانون چپ/راست BST همان کار را روی مقادیر انجام می‌دهد.",
      en: "Like the game of twenty questions: each answer eliminates half the possibilities — the BST's left/right rule does exactly that to values.",
    },
    related: ["Binary Search", "Tree", "AVL Tree", "Red-Black Tree"],
  },
  {
    term: "AVL Tree",
    fa: "درخت AVL",
    category: "algorithms",
    definition: {
      fa: "درخت AVL یک BST خودمتعادل‌شونده است: بعد از هر درج/حذف، اختلاف ارتفاع زیردرخت چپ و راست هر گره حداکثر ۱ می‌ماند و اگر نشد، با چرخش‌ها (چپ، راست، چپ-راست، راست-چپ) اصلاح می‌شود. نتیجه: جست‌وجو همیشه O(log n) تضمین‌شده است.",
      en: "An AVL tree is a self-balancing BST: after every insert/delete, the height difference between left and right subtrees of any node stays at most 1 — otherwise rotations (LL, RR, LR, RL) fix it. Lookup is therefore guaranteed O(log n).",
    },
    analogy: {
      fa: "مثل کتابداری که بعد از هر کتاب جدید، قفسه‌ها را طوری سر و سامان می‌دهد که هیچ طرفی خیلی بلندتر از طرف دیگر نشود.",
      en: "Like a librarian who reorganizes shelves after every new book so one side never grows much taller than the other.",
    },
    related: ["Binary Search Tree", "Red-Black Tree"],
  },
  {
    term: "Red-Black Tree",
    fa: "درخت سرخ-سیاه",
    category: "algorithms",
    definition: {
      fa: "درخت سرخ-سیاه BST خودمتعادل‌شونده‌ای است که هر گره رنگ (قرمز/سیاه) دارد و با چند قانون ساده — ریشه سیاه، فرزند قرمزِ قرمز ممنوع، تعداد گره‌های سیاه در همه‌ی مسیرها برابر — ارتفاع را حدوداً دو برابر O(log n) نگه می‌دارد. در Map و TreeSet استاندارد زبان‌ها پیاده شده است.",
      en: "A red-black tree is a self-balancing BST where every node is red or black; simple rules — black root, no red parent with red child, equal black-node count on every root-to-leaf path — keep the height within roughly 2·O(log n). It powers Map/TreeSet in standard libraries.",
    },
    analogy: {
      fa: "مثل قانون «هیچ دو ستون قرمز پشت هم» در ردیف صندلی‌های سالن: با دو رنگ و چند قانون ساده، همیشه ترتیب تقریباً متعادل می‌ماند.",
      en: "Like a rule that no two red chairs sit consecutively in a row: with two colors and a few simple rules the arrangement stays roughly balanced forever.",
    },
    related: ["Binary Search Tree", "AVL Tree"],
  },
  {
    term: "Segment Tree",
    fa: "درخت قطعه‌بندی",
    category: "algorithms",
    definition: {
      fa: "درخت قطعه‌بندی برای کوئری‌های بازه‌ای روی آرایه ساخته می‌شود (جمع، مینیمم، ماکسیمم یک بازه) و به‌روزرسانی عنصر را هم پشتیبانی می‌کند — هر دو در O(log n). هر گره نماینده‌ی یک بازه است و دو فرزندش نیمه‌های آن بازه‌اند.",
      en: "A segment tree answers range queries over an array (sum, min, max of a subarray) and supports point updates — both in O(log n). Each node represents an interval; its two children split that interval in half.",
    },
    analogy: {
      fa: "مثل سازمان‌دهی فروش فروشگاه: کل ماه را داری، هر گره جمعِ یک بازه از روزهاست؛ برای جمع «هفته‌ی دوم» فقط چند گره را جمع می‌زنی، نه همه‌ی روزها.",
      en: "Like a store's sales ledger: each node holds a period's total; to get 'week two' you combine a few nodes instead of adding every day.",
    },
    related: ["Fenwick Tree", "Binary Heap"],
  },
  {
    term: "Fenwick Tree",
    fa: "درخت فنویک",
    category: "algorithms",
    definition: {
      fa: "درخت فنویک (BIT) ساختاری فشرده برای جمع پیشوندی و به‌روزرسانی نقطه‌ای در O(log n) است: هر اندکس مسئول بازه‌ای که اندازه‌اش را کمیت‌های دودویی‌اش تعیین می‌کند. کدش کوتاه است و حافظه‌ی O(n) می‌خواهد؛ ولی فقط با عملیات جمع‌پذیر معکوس‌پذیر کار می‌کند.",
      en: "A Fenwick tree (Binary Indexed Tree) is a compact structure for prefix sums and point updates in O(log n): each index is responsible for a range sized by its binary low bits. It's short to implement and uses O(n) memory, but only supports invertible, additive operations.",
    },
    analogy: {
      fa: "مثل شمارش تعداد دانش‌آموزان هر ردیف و هر چند ردیف یک‌جا: برای جمع «ردیف ۱ تا ۱۳» فقط چند شمارش جزئی از پیش‌محاسبه‌شده را جمع می‌زنی.",
      en: "Like pre-counted row totals and block totals in an auditorium: to count rows 1–13 you add a few pre-computed partial counts instead of counting seats.",
    },
    related: ["Segment Tree", "Time Complexity"],
  },
  {
    term: "Skip List",
    fa: "لیست پرشی",
    category: "algorithms",
    definition: {
      fa: "لیست پرشی لیست پیوندی لایه‌لایه است: سطح پایین همه‌ی عناصر را دارد و هر سطح بالاتر بخشی از آن‌ها را به‌عنوان «اتوبان سرعت‌بالا». جست‌وجو از بالا شروع و پایین-جلو پیش می‌رود و به‌طور احتمالاتی O(log n) می‌شود — جایگزین درخت متعادل در Redis و LevelDB.",
      en: "A skip list is a layered linked list: the bottom level holds every element and each higher level is an express lane over a subset. Search starts high and moves down-and-forward, giving probabilistic O(log n) — the structure behind Redis's sorted sets and LevelDB.",
    },
    analogy: {
      fa: "مثل متروی شهری با چند خط: خط سریع ایستگاه‌های کم دارد؛ تا نزدیک مقصد با خط سریع می‌روی، بعد خط محلی.",
      en: "Like a metro with express and local lines: ride the express line with few stops until near your destination, then switch to the local line.",
    },
    related: ["Linked List", "Binary Search"],
  },
  {
    term: "Trie",
    fa: "درخت پیشوندی",
    category: "algorithms",
    definition: {
      fa: "Trie درختی برای رشته‌هاست که هر یال یک کاراکتر را نشان می‌دهد؛ کلماتی که پیشوند مشترک دارند مسیر مشترک می‌روند. جست‌وجو، درج و حذف به طول کلمه O(L) وابسته است نه تعداد کلمات — پایه‌ی autocomplete و غلط‌یاب‌ها.",
      en: "A trie is a tree for strings where each edge represents one character; words sharing a prefix share a path. Lookup, insert and delete cost O(L) by word length, independent of dictionary size — the backbone of autocomplete and spell checkers.",
    },
    analogy: {
      fa: "مثل دفترچه‌ی تلفن مرتب‌شده بر اساس حروف: همه‌ی «مح»ها کنار هم‌اند، بعد «محس» و «محم» جدا می‌شوند — دنبال کردن حروف همان پیمایش درخت است.",
      en: "Like a dictionary's alphabetical nesting: all words starting 'pr' sit together and branch into 'pro', 'pre' and so on — tracing letters is literally walking the tree.",
    },
    related: ["Binary Search Tree", "Suffix Trie"],
  },
  {
    term: "Suffix Trie",
    fa: "تری پسوندی",
    category: "algorithms",
    definition: {
      fa: "تری پسوندی همه‌ی پسوندهای یک رشته را در یک Trie ذخیره می‌کند تا جست‌وجوی هر زیررشته ممکن شود: هر زیررشته، پیشوندِ یکی از پسوندهاست. حافظه‌ی بیشتری از Trie معمولی می‌خواهد ولی جست‌وجوی زیررشته در O(L) می‌دهد.",
      en: "A suffix trie stores every suffix of a string in a trie, which makes searching any substring possible: every substring is a prefix of some suffix. It uses more memory than a plain trie but finds a substring of length L in O(L).",
    },
    analogy: {
      fa: "مثل نمایه‌ی آخر کتاب که همه‌ی پایان‌های جمله‌ها را هم ثبت کرده — هر عبارتی از وسط متن را می‌شود فوری پیدا کرد.",
      en: "Like an index that catalogues every ending of every sentence too — you can find any phrase from mid-sentence instantly.",
    },
    related: ["Trie"],
  },
  {
    term: "Rope",
    fa: "طناب (Rope)",
    category: "algorithms",
    definition: {
      fa: "Rope ساختاری درختی برای رشته‌های عظیم است: متن در برگ‌ها تکه‌تکه ذخیره می‌شود و چسباندن/درج/حذف فقط با بازچینی گره‌ها انجام می‌شود، نه کپی کل متن — به همین دلیل هزینه‌ی این عملیات‌ها O(log n) است. در ویرایشگرهای متن بزرگ به کار می‌رود.",
      en: "A rope is a tree structure for huge strings: the text lives in leaf chunks, and concatenation/insertion/delete just re-wire nodes instead of copying the whole string — so these operations cost O(log n). Used by editors handling very large documents.",
    },
    analogy: {
      fa: "مثل طنابی از تکه‌های گره‌خورده: برای وصل دو طناب فقط گره‌ی وسط را می‌زنی؛ هیچ تکه‌ای را باز نمی‌کنی.",
      en: "Like a rope made of knotted segments: joining two ropes means tying one knot in the middle — no segment gets unraveled.",
    },
    related: [],
  },
  {
    term: "Heapify",
    fa: "هیپی‌فای",
    category: "algorithms",
    definition: {
      fa: "Heapify عمل بازگرداندن خاصیت heap به یک زیردرخت است: گره با فرزندانش مقایسه و در صورت لزوم جابه‌جا می‌شود و کار به پایین ادامه می‌یابد (sift-down). ساخت heap کامل از آرایه با heapify از پایین، O(n) است — ارزان‌تر از درج تک‌تک عناصر.",
      en: "Heapify restores the heap property for one subtree: compare a node with its children, swap if needed, and continue downward (sift-down). Building a whole heap bottom-up with heapify costs O(n) — cheaper than inserting elements one by one.",
    },
    analogy: {
      fa: "مثل چیدن تورنمنت از پایین: هر مدال‌آور محلی با برادرش مقایسه می‌شود و برنده بالا می‌رود؛ یک دور کافی است تا قهرمان کلی پیدا شود.",
      en: "Like seeding a tournament bracket from the bottom: each local winner is compared against its sibling and moves up — one pass produces the overall champion.",
    },
    related: ["Heap", "Heap Sort", "Priority Queue"],
  },
  {
    term: "Binary Heap",
    fa: "هیپ دودویی",
    category: "algorithms",
    definition: {
      fa: "هیپ دودویی درختی کامل است که در آرایه ذخیره می‌شود: فرزندان گره i در 2i+1 و 2i+2 هستند. در max-heap والد همیشه از فرزندان بزرگ‌تر است و در min-heap کوچک‌تر. کمینه/بیشینه در O(1) و درج/حذف در O(log n) است.",
      en: "A binary heap is a complete tree stored flat in an array: node i's children sit at 2i+1 and 2i+2. In a max-heap every parent beats its children; in a min-heap every parent is smaller. Peek is O(1); insert/delete are O(log n).",
    },
    analogy: {
      fa: "مثل رده‌بندی ارتش: هر فرمانده از همه‌ی زیرمجموعه‌اش بالاتر است؛ ولی برادرها ترتیبی بین خود ندارند — مهم فقط رابطه‌ی والد-فرزند است.",
      en: "Like a military hierarchy: every officer outranks everyone below them, but siblings among themselves are unordered — only the parent-child relation matters.",
    },
    related: ["Heap", "Heapify", "Heap Sort", "Priority Queue"],
  },
  {
    term: "Priority Queue",
    fa: "صف اولویت‌دار",
    category: "algorithms",
    definition: {
      fa: "صف اولویت‌دار عناصر را به ترتیب ورود خارج نمی‌کند بلکه مهم‌ترین (کمینه یا بیشینه) را می‌دهد. پیاده‌سازی استانداردش heap است: درج و حذف O(log n) و دیدن اولویت‌دار O(1). در زمان‌بندی، Dijkstra و کدگذاری هافمن لازم است.",
      en: "A priority queue serves the most important element (min or max) rather than the oldest. The standard implementation is a heap: insert and extract are O(log n), peek is O(1). It's essential in scheduling, Dijkstra and Huffman coding.",
    },
    analogy: {
      fa: "مثل اورژانس بیمارستان: نه به ترتیب ورود، بلکه بدترین حالت اول درمان می‌شود.",
      en: "Like a hospital ER: patients are treated by severity, not by arrival time.",
    },
    related: ["Queue", "Heap", "Dijkstra's Algorithm", "Heapify"],
  },
  {
    term: "Deque",
    fa: "صف دوسر",
    category: "algorithms",
    definition: {
      fa: "Deque (Double-Ended Queue) افزودن و حذف از هر دو سر را در O(1) می‌دهد — هم‌زمان هم پشته است هم صف. با لیست پیوندی دومطرفه یا آرایه‌ی حلقوی پیاده می‌شود و در پنجره‌ی لغزان (max/min) و BFS کاربرد دارد.",
      en: "A deque (double-ended queue) lets you add and remove at both ends in O(1) — it's a stack and a queue at once. Implemented with a doubly linked list or a circular array; used in sliding-window maximum and BFS.",
    },
    analogy: {
      fa: "مثل واگن‌بازی که از هر دو سر می‌شود واگن اضافه یا کم کرد.",
      en: "Like a train you can attach or detach carriages at either end.",
    },
    related: ["Queue", "Stack", "Sliding Window"],
  },
  {
    term: "Adjacency List",
    fa: "فهرست مجاورت",
    category: "algorithms",
    definition: {
      fa: "فهرست مجاورت برای هر رأس فهرستی از همسایه‌هایش نگه می‌دارد (آرایه‌ای از لیست‌ها). حافظه O(V+E) است و برای گراف‌های خلوت بهینه؛ پیمایش BFS/DFS روی آن طبیعی است. بررسی «یال هست؟» به اندازه‌ی درجه‌ی رأس طول می‌کشد.",
      en: "An adjacency list stores, for each vertex, the list of its neighbors (an array of lists). Memory is O(V+E) — ideal for sparse graphs — and BFS/DFS walk it naturally. Checking 'does this edge exist?' costs one degree scan.",
    },
    analogy: {
      fa: "مثل دفترچه‌ی مخاطبین هر نفر: برای هر نفر فقط لیست آشنایانش را می‌نویسی، نه جدول کامل همه با همه.",
      en: "Like everyone keeping a personal contacts list, instead of one giant who-knows-whom table.",
    },
    related: ["Graph", "BFS", "DFS", "Adjacency Matrix"],
  },
  {
    term: "Adjacency Matrix",
    fa: "ماتریس مجاورت",
    category: "algorithms",
    definition: {
      fa: "ماتریس مجاورت جدول V×V است که خانه‌ی [i][j] نشان می‌دهد یال بین i و j هست یا نه (یا وزنش). بررسی یال O(1) است ولی حافظه همیشه O(V²) — برای گراف‌های متراکم خوب و برای خلوت هدررفت.",
      en: "An adjacency matrix is a V×V grid where cell [i][j] tells whether an edge joins i and j (and its weight). Edge lookup is O(1) but memory is always O(V²) — great for dense graphs, wasteful for sparse ones.",
    },
    analogy: {
      fa: "مثل جدول مسافت شهرها روی نقشه‌ی راهنما: هر جفت شهر یک خانه دارد؛ پیدا کردن مسافت فوری است حتی اگر خیلی از جفت‌ها جاده نداشته باشند.",
      en: "Like a road-distance table between cities: every pair has a cell — instant lookup even when most pairs have no road.",
    },
    related: ["Graph", "Adjacency List"],
  },
  {
    term: "Hash Collision",
    fa: "برخورد هش",
    category: "algorithms",
    definition: {
      fa: "برخورد هش وقتی رخ می‌دهد که دو کلید متفاوت به یک خانه‌ی جدول بریزند. دو راه‌حل اصلی: زنجیره‌سازی (در هر خانه لیستی از ورودی‌ها) و آدرس‌دهی باز (جست‌وجوی خانه‌ی بعدی خالی). کیفیت تابع هش و load factor تعیین می‌کنند برخورد چقدر پیش بیاید.",
      en: "A hash collision happens when two different keys map to the same bucket. Two classic fixes: separate chaining (each bucket holds a list) and open addressing (probe the next free slot). Hash quality and load factor decide how often collisions occur.",
    },
    analogy: {
      fa: "مثل پارکینگ با شماره‌ی جایگاه از پلاک: دو ماشین به یک جایگاه رسیدند — یا در همان جایگاه صف می‌سازند (chaining) یا سراغ جایگاه بعدی خالی می‌روند (open addressing).",
      en: "Like a parking lot that assigns spots from license plates: two cars get the same spot — they either queue in that spot (chaining) or drive to the next free one (open addressing).",
    },
    related: ["Hash Table", "Hashing", "Load Factor"],
  },
  {
    term: "Load Factor",
    fa: "ضریب بار",
    category: "algorithms",
    definition: {
      fa: "Load factor در جدول هش نسبت تعداد عناصر به تعداد خانه‌هاست (n/m). وقتی از آستانه‌ای (معمولاً ۰٫۷۵) رد کند، جدول resize و همه rehash می‌شود تا برخوردها کم و عملیات‌ها O(1) متوسط بمانند.",
      en: "In a hash table the load factor is the ratio of elements to buckets (n/m). When it crosses a threshold (commonly 0.75), the table resizes and rehashes everything to keep collisions low and operations O(1) on average.",
    },
    analogy: {
      fa: "مثل اتوبوس: تا زیر ظرفیت پر شود سوارشدن سریع است؛ وقتی شلوغ شد (load factor بالا) مسافرها را به اتوبوس بزرگ‌تری منتقل می‌کنند.",
      en: "Like a bus: boarding is quick while it's under capacity; once packed (high load factor), passengers are moved to a bigger bus.",
    },
    related: ["Hash Table", "Hash Collision"],
  },
];
