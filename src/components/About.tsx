import { motion } from "framer-motion";
import Section, { reveal } from "./Section";
import { about, stats } from "../data/content";
import { useCountUp } from "./useCountUp";
import "./About.css";

function Stat({ num, suffix, label }: { num: number; suffix: string; label: string }) {
  const { ref, value } = useCountUp(num);
  const display =
    num >= 1000
      ? Math.round(value).toLocaleString()
      : num % 1 !== 0
      ? value.toFixed(1)
      : Math.round(value).toString();
  return (
    <motion.div className="stat" variants={reveal}>
      <div className="num" ref={ref}>
        {display}
        {suffix}
      </div>
      <div className="lbl">{label}</div>
    </motion.div>
  );
}

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="01 — About"
      title={
        <>
          Frontend <span>leadership</span> meets
          <br />
          real-time gaming.
        </>
      }
    >
      {about.map((p, i) => (
        <motion.p
          key={i}
          className="lead"
          variants={reveal}
          style={{ marginTop: i ? 16 : 14 }}
        >
          {p}
        </motion.p>
      ))}

      <div className="stats">
        {stats.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </div>
    </Section>
  );
}
