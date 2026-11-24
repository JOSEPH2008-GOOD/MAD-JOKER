/* =========================================================
   JOSEPH DESIGNS — Portfolio scripts
   ========================================================= */

/* ---------------------------------------------------------
   1. YOUR PROJECTS
   Add / edit your work here. To show a real design, put the
   image in the "assets" folder and set: image: "assets/your-file.jpg"
   Categories: logo | branding | print | social
   --------------------------------------------------------- */
const projects = [
  {
    title: "Bloom Café Logo",
    category: "logo",
    desc: "A friendly, modern logo for a neighbourhood café — warm, simple and easy to recognise on cups, signs and socials.",
    image: "",
    art: { style: "blue", word: "BLOOM", sub: "CAFÉ", deco: "rings" },
  },
  {
    title: "Apex Fitness Brand Identity",
    category: "branding",
    desc: "Full brand identity: logo, colour palette, typography and business cards for a growing fitness studio.",
    image: "",
    art: { style: "black", word: "APEX", sub: "FITNESS", deco: "cards" },
  },
  {
    title: "Lagos Music Fest Poster",
    category: "print",
    desc: "Bold event poster and flyer series designed for print and outdoor display.",
    image: "",
    art: { style: "split", word: "", sub: "", deco: "poster" },
  },
  {
    title: "Glow Skincare Instagram Kit",
    category: "social",
    desc: "A set of on-brand Instagram post and story templates that helped boost engagement.",
    image: "",
    art: { style: "light", word: "", sub: "", deco: "phone" },
  },
  {
    title: "Nova Tech Logo",
    category: "logo",
    desc: "A clean geometric logo mark for a tech start-up, built to scale from app icon to billboard.",
    image: "",
    art: { style: "light", word: "NOVA", sub: "TECH", deco: "dots" },
  },
  {
    title: "Kente Kitchen Menu & Packaging",
    category: "branding",
    desc: "Restaurant branding including menus, takeaway packaging and signage.",
    image: "",
    art: { style: "blue", word: "", sub: "", deco: "cards-light" },
  },
  {
    title: "Church Conference Flyer",
    category: "print",
    desc: "Eye-catching flyer and banner design for an annual youth conference.",
    image: "",
    art: { style: "black", word: "", sub: "", deco: "poster-blue" },
  },
  {
    title: "Real Estate Ad Campaign",
    category: "social",
    desc: "Social media ad creatives for a property launch across Instagram and Facebook.",
    image: "",
    art: { style: "blue", word: "", sub: "", deco: "phone" },
  },
  {
    title: "Personal Brand — Joseph Designs",
    category: "branding",
    desc: "My own identity: the jester-and-pen mark, mixing playful creativity with the precision of design.",
    image: "assets/mark.png",
    art: null,
  },
];

const labels = { logo: "Logo", branding: "Branding", print: "Print", social: "Social Media" };

