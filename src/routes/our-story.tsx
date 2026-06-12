import { Link } from "react-router-dom";

import { Instagram, Play, ExternalLink, ArrowRight } from "lucide-react";
const EVENT1_URL = "/love team.jpeg";
const EVENT2_URL = "/love banner.jpeg";
const EVENT3_URL = "/love 1.jpeg";



const videos = [
  { id: "VqUg9RXSrFg", type: "video", title: "Anchored Love · Session Highlight" },
  { id: "ZrLrLcpYXFA", type: "video", title: "Restoring Hearts · Live Moment" },
  { id: "BvBJwF8WCE4", type: "short", title: "Word of encouragement" },
  { id: "FXxhSopVnUs", type: "short", title: "Love without walls" },
  { id: "xsL_51B7Hvg", type: "short", title: "Faith in action" },
];

const igPosts = [
  {
    url: "https://www.instagram.com/p/DYXLmoniNPU/?igsh=dzBmMno5Y2o3OW95",
    text: "You were not created to carry everyone’s emotions while silently neglecting your own. If you’ve been emotionally exhausted lately… this post may hit deeper than you expect. 🤍"
  },
  {
    url: "https://www.instagram.com/p/DYaCFXZiODA/?igsh=NTBuMmJiNTRjcTl6",
    text: "The saddest part about people-pleasing? You lose yourself… while trying not to lose others. This post will open your eyes. 🤍"
  },
  {
    url: "https://www.instagram.com/p/DYo1P8qCEi4/?igsh=bTJqdDZ0Y2VuazZm&utm_source=chatgpt.com",
    text: "I don’t even know who needs to hear this… but don’t scroll past this. This is the kind of post that sits you down and makes you question everything you’ve been pretending not to feel."
  },
  {
    url: "https://www.instagram.com/p/DYxGqD7iHwR/?igsh=MTljYXBlZnFtMTgycw==",
    text: "Some of you are not “too emotional.” You’re just emotionally exhausted from begging for consistency from people who only give attention when they feel like losing you. That kind of pain changes a person quietly."
  },
  {
    url: "https://www.instagram.com/p/DY7KCgYCOdJ/?igsh=OHY5M2Z1NmxqN2d5",
    text: "Sometimes we mistake inconsistency for love because we are afraid to let go. 💔 This post may explain what many people are silently feeling."
  },
  {
    url: "https://www.instagram.com/p/DZFUutLCEvY/?img_index=7&igsh=em82djkwY2Z5dzBq",
    text: "💬 What's the ONE thing you and your partner keep arguing about? Money? Intimacy? Feeling unheard? I just posted something that might finally put words to what you've been feeling."
  }
];

export default function OurStory() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-px mx-auto max-w-7xl pt-20 pb-12 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-ember">✦ Our Story</div>
            <h1 className="mt-4 font-display text-5xl sm:text-6xl text-balance">
              A movement of <em className="text-maroon">love without walls</em>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              From living rooms to community gatherings, every smile, embrace, and conversation is a chapter in the Anchored Love story. We show up where hearts are, and we walk together until healing meets hope.
            </p>
            <a href="https://www.instagram.com/anchoredlovecounsel/" target="_blank" rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-maroon text-primary-foreground px-6 py-3 font-medium hover:bg-maroon/90">
              <Instagram className="h-4 w-4" /> Follow @anchoredlovecounsel
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src={EVENT1_URL} alt="" className="aspect-[3/4] object-cover rounded-2xl row-span-2" />
            <img src={EVENT3_URL} alt="" className="aspect-square object-cover rounded-2xl" />
            <img src={EVENT2_URL} alt="" className="aspect-square object-cover rounded-2xl" />
          </div>
        </div>
      </section>

      {/* LIVE EVENTS GALLERY */}
      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="flex items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-ember">Live moments</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">From the field</h2>
          </div>
          <p className="hidden md:block max-w-md text-sm text-muted-foreground">Community outreach, retreats, and the everyday encounters that make Anchored Love.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <figure className="md:col-span-4 md:row-span-2 relative rounded-3xl overflow-hidden group">
            <img src={EVENT3_URL} alt="Anchored Love community gathering" className="aspect-[4/3] md:aspect-auto md:h-full w-full object-cover group-hover:scale-105 transition duration-700" />
            <figcaption className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-maroon/90 to-transparent text-cream">
              <div className="font-script text-2xl text-ember">Love without walls</div>
              <div className="text-sm">Community gathering · Abuja</div>
            </figcaption>
          </figure>
          <figure className="md:col-span-2 rounded-3xl overflow-hidden">
            <img src={EVENT1_URL} alt="Team in branded shirts" className="h-full w-full object-cover aspect-[4/5]" />
          </figure>
          <figure className="md:col-span-2 rounded-3xl overflow-hidden">
            <img src={EVENT2_URL} alt="Outreach in action" className="h-full w-full object-cover aspect-[4/5]" />
          </figure>
        </div>
      </section>

      {/* YOUTUBE VIDEOS */}
      <section className="bg-foreground text-cream">
        <div className="container-px mx-auto max-w-7xl py-24">
          <div className="flex items-end justify-between mb-10 gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-ember">▶ Watch</div>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl text-cream">Stories on video</h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {videos.filter(v => v.type === "video").map(v => (
              <div key={v.id} className="rounded-2xl overflow-hidden bg-black/40 border border-cream/10">
                <div className="aspect-video">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-5 flex items-center justify-between">
                  <span className="font-medium">{v.title}</span>
                  <Play className="h-4 w-4 text-ember" />
                </div>
              </div>
            ))}
          </div>

          <h3 className="mt-16 font-display text-2xl text-cream/90">Shorts</h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {videos.filter(v => v.type === "short").map(v => (
              <div key={v.id} className="rounded-2xl overflow-hidden bg-black/40 border border-cream/10">
                <div className="aspect-[9/16]">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4 text-sm text-cream/80">{v.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="container-px mx-auto max-w-7xl py-24">
        <div className="flex items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-ember inline-flex items-center gap-2"><Instagram className="h-3 w-3" /> @anchoredlovecounsel</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Latest from Instagram</h2>
          </div>
          <a href="https://www.instagram.com/anchoredlovecounsel/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-maroon font-medium">
            View profile <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {igPosts.map((post, i) => (
            <a key={i} href={post.url} target="_blank" rel="noreferrer" className="group relative block rounded-3xl bg-card border border-border/60 p-8 hover:border-maroon/30 hover:shadow-soft transition-all overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition">
                <Instagram className="h-24 w-24" />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <Instagram className="h-6 w-6 text-ember mb-5" />
                <p className="text-foreground/90 leading-relaxed flex-grow text-sm sm:text-base">
                  "{post.text}"
                </p>
                <div className="mt-8 flex items-center text-maroon font-medium text-sm transition-all group-hover:gap-1">
                  Read on Instagram <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-px mx-auto max-w-5xl pb-24">
        <div className="rounded-[2rem] bg-maroon text-cream p-12 text-center">
          <h2 className="font-display text-4xl">Be part of the story</h2>
          <p className="mt-4 text-cream/80 max-w-xl mx-auto">Whether through counseling, a community event, or simply following along — there's a place for you.</p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/book" className="rounded-full bg-cream text-maroon px-7 py-3 font-medium hover:bg-ember hover:text-cream transition">Book a session</Link>
            <Link to="/contact" className="rounded-full border border-cream/40 px-7 py-3 font-medium hover:bg-cream/10 transition">Say hello</Link>
          </div>
        </div>
      </section>
    </>
  );
}
