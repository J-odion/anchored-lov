import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services · Anchored Love" },
      { name: "description", content: "Individual, premarital, marriage, family counseling and faith coaching — comprehensive Christ-centered support." },
      { property: "og:title", content: "Services · Anchored Love" },
      { property: "og:description", content: "Comprehensive faith-based counseling services tailored to your needs." },
    ],
  }),
  component: Services,
});

const services = [
  {
    icon: "💙", title: "Individual Counseling", price: "$50", duration: "90 min",
    desc: "Confidential, faith-based support for personal struggles such as stress, grief, trauma, anxiety, and spiritual growth.",
    benefits: ["Safe, confidential space to process emotions", "Christ-centered guidance and biblical wisdom", "Personalized healing strategies", "Support through life transitions", "Spiritual growth and renewal"],
    packages: ["6-session package: $270 (save $30)", "12-session healing journey: $500 (save $100)"],
  },
  {
    icon: "💍", title: "Premarital Counseling", price: "$30", duration: "90 min",
    desc: "Biblical and practical guidance to prepare couples for a strong, lasting marriage.",
    benefits: ["Communication skills development", "Conflict resolution strategies", "Financial planning discussions", "Intimacy and expectations alignment", "Spiritual foundation for marriage"],
    packages: ["4-session package: $100 (save $20)", "8-session package: $200 (save $40)"],
  },
  {
    icon: "❤️", title: "Marriage & Couple Counseling", price: "$100", duration: "90 min",
    desc: "Helping couples restore communication, rebuild trust, and strengthen intimacy with Christ at the center.",
    benefits: ["Rebuild broken trust", "Improve communication patterns", "Rekindle emotional and physical intimacy", "Navigate infidelity or betrayal", "Strengthen spiritual connection"],
    packages: ["6-session package: $550 (save $50)", "12-session Relationship Renewal: $1,000 (save $200)"],
  },
  {
    icon: "👨‍👩‍👧", title: "Family Life Counseling", price: "$150", duration: "90 min",
    desc: "Support for parents, children, and blended families to foster unity, peace, and healthy relationships.",
    benefits: ["Parent–child relationship improvement", "Sibling conflict resolution", "Blended family integration", "Parenting strategy development", "Family communication enhancement"],
    packages: ["6-session package: $800 (save $100)", "12-session Family Harmony: $1,500 (save $300)"],
  },
  {
    icon: "🌱", title: "Faith & Life Coaching", price: "Custom", duration: "Flexible",
    desc: "Empowering individuals to walk in purpose and alignment with God's divine plan.",
    benefits: ["Purpose discovery and clarity", "Life transition navigation", "Goal setting and achievement", "Spiritual alignment coaching", "Career and calling guidance"],
    packages: ["Personalized coaching packages", "Group coaching available"],
  },
  {
    icon: "💻", title: "Online Counseling", price: "Flexible", duration: "Anywhere",
    desc: "Distance is no barrier to healing. Safe, confidential, virtual sessions for clients worldwide.",
    benefits: ["Convenient from home", "Flexible scheduling", "Same quality as in-person", "Accessible globally", "Secure & confidential platform"],
    packages: ["All sessions available virtually", "Zoom or Google Meet", "Available worldwide"],
  },
];

function Services() {
  return (
    <>
      <section className="container-px mx-auto max-w-7xl pt-20 pb-12 text-center">
        <div className="text-xs uppercase tracking-[0.25em] text-ember">Our Services</div>
        <h1 className="mt-4 font-display text-5xl sm:text-6xl text-balance">Comprehensive counseling, <em className="text-maroon">tailored to you</em></h1>
        <p className="mt-6 max-w-2xl mx-auto text-muted-foreground text-lg">Six specialized practices, all delivered with compassion, expertise, and Christ-centered care.</p>
      </section>

      <section className="container-px mx-auto max-w-7xl pb-20 space-y-6">
        {services.map((s, i) => (
          <article key={s.title} className={`grid lg:grid-cols-12 gap-8 rounded-[2rem] p-8 lg:p-12 ${i % 2 ? "bg-card border border-border/60" : "bg-maroon/5"}`}>
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4">
                <div className="text-5xl">{s.icon}</div>
                <div>
                  <h2 className="font-display text-3xl">{s.title}</h2>
                  <div className="text-sm text-muted-foreground mt-1">{s.price} · {s.duration}</div>
                </div>
              </div>
              <p className="mt-6 text-foreground/80 leading-relaxed">{s.desc}</p>
              <div className="mt-8 rounded-2xl bg-cream border border-border p-5">
                <div className="text-xs uppercase tracking-[0.2em] text-ember font-medium mb-3">Packages</div>
                <ul className="space-y-2 text-sm">
                  {s.packages.map(p => <li key={p} className="text-foreground/80">{p}</li>)}
                </ul>
              </div>
              <Link to="/book" className="mt-6 inline-flex items-center gap-2 rounded-full bg-maroon text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-maroon/90">
                Book this service <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="lg:col-span-7">
              <div className="text-xs uppercase tracking-[0.2em] text-maroon font-medium mb-5">Key benefits</div>
              <ul className="grid sm:grid-cols-2 gap-3">
                {s.benefits.map(b => (
                  <li key={b} className="flex items-start gap-3 text-sm text-foreground/85">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ember/20 text-ember"><Check className="h-3 w-3" /></span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="container-px mx-auto max-w-5xl pb-24">
        <div className="rounded-3xl bg-foreground text-cream p-10 lg:p-14">
          <h3 className="font-display text-3xl">Session details</h3>
          <ul className="mt-6 grid sm:grid-cols-2 gap-4 text-cream/85 text-sm">
            <li className="flex gap-3"><Check className="h-5 w-5 text-ember shrink-0" /> All sessions available virtually via Zoom or Google Meet</li>
            <li className="flex gap-3"><Check className="h-5 w-5 text-ember shrink-0" /> Safe, confidential, faith-based approach</li>
            <li className="flex gap-3"><Check className="h-5 w-5 text-ember shrink-0" /> Flexible scheduling to accommodate your lifestyle</li>
            <li className="flex gap-3"><Check className="h-5 w-5 text-ember shrink-0" /> First consultation available to discuss your needs</li>
          </ul>
        </div>
      </section>
    </>
  );
}
