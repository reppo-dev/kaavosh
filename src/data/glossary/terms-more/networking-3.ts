import type { GlossaryTerm } from "../../schema";

/** Networking glossary expansion — HTTP/2, HTTP/3, handshakes, routing, sockets & web protocols. Consumed by: src/data/glossary/terms.ts. */
export const moreNetworkingTerms3: GlossaryTerm[] = [
  {
    term: "HTTP/2",
    fa: "پروتکل HTTP/2",
    category: "networking",
    definition: {
      fa: "نسخهٔ دوم پروتکل HTTP که روی یک اتصال TCP واحد، چندین درخواست و پاسخ را هم‌زمان ارسال می‌کند (Multiplexing) و هدرها را فشرده می‌سازد. این کار مشکل صف‌ایستادن درخواست‌ها در سطح HTTP را حذف می‌کند.",
      en: "The second major version of HTTP that multiplexes multiple concurrent requests and responses over a single TCP connection and compresses headers, eliminating HTTP-level head-of-line blocking.",
    },
    analogy: {
      fa: "مثل بزرگراه چندبانده به‌جای خیابان یک‌طرفه: به‌جای اینکه هر ماشین منتظر تمام شدن مسیر ماشین قبلی بماند، همه هم‌زمان در یک جاده حرکت می‌کنند.",
      en: "Like a multi-lane highway instead of a one-lane road: cars travel side by side over the same road rather than waiting one by one.",
    },
    related: ["HTTP", "TCP", "HTTP/3", "Latency"],
  },
  {
    term: "HTTP/3",
    fa: "پروتکل HTTP/3",
    category: "networking",
    definition: {
      fa: "جدیدترین نسخهٔ HTTP که به‌جای TCP روی QUIC (مبتنی بر UDP) اجرا می‌شود و رمزنگاری TLS 1.3 به‌طور داخلی در آن گنجانده شده است. با گم شدن یک بسته، فقط همان جریان متوقف می‌شود نه کل اتصال.",
      en: "The latest version of HTTP built on top of QUIC over UDP with built-in TLS 1.3 encryption. Losing a single packet stalls only that stream instead of freezing the entire connection.",
    },
    analogy: {
      fa: "مثل چند پیک موتوری مستقل: اگر یکی در ترافیک گیر کند، بقیهٔ بسته‌ها بدون معطلی به مقصد می‌رسند.",
      en: "Like independent couriers: if one hits traffic, every other package still arrives without waiting.",
    },
    related: ["HTTP/2", "QUIC", "UDP", "TLS"],
  },
  {
    term: "TLS Handshake",
    fa: "دست‌دادن TLS",
    category: "networking",
    definition: {
      fa: "مجموعه پیام‌های ابتدایی میان کلاینت و سرور برای تأیید گواهی سرور، توافق روی الگوریتم رمزنگاری و ساخت کلید نشست مشترک، پیش از ارسال هرگونه دادهٔ محرمانه.",
      en: "The initial exchange between client and server to verify the server certificate, negotiate a cipher suite, and establish shared session keys before any encrypted data flows.",
    },
    analogy: {
      fa: "مثل بررسی کارت شناسایی و توافق روی یک رمز محرمانه در شروع تماس تلفنی پیش از گفتن اطلاعات حساس.",
      en: "Like checking IDs and agreeing on a secret code at the start of a call before sharing sensitive information.",
    },
    related: ["TLS", "HTTPS", "TLS Certificate", "PKI"],
  },
  {
    term: "TCP Three-Way Handshake",
    fa: "دست‌دادن سه‌مرحله‌ای TCP",
    category: "networking",
    definition: {
      fa: "فرایند برقراری اتصال قابل‌اطمینان در TCP با سه پیام SYN، SYN-ACK و ACK میان کلاینت و سرور تا هر دو طرف از آمادگی و شمارهٔ توالی یکدیگر مطمئن شوند.",
      en: "The three-step process (SYN, SYN-ACK, ACK) TCP uses to open a reliable connection so both client and server confirm readiness and synchronize sequence numbers.",
    },
    analogy: {
      fa: "مثل گفت‌وگوی کوتاه تلفنی: «الو صدام میاد؟» ← «آره، صدای من میاد؟» ← «بله، شروع کن».",
      en: "Like a quick phone check: 'Can you hear me?' -> 'Yes, can you hear me?' -> 'Yes, go ahead.'",
    },
    related: ["TCP", "Packet", "Latency", "Socket"],
  },
  {
    term: "OSI Model",
    fa: "مدل OSI",
    category: "networking",
    definition: {
      fa: "مدل مفهومی هفت‌لایه برای توضیح نحوهٔ انتقال داده در شبکه از سطح فیزیکی (کابل و سیگنال) تا لایهٔ کاربرد (HTTP و DNS). ابزار مشترکی برای تفکیک مسئولیت‌ها و عیب‌یابی شبکه است.",
      en: "A seven-layer conceptual model describing how data travels across a network from physical signals up to application protocols like HTTP and DNS, widely used for troubleshooting.",
    },
    analogy: {
      fa: "مثل زنجیرهٔ ارسال نامه از نوشتن متن، گذاشتن در پاکت، تمبر زدن، تحویل به پست و حمل با هواپیما تا رسیدن به گیرنده.",
      en: "Like mailing a letter: writing the message, sealing the envelope, stamping, postal sorting, and air transport — each layer has one clear job.",
    },
    related: ["TCP", "IP Address", "HTTP", "Packet"],
  },
  {
    term: "Subnet & CIDR",
    fa: "زیرشبکه و CIDR",
    category: "networking",
    definition: {
      fa: "تقسیم یک شبکهٔ IP بزرگ به بخش‌های کوچک‌تر و قابل مدیریت (Subnet)؛ نمادگذاری CIDR مثل 10.0.0.0/24 نشان می‌دهد چند بیت اول آدرس متعلق به بخش شبکه و بقیه برای دستگاه‌هاست.",
      en: "Dividing a large IP network into smaller segments (subnets). CIDR notation such as 10.0.0.0/24 specifies how many leading bits identify the network versus individual hosts.",
    },
    analogy: {
      fa: "مثل کد پستی که شهر، محله و خیابان را از پلاک خانه جدا می‌کند تا پستچی بسته‌ها را سریع‌تر تفکیک کند.",
      en: "Like a postal code separating city, district, and street from the house number so mail routes efficiently.",
    },
    related: ["IP Address", "NAT", "Firewall"],
  },
  {
    term: "BGP",
    fa: "پروتکل مسیریابی BGP",
    category: "networking",
    definition: {
      fa: "پروتکل مسیریابی ستون فقرات اینترنت (Border Gateway Protocol) که مشخص می‌کند بسته‌های داده میان شبکه‌های مستقل بزرگ (ISPها و کلودها) از کدام مسیر عبور کنند.",
      en: "Border Gateway Protocol — the routing protocol of the internet backbone that exchanges reachability information between autonomous networks (ISPs and cloud providers).",
    },
    analogy: {
      fa: "مثل سامانهٔ بین‌المللی کنترل ترافیک هوایی که مسیر پرواز بین فرودگاه‌های بزرگ دنیا را هماهنگ می‌کند.",
      en: "Like global air-traffic routing that coordinates the best paths between major airports across countries.",
    },
    related: ["IP Address", "Packet", "Anycast", "DNS"],
  },
  {
    term: "Anycast",
    fa: "مسیریابی Anycast",
    category: "networking",
    definition: {
      fa: "تکنیک مسیریابی که در آن یک آدرس IP واحد به چندین سرور در نقاط مختلف جهان اختصاص می‌یابد و شبکه به‌طور خودکار کاربر را به نزدیک‌ترین سرور سالم هدایت می‌کند؛ پایهٔ CDNها و DNSهای سریع است.",
      en: "A routing technique where multiple globally distributed servers share one IP address and the network automatically routes each user to the nearest healthy node.",
    },
    analogy: {
      fa: "مثل شمارهٔ اورژانس ۱۱۰ یا ۹۱۱: یک شمارهٔ واحد می‌گیرید اما تماس خودکار به نزدیک‌ترین مرکز محلی وصل می‌شود.",
      en: "Like dialing an emergency number: everyone calls one number, and the network connects you to the closest local station.",
    },
    related: ["CDN", "DNS", "BGP", "Latency"],
  },
  {
    term: "DNS Record Types",
    fa: "انواع رکوردهای DNS",
    category: "networking",
    definition: {
      fa: "قوانین ثبت‌شده در سامانهٔ DNS که مشخص می‌کنند یک دامنه به کجا اشاره کند: رکورد A (به IPv4)، AAAA (به IPv6)، CNAME (نام مستعار)، MX (سرور ایمیل) و TXT (تأیید مالکیت و امنیت ایمیل).",
      en: "Entries in DNS that map a domain to resources: A (IPv4), AAAA (IPv6), CNAME (alias to another domain), MX (mail server), and TXT (verification and email security policies).",
    },
    analogy: {
      fa: "مثل دفترچهٔ اطلاعات یک شرکت که جداگانه شمارهٔ دفتر مرکزی، آدرس انبار، ایمیل پشتیبانی و نام مستعار برند را فهرست کرده است.",
      en: "Like a company directory listing separate entries for the main address, mailroom, alias name, and verification notes.",
    },
    related: ["DNS", "IP Address", "URL"],
  },
  {
    term: "Socket",
    fa: "سوکت شبکه",
    category: "networking",
    definition: {
      fa: "نقطهٔ انتهایی نرم‌افزاری برای ارسال و دریافت داده در شبکه که با ترکیب آدرس IP و شمارهٔ Port مشخص می‌شود و رابط میان برنامه و لایهٔ انتقال سیستم‌عامل است.",
      en: "A software endpoint for sending and receiving network data, identified by an IP address and port number, bridging an application and the OS transport layer.",
    },
    analogy: {
      fa: "مثل پریز تلفن روی دیوار: برنامه دوشاخه‌اش را به آن وصل می‌کند تا مستقیم با طرف مقابل ارتباط بگیرد.",
      en: "Like a wall phone jack: an application plugs into it to send and receive data directly with another host.",
    },
    related: ["Port", "IP Address", "TCP", "WebSocket"],
  },
  {
    term: "Keep-Alive",
    fa: "اتصال ماندگار Keep-Alive",
    category: "networking",
    definition: {
      fa: "قابلیتی در HTTP و TCP که اجازه می‌دهد یک اتصال باز بماند و برای چند درخواست متوالی بازاستفاده شود، به‌جای آنکه برای هر فایل دوباره دست‌دادن TCP و TLS تکرار شود.",
      en: "A mechanism in HTTP and TCP that keeps a connection open for reuse across multiple requests instead of repeating TCP and TLS handshakes every time.",
    },
    analogy: {
      fa: "مثل باز نگه داشتن تماس تلفنی هنگام پرسیدن پنج سوال پشت‌سرهم، به‌جای قطع کردن و دوباره شماره‌گیری برای هر سوال.",
      en: "Like staying on the phone to ask five questions in a row instead of hanging up and redialing for each one.",
    },
    related: ["HTTP", "TCP Three-Way Handshake", "Latency", "HTTP/2"],
  },
  {
    term: "mTLS",
    fa: "احراز هویت دوطرفه mTLS",
    category: "networking",
    definition: {
      fa: "نسخهٔ دوطرفهٔ TLS (Mutual TLS) که در آن نه‌تنها کلاینت گواهی سرور را بررسی می‌کند، بلکه سرور نیز گواهی دیجیتال کلاینت را اعتبارسنجی می‌نماید. در ارتباط بین میکروسرویس‌ها و معماری Zero Trust بسیار رایج است.",
      en: "Mutual TLS — both client and server present and verify each other's digital certificates before communicating, widely used in microservices and Zero Trust architectures.",
    },
    analogy: {
      fa: "مثل ورود به اتاق امنیتی که هم نگهبان کارت شما را چک می‌کند و هم شما هویت نگهبان را تأیید می‌کنید.",
      en: "Like entering a high-security vault where both the guard checks your badge and you verify the guard's credentials.",
    },
    related: ["TLS", "TLS Handshake", "Service Mesh", "Zero Trust"],
  },
  {
    term: "WebRTC",
    fa: "فناوری WebRTC",
    category: "networking",
    definition: {
      fa: "استاندارد باز مرورگر برای ارتباط صوتی، تصویری و تبادل دادهٔ هم‌زمان به‌صورت همتا‌به‌همتا (Peer-to-Peer) با تأخیر بسیار کم، بدون نیاز به افزونهٔ خارجی.",
      en: "An open browser standard for ultra-low-latency peer-to-peer audio, video, and data streaming directly between clients without external plugins.",
    },
    analogy: {
      fa: "مثل بی‌سیم مستقیم بین دو نفر به‌جای فرستادن پیام از طریق دفتر مرکزی؛ بعد از پیدا کردن هم، مستقیم حرف می‌زنند.",
      en: "Like a direct walkie-talkie link after introductions: once peers find each other, media flows straight between them.",
    },
    related: ["UDP", "NAT", "WebSocket", "Latency"],
  },
  {
    term: "ARP",
    fa: "پروتکل ARP",
    category: "networking",
    definition: {
      fa: "پروتکل نگاشت آدرس (Address Resolution Protocol) که در شبکهٔ محلی آدرس IP را به آدرس سخت‌افزاری کارت شبکه (MAC Address) ترجمه می‌کند تا فریم‌ها به دستگاه دقیق برسند.",
      en: "Address Resolution Protocol — maps a local IP address to a physical network card MAC address so frames reach the exact device on a LAN.",
    },
    analogy: {
      fa: "مثل صدا زدن نام یک نفر در اتاق تا دستش را بالا ببرد و بفهمید دقیقاً روی کدام صندلی نشسته است.",
      en: "Like calling someone's name in a room so they raise their hand and you know which exact seat is theirs.",
    },
    related: ["IP Address", "Packet", "OSI Model"],
  },
  {
    term: "ICMP",
    fa: "پروتکل ICMP",
    category: "networking",
    definition: {
      fa: "پروتکل پیام‌های کنترلی و خطای شبکه که برای عیب‌یابی و گزارش وضعیت مسیرها به کار می‌رود؛ ابزارهای معروف `ping` و `traceroute` بر پایهٔ ICMP کار می‌کنند.",
      en: "Internet Control Message Protocol — carries network diagnostics and error messages; familiar tools like ping and traceroute rely on ICMP.",
    },
    analogy: {
      fa: "مثل پیامک «مقصد در دسترس نیست» یا «تحویل داده شد» که شبکه برای اطلاع از سلامت مسیر می‌فرستد.",
      en: "Like a delivery status notification telling you whether the route is reachable or where a package stalled.",
    },
    related: ["IP Address", "Packet", "Latency"],
  },
  {
    term: "Congestion Control",
    fa: "کنترل ازدحام شبکه",
    category: "networking",
    definition: {
      fa: "سازوکارهایی در TCP و QUIC که سرعت ارسال بسته‌ها را هنگام شلوغی شبکه و از دست رفتن بسته‌ها کاهش می‌دهند و سپس تدریجی زیاد می‌کنند تا شبکه قفل نشود.",
      en: "Mechanisms in TCP and QUIC that throttle sending rates when packet loss or delay signals network overload, then ramp back up to avoid network collapse.",
    },
    analogy: {
      fa: "مثل چراغ رمپ ورودی بزرگراه که هنگام ترافیک سنگین ماشین‌ها را با فاصلهٔ بیشتری وارد جاده می‌کند تا راه بند نیاید.",
      en: "Like highway ramp meters releasing cars more slowly during rush hour so the freeway stays moving.",
    },
    related: ["TCP", "QUIC", "Bandwidth", "Latency"],
  },
  {
    term: "MTU",
    fa: "حداکثر اندازهٔ بسته (MTU)",
    category: "networking",
    definition: {
      fa: "Maximum Transmission Unit — بیشترین اندازهٔ یک بستهٔ داده (معمولاً ۱۵۰۰ بایت در اترنت) که یک پیوند شبکه می‌تواند بدون تکه‌تکه کردن (Fragmentation) عبور دهد.",
      en: "Maximum Transmission Unit — the largest single packet size (typically 1500 bytes on Ethernet) a network link can carry without fragmenting it.",
    },
    analogy: {
      fa: "مثل حداکثر ارتفاع مجاز تونل: بارهای بلندتر باید به قطعات کوچک‌تر تقسیم شوند تا بتوانند عبور کنند.",
      en: "Like a tunnel's height limit: any cargo taller than the clearance must be split into smaller loads first.",
    },
    related: ["Packet", "TCP", "Bandwidth"],
  },
  {
    term: "Content Negotiation",
    fa: "توافق بر سر قالب محتوا",
    category: "networking",
    definition: {
      fa: "سازوکاری در HTTP که کلاینت از طریق هدرهایی مانند `Accept`، `Accept-Language` و `Accept-Encoding` قالب، زبان یا فشرده‌سازی دلخواهش را اعلام می‌کند و سرور بهترین نسخهٔ ممکن را برمی‌گرداند.",
      en: "An HTTP mechanism where the client declares preferred format, language, or compression via headers like Accept and Accept-Encoding, and the server responds with the best match.",
    },
    analogy: {
      fa: "مثل سفارش غذا به گارسون: می‌گویید «منوی فارسی و نسخهٔ گیاهی می‌خواهم» و همان نسخه را برایتان می‌آورند.",
      en: "Like asking a waiter for the English menu and vegetarian option — same kitchen, tailored presentation.",
    },
    related: ["HTTP", "REST", "API"],
  },
];
