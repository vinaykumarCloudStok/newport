import { motion } from "framer-motion";
import Section, { reveal } from "./Section";
import { experience } from "../data/content";
import "./Experience.css";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="03 — Experience"
      title={
        <>
          Career <span>timeline.</span>
        </>
      }
    >
      <div className="timeline">
        {experience.map((e) => (
          <motion.div className="tl-item" key={e.period} variants={reveal}>
            <h4>{e.role}</h4>
            <div className="meta">{e.company} · {e.period}</div>
            <ul>
              {e.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
