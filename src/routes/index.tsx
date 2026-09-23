import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CalendarCheck,
  ClipboardList,
  Clock,
  Hammer,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Phone,
  Quote,
  Ruler,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  Users,
  Wallet,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { QuoteForm } from "@/components/site/quote-form";
import { ReviewBadges } from "@/components/site/review-badges";
import { ProjectGallery } from "@/components/site/project-gallery";

import heroImg from "@/assets/hero-garden.jpg";
import navLogo from "@/assets/navlogo.avif";
import svcGrass from "@/assets/svc-grass.jpg";
import svcResin from "@/assets/svc-resin.jpg";
import svcBollards from "@/assets/svc-bollards.jpg";

const TITLE = "JP Landscaping & Design LTD | Driveways, Patios & Garden Makeovers Kingswinford";
const DESCRIPTION =
  "Family run landscaping company in Kingswinford established in 2015. 10 Year Warranty on all works. Driveways, patios, full garden makeovers, bollards, fencing & turf.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Home,
});

const PHONE = "01384 598413";
const MOBILE = "07875 650229";
const EMAIL = "JPLandscaping5@outlook.com";
const ADDRESS = "14 Westcott Close, Wordsley, Kingswinford, UK, DY8 5NS";
const COMPANY_REG = "14644651";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Why Us", href: "#why" },
  { label: "The Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#quote" },
];

const SERVICES = [
  {
    name: "Bespoke Driveways",
    img: "/gallery/driveway-1.jpg",
    copy: "Block paving, tarmacadam, decorative stone and resin bound driveways built for lasting kerb appeal and durability.",
    points: ["Block Paving", "Tarmac", "Resin Bound", "Decorative Stone"],
  },
  {
    name: "Patios & Porcelain",
    img: "/gallery/patio-10.jpg",
    copy: "Italian porcelain, natural Indian sandstone, slate and cobble paving laid to a flawless finish with full wet mortar beds.",
    points: ["Porcelain Paving", "Indian Sandstone", "Natural Slate", "Cobbles"],
  },
  {
    name: "Full Garden Makeovers",
    img: "/gallery/makeover-10.jpg",
    copy: "Complete bespoke garden transformations: leveling, retaining walls, timber pergolas, outdoor seating and ambient lighting.",
    points: ["Design & Planning", "Multi-Level Terraces", "Feature Walls", "Lighting"],
  },
  {
    name: "Driveway Security Bollards",
    img: svcBollards,
    copy: "Ramco 100 telescopic security posts with anti-drill locks and internal locking bars — fully flush when lowered.",
    points: ["Anti-Drill Lock", "Telescopic", "Zinc Plated", "Fully Retractable"],
  },
  {
    name: "Fencing, Gates & Pergolas",
    img: "/gallery/makeover-13.jpg",
    copy: "Premium horizontal cedar slatted fencing, custom bespoke timber pergolas, closeboard panels and secure access gates.",
    points: ["Cedar Slats", "Bespoke Pergolas", "Timber Gates", "Closeboard"],
  },
  {
    name: "Artificial & Real Turf",
    img: svcGrass,
    copy: "Luxury pet- and child-friendly 38mm artificial turf and premium seeded real turf laid on laser-graded foundations.",
    points: ["38mm Luxury Grass", "Pet & Child Safe", "Zero Mowing", "Real Cultivated Turf"],
  },
  {
    name: "Walling & Cladding",
    img: "/gallery/makeover-9.jpg",
    copy: "Split face slate feature walls, engineering brick retaining walls, and rendered raised garden planters.",
    points: ["Split Face Slate", "Retaining Walls", "Rendered Planters", "Brickwork"],
  },
];