/* Generates placeholder artwork with HTML/CSS when no image is given */
function makeArt(p) {
  if (p.image) {
    const contain = p.image.endsWith("mark.png");
    return `<img src="${p.image}" alt="${p.title}" loading="lazy" style="${contain ? "object-fit:contain;padding:12%;background:#fff" : ""}">`;
  }
  const a = p.art;
  const blue = "#0072ab";
  let deco = "";
  switch (a.deco) {
    case "rings":
      deco = `<span class="art__ring" style="width:70%;aspect-ratio:1"></span>
              <span class="art__ring" style="width:95%;aspect-ratio:1"></span>
              <span class="art__circle" style="width:14%;aspect-ratio:1;background:#fff;opacity:.9;top:12%;right:16%"></span>`;
      break;
    case "dots":
      deco = `<span class="art__circle" style="width:38%;aspect-ratio:1;background:${blue};opacity:.15;top:-8%;left:-6%"></span>
              <span class="art__circle" style="width:12%;aspect-ratio:1;background:${blue};bottom:14%;right:14%"></span>
              <span class="art__circle" style="width:7%;aspect-ratio:1;background:#0d0d0d;top:18%;right:24%"></span>`;
      break;
    case "cards":
      deco = `<span class="art__card" style="background:${blue};transform:rotate(-12deg) translate(-18%, 18%)"></span>
              <span class="art__card" style="background:#fff;transform:rotate(8deg) translate(22%, -16%)"></span>`;
      break;
    case "cards-light":
      deco = `<span class="art__card" style="background:#fff;transform:rotate(-10deg) translate(-20%, 10%)"></span>
              <span class="art__card" style="background:#0d0d0d;transform:rotate(10deg) translate(22%, -12%)"></span>
              <span class="art__circle" style="width:16%;aspect-ratio:1;background:#fff;opacity:.25;bottom:10%;right:10%"></span>`;
      break;
    case "poster":
      deco = `<span class="art__poster" style="background:#fff;transform:rotate(-6deg) translateX(-30%)"></span>
              <span class="art__poster" style="background:linear-gradient(180deg,${blue} 60%,#fff 60%);transform:rotate(6deg) translateX(30%)"></span>`;
      break;
    case "poster-blue":
      deco = `<span class="art__poster" style="background:linear-gradient(160deg,${blue},#003d5c);transform:rotate(-4deg)"></span>
              <span class="art__circle" style="width:20%;aspect-ratio:1;background:#fff;opacity:.9;top:34%"></span>`;
      break;
    case "phone":
      deco = `<span class="art__phone" style="background:linear-gradient(180deg,${a.style === "blue" ? "#fff" : blue} 55%,${a.style === "blue" ? "#cfe6f2" : "#0d0d0d"} 55%)"></span>
              <span class="art__circle" style="width:30%;aspect-ratio:1;background:${a.style === "blue" ? "#fff" : blue};opacity:.15;bottom:-8%;left:6%"></span>`;
      break;
  }
  const word = a.word ? `<div class="art__word">${a.word}<small>${a.sub}</small></div>` : "";
  return `<div class="art art--${a.style}">${deco}${word}</div>`;
}

/* ---------------------------------------------------------
   2. RENDER PORTFOLIO GRID
   --------------------------------------------------------- */
const grid = document.getElementById("grid");

grid.innerHTML = projects
  .map(
    (p, i) => `
    <article class="card reveal" data-category="${p.category}" data-index="${i}" tabindex="0" role="button" aria-label="View ${p.title}">
      <div class="card__art">${makeArt(p)}</div>
      <span class="card__view" aria-hidden="true">+</span>
      <div class="card__body">
        <span class="tag">${labels[p.category]}</span>
        <h3>${p.title}</h3>
      </div>
    </article>`
  )
  .join("");

/* ---------------------------------------------------------
   3. FILTER BUTTONS
   --------------------------------------------------------- */
const filterBtns = document.querySelectorAll(".filter");
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const f = btn.dataset.filter;
    grid.querySelectorAll(".card").forEach((card) => {
      const show = f === "all" || card.dataset.category === f;
      card.classList.toggle("hide", !show);
      card.classList.remove("pop");
      if (show) {
        card.classList.add("visible");
        void card.offsetWidth; // restart animation
        card.classList.add("pop");
      }
    });
  });
});

/* ---------------------------------------------------------
   4. LIGHTBOX
   --------------------------------------------------------- */
const lightbox = document.getElementById("lightbox");
const lbArt = document.getElementById("lbArt");
const lbTitle = document.getElementById("lbTitle");
const lbTag = document.getElementById("lbTag");
const lbDesc = document.getElementById("lbDesc");
let lastFocus = null;

function openLightbox(i) {
  const p = projects[i];
  lbArt.innerHTML = makeArt(p);
  lbTitle.textContent = p.title;
  lbTag.textContent = labels[p.category];
  lbDesc.textContent = p.desc;
  lastFocus = document.activeElement;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.getElementById("lbClose").focus();
}
function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocus) lastFocus.focus();
}

