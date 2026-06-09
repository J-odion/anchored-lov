import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { usePaystackPayment } from "react-paystack";
import { Check } from "lucide-react";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Session · Anchored Love" },
      { name: "description", content: "Schedule your 15-minute consultation call with Anchored Love." },
      { property: "og:title", content: "Book a Session · Anchored Love" },
      { property: "og:description", content: "Take the first step toward healing and restoration." },
    ],
  }),
  component: Book,
});

const servicePrices: Record<string, number> = {
  "Individual Counseling": 5000,
  "Premarital Counseling": 3000,
  "Marriage & Couples": 10000,
  "Family Life": 15000,
  "Faith & Life Coaching": 5000,
  "Online Counseling": 3000,
};

function Book() {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [service, setService] = useState("");

  const amount = servicePrices[service] || 5000;

  const config = {
    reference: new Date().getTime().toString(),
    email,
    amount,
    currency: "USD",
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || "",
    metadata: {
      custom_fields: [
        { display_name: "Name", variable_name: "name", value: name },
        { display_name: "Service", variable_name: "service", value: service }
      ]
    }
  };

  const initializePayment = usePaystackPayment(config);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !service || service === "Select a service") {
      alert("Please fill in your name, email and select a service.");
      return;
    }
    
    initializePayment({
      onSuccess: () => setSent(true),
      onClose: () => console.log("Payment modal closed")
    });
  };
  return (
    <>
      <section className="container-px mx-auto max-w-7xl pt-20 pb-10 text-center">
        <div className="text-xs uppercase tracking-[0.25em] text-ember">Book a Session</div>
        <h1 className="mt-4 font-display text-5xl sm:text-6xl text-balance">Take the first <em className="text-maroon">step</em></h1>
        <p className="mt-5 max-w-xl mx-auto text-muted-foreground">Schedule your 15-minute consultation. We'll talk through your needs and find the right path forward.</p>
      </section>

      <section className="container-px mx-auto max-w-7xl pb-24 grid lg:grid-cols-5 gap-10">
        <form onSubmit={handleSubmit} className="lg:col-span-3 rounded-3xl bg-card border border-border/60 p-8 lg:p-10">
          <h2 className="font-display text-3xl">Schedule your consultation</h2>
          <p className="text-sm text-muted-foreground mt-2">Fields marked * are required.</p>

          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            <F label="Full name *" name="name" value={name} onChange={(e: any) => setName(e.target.value)} />
            <F label="Email *" name="email" type="email" value={email} onChange={(e: any) => setEmail(e.target.value)} />
            <F label="Phone *" name="phone" placeholder="+234…" />
            <F label="Location / Country *" name="location" placeholder="e.g., Lagos, Nigeria" />
            <F label="Service Type *" name="service" as="select" value={service} onChange={(e: any) => setService(e.target.value)}>
              <option>Select a service</option>
              <option>Individual Counseling</option>
              <option>Premarital Counseling</option>
              <option>Marriage & Couples</option>
              <option>Family Life</option>
              <option>Faith & Life Coaching</option>
              <option>Online Counseling</option>
            </F>
            <F label="Session Type *" name="sessionType" as="select">
              <option>Online (Zoom/Google Meet)</option>
              <option>Phone Call</option>
            </F>
            <F label="Preferred Date" name="date" type="date" />
            <F label="Preferred Time" name="time" type="time" />
            <div className="sm:col-span-2">
              <F label="Tell us about your needs" name="needs" as="textarea" placeholder="What brings you to counseling? What would you like to work on?" />
            </div>
          </div>

          <button className="mt-7 rounded-full bg-maroon text-primary-foreground px-7 py-3.5 font-medium hover:bg-maroon/90">
            {sent ? "Request received ✓ — we'll be in touch" : "Continue to consultation"}
          </button>
        </form>

        <aside className="lg:col-span-2 space-y-5">
          {[
            { n: 1, t: "15-Minute Consultation", d: "Initial call to discuss your needs and goals." },
            { n: 2, t: "Welcome Package", d: "Pre-counseling forms sent after consultation." },
            { n: 3, t: "E-Signature Portal", d: "Securely sign and submit forms online." },
            { n: 4, t: "Your First Session", d: "Scheduled at a time that works for you." },
          ].map(s => (
            <div key={s.n} className="rounded-3xl bg-card border border-border/60 p-6 flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-maroon text-cream font-display text-xl">{s.n}</div>
              <div>
                <h3 className="font-display text-lg">{s.t}</h3>
                <p className="text-sm text-muted-foreground mt-1">{s.d}</p>
              </div>
            </div>
          ))}
          <div className="rounded-3xl bg-maroon text-cream p-6">
            <h3 className="font-display text-xl">What's included</h3>
            <ul className="mt-3 space-y-2 text-sm text-cream/85">
              {["Confidential, faith-based approach", "Flexible scheduling", "Virtual via Zoom or Google Meet", "Welcome package & secure forms"].map(i => (
                <li key={i} className="flex gap-2"><Check className="h-4 w-4 text-ember shrink-0" />{i}</li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}

function F({ label, name, type = "text", placeholder, as, children, value, onChange }: any) {
  const cls = "mt-2 w-full rounded-xl border border-input bg-cream px-4 py-3 text-sm focus:outline-none focus:border-maroon transition";
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium">{label}</span>
      {as === "textarea" ? (
        <textarea name={name} rows={5} placeholder={placeholder} className={cls} value={value} onChange={onChange} />
      ) : as === "select" ? (
        <select name={name} className={cls} value={value} onChange={onChange}>{children}</select>
      ) : (
        <input name={name} type={type} placeholder={placeholder} className={cls} value={value} onChange={onChange} />
      )}
    </label>
  );
}