const REVIEWS = [
  {
    name: "Darren Cope",
    text: "Absolutely superb top quality job from Jordan and his team on our rear garden landscaping. We changed a couple of things along the way, no problem at all to them. Hardworking, professional and courteous. Highly recommended and we are set to have them back in the new year... and I'm hard to please.",
    job: "Rear garden landscaping",
  },
  {
    name: "Louise Smith",
    text: "100% recommend - professional, polite and excellent job done. Would not hesitate to give 5 stars. Oct 2023 - we were so impressed by the job done with the artificial grass we had the guys back to lay our patio and pathways as well as improve a garden wall. Again, a superb job. Would, and have, recommended. Not only a job well done but courteous, careful and respectful. Use these guys!",
    job: "Artificial grass, patio & pathways",
  },
  {
    name: "Mr & Mrs Painter",
    text: "Amazing and professional team! Jordan was so lovely from the moment of starting the quote process right up to completing our driveway. We cannot wait to get him back to sort the garden and see the transformation! Highly recommend, trustworthy, reliable and honest! Thank you!",
    job: "New bespoke driveway",
  },
];

const WHY = [
  { icon: ShieldCheck, title: "10 Year Warranty", copy: "Every project we build is backed by our comprehensive 10 Year Warranty on all works for complete peace of mind." },
  { icon: Hammer, title: "Expert Craftsmanship", copy: "Our team of installers are highly skilled and experienced, ensuring your project is built to the highest standards with the best materials." },
  { icon: Ruler, title: "Free Consultations", copy: "We offer free, no-obligation consultations to discuss your vision for your dream driveway or garden area and provide a detailed quotation." },
  { icon: Star, title: "Customer Satisfaction", copy: "We pride ourselves on our meticulous attention to detail, personal service and ability to consistently exceed our clients' expectations." },
  { icon: Shield, title: "Licensed & Insured", copy: "We are a fully licensed and insured company, giving you complete peace of mind throughout construction." },
  { icon: Leaf, title: "Family Run & Local", copy: "Established in 2015, family run and based in Kingswinford with an outstanding reputation built upon excellence in the local area." },
];

const PROCESS = [
  { n: "01", icon: MapPin, title: "Site Visit", copy: "Once you get in touch, we arrange a site visit at a date and time to suit yourself. At this stage we discuss your ideas, product options and survey the area." },
  { n: "02", icon: ClipboardList, title: "Design & Quotation", copy: "Following our site visit we produce a design if needed and a bespoke itemised quotation for each individual customer, sent directly via email." },
  { n: "03", icon: CalendarCheck, title: "Book a Start Date", copy: "If you are happy to proceed, we secure your place in our diary. Ahead of the start date, product samples are produced and delivered." },
];

const FAQS = [
  { q: "How much does a new driveway cost?", a: "Every project is priced individually based on size, ground conditions, drainage and the materials you choose. Most residential driveways we build fall between £6,000 and £18,000. Your site visit and detailed quotation are completely free." },
  { q: "How long will the work take?", a: "A typical driveway takes 5–10 working days, a patio 3–7 days, and a full garden makeover 2–5 weeks. We give you a firm schedule before we start and stick to it." },
  { q: "Do you offer a guarantee?", a: "Yes — a written 10 year warranty on all works, alongside the manufacturer warranties on the materials we install." },
  { q: "Do I need planning permission?", a: "Usually not for permeable surfaces such as resin bound or gravel. For non-permeable areas over 5m² we design in drainage so your project stays compliant." },
  { q: "Can you work through the winter?", a: "Yes. We work all year round and plan around the weather. Groundworks and most paving can be laid safely in cold conditions." },
  { q: "How do I get started?", a: "Fill in the quote form, or call us on 01384 598413. We'll arrange a free site visit at a time that suits you, usually within a week." },
];

const AREAS = [
  "Kingswinford", "Stourbridge", "Dudley", "Wombourne", "Halesowen", "Wolverhampton",
  "Brierley Hill", "Wall Heath", "Sedgley", "Codsall", "Bromsgrove", "Solihull",
];

function GetQuote({
  label = "Get a Quote",
  variant = "quote",
}: {
  label?: string;
  variant?: "quote" | "forest" | "outlineLight";
}) {
  return (
    <Button asChild variant={variant} size="xl">
      <a href="#quote">
        {label} <ArrowRight />
      </a>
    </Button>
  );
}

