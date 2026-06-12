
import { Phone, Mail, Instagram, Shield } from "lucide-react";
import { useState } from "react";



export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="container-px mx-auto max-w-7xl pt-20 pb-12 text-center">
        <div className="text-xs uppercase tracking-[0.25em] text-ember">Contact</div>
        <h1 className="mt-4 font-display text-5xl sm:text-6xl text-balance">Get in <em className="text-maroon">touch</em></h1>
        <p className="mt-5 max-w-xl mx-auto text-muted-foreground">We'd love to hear from you and walk alongside you on your healing journey.</p>
      </section>

      <section className="container-px mx-auto max-w-7xl pb-12 grid md:grid-cols-3 gap-5">
        {[
          { icon: Phone, t: "Phone", v: "+234 904 098 7432", sub: "Mon–Fri · 9 AM – 5 PM WAT", href: "tel:+2349040987432" },
          { icon: Mail, t: "Email", v: "anchoredlovecounsel@gmail.com", sub: "Response within 24 hours", href: "mailto:anchoredlovecounsel@gmail.com" },
          { icon: Instagram, t: "Social", v: "@anchoredlovecounsel", sub: "Follow us on Instagram", href: "https://www.instagram.com/anchoredlovecounsel/" },
        ].map(c => (
          <a key={c.t} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
            className="group rounded-3xl bg-card border border-border/60 p-7 hover:border-maroon/30 hover:shadow-soft transition">
            <c.icon className="h-7 w-7 text-ember" />
            <div className="mt-5 text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.t}</div>
            <div className="mt-1 font-display text-xl text-foreground group-hover:text-maroon transition">{c.v}</div>
            <div className="mt-2 text-sm text-muted-foreground">{c.sub}</div>
          </a>
        ))}
      </section>

      <section className="container-px mx-auto max-w-7xl pb-24 grid lg:grid-cols-5 gap-10">
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="lg:col-span-3 rounded-3xl bg-card border border-border/60 p-8 lg:p-10">
          <h2 className="font-display text-3xl">Send us a message</h2>
          <p className="text-sm text-muted-foreground mt-2">Fill out the form below and we'll get back to you shortly.</p>

          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            <Field label="Name" name="name" placeholder="Your name" />
            <Field label="Email" name="email" type="email" placeholder="you@email.com" />
            <Field label="Phone" name="phone" placeholder="+234…" />
            <Field label="Service Type" name="service" as="select">
              <option>Select a service</option>
              <option>Individual</option><option>Premarital</option><option>Marriage</option>
              <option>Family</option><option>Coaching</option><option>Online</option>
            </Field>
            <div className="sm:col-span-2">
              <Field label="Message" name="message" as="textarea" placeholder="Tell us about your needs…" />
            </div>
          </div>
          <button className="mt-7 rounded-full bg-maroon text-primary-foreground px-7 py-3 font-medium hover:bg-maroon/90">
            {sent ? "Message sent ✓" : "Send message"}
          </button>
        </form>

        <aside className="lg:col-span-2 space-y-5">
          <div className="rounded-3xl bg-maroon/5 border border-maroon/15 p-7">
            <h3 className="font-display text-2xl">Office hours</h3>
            <p className="mt-3 text-sm text-foreground/80">Monday – Friday: 9 AM – 5 PM WAT</p>
            <p className="text-sm text-foreground/80">Saturday – Sunday: by appointment</p>
            <p className="mt-3 text-sm text-muted-foreground">Online sessions available worldwide at flexible times.</p>
          </div>
          <div className="rounded-3xl bg-card border border-border/60 p-7">
            <h3 className="font-display text-2xl">What to expect</h3>
            <ol className="mt-4 space-y-3 text-sm text-foreground/85">
              {[
                "Reach out via email, phone, or this form",
                "Automated acknowledgement within 1 hour",
                "We schedule a 15-minute consultation",
                "Welcome package with forms sent",
                "Sign and return forms securely",
                "Your first session is scheduled",
              ].map((s, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-maroon text-cream text-xs">{i+1}</span>
                  {s}
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-3xl bg-ember/10 border border-ember/30 p-7">
            <Shield className="h-6 w-6 text-ember" />
            <h3 className="mt-3 font-display text-xl">Confidentiality</h3>
            <p className="mt-2 text-sm text-foreground/80">Your privacy is sacred. All sessions are completely confidential and protected by professional standards.</p>
          </div>
        </aside>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder, as, children }: any) {
  const cls = "mt-2 w-full rounded-xl border border-input bg-cream px-4 py-3 text-sm focus:outline-none focus:border-maroon transition";
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium">{label}</span>
      {as === "textarea" ? (
        <textarea name={name} rows={5} placeholder={placeholder} className={cls} />
      ) : as === "select" ? (
        <select name={name} className={cls}>{children}</select>
      ) : (
        <input name={name} type={type} placeholder={placeholder} className={cls} />
      )}
    </label>
  );
}
