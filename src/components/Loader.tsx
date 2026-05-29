import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            background: "var(--bg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
            style={{
              width: 54,
              height: 54,
              border: "3px solid rgba(39,230,255,.15)",
              borderTopColor: "var(--cyan)",
              borderRadius: "50%",
            }}
          />
          <span
            style={{
              fontFamily: "var(--mono)",
              color: "var(--muted)",
              fontSize: ".82rem",
              letterSpacing: ".2em",
            }}
          >
            LOADING SYSTEMS…
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