function SectionHead({
  eyebrow,
  title,
  copy,
  light = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center px-2">
      <span className={`eyebrow ${light ? "text-gold" : ""}`}>
        <Leaf className="size-3.5" /> {eyebrow}
      </span>
      <h2
        className={`mt-3 text-balance text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] ${
          light ? "text-forest-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {copy ? (
        <p className={`mt-3 text-pretty text-sm sm:text-base ${light ? "text-forest-foreground/85" : "text-muted-foreground"}`}>
          {copy}
        </p>
      ) : null}
      <span className="leaf-rule mx-auto mt-6 block w-32 sm:w-40" />
    </div>
  );
}

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* ---------- Top bar ---------- */}
      <div className="hidden bg-forest text-forest-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 py-2.5 text-xs">
          <span className="flex items-center gap-2 text-forest-foreground/90 font-medium">
            <MapPin className="size-3.5 text-gold" /> Kingswinford based · covering all surrounding areas
          </span>
          <span className="flex items-center gap-5 text-forest-foreground/90 font-medium">
            <span className="flex items-center gap-2">
              <Clock className="size-3.5 text-gold" /> Mon–Sat 08:00–17:30 · Sun 08:00–14:00
            </span>
            <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="flex items-center gap-2 font-bold text-forest-foreground hover:text-gold transition-colors">
              <Phone className="size-3.5" /> {PHONE}
            </a>
          </span>
        </div>
      </div>

      {/* ---------- Navigation ---------- */}
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 py-3">
          {/* Mobile Call Icon (Left) */}
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            aria-label="Call JP Landscaping"
            className="grid size-10 place-items-center rounded-lg border border-border text-foreground hover:bg-secondary hover:text-primary transition-colors lg:hidden shrink-0"
          >
            <Phone className="size-5 text-primary" />
          </a>

          {/* Logo (Center on mobile, Left on desktop) */}
          <a href="#top" className="flex items-center gap-3 group">
            <img
              src={navLogo}
              alt="JP Landscaping & Design Ltd"
              className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-6 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors"
            >
              <Phone className="size-4" /> {PHONE}
            </a>
            <Button asChild variant="quote">
              <a href="#quote">Get a Quote</a>
            </Button>
          </div>

          {/* Mobile Hamburger Button (Right) */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-lg border border-border text-foreground hover:bg-secondary lg:hidden shrink-0"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        {/* Mobile Navigation Drawer (Links Only) */}
        {open ? (
          <div className="border-t border-border bg-background px-4 sm:px-6 pb-6 pt-3 lg:hidden shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-2">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center rounded-lg border border-border/60 bg-card px-3 py-2.5 text-sm font-semibold text-foreground/85 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors text-center shadow-xs"
                >
                  {n.label}
                </a>
              ))}
            </div>

            <Button asChild variant="quote" className="mt-3 w-full">
              <a href="#quote" onClick={() => setOpen(false)}>
                Get a Quote
              </a>
            </Button>
          </div>
        ) : null}
      </header>

      <main id="top">
        {/* ---------- Hero ---------- */}
        <section className="relative overflow-hidden bg-forest text-forest-foreground">
          <div
            className="absolute inset-0 opacity-20"
            style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[var(--gradient-forest)] opacity-95" aria-hidden="true" />
          <div className="pointer-events-none absolute left-1/2 -top-24 size-[34rem] -translate-x-1/2 rounded-full bg-gold/15 blur-3xl" aria-hidden="true" />

          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-14 sm:py-20 md:py-24 text-center">
            <div className="rise flex flex-col items-center">
              <span className="eyebrow text-gold text-center text-xs sm:text-sm">
                <Star className="size-3.5 fill-gold shrink-0" /> Established 2015 · Kingswinford Based · 10 Year Warranty
              </span>
              <h1 className="mt-5 text-balance font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-forest-foreground">
                Bespoke Landscapes & Driveways
                <span className="block text-gold mt-1">Crafted with Expert Craftsmanship</span>
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-sm sm:text-base md:text-lg text-forest-foreground/90 font-normal leading-relaxed">
                Welcome to JP Landscaping & Design LTD. A family run business based in Kingswinford with an outstanding reputation built upon excellence. We specialise and thrive in quality work for detailed, bespoke or complex designs where a high standard of finish is paramount.
              </p>

              <ul className="mt-7 grid w-full max-w-3xl grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-4">
                {[
                  { icon: ShieldCheck, t: "10 Year Warranty" },
                  { icon: Hammer, t: "Expert Craftsmanship" },
                  { icon: Ruler, t: "Free Consultations" },
                  { icon: Shield, t: "Licensed & Insured" },
                ].map((u) => (
                  <li
                    key={u.t}
                    className="flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border border-forest-foreground/20 bg-forest-foreground/10 px-2.5 py-2.5 sm:px-3.5 sm:py-3 text-forest-foreground shadow-sm"
                  >
                    <u.icon className="size-4 shrink-0 text-gold" />
                    <span className="text-xs sm:text-sm font-bold tracking-tight">{u.t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col sm:flex-row w-full sm:w-auto items-center justify-center gap-3">
                <div className="w-full sm:w-auto">
                  <GetQuote label="Get Your Free Quote" />
                </div>
                <Button asChild variant="outlineLight" size="xl" className="w-full sm:w-auto">
                  <a href={`tel:${PHONE.replace(/\s/g, "")}`}>
                    <Phone className="size-4" /> {PHONE}
                  </a>
                </Button>
              </div>

              <div className="mt-8 flex justify-center">
                <ReviewBadges tone="dark" />
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Horizontal quote form ---------- */}
        <section id="quote" className="relative z-10 bg-forest pb-12 sm:pb-16 scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grain rounded-2xl border border-border bg-card p-4 sm:p-6 md:p-8 shadow-[var(--shadow-lift)]">
              <div className="relative mb-5 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">Get your free, no-obligation quote</h2>
                  <p className="text-xs sm:text-sm font-medium text-muted-foreground mt-1">
                    30 seconds to complete · A real person replies within 24 hours
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                  <BadgeCheck className="size-4 text-primary" /> No pushy sales, ever
                </span>
              </div>
              <div className="relative">
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Accreditations Section ---------- */}
        <section id="accreditations" className="border-y border-border bg-cream py-8 sm:py-10 scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="text-center md:text-left">
                <span className="eyebrow">
                  <ShieldCheck className="size-3.5 text-primary" /> Verified Standards
                </span>
                <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-foreground">
                  Our Industry Accreditations
                </h3>
                <p className="mt-1.5 max-w-xl text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Vetted, certified and registered member of leading UK landscaping trade associations and regulatory bodies.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 rounded-2xl border border-border bg-card p-4 sm:p-5 shadow-sm">
                <div className="flex flex-col items-center gap-1.5 text-center">
                  <img
                    src="/accreditations/hta-logo.png"
                    alt="HTA - Horticultural Trades Association Member"
                    className="h-9 sm:h-12 w-auto object-contain transition-transform duration-200 hover:scale-105"
                  />
                  <span className="text-[0.65rem] sm:text-[0.68rem] font-bold text-muted-foreground uppercase tracking-wider">HTA Member</span>
                </div>
                <div className="h-9 sm:h-10 w-px bg-border hidden sm:block" aria-hidden="true" />
                <div className="flex flex-col items-center gap-1.5 text-center">
                  <img
                    src="/accreditations/registered-member.webp"
                    alt="Registered Member Association"
                    className="h-9 sm:h-12 w-auto object-contain transition-transform duration-200 hover:scale-105"
                  />
                  <span className="text-[0.65rem] sm:text-[0.68rem] font-bold text-muted-foreground uppercase tracking-wider">Registered Member</span>
                </div>
                <div className="h-9 sm:h-10 w-px bg-border hidden sm:block" aria-hidden="true" />
                <div className="flex flex-col items-center gap-1.5 text-center">
                  <img
                    src="/accreditations/accreditation-1.jpg"
                    alt="Landscape Quality & Vetted Standards"
                    className="h-9 sm:h-12 w-auto object-contain rounded transition-transform duration-200 hover:scale-105"
                  />
                  <span className="text-[0.65rem] sm:text-[0.68rem] font-bold text-muted-foreground uppercase tracking-wider">Vetted Quality</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Reviews ---------- */}
        <section id="reviews" className="section-pad relative overflow-hidden bg-decor-radial grain border-b border-border scroll-mt-20">
          <div className="pointer-events-none absolute -left-20 top-20 size-80 rounded-full bg-primary/5 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-20 bottom-10 size-80 rounded-full bg-gold/8 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
            <SectionHead
              eyebrow="What our customers say"
              title="Five-star work, five-star manners"
              copy="Real reviews from homeowners across Kingswinford, Stourbridge and Dudley."
            />
            <div className="mt-10 sm:mt-12 grid gap-5 sm:gap-6 md:grid-cols-3">
              {REVIEWS.map((r) => (
                <figure
                  key={r.name}
                  className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-5 sm:p-7 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <Quote className="absolute right-5 top-5 sm:right-6 sm:top-6 size-7 sm:size-8 text-primary/15" />
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-xs sm:text-sm leading-relaxed text-foreground/85 font-normal">
                    "{r.text}"
                  </blockquote>
                  <figcaption className="mt-5 border-t border-border pt-4">
                    <span className="block font-display text-base sm:text-lg font-bold text-foreground">{r.name}</span>
                    <span className="text-xs font-semibold text-primary">{r.job}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <ReviewBadges />
              <GetQuote />
            </div>
          </div>
        </section>

        {/* ---------- About / Company Story ---------- */}
        <section id="about" className="section-pad bg-cream scroll-mt-20">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:gap-14 px-4 sm:px-6 lg:grid-cols-2">
            <div className="relative">
              <img
                src="/gallery/makeover-13.jpg"
                width={1408}
                height={912}
                loading="lazy"
                alt="JP Landscaping bespoke garden transformation"
                className="rounded-2xl object-cover shadow-[var(--shadow-lift)] aspect-[4/3] w-full"
              />
              <img
                src="/gallery/patio-5.jpg"
                width={600}
                height={450}
                loading="lazy"
                alt="Porcelain patio detail"
                className="absolute -bottom-6 -right-3 hidden w-44 sm:w-48 rounded-xl border-4 border-cream object-cover shadow-[var(--shadow-lift)] sm:block aspect-[4/3]"
              />
            </div>
            <div>
              <span className="eyebrow">
                <Leaf className="size-3.5" /> Established 2015 · Kingswinford Based
              </span>
              <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.15]">
                Welcome to JP Landscaping & Design LTD
              </h2>
              <span className="leaf-rule mt-5 block w-32 sm:w-40" />
              <p className="mt-5 text-pretty text-sm sm:text-base text-foreground/85 leading-relaxed">
                Welcome to JP Landscaping & Design. We are a family run business based within Kingswinford with an outstanding reputation built upon excellence within the local area. We offer a personal and professional service for our clients — customer satisfaction is key.
              </p>
              <p className="mt-3.5 text-pretty text-sm sm:text-base text-foreground/85 leading-relaxed">
                We specialise and thrive in quality work for those detailed, bespoke or complex designs, where a high standard of finish is paramount. With our own highly skilled teams constructing all our projects, you can be sure that the highest level of quality is continuously maintained.
              </p>
              <p className="mt-3.5 text-pretty text-sm sm:text-base font-semibold text-primary leading-relaxed">
                For your ultimate and most complete landscape package, we are the company for you.
              </p>
              <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-2.5 sm:gap-4">
                {[
                  { k: "10 Yr", v: "Warranty on all works" },
                  { k: "Est. 2015", v: "Family run local business" },
                  { k: "100%", v: "Satisfaction focused" },
                ].map((s) => (
                  <div key={s.v} className="rounded-xl border border-border bg-card p-3 sm:px-4 sm:py-3 shadow-sm text-center sm:text-left">
                    <span className="block font-display text-lg sm:text-2xl font-bold text-primary">{s.k}</span>
                    <span className="text-[0.68rem] sm:text-xs font-semibold text-muted-foreground">{s.v}</span>
                  </div>
                ))}
              </div>
              <div className="mt-7 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
                <GetQuote />
                <Button asChild variant="outline" size="xl">
                  <a href={`tel:${PHONE.replace(/\s/g, "")}`}>
                    <Phone className="size-4" /> Call {PHONE}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Services ---------- */}
        <section id="services" className="section-pad relative overflow-hidden bg-decor-warm border-y border-border scroll-mt-20">
          <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 size-[44rem] rounded-full bg-primary/4 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute right-0 top-1/3 size-72 rounded-full bg-gold/6 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
            <SectionHead
              eyebrow="What we do"
              title="Our landscaping services"
              copy="From award-winning driveways to complete garden transformations — all designed, built and guaranteed in-house."
            />
            <div className="mt-10 sm:mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s) => (
                <article
                  key={s.name}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={s.img}
                      width={1024}
                      height={768}
                      loading="lazy"
                      alt={s.name}
                      className="h-48 sm:h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-3.5 top-3.5 sm:left-4 sm:top-4 rounded-full bg-forest/90 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[0.62rem] sm:text-[0.65rem] font-bold uppercase tracking-[0.18em] text-forest-foreground backdrop-blur-sm shadow-sm">
                      10 yr warranty
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">{s.name}</h3>
                    <p className="mt-2.5 flex-1 text-xs sm:text-sm leading-relaxed text-foreground/85">{s.copy}</p>
                    <ul className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                      {s.points.map((p) => (
                        <li
                          key={p}
                          className="rounded-full border border-border bg-secondary px-2.5 py-0.5 sm:px-3 sm:py-1 text-[0.72rem] sm:text-xs font-semibold text-secondary-foreground"
                        >
                          {p}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#quote"
                      className="mt-5 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary transition-colors hover:text-primary/80"
                    >
                      Get a quote for {s.name.toLowerCase()} <ArrowUpRight className="size-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-10 sm:mt-12 flex justify-center">
              <GetQuote label="Get a Quote" />
            </div>
          </div>
        </section>

        {/* ---------- Portfolio ---------- */}
        <section id="work" className="section-pad bg-forest text-forest-foreground scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionHead
              light
              eyebrow="Recent projects & gallery"
              title="Work we're proud to put our name on"
              copy="Browse our real, authentic completed driveways, porcelain patios, and full garden makeovers across the West Midlands."
            />
            <div className="mt-8 sm:mt-10">
              <ProjectGallery />
            </div>
            <div className="mt-10 sm:mt-12 flex justify-center">
              <GetQuote label="Get a Quote for Your Project" />
            </div>
          </div>
        </section>

        {/* ---------- Why choose us ---------- */}
        <section id="why" className="section-pad grain scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionHead
              eyebrow="Why choose us"
              title="Six good reasons homeowners pick JP"
            />
            <div className="mt-10 sm:mt-12 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {WHY.map((w) => (
                <div
                  key={w.title}
                  className="relative rounded-2xl border border-border bg-card p-5 sm:p-7 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-soft)]"
                >
                  <span className="grid size-11 sm:size-12 place-items-center rounded-xl bg-forest text-gold shadow-sm">
                    <w.icon className="size-5 sm:size-6" />
                  </span>
                  <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl font-bold text-foreground">{w.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-foreground/80">{w.copy}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 sm:mt-12 flex justify-center">
              <GetQuote />
            </div>
          </div>
        </section>

        {/* ---------- Process ---------- */}
        <section id="process" className="section-pad bg-cream scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionHead
              eyebrow="The Process"
              title="From initial visit to finished dream space"
              copy="Clear, structured three-stage process so you know exactly what to expect from first consultation to completion."
            />
            <div className="relative mt-12 sm:mt-14 grid gap-6 sm:gap-8 md:grid-cols-3">
              <span
                className="absolute inset-x-6 top-7 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent md:block"
                aria-hidden="true"
              />
              {PROCESS.map((p) => (
                <div key={p.n} className="relative rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm">
                  <span className="relative grid size-12 sm:size-14 place-items-center rounded-full border-2 border-forest/15 bg-primary text-primary-foreground shadow-md">
                    <p.icon className="size-5 sm:size-6 text-gold" />
                  </span>
                  <span className="mt-4 sm:mt-5 block font-display text-xs font-bold tracking-[0.25em] text-primary">STEP {p.n}</span>
                  <h3 className="mt-1 text-lg sm:text-xl font-bold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-foreground/80">{p.copy}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 sm:mt-12 flex justify-center">
              <GetQuote label="Start Your Project With a Site Visit" />
            </div>
          </div>
        </section>

        {/* ---------- Special offers ---------- */}
        <section id="offers" className="section-pad scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grain relative overflow-hidden rounded-3xl bg-forest p-6 sm:p-10 md:p-14 text-forest-foreground shadow-[var(--shadow-lift)]">
              <div className="pointer-events-none absolute -left-20 -top-20 size-72 rounded-full bg-gold/15 blur-3xl" aria-hidden="true" />
              <div className="relative grid gap-8 sm:gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
                <div>
                  <span className="eyebrow text-gold">
                    <Sparkles className="size-3.5" /> Seasonal offers
                  </span>
                  <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-forest-foreground leading-[1.15]">
                    Book before the spring rush and save
                  </h2>
                  <p className="mt-3.5 text-sm sm:text-base text-forest-foreground/85 leading-relaxed">
                    Limited winter and early-spring diary slots — secure your date now and lock in
                    this year's pricing.
                  </p>
                  <div className="mt-6 sm:mt-8">
                    <GetQuote label="Claim This Offer" />
                  </div>
                </div>
                <div className="grid gap-3.5 sm:gap-4 sm:grid-cols-2">
                  {[
                    { t: "Free security bollard", d: "With every full driveway installation booked this quarter." },
                    { t: "£350 off garden makeovers", d: "On complete garden transformations over £8,000." },
                    { t: "Free design visual", d: "3D concept design included with every full garden quote." },
                    { t: "0% finance available", d: "Spread the cost over 12 months, subject to status." },
                  ].map((o) => (
                    <div
                      key={o.t}
                      className="rounded-2xl border border-forest-foreground/20 bg-forest-foreground/10 p-4 sm:p-5 shadow-sm"
                    >
                      <BadgeCheck className="size-5 text-gold" />
                      <h3 className="mt-2.5 text-base sm:text-lg font-bold text-forest-foreground">{o.t}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-forest-foreground/85">{o.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <section id="faq" className="section-pad relative overflow-hidden bg-decor-radial border-b border-border scroll-mt-20">
          <div className="pointer-events-none absolute -right-16 top-10 size-80 rounded-full bg-gold/6 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -left-16 bottom-10 size-80 rounded-full bg-primary/5 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
            <SectionHead eyebrow="Questions" title="Frequently asked questions" />
            <Accordion type="single" collapsible className="mt-8 sm:mt-10">
              {FAQS.map((f) => (
                <AccordionItem key={f.q} value={f.q} className="border-border">
                  <AccordionTrigger className="text-left font-display text-base sm:text-lg font-semibold hover:text-primary hover:no-underline py-4">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm leading-relaxed text-foreground/85">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mt-8 sm:mt-10 flex justify-center">
              <GetQuote />
            </div>
          </div>
        </section>

        {/* ---------- Service areas ---------- */}
        <section id="areas" className="section-pad bg-cream grain scroll-mt-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <SectionHead
              eyebrow="Where we work"
              title="Kingswinford based, covering all surrounding areas"
              copy="If your postcode isn't listed, ask anyway — we travel across the West Midlands for the right project."
            />
            <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
              {AREAS.map((a) => (
                <span
                  key={a}
                  className="flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-foreground/85 shadow-sm transition-all hover:border-primary/40 hover:-translate-y-0.5"
                >
                  <MapPin className="size-3.5 text-primary" /> {a}
                </span>
              ))}
            </div>
            <div className="mt-10 sm:mt-12 flex justify-center">
              <GetQuote />
            </div>
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="bg-forest text-forest-foreground pb-24 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-16">
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
            <div className="sm:col-span-2">
              <a href="#top" className="inline-block group">
                <img
                  src={navLogo}
                  alt="JP Landscaping & Design Ltd"
                  className="h-10 sm:h-12 w-auto object-contain brightness-105 transition-transform group-hover:scale-105"
                />
              </a>
              <p className="mt-4 max-w-md text-xs sm:text-sm leading-relaxed text-forest-foreground/85">
                Welcome to JP Landscaping & Design LTD. Family run landscapers based in Kingswinford, specialising in bespoke driveways, patios and complete garden transformations — all backed by a 10 year warranty.
              </p>
              <div className="mt-4 flex flex-col gap-1.5 text-xs text-forest-foreground/75">
                <span className="flex items-center gap-1.5"><MapPin className="size-3.5 text-gold shrink-0" /> {ADDRESS}</span>
                <span>Company Registration Number: <strong>{COMPANY_REG}</strong></span>
              </div>
              <div className="mt-5">
                <ReviewBadges tone="dark" />
              </div>

              {/* Accreditations in footer */}
              <div className="mt-6 border-t border-forest-foreground/15 pt-5">
                <span className="block text-xs font-bold uppercase tracking-[0.2em] text-gold">Industry Accreditations</span>
                <div className="mt-3 flex flex-wrap items-center gap-3.5 bg-white/90 p-3 rounded-xl max-w-xs shadow-sm">
                  <img
                    src="/accreditations/hta-logo.png"
                    alt="HTA Member"
                    className="h-6 sm:h-7 w-auto object-contain"
                  />
                  <img
                    src="/accreditations/registered-member.webp"
                    alt="Registered Member"
                    className="h-6 sm:h-7 w-auto object-contain"
                  />
                  <img
                    src="/accreditations/accreditation-1.jpg"
                    alt="Quality Accreditation"
                    className="h-6 sm:h-7 w-auto object-contain rounded"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-gold">Our Services</h3>
              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-forest-foreground/80">
                {SERVICES.map((s) => (
                  <li key={s.name}>
                    <a href="#services" className="hover:text-gold transition-colors">
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-gold">Get in touch</h3>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-forest-foreground/85">
                <li className="flex items-center gap-2">
                  <Phone className="size-4 text-gold shrink-0" />
                  <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="hover:text-gold transition-colors font-bold">{PHONE}</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="size-4 text-gold shrink-0" />
                  <a href={`tel:${MOBILE.replace(/\s/g, "")}`} className="hover:text-gold transition-colors">{MOBILE}</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="size-4 text-gold shrink-0" />
                  <a href={`mailto:${EMAIL}`} className="hover:text-gold transition-colors">{EMAIL}</a>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="mt-0.5 size-4 shrink-0 text-gold" />
                  <span>
                    Mon–Sat: 08:00 – 17:30
                    <br />
                    Sunday: 08:00 – 14:00
                  </span>
                </li>
              </ul>
              <div className="mt-5">
                <GetQuote />
              </div>
            </div>
          </div>

          <span className="leaf-rule mt-10 sm:mt-12 block" />
          <div className="mt-6 flex flex-col items-center justify-between gap-2 text-center text-xs text-forest-foreground/70 md:flex-row md:text-left">
            <span>© {new Date().getFullYear()} JP Landscaping & Design LTD. All rights reserved. Company No: {COMPANY_REG}</span>
            <span>Kingswinford based · Covering all surrounding areas · Fully Licensed & Insured</span>
          </div>
        </div>
      </footer>

      {/* ---------- Mobile sticky CTA ---------- */}
      <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-border bg-background/95 p-2.5 sm:p-3 backdrop-blur md:hidden shadow-lg">
        <Button asChild variant="forest" className="h-11 sm:h-12 flex-1 font-bold">
          <a href={`tel:${PHONE.replace(/\s/g, "")}`}>
            <Phone className="size-4" /> Call
          </a>
        </Button>
        <Button asChild variant="quote" className="h-11 sm:h-12 flex-1 font-bold">
          <a href="#quote">Get a Quote</a>
        </Button>
      </div>
    </div>
  );
}
