import { motion } from "framer-motion";
import Section, { reveal } from "./Section";
import { testimonials } from "../data/content";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="06 — Testimonials"
      title={
        <>
          Client <span>words.</span>
        </>
      }
    >
      <div className="test-grid">
        {testimonials.map((t) => (
          <motion.div className="test" key={t.name} variants={reveal}>
            <div className="stars">★★★★★</div>
            <div className="quote">"{t.quote}"</div>
            <div className="who">
              <div className="av">{t.avatar}</div>
              <div>
                <b>{t.name}</b>
                <small>{t.role}</small>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
