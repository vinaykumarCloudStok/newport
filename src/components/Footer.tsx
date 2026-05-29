import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "40px 24px",
        color: "var(--muted)",
        fontFamily: "var(--mono)",
        fontSize: ".82rem",
        borderTop: "1px solid var(--line)",
        position: "relative",
        zIndex: 1,
      }}
    >
      Designed &amp; built by {profile.name} · © {new Date().getFullYear()} · React · TypeScript ·
      Socket.io · Real-Time Casino Systems
    </footer>
  );
}
