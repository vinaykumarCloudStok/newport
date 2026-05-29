import { motion } from "framer-motion";
import { profile } from "../data/content";
import "./Hero.css";

const chips = [
  { t: "React.js", e: "⚛️", cls: "c1" },
  { t: "TypeScript", e: "🔷", cls: "c2" },
  { t: "Socket.io", e: "🔌", cls: "c3" },
  { t: "Crash Games", e: "🎰", cls: "c4" },
  { t: "Redux", e: "🧩", cls: "c5" },
];

export default function Hero() {
  return (
    <section className="hero wrap" id="home">
      <div className="hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <div className="tag">
            <span className="dot" /> Available for freelance &amp; full-time
          </div>
          <h1>
            {profile.name}
            <br />
            <span className="grad">Builds real-time games.</span>
          </h1>
          <div className="role">// {profile.title} · {profile.role}</div>
          <p className="sub">{profile.subtitle}</p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              Hire Me →
            </a>
            <a href="#projects" className="btn btn-ghost">
              View Projects
            </a>
          </div>
        </motion.div>

        <motion.div
          className="float-card"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div
            className="orb"
            style={{
              width: 160,
              height: 160,
              background: "radial-gradient(var(--violet),transparent)",
              top: -30,
              right: -30,
            }}
          />
          <div
            className="orb"
            style={{
              width: 130,
              height: 130,
              background: "radial-gradient(var(--cyan),transparent)",
              bottom: -20,
              left: -20,
            }}
          />
          {chips.map((c, i) => (
            <motion.div
              key={c.t}
              className={`chip ${c.cls}`}
              animate={{ y: [0, -14, 0] }}
              transition={{ repeat: Infinity, duration: 6, delay: i * 0.8 }}
            >
              {c.e} <b>{c.t}</b>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
