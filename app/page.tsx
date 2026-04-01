import {
  IconArrowRight,
  IconCircleCheck,
  IconMapPin,
  IconMessageCircle,
} from "@tabler/icons-react"

const blogPosts = [
  {
    title: "How Do Mechanical Seals Reduce Downtime?",
    excerpt:
      "Learn how optimized seal design lowers leakage risk and improves pump reliability.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    date: "Blog, 3 March 2026",
  },
  {
    title: "Rotary Union Performance: What Changed in 2026?",
    excerpt:
      "From material upgrades to machining precision, here are the latest improvements.",
    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=600&q=80",
    date: "Blog, 2 Jan 2026",
  },
  {
    title: "Choosing the Right Coupling for Process Industries",
    excerpt:
      "A practical checklist for pressure, speed, compatibility, and lifecycle value.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80",
    date: "Blog, 16 Dec 2025",
  },
]

export default function Page() {
  const h2Class = "text-[40px] leading-[1.02] tracking-[-0.02em] md:text-[48px]"
  const h3Class = "text-[24px] leading-[1.1] font-semibold md:text-[28px]"
  const bodyClass = "text-base leading-relaxed md:text-lg"
  const captionClass = "text-[13px] leading-tight md:text-sm"
  const cardClass = "rounded-xl border border-[#c8cfcc] bg-[#f8f9f8] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)]"

  return (
    <main className="bg-[#f5f7f6] text-[#0f1a18]">
      <div className="w-full">
        <section className="animate-in fade-in slide-in-from-bottom-5 mx-auto w-full max-w-7xl px-4 py-12 duration-700 md:px-7 md:py-16 lg:px-10 lg:py-20">
          <header className="flex items-center justify-between border-b border-[#d9dedc] pb-5 text-[13px] text-[#37564f] md:text-sm">
            <div className="hidden gap-6 md:flex">
              <span>Home</span>
              <span>Service</span>
              <span>Case Studies</span>
              <span>Blog</span>
            </div>
            <p className="text-xl font-semibold tracking-tight text-[#14473f]">ALFA ENGINEERS</p>
            <div className="hidden gap-6 md:flex">
              <span>About</span>
              <span>Help</span>
              <span>Contact</span>
            </div>
          </header>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <div className="flex flex-col justify-between">
              <div>
                <div className="mb-8 flex items-start justify-between text-[#30524b]">
                  <p className={captionClass}>
                    New
                    <br />
                    Technology
                    <br />
                    2026
                  </p>
                  <p className={`${captionClass} hidden md:block`}>Industrial Reliability</p>
                </div>

                <h1 className="max-w-[12ch] text-[64px] leading-[0.97] font-medium tracking-[-0.025em] md:text-[72px]">
                  Powering the Future
                  <br />
                  with <span className="text-[#7b8481]">Clean Engineering</span>
                </h1>

                <p className={`mt-6 max-w-[34ch] text-[#495a56] ${bodyClass}`}>
                  Precision-built industrial components engineered for durability, energy efficiency, and reliable process uptime.
                </p>
              </div>

              <div className="mt-10">
                <div className="flex items-center gap-3">
                  <button className="rounded-full bg-[#045147] px-6 py-3 text-lg font-semibold text-[#f0f8f6] transition-transform hover:-translate-y-0.5">
                    Get Industrial Solutions
                  </button>
                  <button className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#045147] text-[#f0f8f6] transition-transform hover:-translate-y-0.5">
                    <IconArrowRight size={22} stroke={1.8} />
                  </button>
                </div>

                <div className="mt-5 flex items-center gap-4 rounded-full border border-[#d2d8d5] px-3 py-2 shadow-[0_4px_14px_rgba(0,0,0,0.04)] w-fit">
                  <div className="flex -space-x-3">
                    <img
                      src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&q=80"
                      alt="customer"
                      className="h-10 w-10 rounded-full border-2 border-[#f7f8f8] object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1542206395-9feb3edaa68d?auto=format&fit=crop&w=100&q=80"
                      alt="customer"
                      className="h-10 w-10 rounded-full border-2 border-[#f7f8f8] object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                      alt="customer"
                      className="h-10 w-10 rounded-full border-2 border-[#f7f8f8] object-cover"
                    />
                  </div>
                  <p className="text-sm text-[#36544e]">4K+ Customers</p>
                </div>
              </div>
            </div>

            <article className="relative overflow-hidden rounded-lg border border-[#7aa1bf] bg-[#78a7cf] shadow-[0_16px_32px_rgba(0,0,0,0.12)] min-h-120 md:min-h-140">
              <img
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1500&q=80"
                alt="Industrial field"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[#2e516f]/28" />

              <div className="absolute right-6 bottom-6 rounded-lg border border-white/40 bg-[#0f2b3f]/35 px-5 py-4 text-white backdrop-blur-[1px] md:right-8 md:bottom-8">
                <p className="text-5xl leading-none font-semibold md:text-6xl">500+</p>
                <p className="mt-1 text-sm text-[#d9e8f4] md:text-base">Installations Delivered</p>
              </div>
            </article>
          </div>
        </section>

        <section className="animate-in fade-in slide-in-from-bottom-5 mx-auto mt-4 w-full max-w-7xl border-t border-[#d7ddda] px-4 py-16 duration-700 md:px-7 md:py-24 lg:px-10">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className={`${h2Class} max-w-[12ch] text-[#121817]`}>
                Driving the Future
                <br />
                with <span className="text-[#7b8481]">Sustainable</span>
                <br />
                Industrial Systems
              </h2>
              <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#045147] p-1 text-[#f1f8f6]">
                <button className="rounded-full px-6 py-2 text-base font-semibold md:text-lg">About Us</button>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0d6659]">
                  <IconArrowRight size={19} />
                </span>
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="max-w-[32ch] text-[24px] leading-tight text-[#1d3430] md:text-[30px]">
                ALFA is committed to efficient, reliable, and environmentally responsible engineering.
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <article className={cardClass}>
                  <h3 className={`${h3Class} text-[#164c43]`}>Our Mission</h3>
                  <ul className="mt-4 space-y-3 text-base leading-tight text-[#576661] md:text-lg">
                    <li className="flex items-start gap-2">
                      <IconCircleCheck size={16} className="mt-0.5" />
                      Build high-performance components.
                    </li>
                    <li className="flex items-start gap-2">
                      <IconCircleCheck size={16} className="mt-0.5" />
                      Support continuous production uptime.
                    </li>
                    <li className="flex items-start gap-2">
                      <IconCircleCheck size={16} className="mt-0.5" />
                      Improve plant-level reliability.
                    </li>
                    <li className="flex items-start gap-2">
                      <IconCircleCheck size={16} className="mt-0.5" />
                      Reduce lifecycle operating costs.
                    </li>
                  </ul>
                </article>

                <article className={`${cardClass} border-[#7d9f97]`}>
                  <h3 className={`${h3Class} text-[#142624]`}>Our Vision</h3>
                  <p className={`mt-2 ${bodyClass} text-[#606e6a]`}>
                    A future where industrial systems run cleaner, longer, and smarter.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="animate-in fade-in slide-in-from-bottom-5 mt-0 bg-[#024d45] py-16 text-[#ecf6f3] duration-700 md:py-24">
          <div className="mx-auto grid w-full max-w-7xl items-start gap-10 px-4 md:px-7 lg:grid-cols-[1fr_1.15fr] lg:px-10">
            <div>
              <h2 className={`${h2Class} max-w-[12ch]`}>
                <span className="text-[#d8ff2d]">Benefits</span> of Industrial Engineering
              </h2>

              <div className="mt-8">
                <article className="overflow-hidden rounded-lg shadow-[0_8px_20px_rgba(0,0,0,0.18)]">
                  <img
                    src="https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=1300&q=80"
                    alt="field operations"
                    className="h-90 w-full object-cover object-center"
                  />
                </article>
              </div>
            </div>

            <div>
              <p className="max-w-[28ch] text-[24px] leading-tight text-[#d7ece7] md:text-[30px]">
                Better energy efficiency and stronger operational resilience for modern plants.
              </p>

              <div className="mt-8 space-y-5">
                <article className="rounded-xl bg-[#f6f8f8] px-6 py-6 text-[#102120] shadow-[0_6px_18px_rgba(0,0,0,0.12)]">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h3 className={`${h3Class} leading-none`}>Reduce Utility Costs</h3>
                      <p className={`mt-2 ${bodyClass} text-[#5d6b67]`}>
                        Efficient components reduce energy use and maintenance.
                      </p>
                    </div>
                    <button className="rounded-full bg-[#045147] px-6 py-3 text-base font-semibold text-[#edf8f5] md:text-lg">
                      Learn More
                    </button>
                  </div>
                </article>

                <article className="rounded-xl border border-[#7aa59d] bg-[#015046] px-6 py-6 shadow-[0_6px_18px_rgba(0,0,0,0.1)]">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h3 className={`${h3Class} leading-none text-[#d8ff2d]`}>
                        Production Independence
                      </h3>
                      <p className={`mt-2 ${bodyClass} text-[#cce2dd]`}>
                        Stronger reliability means fewer process interruptions.
                      </p>
                    </div>
                    <button className="rounded-full border border-[#d8ff2d] bg-transparent px-6 py-3 text-base font-semibold text-[#d8ff2d] md:text-lg">
                      Learn More
                    </button>
                  </div>
                </article>
              </div>

            </div>
          </div>
        </section>

        <section className="animate-in fade-in slide-in-from-bottom-5 mx-auto mt-4 w-full max-w-7xl border-t border-[#d7ddda] px-4 py-16 duration-700 md:px-7 md:py-24 lg:px-10">
          <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <h2 className={`${h2Class} max-w-[14ch]`}>
                Leading Industrial Solutions for a <span className="text-[#7b8481]">Sustainable Future</span>
              </h2>

              <article className="relative mt-7 overflow-hidden rounded-lg shadow-[0_10px_28px_rgba(0,0,0,0.12)]">
                <img
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80"
                  alt="Large turbine"
                  className="h-90 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-4 left-4 rounded-full bg-white px-4 py-2 text-base">Exclusive</div>
                <div className="absolute right-5 bottom-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f0f6f4] text-[#103c35]">
                  <IconArrowRight size={20} />
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-[34px] leading-none md:text-[40px]">TerraSpin Pro</p>
                  <p className="mt-1 text-sm">High efficiency, durability, and smart technology.</p>
                </div>
              </article>
            </div>

            <div>
              <p className="max-w-[18ch] text-[32px] leading-[1.05] text-[#1b4b42] md:text-[40px]">
                Safe and efficient installation for optimal performance.
              </p>

              <article className="mt-7 rounded-xl bg-[#024d45] p-6 text-[#eaf4f2] shadow-[0_10px_24px_rgba(0,0,0,0.16)]">
                <div className="space-y-5">
                  <div>
                    <p className="text-8xl leading-none font-semibold text-[#d8ff2d]">65%</p>
                    <p className="mt-2 text-base text-[#cce1dc]">Energy conversion efficiency</p>
                  </div>

                  <ul className="space-y-2 text-base text-[#d3e8e3]">
                    <li>Installation & Mounting</li>
                    <li>Maintenance & Care</li>
                    <li>Remote Monitoring</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="animate-in fade-in slide-in-from-bottom-5 mt-0 bg-[#e7ecea] py-14 duration-700 md:py-20">
          <div className="mx-auto w-full max-w-7xl px-4 md:px-7 lg:px-10">
          <h2 className={`${h2Class} max-w-[16ch]`}>
            Successful <span className="text-[#6d7572]">Implementation</span> Across Critical Sectors
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.15fr]">
            <article className="rounded-xl bg-[#024d45] p-8 text-[#e6f0ee] shadow-[0_10px_24px_rgba(0,0,0,0.16)]">
              <div className="flex items-start justify-between">
                <p className="text-8xl leading-none font-semibold text-[#d8ff2d] md:text-9xl">35%</p>
                <p className="max-w-[10ch] text-right text-sm text-[#bdd8d2] md:text-base">Monthly electricity savings</p>
              </div>
              <p className="mt-8 max-w-[26ch] text-[24px] leading-tight md:text-[28px]">
                Lower operational expenses with better system performance and fewer failures.
              </p>
              <button className="mt-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#d8ff2d] text-[#13342e]">
                <IconArrowRight size={22} />
              </button>
            </article>

            <article className="rounded-xl border border-[#c4cdca] bg-[#f3f6f5] p-6 text-[#153732] shadow-[0_10px_24px_rgba(0,0,0,0.08)] md:p-8">
              <div className="border-b border-[#c8d0cd] pb-5">
                <p className="flex items-center gap-2 text-[24px] leading-none md:text-[30px]">
                  <IconMapPin size={26} />
                  125 Windmill Avenue, Brighton, UK
                </p>
                <p className={`mt-1 ${captionClass} text-[#667672]`}>Data Center & Cloud Computing</p>
              </div>
              <div className="border-b border-[#c8d0cd] py-5">
                <p className={`${h3Class} leading-none`}>High electricity bills</p>
                <p className={`mt-2 ${bodyClass} text-[#667672]`}>
                  Installation of one compact turbine unit reduced total electricity costs up to 35%.
                </p>
              </div>
              <div className="pt-5">
                <p className={`flex items-center gap-2 ${h3Class} leading-none`}>
                  <IconMessageCircle size={25} />
                  Client Testimonials
                </p>
                <p className={`mt-2 max-w-[48ch] ${bodyClass} text-[#667672]`}>
                  "With this system, we saved electricity costs and improved reliability. The perfect solution for sustainable business operations."
                </p>
                <p className={`mt-2 text-right ${captionClass}`}>By Adrian R.</p>
              </div>
            </article>
          </div>
          </div>
        </section>

        <section className="animate-in fade-in slide-in-from-bottom-5 mx-auto mt-4 w-full max-w-7xl border-t border-[#d7ddda] px-4 py-14 duration-700 md:px-7 md:py-20 lg:px-10">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <h2 className={`${h2Class} max-w-[18ch]`}>
              Discover the Latest Insights in the World of <span className="text-[#7b8481]">Industrial Energy</span>
            </h2>
            <button className="rounded-full border border-[#5a857d] bg-transparent px-6 py-3 text-base font-semibold text-[#1d4b43] md:text-lg">Learn More</button>
          </div>

          <div className="mt-8 space-y-4">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="grid gap-4 rounded-md border border-[#dde3e0] bg-[#f1f4f3] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_18px_rgba(0,0,0,0.06)] md:grid-cols-[160px_1fr_auto] md:items-center"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-28 w-full rounded-lg object-cover md:w-40"
                />
                <div>
                  <p className={`${captionClass} text-[#7f8986]`}>{post.date}</p>
                  <h3 className="mt-1 max-w-[26ch] text-[24px] leading-[1.05] font-semibold text-[#0f302a] md:text-[28px]">{post.title}</h3>
                  <p className={`mt-2 max-w-[56ch] ${bodyClass} text-[#4e5f5a]`}>{post.excerpt}</p>
                </div>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#86a49e] text-[#17453d]">
                  <IconArrowRight size={19} />
                </span>
              </article>
            ))}
          </div>
        </section>

        <footer className="animate-in fade-in slide-in-from-bottom-5 mt-0 bg-[#024d45] py-10 text-[#edf6f3] duration-700 md:py-12">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 md:px-7 lg:grid-cols-[1fr_1fr] lg:px-10">
            <div>
              <p className="text-[44px] leading-none font-semibold tracking-tight text-[#d8ff2d] md:text-[56px]">ALFA.Engineers</p>
              <p className={`mt-5 max-w-[30ch] ${bodyClass} text-[#c2dad5]`}>
                Subscribe to get product updates, engineering insights, and practical maintenance guides.
              </p>
            </div>

            <div>
              <h3 className="text-[24px] leading-tight font-semibold md:text-[30px]">Sign up to our newsletter</h3>
              <div className="mt-5 flex w-full max-w-130 flex-wrap gap-2">
                <input
                  placeholder="Enter your email"
                  className="h-12 flex-1 rounded-full border border-[#97bab3] bg-[#eaf3f1] px-5 text-[#1f3632] placeholder:text-[#7f938e]"
                />
                <button className="h-12 rounded-full border border-[#97bab3] px-5 font-semibold">Subscribe</button>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-b border-[#6e938c] py-5 text-base text-[#d7e8e4] md:text-lg">
            <div className="flex flex-wrap justify-between gap-4">
              <div className="flex flex-wrap gap-6">
                <span>Portfolio</span>
                <span>Career</span>
                <span>Features</span>
              </div>
              <span>alfaengineers786@gmail.com</span>
              <div className="flex flex-wrap gap-6">
                <span>Maintenance</span>
                <span>Support</span>
                <span>Contact</span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-[#cbe0db] md:text-base">
            <p>@2026 ALFA ENGINEERS. All rights reserved.</p>
            <div className="flex gap-6">
              <span>Terms & Conditions</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