grid.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (card) openLightbox(card.dataset.index);
});
grid.addEventListener("keydown", (e) => {
  const card = e.target.closest(".card");
  if (card && (e.key === "Enter" || e.key === " ")) {
    e.preventDefault();
    openLightbox(card.dataset.index);
  }
});
document.getElementById("lbClose").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.classList.contains("open")) closeLightbox();
});

/* ---------------------------------------------------------
   5. TYPING EFFECT (hero)
   --------------------------------------------------------- */
const words = ["brand identities", "stunning logos", "flyers & posters", "social media graphics"];
const typedEl = document.getElementById("typed");
let wi = 0, ci = words[0].length, deleting = true;

function type() {
  const word = words[wi];
  typedEl.textContent = word.slice(0, ci);
  if (!deleting && ci === word.length) {
    deleting = true;
    return setTimeout(type, 1800);
  }
  if (deleting && ci === 0) {
    deleting = false;
    wi = (wi + 1) % words.length;
  }
  ci += deleting ? -1 : 1;
  setTimeout(type, deleting ? 45 : 90);
}
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) setTimeout(type, 2200);

/* ---------------------------------------------------------
   6. NAVBAR: scroll style, mobile menu, active link
   --------------------------------------------------------- */
const nav = document.getElementById("nav");
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");
const toTop = document.getElementById("toTop");

function onScroll() {
  nav.classList.toggle("scrolled", window.scrollY > 40);
  toTop.classList.toggle("show", window.scrollY > 600);

  let current = "home";
  document.querySelectorAll("section[id]").forEach((s) => {
    if (window.scrollY >= s.offsetTop - 140) current = s.id;
  });
  links.querySelectorAll("a").forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + current);
  });
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.classList.toggle("open", open);
  toggle.setAttribute("aria-expanded", open);
});
links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

/* ---------------------------------------------------------
   7. SCROLL REVEAL + COUNTERS + SKILL BARS
   --------------------------------------------------------- */
function countUp(el) {
  const target = +el.dataset.count;
  const start = performance.now();
  const dur = 1600;
  (function step(now) {
    const t = Math.min((now - start) / dur, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)));
    if (t < 1) requestAnimationFrame(step);
  })(start);
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add("visible");
      el.querySelectorAll("[data-count]").forEach(countUp);
      el.querySelectorAll(".bar i").forEach((b) => (b.style.width = b.dataset.width + "%"));
      observer.unobserve(el);
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

/* ---------------------------------------------------------
   8. CONTACT FORM (validation + opens email app)
   --------------------------------------------------------- */
const form = document.getElementById("contactForm");
const success = document.getElementById("formSuccess");
const MY_EMAIL = "ajayijoseph642@gmail.com";

function setError(input, msg) {
  const field = input.parentElement;
  field.classList.toggle("invalid", !!msg);
  field.querySelector(".error").textContent = msg;
  return !msg;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const { name, email, message } = form.elements;
  const ok = [
    setError(name, name.value.trim().length < 2 ? "Please enter your name." : ""),
    setError(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()) ? "" : "Please enter a valid email."),
    setError(message, message.value.trim().length < 10 ? "Message should be at least 10 characters." : ""),
  ].every(Boolean);

  if (!ok) { success.textContent = ""; return; }

  const subject = encodeURIComponent(`New project enquiry from ${name.value.trim()}`);
  const body = encodeURIComponent(`${message.value.trim()}\n\n— ${name.value.trim()} (${email.value.trim()})`);
  window.location.href = `mailto:${MY_EMAIL}?subject=${subject}&body=${body}`;

  success.textContent = `Thanks ${name.value.trim()}! Your email app is opening to send the message. 🎉`;
  form.reset();
});

/* Footer year */
document.getElementById("year").textContent = new Date().getFullYear();
