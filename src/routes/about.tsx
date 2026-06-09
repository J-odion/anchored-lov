import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
const EVENT3_URL = "/love w.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About · Anchored Love" },
      { name: "description", content: "Our story, mission, and the counselor behind Anchored Love — Folashade Bamitale-Laizer." },
      { property: "og:title", content: "About · Anchored Love" },
      { property: "og:description", content: "Meet your counselor and learn our mission." },
      { property: "og:image", content: EVENT3_URL },
    ],
  }),
  component: About,
});

const specializations = [
  "Marriage & Relationship Counseling",
  "Grief & Loss Therapy",
  "Family Life Counseling",
  "Trauma & Anxiety Support",
  "Premarital Counseling",
  "Spiritual Growth Coaching",
];

const values = [
  { e: "❤️", t: "Christ-Centered Healing", d: "Faith is at the foundation of everything we do." },
  { e: "💎", t: "Compassion & Confidentiality", d: "Your trust is sacred. A safe, judgment-free space." },
  { e: "🌿", t: "Growth & Wholeness", d: "Healing emotionally, spiritually, and relationally." },
  { e: "🕊️", t: "Restoration & Renewal", d: "Every story can find hope. New beginnings await." },
];

function About() {
  return (
    <>
      <section className="container-px mx-auto max-w-7xl pt-20 pb-16 text-center">
        <div className="text-xs uppercase tracking-[0.25em] text-ember">About</div>
        <h1 className="mt-4 font-display text-5xl sm:text-6xl text-balance">Our story, our <em className="text-maroon">mission</em></h1>
      </section>

      <section className="container-px mx-auto max-w-6xl pb-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display text-4xl">Our Story</h2>
          <p className="mt-5 text-foreground/80 leading-relaxed">
            Anchored Love was birthed from a deep calling — to see broken hearts healed and fractured homes restored through the power of Christ's love.
          </p>
          <p className="mt-4 text-foreground/80 leading-relaxed">
            What began as a personal passion has grown into a registered faith-based counseling firm dedicated to transforming lives through professional expertise combined with spiritual depth.
          </p>
        </div>
        <div className="relative rounded-3xl bg-maroon/5 border border-maroon/15 p-10">
          <div className="text-4xl">🕊️</div>
          <div className="mt-3 text-xs uppercase tracking-[0.2em] text-ember">Our Vision</div>
          <blockquote className="mt-4 font-display text-2xl leading-snug text-foreground/90 italic">
            "A world where broken hearts find healing, fractured homes find restoration, and every person experiences the transformative power of Christ-centered love."
          </blockquote>
        </div>
      </section>

      {/* COUNSELOR */}
      <section className="bg-card border-y border-border/60">
        <div className="container-px mx-auto max-w-6xl py-20 grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img src={EVENT3_URL} alt="Folashade Bamitale-Laizer" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-[0.25em] text-ember">Meet your counselor</div>
            <h2 className="mt-3 font-display text-4xl">Folashade Bamitale-Laizer</h2>
            <p className="text-sm text-muted-foreground uppercase tracking-wider mt-2">Prophetic Intercessor · Certified Marriage & Family Life Counselor · Certified Grief & Loss Therapist</p>
            <p className="mt-6 text-foreground/80 leading-relaxed">
              With a unique blend of spiritual depth and professional expertise, Folashade brings Holy Spirit-led, compassionate, and transformational guidance to every session. Her approach integrates biblical wisdom with evidence-based counseling techniques.
            </p>
            <blockquote className="mt-6 border-l-2 border-ember pl-5 italic font-display text-xl text-foreground/90">
              "Healing doesn't happen in isolation — it happens when we bring our pain to God and allow love to rebuild us."
            </blockquote>

            <div className="mt-8 grid sm:grid-cols-2 gap-8">
              <div>
                <h4 className="font-display text-lg text-maroon">Specializations</h4>
                <ul className="mt-3 space-y-2 text-sm">
                  {specializations.map(s => (
                    <li key={s} className="flex items-start gap-2"><Check className="h-4 w-4 text-ember mt-0.5" />{s}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-display text-lg text-maroon">Certifications</h4>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>📜 Certified Marriage & Family Life Counselor</li>
                  <li>📜 Certified Grief & Loss Therapist</li>
                  <li>📜 Prophetic Intercessor</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="container-px mx-auto max-w-7xl py-20">
        <h2 className="font-display text-4xl text-center">Our Core Values</h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map(v => (
            <div key={v.t} className="rounded-3xl bg-card border border-border/60 p-7">
              <div className="text-3xl">{v.e}</div>
              <h3 className="mt-4 font-display text-xl">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-px mx-auto max-w-4xl pb-24 text-center">
        <h2 className="font-display text-4xl">Ready to begin your healing journey?</h2>
        <Link to="/book" className="mt-8 inline-flex rounded-full bg-maroon text-primary-foreground px-8 py-3.5 font-medium hover:bg-maroon/90">Book your session today</Link>
      </section>
    </>
  );
}
