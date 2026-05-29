import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  children?: ReactNode;
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export const reveal = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] } },
};

export default function Section({ id, eyebrow, title, lead, children }: Props) {
  return (
    <section id={id} className="wrap">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="eyebrow" variants={reveal}>
          {eyebrow}
        </motion.div>
        <motion.h2 className="title" variants={reveal}>
          {title}
        </motion.h2>
        {lead && (
          <motion.p className="lead" variants={reveal}>
            {lead}
          </motion.p>
        )}
        {children}
      </motion.div>
    </section>
  );
}
