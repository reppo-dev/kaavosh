import type { GlossaryTerm } from "../../schema";

/** DATA FILE — Glossary terms (security, extended). Merged into terms.ts → /glossary page. */
export const moreSecurityTerms: GlossaryTerm[] = [
  {
    term: "TLS",
    fa: "امنیت لایه انتقال",
    category: "security",
    definition: {
      fa: "TLS پروتکلی است که کانال ارتباطی را رمز و هویت طرفین را تأیید می‌کند؛ HTTPS یعنی HTTP روی TLS. قفل کنار آدرس مرورگر همان است که این پروتکل فعال است.",
      en: "TLS is the protocol that encrypts the communication channel and verifies the parties' identities; HTTPS is simply HTTP over TLS. The padlock beside the browser URL means it's active.",
    },
    analogy: {
      fa: "مثل گفت‌وگو در اتاق شیشه‌ای صدقدار: هرکس در مسیر می‌شنود که دارید حرف می‌زنید، ولی هیچ‌کدام از کلمات را نمی‌فهمد — و اول هم با کارت شناسایی مطمئن می‌شوید خط به صاحب‌کار واقعی وصل است.",
      en: "Like talking in a soundproofed glass room: everyone on the path hears that you're speaking, but understands none of the words — and first, with ID cards, you verify the line truly reaches the real party.",
    },
    related: ["TLS Certificate", "Encryption", "HTTP"],
  },
  {
    term: "JWT",
    fa: "توکن وب JSON",
    category: "security",
    definition: {
      fa: "JWT کارتی امضاشده از سرور است: داخلش ادعاها (کی هستی، چه نقشی داری) با امضای دیجیتال بسته شده؛ هر درخواست آن را می‌برد و سرور فقط امضا را چک می‌کند — بدون جدول نشست.",
      en: "A JWT is a server-signed card: its claims (who you are, your role) are sealed with a digital signature; every request carries it and the server checks only the signature — no session table.",
    },
    analogy: {
      fa: "مثل مچ‌بند هولوگرام‌دار کنسرت: نگهبان هر بار مچ را می‌بیند و هولوگرام را چک می‌کند، نه اینکه هر بار با لیست مهمانان تماس بگیرد؛ جعلش هم بدون دستگاه صادرکننده ممکن نیست.",
      en: "Like a hologrammed festival wristband: the guard checks the band and its hologram each time instead of phoning the guest list — and forging it without the issuing device is impossible.",
    },
    related: ["Authentication", "Authorization", "Two-Factor Auth"],
  },
  {
    term: "Two-Factor Auth",
    fa: "ورود دومرحله‌ای",
    category: "security",
    definition: {
      fa: "ورود دومرحله‌ای (2FA/MFA) یعنی بعد از پسورد، عامل دوم هم بخواهد: کد پیامکی، اپ احرازکننده یا کلید سخت‌افزاری. پسورد لو برود، بدون عامل دوم در هم وارد نمی‌شود.",
      en: "Two-factor authentication (2FA/MFA) adds a second gate after the password: an SMS code, an authenticator app, or a hardware key. Even a leaked password is useless without the second factor.",
    },
    analogy: {
      fa: "مثل قفل دو مرحله‌ای گاوصندوق: کد عددی و بعد کلید مکانیکی؛ کسی که فقط کد را شنیده، هنوز جعبه را باز نمی‌کند.",
      en: "Like a safe's two-stage lock: a numeric code and then a mechanical key; someone who only overheard the code still can't open the box.",
    },
    related: ["Authentication", "Phishing", "Hashing"],
  },
  {
    term: "Firewall",
    fa: "فایروال",
    category: "security",
    definition: {
      fa: "فایروال نگهبان ورودی‌ها و خروجی‌های شبکه است: قاعده‌های مشخص دارد که چه ترافیکی اجازه دارد عبور کند و چه پورت‌هایی بسته بمانند. بسته‌های مشکوک قبل از رسیدن به سرویس‌ها رد می‌شوند.",
      en: "A firewall is the guard of network traffic in and out: it holds explicit rules for what may pass and which ports stay closed. Suspicious packets are rejected before reaching the services.",
    },
    analogy: {
      fa: "مثل نگهبان ورودی ساختمان: لیست دارد چه کسی حق عبور دارد؛ بازدیدکننده‌ی ناشناس در لابی متوقف می‌شود، نه جلوی در اتاق‌ها.",
      en: "Like a building's entrance guard: they carry the list of who may pass; unknown visitors stop at the lobby, never at the room doors.",
    },
    related: ["Port", "VPN", "Penetration Testing"],
  },
  {
    term: "Penetration Testing",
    fa: "تست نفوذ قانونمند",
    category: "security",
    definition: {
      fa: "تست نفوذ یعنی متخصص امنیت با اجازه‌ی مکتوب صاحب سیستم، حفره‌ها را مثل مهاجم واقعی جست‌وجو و مستند می‌کند — فقط برای بستن‌شان قبل از مهاجم واقعی. بدون اجازه، همان کار جرم است.",
      en: "A penetration test means a security professional, with the owner's written authorization, hunts for holes like a real attacker would and documents them — solely to close them before a real attacker. Without permission, the same activity is a crime.",
    },
    analogy: {
      fa: "مثل استخدام دزد حرفه‌ای با قرارداد برای تست امنیت خانه: او همه‌ی درها و پنجره‌ها را امتحان می‌کند و لیست ضعف‌ها می‌دهد — با اجازه‌ی کتبی مالک و فقط برای تعمیر.",
      en: "Like hiring a professional burglar under contract to test your home's security: they try every door and window and deliver a list of weaknesses — with the owner's written consent, purely for repairs.",
    },
    related: ["Firewall", "Phishing", "SQL Injection"],
  },
  {
    term: "Phishing",
    fa: "فیشینگ",
    category: "security",
    definition: {
      fa: "فیشینگ یعنی فریب کاربر به‌جای شکستن فناوری: سایتی شبیه بانک شما، ایمیلی جعلی با لینک خطرناک. قوی‌ترین دفاع، شک و راستی‌آزمایی است — بررسی دقیق آدرس و هرگز وارد‌نشدن از لینک‌های ناشناس.",
      en: "Phishing deceives the user instead of breaking the technology: a site mimicking your bank, an email with a dangerous link. The strongest defense is skepticism and verification — inspect addresses carefully and never sign in through unknown links.",
    },
    analogy: {
      fa: "مثل قلابی که با طعمه ماهی را می‌گیرد؛ ماهی قوی هم اگر گرسنه باشد و بدون فکر به طعمه بزند، می‌افتد. تکنولوژی هیچ‌وقت از ماهی مراقبت نمی‌کند — احتیاط خودش می‌کند.",
      en: "Like a lure catching a fish: even a strong fish falls if it's hungry and bites without thinking. No technology protects the fish — its own caution does.",
    },
    related: ["Two-Factor Auth", "XSS", "Penetration Testing"],
  },
];
