/* Luxe Glow Salon & Spa — Interactions */

(function () {
  "use strict";

  const SERVICES = [
    { icon: "scissors", title: "Hair Styling", desc: "Precision cuts, blowouts and signature finishes by master stylists.", price: 65 },
    { icon: "palette", title: "Hair Coloring", desc: "Balayage, highlights and custom color crafted to flatter you.", price: 120 },
    { icon: "crown", title: "Bridal Makeup", desc: "Flawless bridal looks with airbrush finish and lash artistry.", price: 280 },
    { icon: "sparkles", title: "Facial Treatments", desc: "Hydrating, anti-aging and brightening rituals tailored to your skin.", price: 95 },
    { icon: "heart", title: "Nail Art", desc: "Gel, acrylic and bespoke nail designs in a serene studio.", price: 45 },
    { icon: "flower2", title: "Spa & Massage", desc: "Aromatherapy, deep tissue and couples massage suites.", price: 110 },
    { icon: "droplet", title: "Skin Care", desc: "Medical-grade peels, microneedling and personalised regimens.", price: 140 },
  ];

  const PLANS = [
    { name: "Essentials", price: 89, period: "/month", perks: ["1 Signature Facial", "1 Express Blowout", "10% off retail", "Member-only hours"] },
    { name: "Glow", price: 189, period: "/month", featured: true, perks: ["2 Signature Facials", "2 Hair Services", "1 Spa Massage", "15% off retail", "Priority booking"] },
    { name: "Couture", price: 349, period: "/month", perks: ["Unlimited Blowouts", "4 Spa Treatments", "Bridal trial included", "25% off retail", "Dedicated concierge"] },
  ];

  const EXPERTS = [
    { name: "Isabella Moreau", role: "Creative Director", exp: "14 yrs", spec: "Color & Balayage", img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80" },
    { name: "Aria Chen", role: "Bridal Specialist", exp: "10 yrs", spec: "Bridal & Editorial", img: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=800&q=80" },
    { name: "Sienna Patel", role: "Senior Esthetician", exp: "9 yrs", spec: "Advanced Skincare", img: "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?auto=format&fit=crop&w=800&q=80" },
    { name: "Noor Hassan", role: "Spa Therapist", exp: "12 yrs", spec: "Aromatherapy", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" },
  ];

  const GALLERY = [
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1532710093739-9470acff878f?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1571875257727-256c39da42af?auto=format&fit=crop&w=900&q=80",
  ];

  const REVIEWS = [
    { name: "Olivia Bennett", role: "Bride", text: "My bridal trial was a dream. Aria captured my vision perfectly and I felt radiant all day.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80" },
    { name: "Emma Carter", role: "Regular Client", text: "The Glow membership is worth every penny. The facials, the staff, the ambiance — pure luxury.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80" },
    { name: "Sophia Reed", role: "Executive", text: "From my color to my deep tissue massage, this is the only place I trust in the city.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80" },
  ];

  const OFFERS = [
    { tag: "New Client", title: "20% off your first visit", desc: "Welcome to Luxe Glow. Enjoy 20% off any signature service on your first booking.", badge: "Limited" },
    { tag: "Bridal", title: "Complimentary trial with bookings", desc: "Book a full bridal package and receive a complimentary makeup trial.", badge: "Seasonal" },
    { tag: "Couples", title: "Couples spa ritual — $199", desc: "Side-by-side massage, champagne and dessert in our private suite.", badge: "Weekends" },
  ];

  const FAQ = [
    { q: "Do I need to book in advance?", a: "We recommend booking 1–2 weeks ahead for stylists and 3–4 weeks for bridal services. Walk-ins are welcome based on availability." },
    { q: "What products do you use?", a: "We work exclusively with prestige professional brands — Oribe, Kérastase, Dermalogica, Biologique Recherche and OPI." },
    { q: "Is parking available?", a: "Complimentary valet parking is included with every appointment." },
    { q: "What is your cancellation policy?", a: "Please give 24 hours notice. Cancellations within 24 hours are charged at 50% of the service." },
    { q: "Do you offer gift cards?", a: "Yes — physical and digital gift cards are available in any amount." },
  ];

  const ICONS = {
    scissors: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/></svg>',
    palette: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.01 17.461 2 12 2z"/></svg>',
    crown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"/><path d="M5 21h14"/></svg>',
    sparkles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
    flower2: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0v1m0-1a3 3 0 1 1-3 3"/><circle cx="12" cy="8" r="2"/><path d="M12 11v8"/><path d="M9 21h6"/><path d="M12 21v-4"/><path d="m14 15-2-2-2 2"/></svg>',
    droplet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>',
    minus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>',
  };

  const STAR_ICON = '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';

  // Inject dynamic content
  function renderServices() {
    const grid = document.getElementById("servicesGrid");
    if (!grid) return;
    grid.innerHTML = SERVICES.map((s) => `
      <article class="reveal service-card">
        <div class="service-icon">${ICONS[s.icon] || ""}</div>
        <h3 class="service-title">${s.title}</h3>
        <p class="service-desc">${s.desc}</p>
        <div class="service-meta">
          <span class="service-start">Starting at</span>
          <span class="service-price">$${s.price}</span>
        </div>
      </article>
    `).join("");
  }

  function renderPricing() {
    const grid = document.getElementById("pricingGrid");
    if (!grid) return;
    grid.innerHTML = PLANS.map((p) => `
      <div class="reveal pricing-card ${p.featured ? "featured" : ""}">
        ${p.featured ? '<span class="pricing-badge">Most loved</span>' : ""}
        <h3 class="pricing-name">${p.name}</h3>
        <div class="pricing-price">
          <span class="pricing-amount">$${p.price}</span>
          <span class="pricing-period">${p.period}</span>
        </div>
        <ul class="pricing-perks">
          ${p.perks.map((perk) => `<li><span class="perk-check">${ICONS.check}</span><span>${perk}</span></li>`).join("")}
        </ul>
        <a href="#book" class="pricing-btn">Become a member</a>
      </div>
    `).join("");
  }

  function renderExperts() {
    const grid = document.getElementById("expertsGrid");
    if (!grid) return;
    grid.innerHTML = EXPERTS.map((e) => `
      <article class="reveal expert-card">
        <div class="expert-image-wrap">
          <img src="${e.img}" alt="${e.name}, ${e.role}" loading="lazy" class="expert-image" />
          <div class="expert-overlay"></div>
          <div class="expert-name-overlay">
            <p class="expert-exp">${e.exp}</p>
            <h3 class="expert-name">${e.name}</h3>
          </div>
        </div>
        <div class="expert-body">
          <p class="expert-role">${e.role}</p>
          <p class="expert-spec">${e.spec}</p>
        </div>
      </article>
    `).join("");
  }

  function renderGallery() {
    const grid = document.getElementById("galleryGrid");
    if (!grid) return;
    grid.innerHTML = GALLERY.map((src, i) => `
      <div class="reveal gallery-item ${i % 5 === 0 ? "tall" : ""}">
        <img src="${src}" alt="Gallery image ${i + 1}" loading="lazy" />
      </div>
    `).join("");
  }

  function renderReviews() {
    const grid = document.getElementById("reviewsGrid");
    if (!grid) return;
    grid.innerHTML = REVIEWS.map((r) => `
      <figure class="reveal review-card">
        <div class="review-stars">${STAR_ICON.repeat(5)}</div>
        <blockquote class="review-text">"${r.text}"</blockquote>
        <figcaption class="review-author">
          <img src="${r.img}" alt="${r.name}" loading="lazy" />
          <div>
            <div class="review-name">${r.name}</div>
            <div class="review-role">${r.role}</div>
          </div>
        </figcaption>
      </figure>
    `).join("");
  }

  function renderOffers() {
    const grid = document.getElementById("offersGrid");
    if (!grid) return;
    grid.innerHTML = OFFERS.map((o) => `
      <article class="reveal offer-card">
        <div class="offer-blob"></div>
        <span class="offer-tag">${o.tag}</span>
        <h3 class="offer-title">${o.title}</h3>
        <p class="offer-desc">${o.desc}</p>
        <p class="offer-badge">${o.badge}</p>
      </article>
    `).join("");
  }

  function renderFAQ() {
    const list = document.getElementById("faqList");
    if (!list) return;
    list.innerHTML = FAQ.map((f, i) => `
      <div class="faq-item ${i === 0 ? "open" : ""}">
        <button class="faq-q" aria-expanded="${i === 0 ? "true" : "false"}">
          <span>${f.q}</span>
          <span class="faq-icon">${i === 0 ? ICONS.minus : ICONS.plus}</span>
        </button>
        <div class="faq-a" style="max-height: ${i === 0 ? "auto" : "0"};">
          <div class="faq-a-inner">${f.a}</div>
        </div>
      </div>
    `).join("");
    attachFAQ();
  }

  function attachFAQ() {
    document.querySelectorAll(".faq-item").forEach((item) => {
      const q = item.querySelector(".faq-q");
      const a = item.querySelector(".faq-a");
      const icon = item.querySelector(".faq-icon");
      q.addEventListener("click", () => {
        const open = item.classList.toggle("open");
        q.setAttribute("aria-expanded", open ? "true" : "false");
        if (icon) icon.innerHTML = open ? ICONS.minus : ICONS.plus;
        a.style.maxHeight = open ? a.scrollHeight + "px" : "0";
        if (open) {
          a.addEventListener("transitionend", function handler() {
            a.style.maxHeight = "none";
            a.removeEventListener("transitionend", handler);
          }, { once: true });
        }
      });
      if (item.classList.contains("open")) {
        a.style.maxHeight = "none";
      }
    });
  }

  // Reveal on scroll
  function initReveal() {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  }

  // Counter animation
  function initCounters() {
    const grid = document.getElementById("counterGrid");
    if (!grid) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          grid.querySelectorAll("[data-target]").forEach((el) => {
            const target = parseInt(el.dataset.target, 10);
            const duration = 1600;
            const t0 = performance.now();
            function step(t) {
              const p = Math.min(1, (t - t0) / duration);
              el.textContent = Math.floor(p * target);
              if (p < 1) requestAnimationFrame(step);
            }
            requestAnimationFrame(step);
          });
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(grid);
  }

  // Header + back-to-top
  function initHeader() {
    const header = document.getElementById("header");
    const backToTop = document.getElementById("backToTop");
    const onScroll = () => {
      header.classList.toggle("scrolled", window.scrollY > 30);
      backToTop.classList.toggle("show", window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  // Mobile menu
  function initMenu() {
    const toggle = document.getElementById("menuToggle");
    const menu = document.getElementById("mobileMenu");
    if (!toggle || !menu) return;
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("open");
      menu.classList.toggle("open");
    });
    menu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        toggle.classList.remove("open");
        menu.classList.remove("open");
      })
    );
  }

  // Booking form validation
  function initBookingForm() {
    const form = document.getElementById("bookingForm");
    const success = document.getElementById("bookingSuccess");
    if (!form) return;

    function setError(name, text) {
      const el = form.querySelector(`.form-error[data-for="${name}"]`);
      if (el) el.textContent = text || "";
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      ["name", "phone", "email", "service", "date", "time"].forEach((k) => setError(k, ""));
      success.classList.remove("show");
      let ok = true;

      if (!data.name || data.name.trim().length < 2) { setError("name", "Please enter your full name."); ok = false; }
      if (!/^[+\d\s\-()]{7,}$/.test(data.phone || "")) { setError("phone", "Enter a valid phone number."); ok = false; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || "")) { setError("email", "Enter a valid email."); ok = false; }
      if (!data.service) { setError("service", "Choose a service."); ok = false; }
      if (!data.date) { setError("date", "Pick a date."); ok = false; }
      else {
        const today = new Date(); today.setHours(0, 0, 0, 0);
        if (new Date(data.date) < today) { setError("date", "Date must be today or later."); ok = false; }
      }
      if (!data.time) { setError("time", "Pick a time."); ok = false; }

      if (!ok) return;
      success.classList.add("show");
      form.reset();
      setTimeout(() => success.classList.remove("show"), 6000);
    });
  }

  // Newsletter
  function initNewsletter() {
    const form = document.getElementById("newsletterForm");
    if (!form) return;
    const input = form.querySelector("input");
    const btn = form.querySelector("button");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
        input.style.borderColor = "var(--destructive)";
        return;
      }
      input.style.borderColor = "";
      input.value = "";
      const original = btn.innerHTML;
      btn.innerHTML = "✓";
      setTimeout(() => (btn.innerHTML = original), 2500);
    });
  }

  // Page loader
  function initLoader() {
    const loader = document.getElementById("loader");
    window.addEventListener("load", () => {
      setTimeout(() => loader.classList.add("hidden"), 450);
    });
  }

  // Footer year
  function setYear() {
    const y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  }

  // Initialize everything
  renderServices();
  renderPricing();
  renderExperts();
  renderGallery();
  renderReviews();
  renderOffers();
  renderFAQ();
  initLoader();
  initHeader();
  initMenu();
  initReveal();
  initCounters();
  initBookingForm();
  initNewsletter();
  setYear();
})();
