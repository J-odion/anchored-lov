import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { ArrowRight, Heart, Sparkles, Shield, Leaf } from "lucide-react";
const HERO_IMG = "/love 1.jpeg";
const COUNSELOR_IMG = "/meet.jpeg";
const avatars = [
  "https://i.pravatar.cc/150?img=1",
  "https://i.pravatar.cc/150?img=2",
  "https://i.pravatar.cc/150?img=3",
  "https://i.pravatar.cc/150?img=4"
];



const services = [
  { icon: "💙", title: "Individual Counseling", price: "$50", desc: "Confidential support for stress, grief, anxiety, trauma and spiritual growth." },
  { icon: "💍", title: "Premarital Counseling", price: "$30", desc: "Biblical and practical guidance to prepare couples for a strong marriage." },
  { icon: "❤️", title: "Marriage & Couples", price: "$100", desc: "Restore communication, rebuild trust and strengthen intimacy with Christ at the center." },
  { icon: "👨‍👩‍👧", title: "Family Life", price: "$150", desc: "Support for parents, children and blended families to foster unity and peace." },
  { icon: "🌱", title: "Faith & Life Coaching", price: "Custom", desc: "Walk in purpose, align goals with God's plan and live your divine calling." },
  { icon: "💻", title: "Online Counseling", price: "Flexible", desc: "Safe, confidential virtual sessions via Zoom or Google Meet, worldwide." },
];

