import { motion } from "framer-motion";
import { profile } from "../data/content";
import { reveal } from "./Section";
import "./Contact.css";

export default function Contact() {
  const links = [
    { icon: "✉️", label: "Email", href: `mailto:${profile.email}` },
    { icon: "in", label: "LinkedIn", href: profile.linkedin },
    { icon: "⌥", label: "GitHub", href: profile.github },
    { icon: "💬", label: "WhatsApp", href: profile.whatsapp },
    { icon: "📞", label: profile.phone, href: `tel:${profile.phone}` },
  ];

  return (
    <section id="contact" className="wrap">
      <motion.div
        className="contact-box"
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="eyebrow" style={{ textAlign: "center" }}>
          07 — Contact
        </div>
        <h2 className="title">
          Let's build something <span>fast.</span>
        </h2>
        <p className="lead" style={{ margin: "0 auto" }}>
          Have a real-time gaming or React frontend project in mind? Based in {profile.location} and open
          to freelance &amp; full-time work.
        </p>
        <div className="contact-links">
          {links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
              <span className="ci">{l.icon}</span> {l.label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
