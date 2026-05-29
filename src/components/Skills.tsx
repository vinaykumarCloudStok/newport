import { motion } from "framer-motion";
import Section, { reveal } from "./Section";
import { skills } from "../data/content";
import "./Skills.css";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 — Skills"
      title={
        <>
          A stack built for <span>real-time speed.</span>
        </>
      }
      lead="Everything I use to ship production-grade casino game frontends."
    >
      <div className="skill-grid">
        {skills.map((g) => (
          <motion.div className="skill-card" key={g.title} variants={reveal}>
            <h4>
              <i className={`accent-${g.accent}`} />
              {g.title}
            </h4>
            <div className="pills">
              {g.items.map((it) => (
                <span className="pill" key={it}>
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