const values = [
  { icon: Heart, title: "Christ-Centered Healing", desc: "Faith at the foundation" },
  { icon: Shield, title: "Compassion & Confidentiality", desc: "Your trust is sacred" },
  { icon: Leaf, title: "Growth & Wholeness", desc: "Transformation through healing" },
  { icon: Sparkles, title: "Restoration & Renewal", desc: "New beginnings await" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-ember/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-maroon/15 blur-3xl" />
        </div>
        <div className="container-px mx-auto max-w-7xl pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-maroon/20 bg-maroon/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-maroon">
              <Heart className="h-3 w-3" /> Faith-Based Counseling
            </span>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-balance text-foreground">
              Strengthening hearts, <span className="text-maroon italic">restoring</span> <span className="font-script text-ember text-6xl sm:text-7xl lg:text-8xl">homes</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Every heart can heal. Every home can be restored. Every story can find hope — when anchored in God's love and guided by professional expertise.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/book" className="group inline-flex items-center gap-2 rounded-full bg-maroon px-7 py-3.5 text-primary-foreground font-medium shadow-soft hover:bg-maroon/90 transition">
                Book a Session <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-maroon/30 px-7 py-3.5 font-medium text-maroon hover:bg-maroon/5 transition">
                Explore Services
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-5 text-sm text-muted-foreground">
              <div className="flex -space-x-3">
                {avatars.map((a, i) => (
                  <img key={i} src={a} alt="" loading="lazy" className="h-11 w-11 rounded-full border-2 border-cream object-cover shadow-sm" />
                ))}
              </div>
              <div className="leading-tight">
                <div className="flex items-center gap-1 text-ember">
                  {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                </div>
                <span className="text-foreground/80">Trusted by <strong className="text-foreground">500+ couples & families</strong></span>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-soft">
              <img src={HERO_IMG} alt="Anchored Love community" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-cream">
                <div className="font-script text-3xl text-ember">Love without walls</div>
                <div className="text-xs uppercase tracking-[0.2em] mt-1 text-cream/80">Community · Healing · Hope</div>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 hidden sm:flex bg-cream rounded-2xl shadow-soft p-3 items-center gap-3 border border-border">
              <img src="/logo.png" alt="" className="h-10 w-auto object-contain" />
              <div className="border-l border-border/60 pl-3">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Certified</div>
                <div className="text-xs font-semibold text-maroon">Marriage & Family Counselor</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-2 hidden sm:block bg-cream rounded-2xl shadow-soft p-4 border border-border">
              <div className="text-3xl font-display text-maroon">95<span className="text-ember">%</span></div>
              <div className="text-xs text-muted-foreground">Success rate</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-px mx-auto max-w-7xl py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-ember font-medium">✦ Our Expertise</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl text-foreground text-balance">Comprehensive services, grounded in faith</h2>
          </div>
          <Link to="/services" className="text-maroon font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">
            All services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-3xl bg-card p-7 border border-border/60 hover:border-maroon/30 hover:shadow-soft transition-all"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="font-display text-2xl text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-6 pt-5 border-t border-border/60 flex items-center justify-between">
                <span className="text-maroon font-semibold">{s.price}<span className="text-xs text-muted-foreground font-normal">/session</span></span>
                <Link to="/book" className="text-xs uppercase tracking-wider text-ember font-medium opacity-0 group-hover:opacity-100 transition">Book →</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COUNSELOR */}
      <section className="bg-gradient-to-br from-maroon to-[oklch(0.32_0.12_30)] text-cream">
        <div className="container-px mx-auto max-w-7xl py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-ember">👋 Meet your counselor</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl text-cream text-balance">Folashade <em className="text-ember not-italic">Bamitale-Laizer</em></h2>
            <p className="mt-3 text-cream/70 text-sm uppercase tracking-wider">Prophetic Intercessor · Certified Marriage & Family Life Counselor · Certified Grief & Loss Therapist</p>
            <p className="mt-7 text-cream/85 leading-relaxed">
              Anchored Love was birthed from a deep calling — to see broken hearts healed and fractured homes restored through the power of Christ's love. Sessions are Holy Spirit-led, compassionate and transformational.
            </p>
            <blockquote className="mt-8 border-l-2 border-ember pl-6 font-display text-2xl italic text-cream/95 leading-snug">
              "Healing doesn't happen in isolation — it happens when we bring our pain to God and allow love to rebuild us."
            </blockquote>
            <Link to="/about" className="mt-9 inline-flex items-center gap-2 rounded-full bg-cream text-maroon px-6 py-3 font-medium hover:bg-ember hover:text-cream transition">
              Learn more about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2 aspect-[4/5] rounded-2xl overflow-hidden">
              <img src={COUNSELOR_IMG} alt="" className="h-full w-full flip-horizontal object-cover" />
            </div>
            <div className="space-y-3">
              <div className="aspect-square rounded-2xl bg-ember/30 backdrop-blur p-5 flex flex-col justify-end">
                <div className="text-3xl font-display">500+</div>
                <div className="text-xs uppercase tracking-wider text-cream/80">Couples</div>
              </div>
              <div className="aspect-square rounded-2xl bg-cream/10 backdrop-blur p-5 flex flex-col justify-end">
                <div className="text-3xl font-display">1k+</div>
                <div className="text-xs uppercase tracking-wider text-cream/80">Sessions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="container-px mx-auto max-w-7xl py-24">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.25em] text-ember">💖 Core values</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">What drives us daily</h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v) => (
            <div key={v.title} className="rounded-3xl bg-card border border-border/60 p-7 text-center hover:bg-maroon hover:text-cream hover:border-maroon transition-all group">
              <v.icon className="h-8 w-8 mx-auto text-maroon group-hover:text-ember transition" />
              <h3 className="mt-5 font-display text-xl">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground group-hover:text-cream/80 transition">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-ember to-[oklch(0.55_0.18_35)] p-12 lg:p-20 text-center text-cream">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_30%,white,transparent_40%)]" />
          <div className="relative">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-balance">Ready to start your healing journey?</h2>
            <p className="mt-5 max-w-xl mx-auto text-cream/90">Take the first step toward restoration and growth with compassion, faith, and professional expertise.</p>
            <div className="mt-9 flex flex-wrap gap-4 justify-center">
              <Link to="/book" className="rounded-full bg-cream text-maroon px-7 py-3.5 font-medium hover:bg-foreground hover:text-cream transition">Book your session</Link>
              <Link to="/contact" className="rounded-full border-2 border-cream/80 px-7 py-3.5 font-medium hover:bg-cream/10 transition">Get in touch</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
