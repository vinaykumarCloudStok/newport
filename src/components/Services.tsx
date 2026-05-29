import { motion } from "framer-motion";
import Section, { reveal } from "./Section";
import { services } from "../data/content";
import "./Services.css";

export default function Services() {
  return (
    <Section
      id="services"
      eyebrow="05 — Services"
      title={
        <>
          How I can <span>help.</span>
        </>
      }
    >
      <div className="serv-grid">
        {services.map((s) => (
          <motion.div className="serv" key={s.title} variants={reveal} whileHover={{ y: -5 }}>
            <div className="ic">{s.icon}</div>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
