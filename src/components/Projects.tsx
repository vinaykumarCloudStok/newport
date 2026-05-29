import { motion } from "framer-motion";
import Section, { reveal } from "./Section";
import { projects } from "../data/content";
import "./Projects.css";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="04 — Featured Work"
      title={
        <>
          Selected <span>projects.</span>
        </>
      }
      lead="Real-time casino games and platforms shipped to production at Cloudstok."
    >
      <div className="proj-grid">
        {projects.map((p) => (
          <motion.div
            className="proj"
            key={p.name}
            variants={reveal}
            whileHover={{ y: -8 }}
          >
            <div className="proj-top" style={{ background: p.gradient }}>
              <span>{p.icon}</span>
            </div>
            <div className="proj-body">
              <h4>{p.name}</h4>
              <div className="desc">{p.desc}</div>
              <div className="feat">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="proj-links">
                <a className="lnk-demo" href="#" onClick={(e) => e.preventDefault()}>
                  Live Demo
                </a>
                <a className="lnk-git" href="#" onClick={(e) => e.preventDefault()}>
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
