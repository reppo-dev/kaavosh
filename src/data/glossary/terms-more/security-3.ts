import type { GlossaryTerm } from "../../schema";

/** Security glossary expansion — SSRF, IDOR, Zero Trust, password hashing, SSO/OIDC & defense-in-depth. Consumed by: src/data/glossary/terms.ts. */
export const moreSecurityTerms3: GlossaryTerm[] = [
  {
    term: "SSRF",
    fa: "جعل درخواست سمت سرور (SSRF)",
    category: "security",
    definition: {
      fa: "Server-Side Request Forgery — آسیب‌پذیری امنیتی که مهاجم سرور را فریب می‌دهد تا به آدرس‌های داخلی (مانند سرویس متادیتای کلود یا دیتابیس داخلی) درخواست بفرستد که از بیرون قابل دسترسی نیستند.",
      en: "Server-Side Request Forgery — a vulnerability where an attacker tricks a server into making HTTP requests to internal-only targets like cloud metadata endpoints or private services.",
    },
    analogy: {
      fa: "مثل فریب دادن منشی داخل شرکت تا برود از اتاق بایگانی محرمانه پرونده بیاورد و برایتان بخواند.",
      en: "Like tricking an inside receptionist into fetching a confidential file from a restricted back room and reading it to you.",
    },
    related: ["OWASP", "Firewall", "Validation", "Zero Trust"],
  },
  {
    term: "IDOR",
    fa: "ارجاع ناامن مستقیم به شیء (IDOR)",
    category: "security",
    definition: {
      fa: "Insecure Direct Object Reference — زمانی که برنامه فقط شناسهٔ URL (مثلاً `/orders/1042`) را می‌خواند و بررسی نمی‌کند که آیا کاربر فعلی واقعاً مالک آن رکورد است یا نه.",
      en: "Insecure Direct Object Reference — an authorization bug where changing an ID in a URL or payload (e.g., /orders/1042) exposes another user's record because ownership is not checked.",
    },
    analogy: {
      fa: "مثل تحویل گرفتن چمدان دیگری از امانات فقط با تغییر عدد روی قبض، بدون اینکه مسئول امانات کارت شناسایی چک کند.",
      en: "Like claiming someone else's luggage simply by guessing a different ticket number because staff didn't verify ownership.",
    },
    related: ["Authorization", "OWASP", "RBAC", "Authentication"],
  },
  {
    term: "Zero Trust",
    fa: "معماری اعتماد صفر (Zero Trust)",
    category: "security",
    definition: {
      fa: "مدل امنیتی با شعار «هرگز اعتماد نکن، همیشه راستی‌آزمایی کن»: هیچ کاربر یا سرویسی صرفاً به‌خاطر حضور درون شبکهٔ داخلی قابل اعتماد نیست و هر درخواست باید احراز هویت، مجوزدهی و رمزنگاری شود.",
      en: "A security model built on 'never trust, always verify': being inside the corporate network grants zero implicit trust — every request is authenticated, authorized, and encrypted.",
    },
    analogy: {
      fa: "مثل فرودگاه: گذشتن از درِ ورودی کافی نیست؛ در گیت بازرسی، کنترل گذرنامه و درِ هواپیما دوباره هویت و بلیط شما چک می‌شود.",
      en: "Like airport security: entering the building grants no privileges — your ID and boarding pass are re-verified at every checkpoint.",
    },
    related: ["mTLS", "Principle of Least Privilege", "RBAC", "IAM"],
  },
  {
    term: "Salting & Peppering",
    fa: "نمک‌زنی و فلفل‌زنی رمز (Salt & Pepper)",
    category: "security",
    definition: {
      fa: "Salt یک مقدار تصادفی یکتا برای هر کاربر است که پیش از هش کردن به رمز اضافه و در دیتابیس ذخیره می‌شود تا جدول‌های Rainbow بی‌اثر شوند؛ Pepper یک راز سراسری است که جداگانه در محیط امن نگهداری می‌شود.",
      en: "Salt is a unique random value combined with each user's password before hashing (stored alongside the hash) to defeat rainbow tables; pepper is a global secret stored separately from the database.",
    },
    analogy: {
      fa: "مثل اضافه کردن یک رمز شخصی به هر قفل (Salt) تا حتی دو کاربر با رمز یکسان، اثر انگشت کاملاً متفاوتی در دیتابیس داشته باشند.",
      en: "Like mixing a unique random spice into each password before hashing so even identical passwords produce completely different hashes.",
    },
    related: ["Hashing", "Bcrypt & Argon2", "Secrets Management"],
  },
  {
    term: "Bcrypt & Argon2",
    fa: "الگوریتم‌های هش رمز Bcrypt و Argon2",
    category: "security",
    definition: {
      fa: "توابع هش تخصصی رمز عبور که به‌عمد کند و حافظه‌بر طراحی شده‌اند (برخلاف SHA-256) تا در صورت لو رفتن دیتابیس، حدس زدن رمزها با حملات Brute Force و GPU فوق‌العاده پرهزینه باشد.",
      en: "Password-hashing algorithms intentionally designed to be slow and memory-hard (unlike fast hashes like SHA-256), making offline GPU brute-force cracking prohibitively expensive.",
    },
    analogy: {
      fa: "مثل قفلی که هر بار امتحان کردن کلید اشتباه ۱۰ ثانیه زمان می‌برد: صاحب کلید متوجه نمی‌شود اما دزد میلیون‌ها سال معطل می‌ماند.",
      en: "Like a vault lock that forces a brief pause per guess: imperceptible to the owner, devastating to an automated thief.",
    },
    related: ["Hashing", "Salting & Peppering", "Authentication"],
  },
  {
    term: "Key Rotation",
    fa: "چرخش دوره‌ای کلیدها",
    category: "security",
    definition: {
      fa: "جایگزین کردن منظم کلیدهای رمزنگاری، کلیدهای API و توکن‌های امضا با نسخه‌های جدید (همراه با دورهٔ گذار)، تا در صورت نشت یک کلید، پنجرهٔ آسیب محدود باقی بماند.",
      en: "Periodically replacing encryption keys, API keys, and signing secrets with fresh ones (with graceful overlap) to limit the blast radius if any key is ever compromised.",
    },
    analogy: {
      fa: "مثل عوض کردن دوره‌ای رمز گاوصندوق یا کلید درِ دفتر تا کلیدهای قدیمی دیگر کاربردی نداشته باشند.",
      en: "Like periodically changing the office lock codes so any leaked old copy quickly becomes useless.",
    },
    related: ["Secrets Management", "Encryption", "JWT", "PKI"],
  },
  {
    term: "CORS Preflight",
    fa: "درخواست پیش‌پرواز CORS",
    category: "security",
    definition: {
      fa: "درخواست خودکار `OPTIONS` که مرورگر پیش از ارسال درخواست‌های حساس بین‌دامنه‌ای (مثل `PUT`، `DELETE` یا هدر `Authorization`) به سرور می‌فرستد تا بپرسد آیا آن مبدا و متد مجاز است یا نه.",
      en: "An automatic HTTP OPTIONS request sent by the browser before non-simple cross-origin requests (e.g., PUT, DELETE, custom headers) to ask the server if the origin and method are permitted.",
    },
    analogy: {
      fa: "مثل تماس تلفنی قبل از ارسال کامیون بار: اول می‌پرسید «اجازهٔ تخلیه در این انبار را دارم؟» و بعد بار اصلی را می‌فرستید.",
      en: "Like calling a warehouse ahead of time to confirm delivery clearance before dispatching the actual truck.",
    },
    related: ["CORS", "Same-Origin Policy", "HTTP"],
  },
  {
    term: "Clickjacking",
    fa: "ربایش کلیک (Clickjacking)",
    category: "security",
    definition: {
      fa: "حمله‌ای که در آن صفحهٔ مخرب، سایت هدف را درون یک `<iframe>` نامرئی زیر یک دکمهٔ فریبنده قرار می‌دهد تا کاربر بی‌خبر روی دکمهٔ حساس سایت اصلی (مثل انتقال پول) کلیک کند. با `frame-ancestors` در CSP خنثی می‌شود.",
      en: "An attack that layers an invisible iframe of a target site beneath a decoy button so users unknowingly click sensitive actions; prevented via CSP frame-ancestors or X-Frame-Options.",
    },
    analogy: {
      fa: "مثل گذاشتن یک برگهٔ شفاف قرارداد زیر فرم قرعه‌کشی تا کاربر فکر کند فرم جایزه را امضا کرده است.",
      en: "Like slipping a transparent contract over a raffle ticket so signing the ticket secretly signs the contract.",
    },
    related: ["CSP", "XSS", "OWASP"],
  },
  {
    term: "Supply Chain Attack",
    fa: "حمله به زنجیرهٔ تأمین نرم‌افزار",
    category: "security",
    definition: {
      fa: "نفوذ از طریق آلوده کردن یک کتابخانهٔ متن‌باز، پکیج npm/PyPI، ابزار بیلد یا اکشن CI که اپلیکیشن شما به آن وابسته است، به‌جای حملهٔ مستقیم به سرور شما.",
      en: "Compromising an application indirectly by injecting malicious code into a third-party dependency, package registry, build tool, or CI pipeline it trusts.",
    },
    analogy: {
      fa: "مثل آلوده کردن ادویه در کارخانهٔ تأمین‌کننده به‌جای ورود به آشپزخانهٔ رستوران.",
      en: "Like tampering with an ingredient at the supplier factory instead of breaking into the restaurant kitchen.",
    },
    related: ["Open Source", "CI/CD", "Secret Scanning"],
  },
  {
    term: "SSO",
    fa: "ورود یکپارچه (Single Sign-On)",
    category: "security",
    definition: {
      fa: "سامانهٔ احراز هویت که به کاربر اجازه می‌دهد یک‌بار وارد یک ارائه‌دهندهٔ هویت مرکزی (مثل Google Workspace یا Okta) شود و بدون ورود مجدد به همهٔ اپلیکیشن‌های متصل دسترسی یابد.",
      en: "Single Sign-On — an authentication system letting users sign in once with a central identity provider and access multiple connected applications without re-entering credentials.",
    },
    analogy: {
      fa: "مثل دستبند شهربازی: یک‌بار در ورودی تأیید می‌شوید و با همان دستبند سوار تمام بازی‌ها می‌شوید.",
      en: "Like a theme-park wristband: check in once at the gate and board every ride without buying separate tickets.",
    },
    related: ["OAuth", "OpenID Connect", "SAML", "Authentication"],
  },
  {
    term: "OpenID Connect",
    fa: "پروتکل OpenID Connect (OIDC)",
    category: "security",
    definition: {
      fa: "لایهٔ هویت مدرن ساخته‌شده روی OAuth 2.0 که علاوه بر Access Token، یک `ID Token` امضاشده (در قالب JWT) شامل مشخصات هویتی کاربر برمی‌گرداند؛ پایهٔ دکمه‌های «ورود با گوگل/گیت‌هاب».",
      en: "A modern identity layer built on top of OAuth 2.0 that issues a signed JWT ID Token proving who the user is — powering 'Sign in with Google' and modern SSO.",
    },
    analogy: {
      fa: "OAuth کارت ورود به اتاق است و OIDC کارت شناسایی عکس‌دار کنار آن که دقیقاً می‌گوید این فرد کیست.",
      en: "OAuth is the hotel keycard granting room access; OIDC adds the verified photo ID confirming who holds it.",
    },
    related: ["OAuth", "JWT", "SSO", "Authentication"],
  },
  {
    term: "SAML",
    fa: "پروتکل SAML",
    category: "security",
    definition: {
      fa: "Security Assertion Markup Language — استاندارد مبتنی بر XML برای تبادل اطلاعات احراز هویت و مجوزدهی بین ارائه‌دهندهٔ هویت (IdP) و سرویس‌ها، بسیار رایج در سازمان‌های بزرگ (Enterprise SSO).",
      en: "Security Assertion Markup Language — an XML-based standard for exchanging signed authentication assertions between an Identity Provider and Service Providers, common in enterprise SSO.",
    },
    analogy: {
      fa: "مثل معرفی‌نامهٔ مهروموم‌شدهٔ شرکت که به نرم‌افزارهای سازمانی ثابت می‌کند این کارمند عضو معتبر تیم است.",
      en: "Like a signed corporate letter of introduction proving an employee's identity to enterprise software tools.",
    },
    related: ["SSO", "OpenID Connect", "XML", "Authentication"],
  },
  {
    term: "Secret Scanning",
    fa: "اسکن خودکار رازها و کلیدها",
    category: "security",
    definition: {
      fa: "بررسی خودکار مخازن Git و خط لولهٔ CI برای شناسایی و مسدود کردن کلیدهای API، توکن‌ها و کلیدهای خصوصی که به‌اشتباه در کد کامیت شده‌اند، پیش از سوءاستفادهٔ مهاجمان.",
      en: "Automated scanning of Git repositories and CI pipelines to detect and block accidentally committed API keys, tokens, or private keys before attackers exploit them.",
    },
    analogy: {
      fa: "مثل دستگاه ایکس‌ری در خروجی شرکت که اجازه نمی‌دهد کلید گاوصندوق ناخواسته در کیف کسی بیرون برود.",
      en: "Like an X-ray scanner at the exit catching a forgotten vault key before it ever leaves the building.",
    },
    related: ["Secrets Management", "Version Control", "CI/CD", "Key Rotation"],
  },
  {
    term: "SOC 2",
    fa: "گواهینامهٔ امنیتی SOC 2",
    category: "security",
    definition: {
      fa: "چارچوب ممیزی امنیتی ویژهٔ سرویس‌های ابری و SaaS که توسط ممیز مستقل بررسی می‌کند آیا سازمان کنترل‌های امنیت، دسترس‌پذیری، یکپارچگی پردازش و محرمانگی دادهٔ مشتریان را رعایت می‌کند یا نه.",
      en: "An independent compliance audit framework for SaaS and cloud providers verifying controls around security, availability, processing integrity, confidentiality, and privacy.",
    },
    analogy: {
      fa: "مثل گواهی استاندارد بهداشت و ایمنی که بازرس مستقل پس از بررسی آشپزخانه روی شیشهٔ رستوران نصب می‌کند.",
      en: "Like an independent health-and-safety inspection certificate posted at a restaurant proving proper practices.",
    },
    related: ["IAM", "Principle of Least Privilege", "Observability"],
  },
];
