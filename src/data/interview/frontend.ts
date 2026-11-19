import type { InterviewField } from "../schema";

/**
 * DATA FILE — Interview questions. Consumed by: /interview hub page,
 * /interview/[field] Q&A page, landing page stats.
 */
export const frontendInterview: InterviewField = {
  slug: "frontend",
  title: { fa: "مصاحبه فرانت‌اند", en: "Frontend interviews" },
  description: {
    fa: "سوال‌های واقعی مصاحبه‌های فرانت‌اند در ۲۰۲۶: از حلقه رویداد جاوااسکریپت تا رندر ری‌اکت و Core Web Vitals — هرکدام با پاسخ کوتاه و شکستن قدم‌به‌قدم.",
    en: "Real 2026 frontend interview questions: from the JavaScript event loop to React rendering and Core Web Vitals — each with a short answer and a step-by-step breakdown.",
  },
  icon: "layout-template",
  accent: "cyan",
  questions: [
    {
      id: "explain-the-event-loop",
      question: {
        fa: "حلقه رویداد (Event Loop) در جاوااسکریپت چیست و چرا مهم است؟",
        en: "What is the JavaScript event loop and why does it matter?",
      },
      difficulty: "junior",
      tags: ["javascript", "async", "runtime"],
      quickAnswer: {
        fa: "جاوااسکریپت فقط یک نخ (thread) دارد؛ پس نمی‌تواند هم‌زمان چند کار کند. حلقه رویداد راه‌حل است: کارهای سنگین مثل شبکه به مرورگر سپرده می‌شوند و نتیجه‌شان در صف می‌ایستد؛ حلقه مرتب چک می‌کند وقتی پشته خالی شد، اولین کار صف را بردارد و اجرا کند.",
        en: "JavaScript has only one thread, so it can't do several things at once. The event loop is the trick: heavy work like networking is handed to the browser, its results line up in a queue, and the loop keeps checking — whenever the call stack is empty, it grabs the next queued task and runs it.",
      },
      steps: [
        {
          title: { fa: "یک صندوقدار، یک صف", en: "One cashier, one queue" },
          detail: {
            fa: "موتور جاوااسکریپت مثل فروشگاهی است که فقط یک صندوقدار دارد: هر دستور باید تمام شود تا بعدی شروع شود. به این «نخ واحد» می‌گویند.",
            en: "The JS engine is like a store with a single cashier: each statement must finish before the next starts. That's called 'single-threaded'.",
          },
        },
        {
          title: { fa: "کارهای طولانی به بیرون سپرده می‌شوند", en: "Slow work is handed out" },
          detail: {
            fa: "وقتی درخواست شبکه یا تایمر می‌سازید، مرورگر (نه جاوااسکریپت) آن را انجام می‌دهد؛ تا آن موقع کد شما بقیه کارش را ادامه می‌دهد و صفحه فریز نمی‌شود.",
            en: "When you start a network request or a timer, the browser — not JavaScript — does the waiting. Your code keeps running and the page never freezes.",
          },
        },
        {
          title: { fa: "نتیجه در صف می‌ایستد", en: "Results line up in a queue" },
          detail: {
            fa: "وقتی مرورگر کارش تمام شد، تابع شما (مثل callback یا resolve شدن promise) در «صف رویداد» می‌ایستد، مثل مشتری‌هایی که نوبت گرفته‌اند.",
            en: "When the browser finishes, your callback (or the resolved promise) is placed in the 'event queue' — like customers holding a numbered ticket.",
          },
        },
        {
          title: { fa: "حلقه، یکی‌یکی برمی‌دارد", en: "The loop takes one at a time" },
          detail: {
            fa: "حلقه رویداد مدام می‌پرسد: «پشته خالی است؟» اگر خالی باشد، اولین کار صف را روی پشته می‌گذارد تا اجرا شود — و دوباره از اول.",
            en: "The event loop keeps asking: 'is the call stack empty?' When it is, it moves the first queued task onto the stack to run — then repeats forever.",
          },
        },
        {
          title: { fa: "نتیجه عملی", en: "The practical result" },
          detail: {
            fa: "به همین دلیل setTimeout با صفر میلی‌ثانیه هم «بلافاصله» اجرا نمی‌شود: باید اول همه‌ی کدهای فعلی تمام شوند و نوبتش برسد.",
            en: "That's why even setTimeout(fn, 0) doesn't run 'instantly': all current code must finish first, then its turn comes.",
          },
        },
      ],
      codeExample: {
        language: "javascript",
        code: `console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");

// Output: 1, 4, 3, 2
// Sync code first (1, 4), then microtasks (3), then the timer (2)`,
        caption: {
          fa: "ترتیب اجرا: کد هم‌زمان، میکروتسک‌ها، بعد تایمر",
          en: "Execution order: sync code, microtasks, then timers",
        },
      },
      followUps: [
        {
          fa: "فرق microtask و macrotask چیست؟",
          en: "What's the difference between microtasks and macrotasks?",
        },
        {
          fa: "اگر یک حلقه سنگین در نخ اصلی اجرا شود چه می‌شود؟",
          en: "What happens if a heavy loop runs on the main thread?",
        },
      ],
      visual: "event-loop",
    },
    {
      id: "var-let-const-and-closures",
      question: {
        fa: "فرق var، let و const چیست و closure چیست؟",
        en: "What's the difference between var, let and const — and what is a closure?",
      },
      difficulty: "junior",
      tags: ["javascript", "closures", "scoping"],
      quickAnswer: {
        fa: "var مختص تابع است و دوباره‌تعریف می‌شود؛ let و const مختص بلوک‌اند. const فقط ارجاع را ثابت نگه می‌دارد، نه محتوای آبجکت را. closure یعنی تابعی که زادگاهش را به‌خاطر می‌سپارد و حتی بعد از تمام شدن آن، به متغیرهایش دسترسی دارد.",
        en: "var is function-scoped and redeclarable; let and const are block-scoped. const freezes the reference, not the object's contents. A closure is a function that remembers its birthplace and can still touch its variables after that scope has finished.",
      },
      steps: [
        {
          title: { fa: "محدوده یعنی دسترسی", en: "Scope means visibility" },
          detail: {
            fa: "محدوده (scope) یعنی «این متغیر کجا دیده می‌شود؟» var فقط داخل تابع دیده می‌شود؛ let و const داخل هر بلوک { } مثل if یا حلقه.",
            en: "Scope answers 'where can this variable be seen?'. var is visible through the whole function; let and const only inside their { } block, like an if or a loop.",
          },
        },
        {
          title: { fa: "const جعبه را قفل می‌کند، نه محتوایش را", en: "const locks the box, not the contents" },
          detail: {
            fa: "const یعنی «این برچسب دوباره به چیز دیگری وصل نمی‌شود». اگر خودش آبجکت باشد، می‌توانید فیلدهایش را عوض کنید، فقط نمی‌توانید کل آبجکت را عوض کنید.",
            en: "const means 'this label won't be reattached to something else'. If it holds an object, you can still edit its fields — you just can't swap the whole object.",
          },
        },
        {
          title: { fa: "closure یعنی کوله‌پشتی تابع", en: "A closure is a function's backpack" },
          detail: {
            fa: "هر تابع موقع ساخته‌شدن، کوله‌پشتی از متغیرهای اطرافش همراه خودش می‌برد. حتی وقتی تابعِ بیرونی تمام شده و «خانه‌اش» تخریب شده، کوله‌پشتی هنوز همان متغیرها را زنده نگه می‌دارد.",
            en: "Every function is born carrying a backpack of the variables around it. Even after the outer function has finished and its 'home' is gone, the backpack keeps those variables alive.",
          },
        },
        {
          title: { fa: "کاربرد واقعی", en: "Where you use it" },
          detail: {
            fa: "state در ری‌اکت، شمارنده‌های خصوصی، memoization و event handlerها همگی با closure کار می‌کنند — هر getter/setter که می‌سازید در واقع یک closure است.",
            en: "React state, private counters, memoization and event handlers are all closures — any getter/setter you build is one.",
          },
        },
      ],
      codeExample: {
        language: "javascript",
        code: `function makeCounter() {
  let count = 0;          // lives in the closure backpack
  return function () {
    count += 1;
    return count;
  };
}

const next = makeCounter();
next(); // 1
next(); // 2  ← the inner function remembered "count"`,
        caption: {
          fa: "متغیر count بعد از اتمام makeCounter هم زنده است",
          en: "count stays alive even after makeCounter has returned",
        },
      },
      followUps: [
        {
          fa: "باگ کلاسیک حلقه برای var چیست؟ چطور درستش کنیم؟",
          en: "What's the classic for-loop var bug and how do we fix it?",
        },
        {
          fa: "چطور با closure داده خصوصی بسازیم؟",
          en: "How would you create private data with a closure?",
        },
      ],
      visual: "event-loop",
    },
    {
      id: "css-box-model-and-layout",
      question: {
        fa: "باکس مدل CSS را توضیح دهید؛ Flexbox یا Grid را کِی انتخاب می‌کنید؟",
        en: "Explain the CSS box model — when do you pick Flexbox vs Grid?",
      },
      difficulty: "junior",
      tags: ["css", "layout", "flexbox", "grid"],
      quickAnswer: {
        fa: "هر عنصر یک جعبه است: محتوا + padding + border + margin. Flexbox برای چیدن در یک جهت (ردیف یا ستون) است و Grid برای دو جهت هم‌زمان. قانون من: Grid برای قالب کلی صفحه، Flexbox برای اجزای داخل آن.",
        en: "Every element is a box: content + padding + border + margin. Flexbox lays things along one axis (row or column); Grid handles both axes at once. My rule: Grid for the page's overall frame, Flexbox for the parts inside it.",
      },
      steps: [
        {
          title: { fa: "جعبه مثل قاب نقاشی", en: "A box is like a framed painting" },
          detail: {
            fa: "محتوا = خود نقاشی؛ padding = فاصله داخل قاب؛ border = خود قاب؛ margin = فاصله این قاب از بقیه قاب‌ها روی دیوار.",
            en: "Content = the painting; padding = matting inside the frame; border = the frame itself; margin = the gap between this frame and the neighbors on the wall.",
          },
        },
        {
          title: { fa: "box-sizing: border-box", en: "box-sizing: border-box" },
          detail: {
            fa: "پیش‌فرض قدیمی، padding و border را به عرض اضافه می‌کرد و سایزها را خراب می‌کرد. با border-box عرض اعلامی همان عرض نهایی است — همه‌جا این را ست کنید.",
            en: "The old default added padding and border on top of the declared width, breaking sizes. With border-box, the declared width is the final width — set it everywhere.",
          },
        },
        {
          title: { fa: "Flexbox = یک جهت", en: "Flexbox = one direction" },
          detail: {
            fa: "وقتی آیتم‌ها پشت‌سرهم در یک ردیف یا ستون می‌روند و می‌خواهید بین‌شان تقسیم شود (مثل منو یا نوار ابزار)، Flexbox طبیعی‌ترین ابزار است.",
            en: "When items flow one after another in a row or column and you want to distribute space (a menu, a toolbar), Flexbox is the natural tool.",
          },
        },
        {
          title: { fa: "Grid = دو بعد", en: "Grid = two dimensions" },
          detail: {
            fa: "وقتی ساختار خودش جدولی است — هدر، سایدبار، سه ستون محتوا، فوتر — Grid می‌سازد؛ چون می‌توانید سطر و ستون را هم‌زمان تعریف کنید و عنصرها را در خانه‌ها بگذارید.",
            en: "When the structure itself is table-like — header, sidebar, three content columns, footer — reach for Grid: you define rows and columns together and place items into cells.",
          },
        },
        {
          title: { fa: "در عمل با هم", en: "In practice, together" },
          detail: {
            fa: "صفحه‌ی واقعی ترکیبی است: Grid برای اسکلت کلی، و داخل هر خانه Flexbox برای ترتیب آیتم‌ها. این ترکیب استاندارد ۲۰۲۶ است.",
            en: "A real page mixes both: Grid for the overall skeleton, Flexbox inside each cell for item arrangement. That combo is the 2026 standard.",
          },
        },
      ],
      codeExample: {
        language: "css",
        code: `* { box-sizing: border-box; }

.page {
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.card-row {
  display: flex;          /* one axis */
  gap: 1rem;              /* modern spacing, no margin hacks */
  flex-wrap: wrap;        /* graceful on small screens */
}`,
        caption: {
          fa: "Grid برای اسکلت، Flexbox برای داخل خانه‌ها",
          en: "Grid for the skeleton, Flexbox inside the cells",
        },
      },
      followUps: [
        {
          fa: "چرا margin کلاپس می‌شود و راه‌حلش چیست؟",
          en: "Why do margins collapse and how do you prevent it?",
        },
        {
          fa: "تفاوت position: absolute و sticky؟",
          en: "Absolute vs sticky positioning — when each?",
        },
      ],
      visual: "dom-render",
    },
    {
      id: "react-rendering-and-reconciliation",
      question: {
        fa: "ری‌اکت چطور تصمیم می‌گیرد کدام بخش را دوباره رندر کند؟",
        en: "How does React decide which parts of the page to re-render?",
      },
      difficulty: "mid",
      tags: ["react", "rendering", "reconciliation"],
      quickAnswer: {
        fa: "وقتی state یا props عوض می‌شود، ری‌اکت درخت جدید کامپوننت‌ها را می‌سازد و با درخت قبلی گره‌به‌گره مقایسه می‌کند (reconciliation)؛ فقط گره‌هایی که واقعاً فرق کرده‌اند در DOM تغییر می‌کنند. کلید مقایسه، «تایپ» گره و مقدار key در لیست‌هاست.",
        en: "When state or props change, React builds a new component tree and compares it with the previous one node by node (reconciliation); only nodes that actually differ touch the DOM. Comparison keys are the node's 'type' and the key prop inside lists.",
      },
      steps: [
        {
          title: { fa: "رندر یعنی توصیف، نه تغییر", en: "Render means describe, not mutate" },
          detail: {
            fa: "کامپوننت فقط یک تابع است که JSX (توصیف ظاهر) برمی‌گرداند. ری‌اکت آن توصیف را می‌گیرد و خودش تصمیم می‌گیرد چه چیزی واقعاً در DOM عوض شود.",
            en: "A component is just a function returning JSX (a description of the UI). React takes that description and decides what actually changes in the DOM.",
          },
        },
        {
          title: { fa: "دو درخت کنار هم", en: "Two trees side by side" },
          detail: {
            fa: "با هر تغییر state، درخت جدید ساخته می‌شود. ری‌اکت درخت قبلی و جدید را هم‌زمان پیمایش می‌کند و برای هر گره می‌پرسد: «همان قبلی هستی؟»",
            en: "Each state change builds a new tree. React walks the old and new trees together, asking each node: 'are you the same as before?'",
          },
        },
        {
          title: { fa: "قواعد مقایسه", en: "The comparison rules" },
          detail: {
            fa: "اگر تایپ گره عوض شود (div به span یا کامپوننت متفاوت)، زیرِ درخت از نو ساخته می‌شود؛ اگر تایپ همان باشد، فقط props مقایسه و تغییرها اعمال می‌شوند.",
            en: "If a node's type changes (div→span, or a different component), React rebuilds that whole subtree; if the type is the same, it diffs only the props and applies what changed.",
          },
        },
        {
          title: { fa: "نقش key در لیست‌ها", en: "The role of key in lists" },
          detail: {
            fa: "key مثل شماره صندلی دانش‌آموزان است: به ری‌اکت می‌گوید «این آیتم همان قبلی است، فقط جابه‌جا شده». با index به‌عنوان key، جابه‌جایی‌ها اشتباه شناسایی می‌شوند.",
            en: "A key is like a student's seat number: it tells React 'this is the same item, just moved'. Using the array index as key makes reorders misidentified.",
          },
        },
        {
          title: { fa: "چرا سریع است؟", en: "Why is this fast?" },
          detail: {
            fa: "تغییر DOM گران است، مقایسه در جاوااسکریپت ارزان. ری‌اکت همه‌ی حساب‌ها را در حافظه انجام می‌دهد و حداقل‌ترین تغییر ممکن را به DOM می‌دهد.",
            en: "Touching the DOM is expensive; comparing in JavaScript is cheap. React does all the math in memory and hands the DOM the smallest possible change set.",
          },
        },
      ],
      codeExample: {
        language: "jsx",
        code: `function Todos({ todos }) {
  return (
    <ul>
      {todos.map((t) => (
        <li key={t.id}>{t.title}</li>  // stable id, not index
      ))}
    </ul>
  );
}
// Toggling one todo re-renders <Todos>, but only that
// one <li> actually changes in the DOM.`,
        caption: {
          fa: "با key پایدار، فقط آیتم تغییرکرده در DOM عوض می‌شود",
          en: "With a stable key, only the changed item touches the DOM",
        },
      },
      followUps: [
        {
          fa: "React.memo و useMemo کی کمک می‌کنند و کی بی‌فایده‌اند؟",
          en: "When do React.memo and useMemo help — and when are they wasted?",
        },
        {
          fa: "رندر سنگین و اجتناب‌ناپذیر چطور مدیریت می‌شود؟",
          en: "How do you handle a heavy but unavoidable render?",
        },
      ],
      visual: "react-render",
    },
    {
      id: "server-components-vs-ssr",
      question: {
        fa: "فرق Server Components با SSR کلاسیک چیست؟",
        en: "What's the difference between Server Components and classic SSR?",
      },
      difficulty: "mid",
      tags: ["nextjs", "rsc", "ssr"],
      quickAnswer: {
        fa: "SSR یعنی HTML اولیه در سرور ساخته می‌شود ولی کل جاوااسکریپت کامپوننت‌ها باز هم به مرورگر می‌رود تا تعاملی شود. Server Component یعنی بخشی از درخت که اصلاً به مرورگر نمی‌رود — در سرور اجرا می‌شود، HTML تحویل می‌دهد و JS‌اش صفر است. در Next.js هر دو را با هم داریم و با 'use client' مرزشان را می‌کشیم.",
        en: "SSR means the initial HTML is rendered on the server, but the components' JavaScript still ships to the browser to become interactive. A Server Component is a part of the tree that never goes to the browser at all — it runs on the server, delivers HTML, and ships zero JS. Next.js uses both together, with 'use client' drawing the boundary.",
      },
      steps: [
        {
          title: { fa: "SSR: یک‌بار در سرور، بعد در کلاینت", en: "SSR: once on the server, then on the client" },
          detail: {
            fa: "در SSR، کد کامپوننت دو جا اجرا می‌شود: اول در سرور برای HTML سریع، بعد در مرورگر تا hydration شود و کلیک‌ها کار کنند. باندل جاوااسکریپت همچنان کامل می‌آید.",
            en: "In SSR, component code runs twice: first on the server for fast HTML, then in the browser during hydration so clicks work. The full JavaScript bundle still arrives.",
          },
        },
        {
          title: { fa: "Server Component: فقط سرور", en: "Server Component: server only" },
          detail: {
            fa: "کامپوننت سروری هرگز به مرورگر ارسال نمی‌شود؛ می‌تواند مستقیم دیتابیس بخواند، کلید مخفی استفاده کند و کدی سنگین داشته باشد که کاربر هیچ‌وقت دانلودش نمی‌کند.",
            en: "A Server Component is never sent to the browser: it can read the database directly, use secret keys, and run heavy code the user never downloads.",
          },
        },
        {
          title: { fa: "مرز با use client", en: "The boundary: 'use client'" },
          detail: {
            fa: "پیش‌فرض در Next.js همه‌چیز سروری است. فقط جاهایی که به state، event handler یا browser API نیاز دارید فایل را 'use client' می‌کنید — مرز درخت را از همان‌جا به پایین کلاینت می‌کند.",
            en: "In Next.js everything is a Server Component by default. Only where you need state, event handlers or browser APIs do you mark a file 'use client' — that subtree from there down becomes client code.",
          },
        },
        {
          title: { fa: "نتیجه: باندل کوچک‌تر", en: "The result: smaller bundles" },
          detail: {
            fa: "لیست‌ها، متن‌ها و داده‌های ایستا سروری می‌مانند؛ فقط دکمه‌ی لایک و فرم‌ها کلاینت می‌شوند. کاربر صرفاً JS لازم را دانلود می‌کند.",
            en: "Lists, copy and static data stay on the server; only the like button and forms ship as client code. Users download just the JS they need.",
          },
        },
        {
          title: { fa: "قانون انتخاب", en: "How I choose" },
          detail: {
            fa: "پیش‌فرض: سروری. فقط وقتی تعامل (state/hook/event) لازم شد، آن بخش را کلاینت کنم. این کار بهینه‌سازی بعداً را هم ساده‌تر می‌کند.",
            en: "Default: server. Only flip a part to client when it truly needs interactivity. This also keeps later optimization simple.",
          },
        },
      ],
      codeExample: {
        language: "tsx",
        code: `// app/posts/page.tsx — Server Component (default)
async function Posts() {
  const posts = await db.post.findMany(); // direct DB access!
  return posts.map((p) => (
    <article key={p.id}>
      <h2>{p.title}</h2>
      <LikeButton postId={p.id} />   {/* the only island */}
    </article>
  ));
}

// LikeButton.tsx
"use client";
export function LikeButton({ postId }: { postId: string }) {
  const [liked, setLiked] = useState(false);
  return <button onClick={() => setLiked(!liked)}>❤ {liked ? 1 : 0}</button>;
}`,
        caption: {
          fa: "کل صفحه سروری است؛ فقط دکمه‌ی لایک JS می‌فرستد",
          en: "The page is a Server Component; only the like button ships JS",
        },
      },
      followUps: [
        {
          fa: "hydration در RSC چطور انجام می‌شود؟",
          en: "How does hydration work with RSC?",
        },
        {
          fa: "چرا نمی‌توان در Server Component از useState استفاده کرد؟",
          en: "Why can't a Server Component use useState?",
        },
      ],
      visual: "react-render",
    },
    {
      id: "why-typescript",
      question: {
        fa: "چرا TypeScript در تیم‌ها استاندارد شده؟ هزینه‌اش چیست؟",
        en: "Why has TypeScript become the team standard? What does it cost?",
      },
      difficulty: "mid",
      tags: ["typescript", "dx", "refactoring"],
      quickAnswer: {
        fa: "TypeScript خطاها را از ران‌تایم به زمان تایپ‌کردن منتقل می‌کند: قبل از save شدن، ویرایشگر می‌گوید آبجکت ممکن است undefined باشد یا فیلد غلط باشد. هزینه‌اش هم یادگیری تایپ‌ها و کمی کد بیشتر است — که در پروژه‌های جدی چند برابر پس داده می‌شود.",
        en: "TypeScript moves errors from runtime to typing time: before you even save, the editor tells you a value may be undefined or a field doesn't exist. The cost is learning the type system and some extra code — repaid many times over on real projects.",
      },
      steps: [
        {
          title: { fa: "مشکل: خطای دیرهنگام", en: "The problem: late errors" },
          detail: {
            fa: "در JS خالص، تایپ‌غلط‌ها فقط وقتی کاربر صفحه را باز کرده و چیزی خواست، منفجر می‌شوند: undefined is not a function — در بدترین لحظه ممکن.",
            en: "In plain JS, typos explode only when a real user has the page open and does something: 'undefined is not a function' — at the worst possible moment.",
          },
        },
        {
          title: { fa: "حل: قرارداد قابل‌چک", en: "The fix: a checkable contract" },
          detail: {
            fa: "تایپ‌ها قرارداد بین توابع‌اند: «این تابع یک User می‌گیرد و Order برمی‌گرداند». اگر کسی قرارداد را بشکند، قرمز خط کشیده می‌شود — قبل از بیلد، قبل از دیپلوی.",
            en: "Types are contracts between functions: 'takes a User, returns an Order'. Break the contract and the editor underlines it — before build, before deploy.",
          },
        },
        {
          title: { fa: "refactor بی‌ترس", en: "Fearless refactoring" },
          detail: {
            fa: "اسم فیلدی را عوض می‌کنید؟ همه‌ی مصرف‌کننده‌ها همان لحظه زیر خط می‌روند. بدون تایپ، باید دعا کنید grep همه‌جاها را پیدا کرده باشد.",
            en: "Rename a field? Every consumer underlines instantly. Without types you just pray that grep found every usage.",
          },
        },
        {
          title: { fa: "تایپ = مستندات زنده", en: "Types are living documentation" },
          detail: {
            fa: "امضای تایپ‌دار، خودش مستندات است که با کد هم‌گام می‌ماند؛ hover روی تابع، کل قرارداد را نشان می‌دهد بدون رفتن به فایل دیگر.",
            en: "A typed signature is documentation that never drifts from the code; hovering a function shows the whole contract without opening another file.",
          },
        },
        {
          title: { fa: "هزینه‌ها را هم بگویید", en: "Name the costs too" },
          detail: {
            fa: "هزینه: منحنی یادگیری، کد بیشتر برای تایپ‌های دقیق، و خطر تایپ‌های بیهوده (any-everywhere که همه‌چیز را بی‌اثر می‌کند). تنظیم درست tsconfig و شروع از تایپ‌های لبه‌ی داده (API responses) بهترین بازده را دارد.",
            en: "Costs: a learning curve, extra code for precise types, and the trap of any-everywhere that silently disables checking. Best ROI: a strict tsconfig and typing data boundaries (API responses) first.",
          },
        },
      ],
      codeExample: {
        language: "typescript",
        code: `type User = { id: string; email: string };

async function getUser(id: string): Promise<User> {
  const res = await fetch(\`/api/users/\${id}\`);
  if (!res.ok) throw new Error("not found");
  return res.json(); // ← typed: editors now know .email exists
}

// getUser("x").then((u) => u.emial);  ← typo caught at typing time`,
        caption: {
          fa: "غلط املایی emial قبل از اجرا گرفته می‌شود",
          en: "The emial typo is caught before the code ever runs",
        },
      },
      followUps: [
        {
          fa: "unknown با any چه فرقی دارد؟",
          en: "How is unknown different from any?",
        },
        {
          fa: "تایپ‌های utility مثل Pick و Partial کجا به کار می‌آیند؟",
          en: "Where do utility types like Pick and Partial shine?",
        },
      ],
      visual: "none",
    },
    {
      id: "web-performance-core-web-vitals",
      question: {
        fa: "Core Web Vitals چیست و چطور LCP را بهبود می‌دهید؟",
        en: "What are Core Web Vitals and how do you improve LCP?",
      },
      difficulty: "senior",
      tags: ["performance", "core-web-vitals", "lcp"],
      quickAnswer: {
        fa: "سه سنجه‌ی تجربه کاربر است: LCP (چه‌زمانی محتوای اصلی دیده می‌شود)، INP (واکنش به تعامل) و CLS (پرش‌های چیدمان). برای LCP: مسیر بحرانی را کوچک کن — تصویر اصلی را اولویت‌دار و بهینه لود کن، فونت را preload کن و از رندر مسدودکننده (JS/CSS سنگین) جلوگیری کن.",
        en: "Three user-experience metrics: LCP (when the main content appears), INP (responsiveness to interaction) and CLS (layout jumps). For LCP: shrink the critical path — prioritize and optimize the hero image, preload the main font, and remove render-blocking JS/CSS.",
      },
      steps: [
        {
          title: { fa: "اول اندازه بگیر، بعد بهینه کن", en: "Measure first, optimize second" },
          detail: {
            fa: "بدون داده، بهینه‌سازی حدس‌زدن است. Lighthouse برای اولین نگاه و Chrome UX Report / Search Console برای داده‌ی کاربران واقعی (field data) — دو عدد متفاوت‌اند و هر دو مهم‌اند.",
            en: "Without data, optimizing is guessing. Lighthouse for the first look; CrUX/Search Console for real-user field data — the two numbers differ and both matter.",
          },
        },
        {
          title: { fa: "LCP یعنی «اولین برداشت»", en: "LCP is the first impression" },
          detail: {
            fa: "معمولاً تصویر اصلی یا تیتر بزرگ است. اگر این دیر بیاید، کاربر حس می‌کند سایت کند است — حتی اگر بقیه‌ی صفحه سریع باشد.",
            en: "It's usually the hero image or big headline. If it's late, users feel the whole site is slow — even if everything else is fast.",
          },
        },
        {
          title: { fa: "تصویر اصلی: اولویت و فرمت", en: "Hero image: priority and format" },
          detail: {
            fa: "fetchpriority=\"high\" بدهید، lazy نکنید، فرمت مدرن (WebP/AVIF) و سایز درست برای هر دستگاه. در Next.js از next/image استفاده کنید که همه‌ی این‌ها را خودکار می‌کند.",
            en: "Give it fetchpriority=\"high\", never lazy-load it, serve modern formats (WebP/AVIF) at the right size per device. In Next.js, next/image automates all of this.",
          },
        },
        {
          title: { fa: "مسیر رندر را باز کن", en: "Open up the render path" },
          detail: {
            fa: "CSS و JS مسدودکننده‌ی رندر را کم کن؛ فونت اصلی را preload کن تا متن‌ها دیر نیفتند؛ RSC و streaming در Next.js HTML را زودتر می‌رسانند.",
            en: "Cut render-blocking CSS/JS; preload the main font so text doesn't arrive late; RSC and streaming in Next.js get HTML out earlier.",
          },
        },
        {
          title: { fa: "دو سنجه‌ی دیگر را فراموش نکن", en: "Don't forget the other two" },
          detail: {
            fa: "CLS معمولاً از تصویر بدون width/height یا بنر تزریقی می‌آید — جا را از اول رزرو کن. INP از کارهای سنگین در نخ اصلی — کار را به بخش‌های کوچک بشکن یا به Worker بده.",
            en: "CLS usually comes from images without width/height or injected banners — reserve space upfront. INP comes from heavy main-thread work — split it up or move it to a Worker.",
          },
        },
      ],
      codeExample: {
        language: "tsx",
        code: `import Image from "next/image";

export default function Hero() {
  return (
    <Image
      src="/hero.webp"
      alt="Product"
      width={1200}
      height={600}
      priority        // ← fetchpriority=high + no lazy-load
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  );
}
// plus: preload the font in the root layout`,
        caption: {
          fa: "با next/image و priority، LCP تصویر اصلی به‌شکل محسوس زودتر می‌آید",
          en: "With next/image + priority, the hero's LCP improves measurably",
        },
      },
      followUps: [
        {
          fa: "فرق lab data و field data چیست و به کدام اعتماد می‌کنی؟",
          en: "Lab data vs field data — which do you trust and why?",
        },
        {
          fa: "چطور INP را در صفحات سنگین کاهش می‌دهی؟",
          en: "How do you cut INP on heavy pages?",
        },
      ],
      visual: "http-request",
    },
  ],
};
