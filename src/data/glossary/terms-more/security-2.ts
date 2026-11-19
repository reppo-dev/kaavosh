import type { GlossaryTerm } from "../../schema";

/** DATA FILE — Glossary terms (security, part 2). Merged into terms.ts → /glossary page. */
export const moreSecurityTerms2: GlossaryTerm[] = [
  {
    term: "HTTPS",
    fa: "اچ‌تی‌تی‌پی‌اس",
    category: "security",
    definition: {
      fa: "HTTPS همان HTTP است که روی TLS می‌نشیند: محتوا رمز می‌شود، سرور با گواهی هویتش ثابت می‌شود و دستکاری مسیر (میانی) تشخیص داده می‌شود. امروز استاندارد وب است و مرورگرها سایت‌های HTTP را «ناامن» برچسب می‌زنند؛ Let's Encrypt گواهی را رایگان کرده است.",
      en: "HTTPS is HTTP layered over TLS: content is encrypted, the server's identity is proven by certificate, and tampering in transit is detected. It's now the web standard — browsers flag plain HTTP as 'not secure', and Let's Encrypt made certificates free.",
    },
    analogy: {
      fa: "مثل ارسال نامه در پاکت مهرشده به‌جای کارت پستال: فقط گیرنده می‌خواند، مهر نشان می‌دهد از کی آمده و پاکت باز شده باشد معلوم می‌شود.",
      en: "Like sending a sealed letter instead of a postcard: only the recipient reads it, the seal proves the sender, and opening leaves a trace.",
    },
    related: ["TLS", "TLS Certificate", "HTTP", "Encryption"],
  },
  {
    term: "CSP",
    fa: "سیاست امنیت محتوا",
    category: "security",
    definition: {
      fa: "Content Security Policy لایه‌ی دفاعی در برابر XSS است: سرور با هدر CSP اعلام می‌کند اسکریپت/استایل/تصویر از کجا مجاز است بارگذاری شود. با «فقط اسکریپت از دامنه‌ی خودمان»، حتی اگر مهاجم تگی تزریق کند، مرورگر اجرایش نمی‌کند. حالت report-only برای آزمایش تدریجی دارد.",
      en: "Content Security Policy is a defense layer against XSS: via the CSP header the server declares where scripts/styles/images may load from. With 'scripts only from our own domain', even injected tags never execute. A report-only mode lets you trial it gradually.",
    },
    analogy: {
      fa: "مثل لیست سفید تأمین‌کنندگان رستوران: هر ماده‌ای که از لیست بیرون باشد حتی اگر به آشپزخانه برسد، پذیرفته نمی‌شود.",
      en: "Like a restaurant's approved-supplier list: anything off-list never enters the kitchen, however it arrives.",
    },
    related: ["XSS", "Same-Origin Policy", "HTTP"],
  },
  {
    term: "Same-Origin Policy",
    fa: "سیاست هم‌مبدا",
    category: "security",
    definition: {
      fa: "سیاست هم‌مبدا پایه‌ی امنیت مرورگر است: اسکریپت صفحه‌ی سایت A نمی‌تواند داده‌ی سایت B را بخواند (مبدا = پروتکل + دامنه + پورت). همین قانون است که مانع می‌شود یک سایت مخرب کوکی‌های بانک شما را بخواند؛ CORS استثنای کنترل‌شده‌ی همین سیاست است.",
      en: "The same-origin policy is the browser's security foundation: a script from site A cannot read site B's data (origin = protocol + domain + port). This single rule stops a malicious site from reading your bank's cookies; CORS is its carefully controlled exception.",
    },
    analogy: {
      fa: "مثل دیوار بین اتاق‌های هتل: مهمان اتاق ۱۰۲ نمی‌تواند در کشوی اتاق ۱۰۴ را باز کند، حتی اگر هر دو در همان هتل باشند.",
      en: "Like hotel room walls: the guest in 102 cannot open the drawer in 104, even in the same hotel.",
    },
    related: ["CORS", "CSP", "Cookie & Session", "XSS"],
  },
  {
    term: "Symmetric vs Asymmetric Encryption",
    fa: "رمزنگاری متقارن در برابر نامتقارن",
    category: "security",
    definition: {
      fa: "رمز متقارن (AES) برای رمز و رمزگشایی از یک کلید مشترک استفاده می‌کند — سریع، ولی مشکل توزیع کلید دارد. رمز نامتقارن (RSA، ECC) جفت کلید دارد: کلید عمومی رمز می‌کند و کلید خصوصی باز می‌کند — توزیع آسان ولی کند. در عمل ترکیب می‌شوند: TLS با نامتقارن کلید توافق و با متقارن داده می‌فرستد.",
      en: "Symmetric encryption (AES) uses one shared key for both directions — fast, but key distribution is hard. Asymmetric (RSA, ECC) uses a key pair: public key encrypts, private key decrypts — easy distribution but slow. In practice they combine: TLS negotiates a key asymmetrically, then ships data symmetrically.",
    },
    analogy: {
      fa: "متقارن مثل صندوق امانات با یک کلید که کپی‌اش بین هر دو می‌چرخد؛ نامتقارن مثل صندوق پستی با شکاف: هر کسی می‌تواند نامه بیندازد (کلید عمومی) ولی فقط تو با کلید خصوصی باز می‌کنی.",
      en: "Symmetric is a safe with one copied key shared by both; asymmetric is a mailbox slot: anyone drops a letter in (public key), only you open it (private key).",
    },
    related: ["AES", "RSA", "TLS", "Encryption"],
  },
  {
    term: "AES",
    fa: "ای‌ای‌اس",
    category: "security",
    definition: {
      fa: "AES استاندارد رمز متقارن جهان است: کلیدهای ۱۲۸/۱۹۲/۲۵۶ بیتی و عملیات روی بلوک‌های ۱۶ بایتی. در TLS، دیسک‌های رمزشده و استاندارد دولتی به کار می‌رود؛ با CPUهای مدرن (AES-NI) تقریباً مجانی است. امنیتش به مدیریت کلید و حالت استفاده (GCM به جای ECB) بسته است.",
      en: "AES is the world's symmetric encryption standard: 128/192/256-bit keys operating on 16-byte blocks. Used in TLS, disk encryption and government specs; with modern CPUs (AES-NI) it's nearly free. Security depends on key management and the mode chosen (GCM, not ECB).",
    },
    analogy: {
      fa: "مثل قفل ترکیبی بسیار دقیق که هم دستگاه کارت‌خوان و هم قفل در به آن متکی است — قدرت قفل با سوختن/لو رفتن کلید بی‌معنا می‌شود.",
      en: "Like a high-precision combination lock: its strength evaporates the moment the combination leaks — hence key management.",
    },
    related: ["Symmetric vs Asymmetric Encryption", "RSA", "Encryption"],
  },
  {
    term: "RSA",
    fa: "آر‌اس‌ای",
    category: "security",
    definition: {
      fa: "RSA الگوریتم نامتقارن کلاسیک بر پایه‌ی سختی تجزیه‌ی اعداد بزرگ است: کلید عمومی رمز و تأیید امضا می‌کند و کلید خصوصی برعکس. امروز برای امضای دیجیتال و تبادل کلید اولیه استفاده می‌شود؛ برای داده‌ی حجیم کند است و ECC با کلید کوچک‌تر جایگزینش می‌شود.",
      en: "RSA is the classic asymmetric algorithm based on the hardness of factoring large numbers: the public key encrypts and verifies signatures, the private key does the reverse. Today it's used for digital signatures and initial key exchange; it's too slow for bulk data, and ECC is replacing it with smaller keys.",
    },
    analogy: {
      fa: "مثل قفل‌وصندوقی که قفلش را آزادانه پخش می‌کنی (هر کسی می‌تواند قفل کند) ولی کلید باز کردنش فقط پیش توست.",
      en: "Like handing out padlocks freely — anyone can snap one shut, but only you hold the opening key.",
    },
    related: ["Symmetric vs Asymmetric Encryption", "PKI", "ECC", "Digital Signature"],
  },
  {
    term: "DES",
    fa: "دس",
    category: "security",
    definition: {
      fa: "DES رمز متقارن قدیمی با کلید ۵۶ بیتی است که با افزایش قدرت محاسبات منسوخ شد؛ Triple DES با سه بار اجرا عمرش را چند سال طولانی کرد ولی حالا هم بازنشسته شده. جایگزین استاندارد AES است — درس DES: طول کلید باید با رشد توان محاسباتی رشد کند.",
      en: "DES is the legacy symmetric cipher with a 56-bit key, obsolete as computing grew; Triple DES (three passes) stretched its life for years but is now retired too. The standard replacement is AES. DES's lesson: key length must scale with computing power.",
    },
    analogy: {
      fa: "مثل قفل قدیمی در با ۵۶ دندانه: در زمان خودش محکم بود، اما دستگاه‌های تست امروز آن را در ثانیه‌ها باز می‌کنند.",
      en: "Like an old door lock with 56 wards: solid in its day, but modern pickers open it in seconds.",
    },
    related: ["AES", "Symmetric vs Asymmetric Encryption", "Encryption"],
  },
  {
    term: "ECC",
    fa: "رمزنگاری منحنی بیضوی",
    category: "security",
    definition: {
      fa: "ECC رمزنگاری نامتقارن روی منحنی‌های بیضوی است: با کلید ۲۵۶ بیتی امنیتی معادل RSA ۳۰۷۲ بیتی می‌دهد — سریع‌تر، کوچک‌تر و کم‌هزینه‌تر. در TLS مدرن، Bitcoin و امضای دیجیتال موبایل استاندارد شده است.",
      en: "ECC is asymmetric cryptography over elliptic curves: a 256-bit key matches RSA-3072 security — faster, smaller, cheaper. It's the modern standard in TLS, Bitcoin and mobile signatures.",
    },
    analogy: {
      fa: "مثل قفلی که با نصف اندازه و نصف انرژی، همان استحکام قفل بزرگ‌تر را دارد — فناوری دقیق‌تر به‌جای قطعه‌ی بزرگ‌تر.",
      en: "Like a lock that matches a bigger lock's strength at half the size and power — precision beats bulk.",
    },
    related: ["RSA", "Symmetric vs Asymmetric Encryption", "Digital Signature"],
  },
  {
    term: "Digital Signature",
    fa: "امضای دیجیتال",
    category: "security",
    definition: {
      fa: "امضای دیجیتال با هش‌کردن سند و رمز کردن هش با کلید خصوصی فرستنده ساخته می‌شود؛ گیرنده با کلید عمومی تأیید می‌کند که سند از اوست و یک بیت هم عوض نشده. با امضای ساده‌ی متنی فرق بنیادی دارد: قابل اثبات ریاضی و مقید به سند مشخص است.",
      en: "A digital signature hashes the document and encrypts the hash with the sender's private key; the recipient verifies with the public key that it's from them and not one bit has changed. Fundamentally different from a typed name: mathematically provable and bound to that exact document.",
    },
    analogy: {
      fa: "مثل مهر لاکی اختصاصی روی بسته‌بندی شیشه‌ای: هر دستکاری مهر را خراب می‌کند و مهر فقط با دستگاه تو قابل ساختن است.",
      en: "Like a personalized wax seal on a jar: any tampering breaks it, and only your device can produce it.",
    },
    related: ["RSA", "PKI", "Hashing", "ECC"],
  },
  {
    term: "PKI",
    fa: "زیرساخت کلید عمومی",
    category: "security",
    definition: {
      fa: "PKI سامانه‌ای است که به کلیدهای عمومی اعتبار می‌دهد: Certificate Authority (CA) هویت دارنده را بررسی و گواهی امضا می‌کند؛ مرورگرها و سیستم‌عامل‌ها CAهای ریشه‌ی معتمد را از قبل می‌شناسند. زنجیره‌ی اعتماد از ریشه تا گواهی سایت ساخته می‌شود و با ابطال (CRL/OCSP) مدیریت می‌شود.",
      en: "PKI is the system that vouches for public keys: a Certificate Authority verifies an owner's identity and signs their certificate; browsers and OSes already trust the root CAs. A chain of trust runs from root down to the site's certificate, managed with revocation (CRL/OCSP).",
    },
    analogy: {
      fa: "مثل سیستم گواهینامه‌ی رانندگی: پلیس مرکزی (CA ریشه) اداره‌های محلی را تأیید می‌کند و هر اداره گواهی تو را صادر می‌کند؛ همه به زنجیره اعتماد می‌کنند.",
      en: "Like driver's licensing: a central authority certifies local offices, and every office issues your license — everyone trusts the chain.",
    },
    related: ["TLS Certificate", "Digital Signature", "RSA", "HTTPS"],
  },
  {
    term: "Man-in-the-Middle",
    fa: "حمله‌ی مرد میانی",
    category: "security",
    definition: {
      fa: "در حمله‌ی مرد میانی، مهاجم بین قربانی و سرور می‌نشیند و ترافیک را شنود یا دستکاری می‌کند — روی Wi-Fi عمومی و بدون HTTPS کلاسیک است. دفاع: TLS/HTTPS (که گواهی سرور را ثابت می‌کند)، HSTS برای اجبار HTTPS و پرهیز از ارسال داده حساس روی شبکه‌های نامطمئن.",
      en: "In a man-in-the-middle attack the attacker sits between victim and server, eavesdropping or altering traffic — classic on public Wi-Fi without HTTPS. Defenses: TLS/HTTPS (proves the server's identity), HSTS to force HTTPS, and never sending sensitive data over untrusted networks.",
    },
    analogy: {
      fa: "مثل دوست‌نامه‌ای که پیک خودخوان بین دو نفر می‌چرخاند: نامه را می‌خواند، حتی جواب را جعل می‌کند — هر دو فکر می‌کنند مستقیم با هم صحبت می‌کنند.",
      en: "Like letters passing through a nosy courier who reads them and even forges replies — both parties believe they're talking directly.",
    },
    related: ["HTTPS", "TLS", "HSTS"],
  },
  {
    term: "HSTS",
    fa: "اچ‌اس‌تی‌اس",
    category: "security",
    definition: {
      fa: "HSTS (HTTP Strict Transport Security) هدری است که مرورگر را قفل می‌کند: «برای این دامنه همیشه HTTPS، حتی اگر کاربر http:// تایپ کند». از حمله‌ی downgrade (کشاندن کاربر به HTTP ناامن توسط مرد میانی) جلوگیری می‌کند و preload list آن را برای همه از قبل ثبت می‌کند.",
      en: "HSTS (HTTP Strict Transport Security) is a header that locks the browser in: 'for this domain, always HTTPS — even if the user types http://'. It defeats downgrade attacks (an MITM steering you to plain HTTP), and the preload list enforces it browser-wide.",
    },
    analogy: {
      fa: "مثل یادداشت چسبان روی در خانه: «فقط با کلید اصلی باز کن» — حتی اگر کسی گفت «از در پشتی هم می‌شود»، باز نمی‌کنی.",
      en: "Like a sticky note on your door: 'main lock only' — even if someone suggests the back door, you refuse.",
    },
    related: ["HTTPS", "TLS", "Man-in-the-Middle"],
  },
  {
    term: "RBAC",
    fa: "کنترل دسترسی مبتنی بر نقش",
    category: "security",
    definition: {
      fa: "در RBAC دسترسی‌ها به نقش‌ها داده می‌شود نه به افراد: «ویرایشگر» می‌تواند مطلب منتشر کند و هرکس آن نقش را بگیرد همان دسترسی را دارد. مدیریت مقیاس‌پذیر است (نقش را یک‌بار تعریف کن)، ممیزی آسان می‌شود و با ABAC (قاعده‌محور: بخش، زمان، ریسک) ترکیب می‌شود.",
      en: "In RBAC permissions attach to roles, not people: 'editor' can publish, and anyone holding that role gets exactly that. It scales (define a role once), audits cleanly, and combines with ABAC (attribute-based rules: department, time, risk).",
    },
    analogy: {
      fa: "مثل شناسنامه‌ی شغلی در سازمان: کارت «حسابدار» به اتاق مالی راه می‌دهد؛ هر که کارت را بگیرد همان راه دارد — نیازی نیست برای هر نفر جداگانه لیست اتاق‌ها را بنویسی.",
      en: "Like job-based key cards: the 'accountant' card opens finance — no need to write a personal room list for every hire.",
    },
    related: ["IAM", "Authorization", "Authentication"],
  },
  {
    term: "Principle of Least Privilege",
    fa: "اصل کمترین امتیاز",
    category: "security",
    definition: {
      fa: "اصل کمترین امتیاز می‌گوید هر کاربر، سرویس و فرایند فقط حداقل دسترسی لازم برای کارش را بگیرد — نه بیشتر. اگر کلید API فقط خواندنی است، دسترسی نوشتن نده؛ اگر کانتینر به شبکه داخلی نیاز ندارد، قطعش کن. این اصل «شعاع انفجار» هر نفوذ را کوچک نگه می‌دارد.",
      en: "Least privilege means every user, service and process gets only the minimum access its job needs — nothing more. If an API key is read-only, don't grant write; if a container needs no internal network, cut it. This keeps every breach's blast radius small.",
    },
    analogy: {
      fa: "مثل کلید ساختمان: به پیک فقط کلید ورودی و انبار می‌دهی، نه کلید صندوق امانات و اتاق مدیر.",
      en: "Like building keys: the courier gets the entrance and stockroom — not the safe or the manager's office.",
    },
    related: ["IAM", "RBAC", "Secrets Management", "Firewall"],
  },
  {
    term: "WAF",
    fa: "دیوار آتش وب",
    category: "security",
    definition: {
      fa: "WAF (Web Application Firewall) لایه‌ای جلوی وب‌اپ است که درخواست‌های HTTP را از نظر الگوهای حمله (SQLi، XSS، اسکن خودکار) بررسی و مسدود می‌کند — برخلاف فایروال شبکه که فقط پورت/IP می‌بیند. قانون‌هایش از OWASP می‌آید و برای رفع خطای مثبت باید تنظیم شود.",
      en: "A WAF (Web Application Firewall) sits in front of a web app and inspects HTTP requests for attack patterns (SQLi, XSS, automated scans), blocking them — unlike a network firewall that only sees ports and IPs. Its rules derive from OWASP and need tuning to cut false positives.",
    },
    analogy: {
      fa: "مثل بازرسی بدنی در ورودی سالن: فایروال فقط بلیت چک می‌کند (پورت باز است؟)، WAF داخل کیف را هم می‌گردد.",
      en: "Like airport-style screening at a venue door: the network firewall checks the ticket (is the port open?); the WAF searches the bag.",
    },
    related: ["Firewall", "SQL Injection", "XSS", "OWASP"],
  },
  {
    term: "OWASP",
    fa: "اواسپ",
    category: "security",
    definition: {
      fa: "OWASP بنیاد غیرانتفاعی امنیت وب است که فهرست معروف Top 10 را منتشر می‌کند: ده ریسک رایج وب‌اپ (از SQL Injection و XSS تا دسترسی ناکارآمد و SSRF). برای هر تیمی نقطه‌ی شروع چک‌لیست امنیت است و هر چند سال با داده‌های واقعی به‌روز می‌شود.",
      en: "OWASP is the nonprofit foundation of web security, publishing the famous Top 10: the ten most common web-app risks (SQL Injection, XSS, broken access control, SSRF and more). It's every team's starting security checklist, refreshed with real-world data every few years.",
    },
    analogy: {
      fa: "مثل فهرست ده تصادف رایج رانندگی که بیمه منتشر می‌کند: قبل از هر سفر چک می‌کنی که در ده مورد اول نیفتی.",
      en: "Like an insurer's top-ten crash list: before every trip you check you're not committing any of them.",
    },
    related: ["SQL Injection", "XSS", "Penetration Testing", "WAF"],
  },
];
