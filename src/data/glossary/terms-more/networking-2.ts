import type { GlossaryTerm } from "../../schema";

/** DATA FILE — Glossary terms (networking, part 2). Merged into terms.ts → /glossary page. */
export const moreNetworkingTerms2: GlossaryTerm[] = [
  {
    term: "URL",
    fa: "نشانی اینترنتی",
    category: "networking",
    definition: {
      fa: "URL نشانی کامل یک منبع وب است: پروتکل (https://) + دامنه (example.com) + مسیر (/products/42) + کوئری (?color=red) + گاهی fragment (#reviews). URI خانواده‌ی بزرگ‌تر است و URL زیرمجموعه‌اش. هر بخش نقش مشخص دارد و پارامترهای کوئری برای فیلتر و ردیابی به کار می‌روند.",
      en: "A URL is the complete web address of a resource: protocol (https://) + domain (example.com) + path (/products/42) + query (?color=red) + optionally a fragment (#reviews). URI is the broader family and URL its address subset. Each part has a defined role; query parameters carry filters and tracking.",
    },
    analogy: {
      fa: "مثل نشانی پستی کامل: کشور (پروتکل)، شهر و خیابان (دامنه)، پلاک (مسیر)، شماره‌ی واحد (کوئری) و «طبقه‌ی دوم، سمت چپ» (fragment).",
      en: "Like a full postal address: country (protocol), city and street (domain), house number (path), apartment line (query), and 'second floor, left' (fragment).",
    },
    related: ["HTTP", "DNS", "IP Address"],
  },
  {
    term: "QUIC",
    fa: "کوییک",
    category: "networking",
    definition: {
      fa: "QUIC پروتکل انتقال نسل جدید روی UDP است که HTTP/3 روی آن سوار است: handshake ترکیبی (رمز + اتصال در یک رفت‌وبرگشت)، بدون صف‌بندی سراسری TCP (packet loss یک جریان، دیگری را قفل نمی‌کند) و مهاجرت اتصال (سوییچ Wi-Fi به موبایل داده بدون قطع). راه‌اندازها: Google، Cloudflare و اجبار فزاینده به HTTP/3.",
      en: "QUIC is the next-gen transport protocol over UDP, carrying HTTP/3: combined handshake (crypto + connection in one round-trip), no TCP head-of-line blocking (loss in one stream doesn't stall others), and connection migration (Wi-Fi→cellular without dropping). Backers: Google, Cloudflare and the ongoing push to HTTP/3.",
    },
    analogy: {
      fa: "مثل آسانسورهای مستقل در برابر یک آسانسور مشترک: در TCP خرابی یک بسته همه‌ی صف را می‌ایستاند؛ در QUIC هر جریان آسانسور خودش را دارد.",
      en: "Like independent elevators versus one shared shaft: TCP stalls everyone when one packet drops; QUIC gives each stream its own elevator.",
    },
    related: ["TCP", "UDP", "HTTP", "TLS", "Latency"],
  },
  {
    term: "NAT",
    fa: "ترجمه‌ی آدرس شبکه",
    category: "networking",
    definition: {
      fa: "NAT (Network Address Translation) چند دستگاه شبکه‌ی خصوصی را پشت یک IP عمومی پنهان می‌کند: روتر جفت‌های «IP داخلی:پورت» را به «IP عمومی:پورت» ترجمه و جدول اتصال‌ها را نگه می‌دارد. اینترنت IPv4 را نجات داد (کمبود آدرس)، ولی اتصال ورودی به دستگاه داخلی را سخت می‌کند (port forwarding لازم است).",
      en: "NAT (Network Address Translation) hides many private-network devices behind one public IP: the router translates 'internal IP:port' pairs to 'public IP:port' and keeps a connection table. It rescued IPv4 from address exhaustion but makes inbound connections to internal devices hard (port forwarding required).",
    },
    analogy: {
      fa: "مثل منشی یک برج: همه‌ی نامه‌ها به نشانی برج می‌آیند و منشی با شماره‌ی داخلی می‌فهمد به کدام واحد برساند — از بیرون فقط یک نشانی دیده می‌شود.",
      en: "Like a tower's receptionist: all mail arrives at the building's address, and the receptionist routes it by internal extension — outside, only one address exists.",
    },
    related: ["IP Address", "TCP", "Firewall", "Port"],
  },
  {
    term: "Round Robin",
    fa: "چرخشی",
    category: "networking",
    definition: {
      fa: "Round Robin ساده‌ترین الگوریتم لود‌بالانس است: درخواست‌ها به ترتیب بین سرورها می‌چرخند (۱ به A، ۲ به B، ۳ به C…). برای سرورهای هم‌قد عالی است؛weighted آن سرورهای قوی‌تر را سهم بیشتری می‌دهد و «least connections» ترافیک را به سرور کم‌بارتر می‌فرستد. پیوست‌کاری (stickiness) برای session ها لازم است.",
      en: "Round Robin is the simplest load-balancing algorithm: requests cycle through servers in order (1→A, 2→B, 3→C…). Perfect for equal servers; the weighted variant gives stronger servers a bigger share, and 'least connections' sends traffic to the least-busy one. Session stickiness may be needed.",
    },
    analogy: {
      fa: "مثل نوبت صندوق بانک: «مشتری بعدی به باجه‌ی بعدی» — منصف و ساده، مگر اینکه یک باجه کندتر باشد و صفش عقب بماند.",
      en: "Like bank-teller rotation: 'next customer to the next window' — fair and simple, unless one teller is slower and their queue backs up.",
    },
    related: ["Load Balancer", "Horizontal vs Vertical Scaling", "Session Stickiness"],
  },
  {
    term: "Session Stickiness",
    fa: "چسبندگی نشست",
    category: "networking",
    definition: {
      fa: "چسبندگی نشست یعنی لود‌بالانسر همه‌ی درخواست‌های یک کاربر را به همان سرور قبلی بفرستد — با کوکی، IP hash یا مسیردهی TCP. برای سرویس‌هایی که state روی خود سرور نگه می‌دارند (session در حافظه) لازم است؛ راه‌حل مقیاس‌پذیرتر، stateless کردن اپ و نگهداری session در Redis است.",
      en: "Session stickiness sends all of one user's requests to the same server — via cookie, IP hash or TCP routing. Required for services keeping state on the server itself (in-memory sessions); the more scalable fix is making the app stateless and storing sessions in Redis.",
    },
    analogy: {
      fa: "مثل همیشه گرفتن همان مشاور در بانک: پرونده‌ات پیش اوست؛ بهتر است پرونده مرکزی شود تا هر کسی از پرسنل بتواند کمکت کند.",
      en: "Like always getting the same bank advisor because your file sits on their desk — better to centralize the file so anyone can help you.",
    },
    related: ["Round Robin", "Load Balancer", "Cookie & Session", "Redis"],
  },
];
