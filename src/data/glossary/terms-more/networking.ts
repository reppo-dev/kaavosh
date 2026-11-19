import type { GlossaryTerm } from "../../schema";

/** DATA FILE — Glossary terms (networking). Merged into terms.ts → /glossary page. */
export const moreNetworkingTerms: GlossaryTerm[] = [
  {
    term: "IP Address",
    fa: "نشانی آی‌پی",
    category: "networking",
    definition: {
      fa: "آی‌پی نشانی منحصربه‌فرد هر دستگاه در شبکه است، مثل 192.168.1.10 — پستی که بسته‌ها با آن به دستگاه درست می‌رسند. نسخه‌ی جدید آن IPv6 است که فضای بسیار بیشتری دارد.",
      en: "An IP address is each device's unique network identity, like 192.168.1.10 — the postal address that makes packets arrive at the right machine. Its newer version, IPv6, offers a vastly larger space.",
    },
    analogy: {
      fa: "مثل نشانی پستی خانه: برای اینکه نامه به دست شما برسد، کشور و شهر و خیابان و پلاک باید دقیق باشد؛ بدون آن، نامه در جهان گم می‌شود.",
      en: "Like a home's postal address: country, city, street and number must be exact, or the letter wanders the world forever.",
    },
    related: ["DNS", "Packet", "Port"],
  },
  {
    term: "DNS",
    fa: "سیستم نام دامنه",
    category: "networking",
    definition: {
      fa: "DNS دفترچه‌ی ترجمه‌ی نام به نشانی است: google.com را به آی‌پی سرور گوگل تبدیل می‌کند، چون کامپیوترها با عدد کار می‌کنند نه اسم. هر بار سایتی باز می‌کنید، اول یک پرس‌وجوی DNS اتفاق می‌افتد.",
      en: "DNS is the name-to-address phonebook: it turns google.com into Google's server IP, because computers route by numbers, not names. Every site you open starts with a DNS lookup.",
    },
    analogy: {
      fa: "مثل دفترچه‌ی تلفن: اسم مخاطب را بلدید، ولی برای تماس باید شماره را از دفترچه پیدا کنید؛ DNS همین کار را برای سایت‌ها در کسری از ثانیه می‌کند.",
      en: "Like a phone contacts app: you know the person's name, but you need the app to find their number before dialing — DNS does this for websites in milliseconds.",
    },
    related: ["IP Address", "CDN", "HTTP"],
  },
  {
    term: "CDN",
    fa: "شبکه توزیع محتوا",
    category: "networking",
    definition: {
      fa: "CDN شبکه‌ای از سرورهای پراکنده در دنیاست که نسخه‌ی محتوای شما را نزدیک کاربر نگه می‌دارد: تصویر و ویدیو از نزدیک‌ترین نقطه تحویل می‌شود، نه از قاره‌ی دیگر.",
      en: "A CDN is a worldwide network of servers that keeps copies of your content near users: images and videos arrive from the nearest edge, not from another continent.",
    },
    analogy: {
      fa: "مثل انبارهای محلی یک فروشگاه بزرگ: به‌جای اینکه هر سفارش از مرکز کشور بفرستد، از انبار شهری خودتان ارسال می‌شود — همان کالا، خیلی سریع‌تر.",
      en: "Like a retailer's local warehouses: instead of shipping every order from the national center, it ships from your city's depot — same product, far faster.",
    },
    related: ["DNS", "Latency", "Bandwidth"],
  },
  {
    term: "Latency",
    fa: "تاخیر",
    category: "networking",
    definition: {
      fa: "تاخیر زمان رفت‌وبرگشت یک بسته از شما تا مقصد و برعکس است، بر حسب میلی‌ثانیه. حتی با اینترنت پرسرعت، فاصله‌ی فیزیکی و مسیرها تاخیر حداقلی می‌سازند که بازی‌های آنلاین و صدا به آن حساس‌اند.",
      en: "Latency is a packet's round-trip time from you to the destination and back, in milliseconds. Even on fast internet, physical distance and routes impose a floor that online games and voice calls are sensitive to.",
    },
    analogy: {
      fa: "مثل مکالمه با تلفن بین‌المللی قدیمی: صدای طرف با چند ده‌صدم ثانیه تاخیر می‌رسد؛ هر دو حرف را هم‌زمان می‌زنید و مکالمه خش‌دار می‌شود.",
      en: "Like an old international phone call: the other voice arrives with a slight delay; you both start talking at once and the conversation stumbles.",
    },
    related: ["Bandwidth", "CDN", "Packet"],
  },
  {
    term: "Bandwidth",
    fa: "پهنای باند",
    category: "networking",
    definition: {
      fa: "پهنای باند ظرفیت لوله‌ی داده در واحد زمان است — چقدر داده در ثانیه جا می‌شود (مگابیت بر ثانیه). با تماشای هم‌زمان چند ویدیوی سنگین، لوله پر می‌شود و همه چیز کند می‌شود.",
      en: "Bandwidth is the data pipe's capacity per unit of time — how many megabits fit each second. Stream several heavy videos at once and the pipe fills; everything slows.",
    },
    analogy: {
      fa: "مثل قطر لوله‌ی آب: لوله‌ی پهن، هم‌زمان چند شیر را پرآب نگه می‌دارد؛ لوله‌ی باریک با یک شیر هم کم می‌آورد. تاخیر سرعت رسیدن اولین قطره است، پهنای باند مقدار جریان.",
      en: "Like a water pipe's diameter: a wide pipe keeps several taps full simultaneously; a narrow one struggles with even one. Latency is how soon the first drop arrives; bandwidth is the flow volume.",
    },
    related: ["Latency", "CDN", "Packet"],
  },
  {
    term: "Proxy",
    fa: "پروکسی",
    category: "networking",
    definition: {
      fa: "پروکسی واسطی است که درخواست شما را از طرف خودش می‌فرستد: مقصد آی‌پی شما را نمی‌بیند، آی‌پی پروکسی را می‌بیند. برای فیلتر، کش، لاگ و امنیت استفاده می‌شود.",
      en: "A proxy is a middleman that sends your requests on your behalf: the destination sees the proxy's IP, not yours. Used for filtering, caching, logging and security.",
    },
    analogy: {
      fa: "مثل منشی‌ی مشترک چند مدیر: نامه‌ها به دفتر منشی می‌رسد، او توزیع و ارسال می‌کند؛ طرف مقابل فقط دفتر منشی را می‌شناسد، نه تلفن مستقیم هر مدیر را.",
      en: "Like a shared receptionist for several executives: letters reach the front desk, the desk forwards and sends; counterparties only know the front desk, not each executive's direct line.",
    },
    related: ["VPN", "IP Address", "Reverse Proxy"],
  },
  {
    term: "Port",
    fa: "درگاه",
    category: "networking",
    definition: {
      fa: "پورت شماره‌ی در داخل یک دستگاه است که هر سرویس پشت یکی می‌نشیند: وب معمولاً ۴۴۳، ایمیل ۵۸۷. آی‌پی خانه را پیدا می‌کند و پورت شماره‌ی واحد را.",
      en: "A port is a numbered door on one machine where each service waits: the web usually at 443, email at 587. The IP finds the building; the port finds the exact apartment.",
    },
    analogy: {
      fa: "مثل یک برج اداری: نشانی برج (آی‌پی) همه‌جای دنیا یکی است، اما هر شرکت واحدی دارد (پورت)؛ پذیرش هر طبقه صدای زنگ مخصوص خودش را دارد.",
      en: "Like an office tower: the building's address (IP) is one, but every company has its own unit (port), each floor's reception with its own doorbell.",
    },
    related: ["IP Address", "Packet", "HTTP"],
  },
  {
    term: "Packet",
    fa: "بسته",
    category: "networking",
    definition: {
      fa: "داده در شبکه به تکه‌های کوچک و استاندارد به نام بسته شکسته می‌شود و هر تکه جدا سفر می‌کند؛ در مقصد دوباره مونتاژ می‌شوند. اگر تکه‌ای گم شد، فقط همان دوباره می‌رود.",
      en: "Networks break data into small standardized chunks called packets, each traveling independently; the destination reassembles them. If one chunk is lost, only that one is resent.",
    },
    analogy: {
      fa: "مثل ارسال یک کتاب با ده پاکُت جدا: هر پاکُت مسیر خودش را می‌رود، در مقصد به ترتیب شماره کنار هم می‌نشینند و کتاب کامل می‌شود.",
      en: "Like mailing a book as ten separate envelopes: each travels its own route, gets reordered by number at the destination, and the book comes back whole.",
    },
    related: ["TCP", "IP Address", "Latency"],
  },
  {
    term: "TCP",
    fa: "پروتکل کنترل انتقال",
    category: "networking",
    definition: {
      fa: "TCP پروتکل حملِ مطمئن است: تضمین می‌کند هر بسته برسد، به ترتیب و بدون خطا کنار هم بنشیند؛ اگر تکه‌ای گم شد، دوباره می‌خواهد. وب و ایمیل روی آن سوارند.",
      en: "TCP is the reliable transport: it guarantees every packet arrives, in order and uncorrupted; missing chunks get re-requested. The web and email ride on it.",
    },
    analogy: {
      fa: "مثل پست سفارشی با رسید: هر بسته شماره دارد، تحویل امضا می‌شود و اگر یکی مفقود شد، پست دوباره می‌فرستد — کندتر ولی بدون گم‌شدن.",
      en: "Like registered mail with receipts: every parcel is numbered, delivery is signed, and anything lost is resent — slower, but nothing goes missing.",
    },
    related: ["UDP", "Packet", "HTTP"],
  },
  {
    term: "UDP",
    fa: "پروتکل داده‌نگرام کاربر",
    category: "networking",
    definition: {
      fa: "UDP حملِ سریع و بی‌تکلیف است: بسته را می‌فرستد و ادامه می‌دهد، بدون تضمین رسیدن یا ترتیب. برای ویدیوی زنده و بازی آنلاین عالی است، چون یک قاب گم‌شده بهتر از یک قاب دیر است.",
      en: "UDP is fast, no-guarantee transport: it fires packets and moves on — no delivery or ordering promise. Perfect for live video and online games, where a lost frame beats a late one.",
    },
    analogy: {
      fa: "مثل پخش تراکت از هواپیما: هرچند برگ به زمین می‌رسد خبر است؛ کسی دنبال برگه‌ی گم‌شده نمی‌گردد — سرعت مهم‌تر از کامل‌بودن است.",
      en: "Like dropping leaflets from a plane: whatever lands, lands; nobody hunts the missing one — speed matters more than completeness.",
    },
    related: ["TCP", "Packet", "Latency"],
  },
];
