'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const navItems = ['Products', 'Technology', 'Startups', 'About', 'Contact'];

const builds = [
  {
    title: 'Multi-Model AI Systems',
    desc: 'Advanced AI architecture engineered to orchestrate the right models for precision, speed, and real-world reliability.'
  },
  {
    title: 'Scalable Software Infrastructure',
    desc: 'Enterprise-ready automation platforms designed for high performance workflows, secure integrations, and intelligent decision loops.'
  },
  {
    title: 'Free Websites for Startups',
    desc: 'Digital launch infrastructure for early-stage founders, built to establish trust fast and scale as products evolve.'
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main className="bg-white text-[#0A0A0A]">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'border-b border-black/10 bg-white/85 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <nav className="section-shell flex h-20 items-center justify-between">
          <span className="text-xl font-semibold tracking-tight">NEX</span>
          <ul className="hidden items-center gap-8 text-sm md:flex">
            {navItems.map((item) => (
              <li key={item} className="cursor-pointer transition hover:opacity-60">
                {item}
              </li>
            ))}
          </ul>
          <button className="rounded-full border border-black px-5 py-2 text-sm font-medium transition hover:bg-black hover:text-white">
            Get Started
          </button>
        </nav>
      </header>

      <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
        <motion.div style={{ y }} className="absolute inset-0 grid-bg" />
        <div className="section-shell relative z-10">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-6 text-sm uppercase tracking-[0.25em] text-black/60"
          >
            Artificial Intelligence Technology
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl"
          >
            Engineering the Future with Intelligent AI Systems
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-8 max-w-3xl text-lg text-black/70 md:text-xl"
          >
            Multi-model AI. Scalable Software. Free digital infrastructure for startups.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button className="rounded-full bg-black px-7 py-3 text-white transition hover:opacity-90">
              Explore Technology
            </button>
            <button className="rounded-full border border-black px-7 py-3 transition hover:bg-black hover:text-white">
              Build With NEX
            </button>
          </motion.div>
        </div>
      </section>

      <section className="section-shell py-24 md:py-32">
        <div className="space-y-10">
          {builds.map((item, i) => (
            <motion.article
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-3xl border border-black/10 p-8 shadow-soft md:p-12"
            >
              <div className="mb-8 h-1 w-16 bg-black" />
              <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">{item.title}</h2>
              <p className="mt-5 max-w-3xl text-lg text-black/70">{item.desc}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-shell py-20 text-center md:py-28">
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-4xl font-medium tracking-tight md:text-6xl"
        >
          Precision. Simplicity. Intelligence.
        </motion.h3>
        <motion.div
          initial={{ scaleX: 0, opacity: 0.4 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-10 h-px w-48 origin-center bg-black/70"
        />
      </section>

      <section className="section-shell py-24 md:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-[#111111] px-8 py-16 text-center text-white md:px-16"
        >
          <h4 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Build the Next Generation of AI with NEX
          </h4>
          <button className="mt-10 rounded-full border border-white px-8 py-3 transition hover:bg-white hover:text-black">
            Start Now
          </button>
        </motion.div>
      </section>

      <footer className="bg-black py-14 text-white">
        <div className="section-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-2xl font-semibold">NEX</p>
            <p className="mt-2 text-sm text-white/60">Engineering intelligent digital systems.</p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-white/70">
            {navItems.map((item) => (
              <span key={item} className="transition hover:text-white">
                {item}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {['◯', '△', '□'].map((icon) => (
              <span
                key={icon}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/50 text-xs"
              >
                {icon}
              </span>
            ))}
          </div>
        </div>
        <p className="section-shell mt-10 text-xs text-white/50">© {new Date().getFullYear()} NEX. All rights reserved.</p>
      </footer>
    </main>
  );
}
